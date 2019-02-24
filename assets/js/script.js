function validaEmail() {
  "use strict";
  var email, email_error_msg;
  email = document.getElementById("email");
  email_error_msg = document.getElementById("email_error_msg");
  if (email.value.length < 1) {
    email_error_msg.classList.add("show-warning");
    return false;
  } else {
    email_error_msg.classList.remove("show-warning");
    return true;
  }
}

function validateUsername() {
  "use strict";
  var username, username_error_msg;
  username = document.getElementById("username");
  username_error_msg = document.getElementById("username_error_msg");
  if (username.value.length < 1) {
    username_error_msg.classList.add("show-warning");
    return false;
  } else {
    username_error_msg.classList.remove("show-warning");
    return true;
  }
}

function validatePassword() {
  "use strict";
  var password, password_error_msg;
  password = document.getElementById("password");
  password_error_msg = document.getElementById("password_error_msg");
  if (password.value.length < 1) {
    // Password error message in login doesn't contain show-warning class
    if (!password_error_msg.classList.contains("show-warning")) {
      password_error_msg.classList.add("show-warning");
    } else if (!password_error_msg.classList.contains("warning-red")) {
      password_error_msg.classList.add("warning-red");
    }
    return false;
  } else {
    password_error_msg.classList.remove("show-warning");
    return true;
  }
}

function validateForm() {
  "use strict";
  var validEmail, validPassword, validUsername;
  validEmail = validaEmail();
  validPassword = validatePassword();
  if (document.getElementById("username")) {
    validUsername = validateUsername();
  }
  if (!document.getElementById("username")) {
    if (validEmail === true && validPassword === true) {
      window.console.log("Good login");
    }
  } else {
    if (
      validEmail === true &&
      validPassword === true &&
      validUsername === true
    ) {
      window.console.log("Good login");
    }
  }
}

function main() {
  "use strict";
  document.getElementById("cta_btn").addEventListener("click", validateForm);
  // Login doesn't have username input so it needs to be checked
  if (document.getElementById("username")) {
    document
      .getElementById("username")
      .addEventListener("input", validateUsername);
  }
  document.getElementById("email").addEventListener("input", validaEmail);
  document
    .getElementById("password")
    .addEventListener("input", validatePassword);
}
main();
