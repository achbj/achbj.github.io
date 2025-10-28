# Iron Man Themed Portfolio

A modern, responsive portfolio website with an Iron Man theme featuring neural network animations, custom cursor effects, dark/light mode toggle, and PDF CV generation.

## Features

- ⚡ **Iron Man Theme**: Muted red and gold color scheme inspired by Iron Man
- 🌓 **Dark/Light Mode**: Toggle between dark and light themes
- 🧠 **Neural Network Animation**: Animated particle network background
- 🎯 **Custom Cursor**: Arc reactor-inspired cursor animation
- 📄 **PDF CV Generator**: Download your CV as a PDF with one click
- 📧 **Contact Form**: Working contact form with EmailJS integration
- ✨ **Smooth Animations**: Framer Motion animations throughout
- 📱 **Fully Responsive**: Works on all devices

## Getting Started

### Running the Application

Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### EmailJS Setup (IMPORTANT for Contact Form)

To make the contact form work, you need to set up EmailJS:

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/) and create a free account

2. Create an email service:
   - Go to "Email Services" and add your email provider (Gmail, Outlook, etc.)
   - Note your Service ID

3. Create an email template:
   - Go to "Email Templates" and create a new template
   - Use these placeholders in your template:
     - `{{name}}` - Sender's name
     - `{{email}}` - Sender's email
     - `{{message}}` - Message content
   - Note your Template ID

4. Get your Public Key:
   - Go to "Account" → "General"
   - Copy your Public Key

5. Update the Contact component:
   - Open `src/components/Contact.js`
   - Replace the following placeholders (around line 33-37):
     - `YOUR_SERVICE_ID` → Your EmailJS Service ID
     - `YOUR_TEMPLATE_ID` → Your EmailJS Template ID
     - `YOUR_PUBLIC_KEY` → Your EmailJS Public Key

### Building for Production

Create a production build:
```bash
npm run build
```

## Customization

### Updating Your Information

Your portfolio data is stored in `src/data/data.json`. Update this file with your information:
- Personal details (name, title, email, etc.)
- About section
- Education
- Experience
- Projects
- Skills

### Profile Picture

Replace `src/data/profile.png` with your own profile picture.

### Color Scheme

The Iron Man theme uses muted colors to avoid being too bright. You can adjust colors in `src/App.css`:

- `--primary`: Main red color (#8B0000)
- `--secondary`: Gold accent (#B8860B)
- `--accent`: Bronze accent (#CD853F)

## Technologies Used

- React
- Framer Motion (animations)
- EmailJS (contact form)
- jsPDF (PDF generation)
- html2canvas (for PDF rendering)
- React Icons

## Project Structure

```
ironman-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Hero.js/css
│   │   ├── About.js/css
│   │   ├── Skills.js/css
│   │   ├── Experience.js/css
│   │   ├── Projects.js/css
│   │   ├── Contact.js/css
│   │   ├── NeuralBackground.js/css
│   │   ├── CustomCursor.js/css
│   │   └── ThemeToggle.js/css
│   ├── data/
│   │   ├── data.json
│   │   └── profile.png
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json
```

## Tips

- The neural network animation is optimized but may affect performance on older devices
- The custom cursor is disabled on mobile devices for better UX
- PDF generation works best on desktop browsers
- Make sure to test the contact form after setting up EmailJS

## Author

Built with ❤️ and Iron Man inspiration
