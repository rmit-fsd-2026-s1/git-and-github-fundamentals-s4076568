const form = document.getElementById("registerForm");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const showPassword = document.getElementById("showPassword");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const successMessage = document.getElementById("successMessage");

function clearErrors() {
  usernameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";
  successMessage.textContent = "";
}

function isValidEmail(emailValue) {
  return emailValue.includes("@") && emailValue.includes(".");
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  clearErrors();

  let isValid = true;

  if (username.value.trim() === "") {
    usernameError.textContent = "Username is required.";
    isValid = false;
  }

  if (email.value.trim() === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!isValidEmail(email.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  if (password.value.trim() === "") {
    passwordError.textContent = "Password is required.";
    isValid = false;
  } else if (password.value.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters.";
    isValid = false;
  }

  if (confirmPassword.value.trim() === "") {
    confirmPasswordError.textContent = "Please confirm your password.";
    isValid = false;
  } else if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = "Passwords do not match.";
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = "Registration successful!";
    form.reset();
  }
});

username.addEventListener("input", function () {
  usernameError.textContent = "";
  successMessage.textContent = "";
});

email.addEventListener("input", function () {
  emailError.textContent = "";
  successMessage.textContent = "";
});

password.addEventListener("input", function () {
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";
  successMessage.textContent = "";
});

confirmPassword.addEventListener("input", function () {
  confirmPasswordError.textContent = "";
  successMessage.textContent = "";
});

showPassword.addEventListener("change", function () {
  if (showPassword.checked) {
    password.type = "text";
    confirmPassword.type = "text";
  } else {
    password.type = "password";
    confirmPassword.type = "password";
  }
});