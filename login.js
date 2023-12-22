// login page work #login.html

let otp = document.querySelector('.otp');
otp.style.display = "none"

// work on continue btn
let cont = document.querySelector('.continue');
let log = document.querySelector('#d1');

log.style.display ="none"

cont.addEventListener(("click"), () => { 
    otp.style.display = "inherit"
    cont.style.display = "none"
    log.style.display = "inherit"
})

