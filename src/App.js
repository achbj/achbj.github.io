import React, { useEffect } from 'react';
import data from './data/data.json';
import './App.css';

function ExternalLink({ href, children, className = '' }) {
  if (!href) return null;
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}<span className="external-mark" aria-hidden="true">↗</span>
    </a>
  );
}

function Section({ title, note, children, className = '' }) {
  return (
    <section className={`content-section ${className}`} aria-label={title}>
      <div className="section-header">
        <h2>{title}</h2>
        {note ? <span className="section-note">{note}</span> : null}
      </div>
      {children}
    </section>
  );
}

function App() {
  const { profile, experience, education, coursework, publication, projects, skills, languages } = data;

  useEffect(() => {
    document.title = `${profile.name} — ${profile.headline}`;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', profile.summary);
  }, [profile]);

  return (
    <div className="site-shell">
      <header className="masthead">
        <div className="intro-block">
          <p className="eyebrow">Portfolio / Research & engineering</p>
          <h1>{profile.name}</h1>
          <p className="headline">{profile.headline}</p>
          <p className="summary">{profile.summary}</p>
        </div>
        <div className="contact-block">
          <div className="contact-location">{profile.location}</div>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <div className="social-row">
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
            <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
          </div>
        </div>
      </header>

      <div className="availability-strip" aria-label="Work availability">
        <span className="availability-dot" aria-hidden="true" />
        <span>{profile.availability}</span>
        <span className="availability-separator" aria-hidden="true">/</span>
        <span className="authorization">{profile.workAuthorization}</span>
      </div>

      <main className="content-grid">
        <div className="career-column">
          <Section title="Experience">
            {experience.map((job) => (
              <article className="timeline-item" key={job.organization + job.period}>
                <div className="timeline-top"><h3>{job.role}</h3><time>{job.period}</time></div>
                <p className="institution">{job.organization}</p>
                <p className="muted-line">{job.location}</p>
                <ul className="tight-list">{job.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              </article>
            ))}
          </Section>
          <Section title="Education">
            {education.map((item) => (
              <article className="education-item" key={item.degree}>
                <div className="timeline-top"><h3>{item.degree}</h3><time>{item.period}</time></div>
                <p className="institution">{item.institution}</p>
                <p className="muted-line">{item.location}</p>
              </article>
            ))}
            <p className="coursework"><strong>Coursework</strong> {coursework.join(' · ')}</p>
          </Section>
        </div>

        <div className="projects-column">
          <Section title="Selected work" note={`${projects.length} open-source projects`} className="project-section">
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project" key={project.title}>
                  <div className="project-kicker">{project.category}</div>
                  <div className="project-title-row">
                    <h3><ExternalLink href={project.repository}>{project.title}</ExternalLink></h3>
                    {project.extraLink ? <ExternalLink className="secondary-link" href={project.extraLink.url}>{project.extraLink.label}</ExternalLink> : null}
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="technology-line">{project.stack.join(' · ')}</div>
                </article>
              ))}
            </div>
          </Section>
        </div>

        <div className="details-column">
          <Section title="Research">
            {publication.map((paper) => (
              <article className="publication-item" key={paper.title}>
                <span className="publication-meta">{paper.venue} · {paper.year}</span>
                <h3>{paper.url ? <ExternalLink href={paper.url}>{paper.title}</ExternalLink> : paper.title}</h3>
                <p className="muted-line">{paper.contribution}</p>
              </article>
            ))}
          </Section>
          <Section title="Technical skills">
            <div className="skill-groups">
              {skills.map((group) => (
                <div className="skill-group" key={group.label}>
                  <h3>{group.label}</h3>
                  <p>{group.items.join(' · ')}</p>
                </div>
              ))}
            </div>
          </Section>
          <Section title="Languages">
            <p className="language-line">{languages.join(' · ')}</p>
          </Section>
        </div>
      </main>

      <footer className="site-footer">
        <span>{profile.name} · {profile.location}</span>
        <span>Research, reproducible experiments & practical software</span>
        <a href={`mailto:${profile.email}`}>Get in touch <span aria-hidden="true">↗</span></a>
      </footer>
    </div>
  );
}

export default App;
