const form = document.querySelector("#form");

const fullName = document.querySelector("#fullName");
const fullNameError = document.getElementById("fullNameError");

const phone = document.getElementById("phone");
const phoneError = document.getElementById("phoneError");

const email = document.getElementById("email");
const emailError = document.getElementById("emailError");

const button = document.querySelector(".button");

const success = document.querySelector(".submissionSuccessful")

button.disabled = true;

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatch = regEx.test(email)
    return patternMatch;
}

fullName.onchange = function () {

    let value = fullName.value.trim().length;

    if (value >= 5) {
        fullNameError.style.display = "none";
        console.log("asd");
    } else {
        fullNameError.style.display = "block";
    }
}

email.onchange = function () {

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
        console.log("bonks");
    }
}

phone.onchange = function () {
    if (phone.value.length === 8) {
        phoneError.style.display = "none";
        console.log("stonks");
    }
}



form.onkeyup = function () {
    if (fullName.value.trim().length >= 4 && validateEmail(email.value) === true && phone.value.length === 8) {
        button.disabled = false;
    }
}

form.onsubmit = function () {

    event.preventDefault();
    success.style.display = "block";
}
