// Initialize form submission
document.getElementById("hireForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const status = document.getElementById("formStatus");

  if (!name || !email || !message) {
    status.innerHTML = "❌ Please fill in all fields.";
    status.className = "text-red-500";
    return;
  }

  // EmailJS integration
  emailjs.send("service_e8jkk3f", "template_fu1h048", {
    from_name: name,
    from_email: email,
    message: message,
  }, "UPDIpkJhYP_5vlSnc")
  .then(() => {
    status.innerHTML = "✅ Message sent successfully!";
    status.className = "text-green-500";
    document.getElementById("hireForm").reset();
  }, (error) => {
    console.error(error);
    status.innerHTML = "❌ Failed to send message. Try again later.";
    status.className = "text-red-500";
  });
});
