let myModal;

function validateForm() {
    const name = document.getElementById('nameInput').value;
    const phone = document.getElementById('phoneInput').value;
    const email = document.getElementById('emailInput').value;
    const street = document.getElementById('streetInput').value;
    const aptUnit = document.getElementById('aptUnitInput').value;
    const city = document.getElementById('cityInput').value;
    const state = document.getElementById('stateInput').value;  // Readonly, but included in validation for completeness
    const postalCode = document.getElementById('postalInput').value;
    const description = document.getElementById('descriptionInput').value;
  
    // Validate name (optional check, ensure it's not empty)
    if (!name) {
      alert("Please enter your name.");
      return false;
    }
  
    // Validate phone number (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phone.match(phoneRegex)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }
  
    // Validate email address
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailRegex)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    // Validate street address (required)
    if (!street) {
      alert("Please enter your street address.");
      return false;
    }
  
    // Validate apt/unit (optional check, can be left empty)
    if (aptUnit && aptUnit.trim() === "") {
      alert("Please enter your apartment/unit if applicable.");
      return false;
    }
  
    // Validate city (required)
    if (!city) {
      alert("Please enter your city.");
      return false;
    }
  
    // Validate state (already set to Florida, but still validating as it's included)
    if (!state) {
      alert("Please select your state.");
      return false;
    }
  
    // Validate postal code (required)
    const postalCodeRegex = /^[0-9]{5}$/;  // Adjust to match the format of postal codes in your region
    if (!postalCode.match(postalCodeRegex)) {
      alert("Please enter a valid postal code.");
      return false;
    }
  
    // Validate description (optional check, ensure it's not empty)
    if (!description) {
      alert("Please enter a description of the required services.");
      return false;
    }
  
    return true; // Proceed with email sending if validation is successful
  }
  

function sendEmail() {
    if (!validateForm()) {
        return; // Stop if validation fails
      }
      const name = document.getElementById('nameInput').value;
      const phone = document.getElementById('phoneInput').value;
      const email = document.getElementById('emailInput').value;
      const street = document.getElementById('streetInput').value;
      const aptUnit = document.getElementById('aptUnitInput').value;
      const city = document.getElementById('cityInput').value;
      const state = document.getElementById('stateInput').value;  // Readonly, but included in validation for completeness
      const postalCode = document.getElementById('postalInput').value;
      const description = document.getElementById('descriptionInput').value;
  
    if (!name || !phone || !email || !description) {
      alert("Please fill out all fields before submitting.");
      return;
    }
  
    emailjs.send("service_w46ux9t", "template_gnt3j7c", {
      name: name,
      phone: phone,
      email: email,
      street: street,
      aptUnit: aptUnit,
      city:city,
      state: state,
      postalCode: postalCode,
      description: description,
      title: `${name}`
    }, "pK-dV5SF43WH7XAtK")
    .then(response => {
      myModal = new bootstrap.Modal(document.getElementById('thankyouModal'));
      myModal.show();
      replyEmail();
    })
    .catch(error => {
      console.log(error);
      alert("Error sending email: " + error.text);
    });
  }


  function clearForm() {
    document.getElementById('nameInput').value = '';
    document.getElementById('phoneInput').value = '';
    document.getElementById('emailInput').value = '';
    document.getElementById('streetInput').value = '';
    document.getElementById('aptUnitInput').value = '';
    document.getElementById('cityInput').value = '';
    document.getElementById('stateInput').value;
    document.getElementById('postalInput').value = '';
    document.getElementById('descriptionInput').value = '';
  }

  function onCloseModal() {
    if (myModal) {
        myModal.hide();
    }
    clearForm();
  }

  document.addEventListener("DOMContentLoaded", function () {
    const closeButton = document.querySelector("#thankyouModal");
    if (closeButton) {
        closeButton.addEventListener("click", onCloseModal);
    }
});

function replyEmail() {
    const name = document.getElementById('nameInput').value;
    const phone = document.getElementById('phoneInput').value;
    const email = document.getElementById('emailInput').value;
    const description = document.getElementById('descriptionInput').value;

  
    emailjs.send("service_w46ux9t", "template_hmdkds8", {
      name: name,
      phone: phone,
      email: email,
      description: description,
      title: `${name}`
    }, "pK-dV5SF43WH7XAtK")
    .then(response => {
    })
    .catch(error => {
      console.log(error);
      alert("Error sending email: " + error.text);
    });
}