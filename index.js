let email = document.getElementById('email')
let password = document.getElementById('password')
let checkpassword = document.getElementById('cpassword')
let emailLabel = document.getElementById('emailLabel')
var toggleHidden = document.getElementsByClassName('show')
var toggleShow = document.getElementsByClassName('hidden')



function emailValidator() {
    var log = document.getElementById('info-message')
    var test = email.value
    // switch(test){
    if (test.length === 0) {
        log.innerHTML = 'Enter a valid email'
        log.style.opacity = '1'
        email.style.borderColor = '#D73A49'
        email.style.boxShadow = '0 0 0px 5px rgba(215, 58, 73, 0.2)'
        email.addEventListener('focusout', function () {
            email.style.boxShadow = 'none'
        })
        email.addEventListener('focusin', function () {
            email.style.boxShadow = '0 0 0px 5px rgba(215, 58, 73, 0.2)'
        })
        log.style.color = '#D73A49'
    }
    // break;

    // }
    // if(email.value.length === 0) {
    // }
}

email.addEventListener('input', emailValidator)


// to toggle between show and the hidden svg button
// and to change input type

let show = document.getElementById('sPassword')
let hide = document.getElementById('hPassword')
function toggleOn() {
    if (password.type === 'password') {
        password.type = 'text'
        hide.style.visibility = 'visible'
        show.style.visibility = 'hidden'
    }
}

function toggleOff() {
    if (hide.style.visibility === 'visible') {
        if (password.type === 'text') {
            password.type = 'password'
            show.style.visibility = 'visible'
            hide.style.visibility = 'hidden'
        }
    }
}
show.addEventListener('click', toggleOn)
hide.addEventListener('click', toggleOff)


let show1 = document.getElementById('cPassword1')
let hide1 = document.getElementById('hPassword1')
function toggleOn1() {
    if (checkpassword.type === 'password') {
        checkpassword.type = 'text'
        hide1.style.visibility = 'visible'
        show1.style.visibility = 'hidden'
    }
}

function toggleOff1() {
    if (hide1.style.visibility === 'visible') {
        if (checkpassword.type === 'text') {
            checkpassword.type = 'password'
            show1.style.visibility = 'visible'
            hide1.style.visibility = 'hidden'
        }
    }
}
show1.addEventListener('click', toggleOn1)
hide1.addEventListener('click', toggleOff1)


// Validate password on input 

function passwordValidator() {
    var log = document.getElementById('log-message')
    let length = password.value.length
    let value = password.value

    if (length <= 0) {
        setTimeout(function () {
            log.innerHTML = "Password must contains alphabet and numbers"
            password.style.boxShadow = '0 0 0px 5px rgba(215, 58, 73, 0.2)'
            password.style.borderColor = '#D73A49'
        }, 1000)
        password.addEventListener('focusout', function () {
            password.style.boxShadow = 'none'
        })
        password.addEventListener('focusin', function () {
            password.style.boxShadow = '0 0 0px 5px rgba(215, 58, 73, 0.2)'
        })
        // 
    }
    else if (length < 8) {
        setTimeout(function () {
            log.innerHTML = "Password is too short (minimum is 8 characters)"
            password.style.borderColor = '#D73A49'
            password.style.boxShadow = '0 0 0px 5px rgba(215, 58, 73, 0.2)'
            log.style.opacity = '1'
            log.style.color = '#D73A49'
        }, 1000)
        password.addEventListener('focusout', function () {
            password.style.boxShadow = 'none'
        })
        password.addEventListener('focusin', function () {
            password.style.boxShadow = '0 0 0px 5px rgba(215, 58, 73, 0.2)'
        })
    }
    else if (length >= 8) {
        setTimeout(function () {
            log.innerHTML = ""
            password.style.borderColor = '#85e89d'
            password.style.boxShadow = '0 0 0px 5px rgba(133, 232, 157, 0.2)'

        }, 1000)
        password.addEventListener('focusout', function () {
            password.style.boxShadow = 'none'
        })
        password.addEventListener('focusin', function () {
            password.style.boxShadow = '0 0 0px 5px rgba(133, 232, 157, 0.2)'
        })
    }
}

// checks if the value of the password field is the same has the current value

function checkPassword() {
    var log = document.getElementById('error-message')
    // password.value.addEventListener('change', )
    let length = checkpassword.value.length
    let value = checkpassword.value
    console.log(cpassword.value)
    if (length < 1) {
        console.log("I get overwhelemed")
        setTimeout(function () {
            log.innerHTML = ""
            cpassword.style.borderColor = '#D73A49'
            cpassword.style.boxShadow = '0 0 0px 5px rgba(215, 58, 73, 0.2)'
            log.style.opacity = '1'
            log.style.color = '#D73A49'
        }, 0)
        cpassword.addEventListener('focusout', function () {
            cpassword.style.boxShadow = 'none'
        })
        cpassword.addEventListener('focusin', function () {
            cpassword.style.boxShadow = '0 0 0px 5px rgba(215, 58, 73, 0.2)'
        })
    }
    else if (password.value === value) {
        console.log('nice')
        setTimeout(function () {
            log.innerHTML = ""
            cpassword.style.borderColor = '#85e89d'
            cpassword.style.boxShadow = '0 0 0px 5px rgba(133, 232, 157, 0.2)'

        }, 1000)

        cpassword.addEventListener('focusout', function () {
            cpassword.style.boxShadow = 'none'
        })
        cpassword.addEventListener('focusin', function () {
            cpassword.style.boxShadow = '0 0 0px 5px rgba(133, 232, 157, 0.2)'
        })
    }
    // else if (checkpassword.value.length < 1) {
    //     console.log("I get overwhelemed")
    //     setTimeout(function () {
    //         log.innerHTML = "field must not be blank"
    //         password.style.borderColor = '#D73A49'
    //         password.style.boxShadow = '0 0 0px 5px rgba(215, 58, 73, 0.2)' 
    //         log.style.opacity = '1'
    //         log.style.color = '#D73A49'
    //     }, 0)
    // }

}
function checkPassword1() {
    if (password.value !== checkpassword.value) { //&& password.value.length > 0 && cpassword.value.length > 0
        // cpassword.addEventListener('focusout', function () {
        // setTimeout(function () {
        log.innerHTML = 'password does not correspond'
        cpassword.style.boxShadow = '0 0 0px 5px rgba(215, 58, 73, 0.2)'
        cpassword.style.borderColor = '#D73A49'
        // }, 100)
        // })
        // cpassword.addEventListener('focusout', function () {
        // })
        // cpassword.style.boxShadow = 'none'
        cpassword.addEventListener('focusin', function () {
            cpassword.style.boxShadow = '0 0 0px 5px rgba(215, 58, 73, 0.2)'
        })
    }
}
password.addEventListener('input', passwordValidator)

checkpassword.addEventListener('input', checkPassword)

checkpassword.addEventListener('focusout', checkPassword1)

// to prevent the submit to perform default operation
document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault()
})