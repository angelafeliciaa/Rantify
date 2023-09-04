function openWelcomePage() {
  window.location.href = 'welcome.html';
}

//welcome
function openSignUpPage() {
  window.location.href = "signUp.html";
}

function openLoginPage() {
  window.location.href = "login.html";
}

//login
function showPassword() {
  var passwordEntry = document.getElementById('loginPassword');
  var passwordEntryVisibility = passwordEntry.type === 'password';

  passwordEntry.type = passwordEntryVisibility ? 'text' : 'password';

  var view = document.querySelector('.view');
  view.textContent = passwordEntryVisibility ? 'Hide Password' : 'Show Password';
}


function login() {
  var usernameEntry = document.getElementById('loginUsername');
  var passwordEntry = document.getElementById('loginPassword');

  var username = usernameEntry.value;
  var password = passwordEntry.value;

    // Retrieve existing user data from localStorage
  var existingData = localStorage.getItem('userData');
  var userData = existingData ? JSON.parse(existingData) : [];

    // Find the user with the given username
  var user = userData.find(function (user) {
    return user.username === username;
  });

    // Check if the user exists and the password is correct
  if (!user || user.password !== password) {
    alert('Invalid username or password');
    return;
  }
  localStorage.setItem('logged', JSON.stringify(username));
  window.location.href = 'loginSuccessful.html';
}


//loginSuccessful
function openRantify() {
  window.location.href = "rantify.html";
}

//signUp
function showPasswordSignUp() {
  var passwordEntry = document.getElementById('signupPassword');
  var confirmPasswordEntry = document.getElementById('signupConfirmPassword');

  var passwordEntryVisibility = passwordEntry.type === 'password';
  var confirmPasswordEntryVisibility = confirmPasswordEntry.type === 'password';

  passwordEntry.type = passwordEntryVisibility ? 'text' : 'password';
  confirmPasswordEntry.type = confirmPasswordEntryVisibility ? 'text' : 'password';

  var view = document.querySelector('.view');
  view.textContent = passwordEntryVisibility ? 'Hide Password' : 'Show Password';
}

// array to store user data
var userData = [];

function signUp() {
  var usernameEntry = document.getElementById('signupUsername');
  var passwordEntry = document.getElementById('signupPassword');
  var confirmPasswordEntry = document.getElementById('signupConfirmPassword');

  var username = usernameEntry.value;
  var password = passwordEntry.value;
  var confirmPassword = confirmPasswordEntry.value;

  if (username.length < 3) {
    alert('Username must have at least THREE characters');
    return;
  }

  var passwordRequirement = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;
  var checkPassword = passwordRequirement.test(password);

  if (!checkPassword) {
    alert('Password must have at least SIX characters, ONE number, ONE lowercase letter and ONE uppercase letter');
    return;
  }

  if (password != confirmPassword) {
    alert('Password and Confirmed Password do not match');
    return;
  }


  // create user object
  var user = {
    username: username,
    password: password
  };

    // Retrieve existing user data from localStorage
  var storedData = localStorage.getItem('userData');
  if (storedData) {
    userData = JSON.parse(storedData);
  }

    // Check if user already exists
  var userExists = userData.find(function (user) {
    return user.username === username;
  });

  if (userExists) {
    alert('username is not available');
    return;
  }

    // add user object to array of users
  userData.push(user);

    // store userdata in local storage using json
    // Store updated userData in localStorage
  localStorage.setItem('userData', JSON.stringify(userData));
  window.location.href = 'signUpSuccessful.html';
}


