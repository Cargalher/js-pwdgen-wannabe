//ask user's name
var userName = prompt ('What is your name?');

//ask user's last name
var lastName = prompt ('What is your last name?');

//ask user's favorite color
var favColor = prompt ('What is your favorite color?');

//show a password message
var passwordElement = document.getElementById('password');
passwordElement.innerHTML = "Password";

//show created password
var secret_passwordElement = document.getElementById ('secret_password');
secret_passwordElement.innerHTML = userName.toLowerCase() + lastName.toLowerCase() + favColor.toLowerCase() + '21';


