import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import jsPDF from 'jspdf';
import './About.css';

const About = ({ data }) => {
  const generatePDF = () => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 20;
    let y = margin;

    // Header
    pdf.setFillColor(0, 102, 204);
    pdf.rect(0, 0, pageWidth, 38, 'F');
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(22); pdf.setFont('helvetica', 'bold');
    pdf.text(data.name, margin, 18);
    pdf.setFontSize(11); pdf.setFont('helvetica', 'normal');
    pdf.text(data.title, margin, 28);
    y = 48;

    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(9);
    pdf.text(`${data.email} | ${data.github} | ${data.linkedin}`, margin, y);
    pdf.text(data.location, margin, y + 5);
    y += 14;

    const section = (title) => {
      pdf.setFontSize(13); pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(0, 102, 204);
      pdf.text(title, margin, y); y += 7;
      pdf.setDrawColor(0, 102, 204); pdf.setLineWidth(0.3);
      pdf.line(margin, y, pageWidth - margin, y); y += 5;
      pdf.setTextColor(0, 0, 0);
      pdf.setFont('helvetica', 'normal'); pdf.setFontSize(9);
    };

    // About
    section('ABOUT');
    const aboutParagraphs = Array.isArray(data.about) ? data.about : [data.about];
    aboutParagraphs.forEach(p => {
      const lines = pdf.splitTextToSize(p.replace(/<[^>]*>/g, ''), pageWidth - 2 * margin);
      pdf.text(lines, margin, y); y += lines.length * 4.5 + 4;
    });
    y += 4;

    // Education
    section('EDUCATION');
    data.education.forEach(edu => {
      pdf.setFont('helvetica', 'bold'); pdf.setFontSize(10);
      pdf.text(edu.degree, margin, y); y += 5;
      pdf.setFont('helvetica', 'normal'); pdf.setFontSize(9);
      pdf.text(`${edu.institution} | ${edu.dates}`, margin, y); y += 4;
      pdf.text(edu.description, margin, y); y += 8;
    });

    // Experience
    section('EXPERIENCE');
    data.experience.forEach(exp => {
      pdf.setFont('helvetica', 'bold'); pdf.setFontSize(10);
      pdf.text(exp.title, margin, y); y += 5;
      pdf.setFont('helvetica', 'normal'); pdf.setFontSize(9);
      pdf.text(`${exp.company} | ${exp.dates}`, margin, y); y += 4;
      if (exp.bullets) {
        exp.bullets.forEach(b => {
          const lines = pdf.splitTextToSize(`• ${b}`, pageWidth - 2 * margin - 4);
          pdf.text(lines, margin + 4, y); y += lines.length * 4.5;
        });
      }
      y += 5;
    });

    // Skills
    section('SKILLS');
    if (data.skills.length > 0 && typeof data.skills[0] === 'object') {
      data.skills.forEach(group => {
        pdf.setFont('helvetica', 'bold'); pdf.setFontSize(9);
        pdf.text(`${group.group}: `, margin, y);
        pdf.setFont('helvetica', 'normal');
        const txt = pdf.splitTextToSize(group.items.join(' · '), pageWidth - 2 * margin - 30);
        pdf.text(txt, margin + 28, y); y += txt.length * 4.5 + 3;
      });
    }

    pdf.save(`Bijaya_Acharya_CV.pdf`);
  };

  const paragraphs = Array.isArray(data.about) ? data.about : [data.about];

  return (
    <section className="about" id="about">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About
      </motion.h2>

      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {paragraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}

          <motion.button
            className="download-cv-btn"
            onClick={generatePDF}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <FiDownload size={15} /> Download CV
          </motion.button>
        </motion.div>

        <motion.div
          className="education-section"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <h3 className="subsection-title">Education</h3>
          {data.education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              whileHover={{ y: -3, boxShadow: '0 8px 30px var(--shadow)' }}
            >
              <h4 className="edu-degree">{edu.degree}</h4>
              <p className="edu-institution">{edu.institution}</p>
              <p className="edu-dates">{edu.dates}</p>
              <p className="edu-description">{edu.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
