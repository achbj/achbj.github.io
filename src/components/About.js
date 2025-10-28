import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import jsPDF from 'jspdf';
import './About.css';

const About = ({ data }) => {
  const generatePDF = async () => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 20;
    let yPosition = margin;

    // Header
    pdf.setFillColor(139, 0, 0);
    pdf.rect(0, 0, pageWidth, 40, 'F');
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(24);
    pdf.setFont('helvetica', 'bold');
    pdf.text(data.name, margin, 20);
    pdf.setFontSize(14);
    pdf.text(data.title, margin, 30);

    yPosition = 50;
    pdf.setTextColor(0, 0, 0);

    // Contact
    pdf.setFontSize(10);
    pdf.text(`Email: ${data.email}`, margin, yPosition);
    yPosition += 6;
    pdf.text(`GitHub: ${data.github}`, margin, yPosition);
    yPosition += 6;
    pdf.text(`LinkedIn: ${data.linkedin}`, margin, yPosition);
    yPosition += 12;

    // About
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(139, 0, 0);
    pdf.text('ABOUT', margin, yPosition);
    yPosition += 8;
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(0, 0, 0);
    const aboutText = data.about.replace(/<[^>]*>/g, '');
    const aboutLines = pdf.splitTextToSize(aboutText, pageWidth - 2 * margin);
    pdf.text(aboutLines, margin, yPosition);
    yPosition += aboutLines.length * 5 + 8;

    // Education
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(139, 0, 0);
    pdf.text('EDUCATION', margin, yPosition);
    yPosition += 8;
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(0, 0, 0);
    
    data.education.forEach(edu => {
      if (yPosition > pageHeight - 40) {
        pdf.addPage();
        yPosition = margin;
      }
      pdf.setFont('helvetica', 'bold');
      pdf.text(edu.degree, margin, yPosition);
      yPosition += 5;
      pdf.setFont('helvetica', 'normal');
      pdf.text(`${edu.institution} | ${edu.dates}`, margin, yPosition);
      yPosition += 5;
      pdf.text(edu.description, margin, yPosition);
      yPosition += 10;
    });

    // Experience
    if (data.experience && data.experience.length > 0) {
      yPosition += 5;
      if (yPosition > pageHeight - 60) {
        pdf.addPage();
        yPosition = margin;
      }
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(139, 0, 0);
      pdf.text('EXPERIENCE', margin, yPosition);
      yPosition += 8;
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(0, 0, 0);
      
      data.experience.forEach(exp => {
        if (yPosition > pageHeight - 40) {
          pdf.addPage();
          yPosition = margin;
        }
        pdf.setFont('helvetica', 'bold');
        pdf.text(exp.title, margin, yPosition);
        yPosition += 5;
        pdf.setFont('helvetica', 'normal');
        pdf.text(`${exp.company} | ${exp.dates}`, margin, yPosition);
        yPosition += 5;
        const descLines = pdf.splitTextToSize(exp.description, pageWidth - 2 * margin);
        pdf.text(descLines, margin, yPosition);
        yPosition += descLines.length * 5 + 8;
      });
    }

    // Skills
    yPosition += 5;
    if (yPosition > pageHeight - 40) {
      pdf.addPage();
      yPosition = margin;
    }
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(139, 0, 0);
    pdf.text('SKILLS', margin, yPosition);
    yPosition += 8;
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(0, 0, 0);
    const skillsText = data.skills.join(' • ');
    const skillsLines = pdf.splitTextToSize(skillsText, pageWidth - 2 * margin);
    pdf.text(skillsLines, margin, yPosition);

    pdf.save(`${data.name.replace(/\s+/g, '_')}_CV.pdf`);
  };

  return (
    <section className="about" id="about">
      <div className="hexagon-pattern"></div>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div dangerouslySetInnerHTML={{ __html: data.about }} />
          
          <motion.button
            className="download-cv-btn"
            onClick={generatePDF}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiDownload /> Download CV
          </motion.button>
        </motion.div>

        <motion.div
          className="education-section"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="subsection-title">Education</h3>
          {data.education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              whileHover={{ scale: 1.02, boxShadow: '0 8px 30px var(--glow)' }}
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
