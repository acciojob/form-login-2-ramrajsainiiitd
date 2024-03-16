//your JS code here. If required.
document.getElementById("MyForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const email = document.getElementById("email").value;

  // Create alert message
  const message = `First Name: ${firstName} \nLast Name: ${lastName} \nPhone Number: ${phoneNumber} \nEmail ID: ${email}`;

  // Show alert with form information
  window.alert(message);
});