//importing form-handler
import FormHandler from "./FormHandler";


// Get form and alert container
const formElement = document.getElementById("userForm");
const alertContainer = document.getElementById("alert-container");

// Create instance of FormHandler
const handler = new FormHandler(formElement, alertContainer);

// Handle form submission
formElement.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get values
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validate
  const errors = handler.validateForm(fullName, email, password);

  if (errors.length > 0) {
    handler.showAlert(errors.join("<br>"), "danger");
  } else {
    const data = { fullName, email, password };
    handler.saveToLocalStorage(data);
    handler.showAlert("Form submitted successfully!");
    console.log("Saved Data:", handler.getFormData());

    // Reset form
    formElement.reset();
  }
});