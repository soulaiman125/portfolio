// Footer year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Animate sections on load
document.querySelectorAll(".section").forEach((section, index) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(10px)";
  setTimeout(() => {
    section.classList.add("section-visible");
  }, index * 150);
});

// Mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("nav-links--open");
  });
}

// Theme toggle
const themeBtn = document.getElementById("theme-toggle");

function setTheme(isLight) {
  if (isLight) {
    document.body.classList.add("light");
    if (themeBtn) themeBtn.textContent = "🌞";
  } else {
    document.body.classList.remove("light");
    if (themeBtn) themeBtn.textContent = "🌙";
  }
}

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const isLight = !document.body.classList.contains("light");
    setTheme(isLight);
  });
}

// Contact form + EmailJS
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
  const serviceId = contactForm.getAttribute("data-email-service");
  const templateId = contactForm.getAttribute("data-email-template");
  const publicKey = contactForm.getAttribute("data-email-public-key");

  if (serviceId && templateId && publicKey && window.emailjs) {
    emailjs.init(publicKey);

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      formStatus.textContent = "Sending...";

      const formData = {
        from_name: contactForm.from_name.value,
        reply_to: contactForm.reply_to.value,
        message: contactForm.message.value,
      };

      emailjs
        .send(serviceId, templateId, formData)
        .then(() => {
          formStatus.textContent = "Message sent! Thank you.";
          contactForm.reset();
        })
        .catch(() => {
          formStatus.textContent =
            "Failed to send message. Please try again or contact via WhatsApp.";
        });
    });
  } else {
    // If EmailJS is not configured, prevent default submit and show a hint
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      formStatus.textContent =
        "Email service is not configured yet. Please contact me via email or WhatsApp.";
    });
  }
}
