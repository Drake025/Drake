var signupForm = document.getElementById("signupForm");
var loginForm = document.getElementById("loginForm");
var signupFormContainer = document.getElementById("signupFormContainer");
var loginFormContainer = document.getElementById("loginFormContainer");

// Function to save sign-up data to localStorage
function saveSignupData(event) {
    event.preventDefault(); // Prevent the form from actually submitting

    // Get user input from the sign-up form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
    
    // Check if the password and confirm password match
    if (password !== confirmPassword) {
        alert("Password do not match. Please try again.");
        return; // Exit the function to prevent further execution
    }

    // Store the user data in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Show the login form
    showLoginForm();

    alert("Sign up successful!");
    signupForm.reset();
}

// Function to check login credentials
function login(event) {
  event.preventDefault(); // Prevent the form from actually submitting

  // Get user input from the login form
  var loginUsername = document.getElementById("loginUsername").value;
  var loginPassword = document.getElementById("loginPassword").value;

  // Retrieve user data from localStorage
  var storedUsername = localStorage.getItem("username");
  var storedPassword = localStorage.getItem("password");

  if (
      storedUsername === loginUsername &&
      storedPassword === loginPassword
  ) {
      alert("Login successful!");

      // Redirect to TicTacToe.html
      window.location.href = "sudoku.html";
  } else {
        alert("Invalid username or password. Please try again.");
    }
}

function toggleForms() {
    signupForm.style.display = signupForm.style.display === "none" ? "block" : "none";
    loginForm.style.display = loginForm.style.display === "none" ? "block" : "none";
}

// Initially, hide the login form
loginFormContainer.style.display = "none";

function cancelSignup() {
    // Clear the form fields
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirm_password").value = "";

    // Optionally, you can display a message to indicate cancellation
    alert("Sign up cancelled.");
}

// Function to show the login form and hide the sign-up form
function showLoginForm() {
    signupFormContainer.style.display = "none"; // Hide the sign-up form container
    loginFormContainer.style.display = "block"; // Show the login form container
}

// Function to go back to the sign-up form
function showSignupForm() {
    loginFormContainer.style.display = "none"; // Hide the login form container
    signupFormContainer.style.display = "block"; // Show the sign-up form container
}

// Check for the "login" query parameter
const params = new URLSearchParams(window.location.search);
if (params.has('login')) {
    // Display the login form
    showLoginForm();
}


// Function to clear local storage and redirect to the sign-up page
//function clearLocalStorageAndRedirect() {
  //localStorage.clear();
  // Redirect the user to the sign-up page (replace 'signup.html' with the actual path)
 // window.location.href = 'index.html'; }

