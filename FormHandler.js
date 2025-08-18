export default class FormHandler {
  constructor(formElement, alertContainer) {
    this.form = formElement;
    this.alertContainer = alertContainer;
  }

  //  Check if email format is valid
  validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }



    //  Validate all required fields
  validateForm(fullName, email, password) {
    let errors = [];

    if (!fullName || !this.validateName(fullName)) {
      errors.push("Full Name must have a letter and not be empty.");
    }

    if (!email || !this.validateEmail(email)) {
      errors.push("Enter a valid email address.");
    }

    if (!password) {
      errors.push("Password is required.");
    }

    return errors;
  }


  //  Check if name starts with a letter
  validateName(name) {
    const regex = /^[A-Za-z][A-Za-z\s]*$/;
    return regex.test(name);
  }



  //  Save form data to localStorage
  saveToLocalStorage(data) {
    localStorage.setItem("formData", JSON.stringify(data));
  }

  //  Get form data from localStorage
  getFormData() {
    const data = localStorage.getItem("formData");
    return data ? JSON.parse(data) : null;
  }

  //  Show alert using Bootstrap
  showAlert(message, type) {
    this.alertContainer.innerHTML = `
      <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;
  }
}
