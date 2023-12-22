// signup page work 

// to hide otp box 

let otpbox = document.querySelector('.otp_box');
otpbox.style.display = "none"

// to hide signup btn 

let username = document.querySelector('.name');
let useremail = document.querySelector('.email');
let cont = document.querySelector('.signup-btn');
let sign = document.querySelector('#d1');

sign.style.display = "none"

cont.addEventListener(("click"), () => {
    otpbox.style.display = "inherit"
    cont.style.display = "none"
    sign.style.display = "inherit"
    username.style.display = "none"
    useremail.style.display = "none"
})