document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("status");

  if (!name || !email || !message) {
    status.style.color = "red";
    status.textContent = "⚠️ Please fill out all fields.";
    return;
  }

  status.style.color = "green";
  status.textContent = "✅ Your message has been sent successfully!";
  document.getElementById("contactForm").reset();
});
