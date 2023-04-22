const form = document.getElementById('signup-form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener("submit", e => {
    e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	let firstNameValue = firstName.value.trim();
	let lastNameValue = lastName.value.trim();
	let emailValue = email.value.trim();
    let usernameValue = username.value.trim();
    let passwordValue = password.value.trim();

    if (firstNameValue === '') {
        setErrorFor(firstName, 'First name cannot be blank');
    } else {
        setSuccessFor(firstName);
    }
    
    if (lastNameValue === '') {
        setErrorFor(lastName, 'Last name cannot be blank');
    } else {
        setSuccessFor(lastName);
    }
    
    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }
    
    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else if (!isUsername(usernameValue)) {
        setErrorFor(username, 'Username is not valid');
    } else {
        setSuccessFor(username);
    }
    
    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else if (!isPassword(passwordValue)) {
        setErrorFor(password, 'Password is not valid');
    } else {
        setSuccessFor(password);
    }
    
    if (firstNameValue !== '' && lastNameValue !== '' && emailValue !== '' && isEmail(emailValue) && usernameValue !== '' && isUsername(usernameValue) && passwordValue !== '' && isPassword(passwordValue)) {
        alert('Form submitted successfully!');
    }
}    


function setErrorFor(input, message) {
    let formControl = input.parentElement;
    let error = formControl.querySelector('.error');
    if (!error) {
        error = document.createElement('span');
        error.classList.add('error-message');
        formControl.appendChild(error);
    }
    input.classList.add('error');
    error.innerText = message;
}
    
function setSuccessFor(input) {
    let formControl = input.parentElement;
    input.classList.remove('error');
}
    
function isEmail(email) {
    return /^[^\s@]+@[^\s@]+.[^\s@]+$/.test(email);
}
    
function isUsername(username) {
    return /^[A-Za-z0-9]{1,8}$/.test(username);
}

function isPassword(password) {
    // Check if the password is at least 8 characters long
    if (password.length < 8) {
      return false;
    }
  
    // Check if the password contains at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      return false;
    }
  
    // Check if the password contains at least one lowercase letter
    if (!/[a-z]/.test(password)) {
      return false;
    }
  
    // Check if the password contains at least one special character
    if (!/[@$!%*?&]/.test(password)) {
      return false;
    }
  
    // If all checks pass, return true
    return true;
  }
    