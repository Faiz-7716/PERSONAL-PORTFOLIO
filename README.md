# 🚀 Faiz Personal Portfolio

A modern, responsive personal portfolio website built with **HTML, CSS, and JavaScript**.  
This project showcases my skills, projects, education, work experience, and contact information in a visually engaging and interactive format.

## ✨ Features

- **Animated Sections:** Smooth scroll-based effects using [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- **Responsive Design:** Looks great on desktops, laptops, tablets, and smartphones
- **Project Filtering:** Filter projects by technology (HTML, CSS, JavaScript, Python, Full Stack)
- **Dark/Light Mode:** Toggle for user preference
- **Swiper Testimonials:** Interactive testimonials slider powered by SwiperJS
- **Downloadable Resume:** Easy access to download CV
- **Modern Typography:** Uses Google Fonts and icon libraries for a professional look

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript
- **Libraries:** AOS, SwiperJS, Font Awesome, Bootstrap Icons, Google Fonts

---

## 📂 Folder Structure

```
├── css/
│   ├── fpstyle.css
│   └── responsive.css
├── img/
│   └── [images and icons]
├── js/
│   └── fpscript.js
├── assets/
│   └── [resume and other assets]
├── index.html
```

---

## 🚦 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/your-portfolio-repo.git
   ```
2. **Open `index.html` in your browser.**
3. **Customize content, images, and links as needed.**

---

## 📧 Contact

- **Email:** pmdfaiz08@gmail.com
- **Location:** Ambur, Tamil Nadu

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).



/* ======= Professional Font Styling ======= */

/* Headings and Section Titles */
h1, h2, h3, h4, h5, h6,
.section-heading h3,
.plan-name,
.edu-work-label,
.service-box-heading-text strong,
.project-box-text strong {
    font-family: 'Montserrat', Arial, sans-serif;
    font-weight: 700;
    letter-spacing: 0.5px;
}

/* Section Subtitles and Labels */
.section-heading span,
.edu-work-label,
.plan-name {
    font-family: 'Cinzel', serif;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
}

/* Body Text and Paragraphs */
body, p, .service-box-details, .plan-features li span, .project-box-text span, .contact-box span, .testimonial-box p, .edu-work-box p {
    font-family: 'Poppins', Arial, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.7;
    letter-spacing: 0.1px;
}

/* Navigation and Buttons */
header ul li a,
.dark-light-btn,
.faiz-profile-content a,
.service-box a,
.plan-box a {
    font-family: 'Montserrat', Arial, sans-serif;
    font-weight: 600;
    letter-spacing: 0.5px;
}

/* Project Filter List */
.project-list li {
    font-family: 'Montserrat', Arial, sans-serif;
    font-weight: 600;
    letter-spacing: 1px;
}

/* Numbers and Stats */
.project-container-box span {
    font-family: 'Montserrat', Arial, sans-serif;
    font-weight: 700;
    font-size: 2.2rem;
    letter-spacing: 1px;
}