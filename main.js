document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('success_msg');
    const formAlerts = document.querySelectorAll('.form-alert');
    const submitButton = form.querySelector('button[type="button"]');
  
    // Hide all form alerts initially
    formAlerts.forEach(alert => alert.style.display = 'none');
  
    submitButton.addEventListener('click', function() {
      let valid = true;
  
      // Check first name
      const firstName = document.getElementById('first_name');
      if (firstName.value.trim() === '') {
        firstName.nextElementSibling.style.display = 'block';
        valid = false;
      } else {
        firstName.nextElementSibling.style.display = 'none';
      }
  
      // Check last name
      const lastName = document.getElementById('last_name');
      if (lastName.value.trim() === '') {
        lastName.nextElementSibling.style.display = 'block';
        valid = false;
      } else {
        lastName.nextElementSibling.style.display = 'none';
      }
  
      // Check email
      const email = document.getElementById('email');
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value)) {
        email.nextElementSibling.style.display = 'block';
        valid = false;
      } else {
        email.nextElementSibling.style.display = 'none';
      }
  
      // Check query type
      const radioInputs = document.querySelectorAll('input[type="radio"]');
      let radioChecked = false;
      radioInputs.forEach(radio => {
        if (radio.checked) {
          radioChecked = true;
        }
      });
      if (!radioChecked) {
        document.querySelector('.query').nextElementSibling.style.display = 'block';
        valid = false;
      } else {
        document.querySelector('.query').nextElementSibling.style.display = 'none';
      }
  
      // Check consent
      const consent = document.getElementById('consent');
      if (!consent.checked) {
        consent.nextElementSibling.style.display = 'block';
        valid = false;
      } else {
        consent.nextElementSibling.style.display = 'none';
      }
  
      if (valid) {
        // Show success message
        successMsg.style.display = 'block';
  
        // Reset the form
        form.reset();
  
        // Hide success message after a few seconds
        setTimeout(() => {
          successMsg.style.display = 'none';
        }, 5000);
      }
    });
  });
  