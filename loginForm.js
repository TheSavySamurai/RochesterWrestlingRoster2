let loginContainer =  document.getElementById('loginContainer');
let signupContainer = document.getElementById('signupContainer');
let loginSignupContainer = document.getElementById("loginSignupContainer");
//buttons for  login and signup
let loginButton = document.getElementById('loginSwitch');
let signupButton = document.getElementById('signupSwitch');
//on signup screen
loginButton.addEventListener("click",function(event){
    loginContainer.classList.add("open");
    signupContainer.classList.remove("open");
    loginSignupContainer.style.background = "#cacaca";
});
//on login screen
signupButton.addEventListener("click",function(event){
    signupContainer.classList.add("open");
    loginContainer.classList.remove("open");
    loginSignupContainer.style.background = "#2900e0";
});



