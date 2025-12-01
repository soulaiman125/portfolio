document.getElementById("year").textContent = new Date().getFullYear();

// Show sections smoothly
document.querySelectorAll(".section").forEach((sec,i)=>{
  setTimeout(()=>sec.style.opacity="1", i*150);
});

// Mobile nav toggle
document.getElementById("nav-toggle").onclick = () => {
  document.getElementById("nav-links").classList.toggle("show");
};

// Theme toggle
const themeBtn = document.getElementById("theme-toggle");
themeBtn.onclick = () => {
  document.body.classList.toggle("light");
  themeBtn.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
};

// Contact form EmailJS
emailjs.init("YOUR_USER_ID");

document.getElementById("contact-form").addEventListener("submit", async (e)=>{
  e.preventDefault();
  const status = document.getElementById("form-status");
  status.textContent = "Sending...";

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    from_name: e.target.from_name.value,
    reply_to: e.target.reply_to.value,
    message: e.target.message.value
  })
  .then(()=>{
    status.textContent = "Message sent!";
    e.target.reset();
  })
  .catch(()=>{
    status.textContent = "Failed. Try WhatsApp!";
  });
});