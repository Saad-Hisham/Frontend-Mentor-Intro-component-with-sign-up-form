function validateForm(event) {
    event.preventDefault();
  
    const form = document.forms.signupForm;
  
    // Reset error classes
    const formGroups = form.querySelectorAll('.form-group');
    formGroups.forEach((group) => {
      group.classList.remove('error');
    });
  
    // Validate form inputs
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();
  
    let hasError = false;
  
    if (firstName === '') {
      form.firstName.parentNode.classList.add('error');
      hasError = true;
    }
  
    if (lastName === '') {
      form.lastName.parentNode.classList.add('error');
      hasError = true;
    }
  
    if (email === '') {
      form.email.parentNode.classList.add('error');
      hasError = true;
    }
  
    if (password === '') {
      form.password.parentNode.classList.add('error');
      hasError = true;
    }
  
    
      // Remove error class only from filled input fields
      if (firstName !== '') {
        form.firstName.parentNode.classList.remove('error');
      }
  
      if (lastName !== '') {
        form.lastName.parentNode.classList.remove('error');
      }
  
      if (email !== '') {
        form.email.parentNode.classList.remove('error');
      }
  
      if (password !== '') {
        form.password.parentNode.classList.remove('error');
      }
  
      if (!hasError) {
      alert('Form submitted successfully!');
      window.location.reload()
      return true;
    }
  
    return false; // Prevent form submission if there are errors
  }