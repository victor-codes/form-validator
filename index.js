const email = document.getElementById('email')
const password = document.getElementById('password')
const checkpassword = document.getElementById('cpassword')
const username = document.getElementById('username')

function errorMessage (label, log, message) { 
    log.innerHTML = message
    label.style.borderColor = '#D73A49'
    log.style.color = '#D73A49'
    log.style.opacity = '1'
}
function successMessage (label, log) {
    log.innerHTML = ''
    label.style.borderColor = '#85e89d'
}

function usernameValidator() {
    let regexTest = /^[\w]+$/g
    let numberRegex = /^[\d+/_]/
    let value = username.value.trim()
    let regex = regexTest.test(value)
    let log = document.getElementById('username-error')

    if (value.length <= 0) {
        setTimeout(function () {
            errorMessage(username, log, "Username can't be blank")
        }, 800)
    }
    else if ((value.length < 6 || value.length >= 20)) {
        setTimeout(function () {
            errorMessage(username, log, 'Username must be between six and 20 characters long.')
        }, 800)

    }
    else if (!regex || numberRegex.test(value)) {
        setTimeout(function () {
            errorMessage(username, log, "Username may only contain alphanumeric characters, and cannot begin with a number.")
        }, 800)
    }
    else if (regex) {
        setTimeout(function () {
            successMessage(username, log)
        }, 800)
    }
}
username.addEventListener('input', usernameValidator)

// validate email (\w-)@(\w+)(\w+$)

function emailValidator() {
    //Email is invalid or already taken

    var log = document.getElementById('info-message')
    var test = email.value.trim()
    let match = /^[a-zA-Z][.](?=a-zA-Z)|\w+@([\w-]+\.)+[\w-]{2,4}$/
    if (test.length < 1) {
        setTimeout(function () {
            errorMessage(email, log, 'Enter a valid email')
        }, 800)
    }
    else if (test.match(/\s/g)) {
        setTimeout(function () {
            errorMessage(email, log, "Email is invalid or already taken")
        }, 800)
    }
    else if (test.match(match)) {

        setTimeout(function () {
            successMessage(email, log)
        }, 800)
    }

    else {
        setTimeout(function () {
            errorMessage(email, log, "Email is invalid or already taken")
        }, 800)
    }

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
    let value = password.value.trim()
    let length = password.value.length

    if (length <= 0) {
        setTimeout(function () {
            errorMessage(password, log, "Make sure it's at least 8 characters including a number, a uppercase letter and a lowercase letter.")
        }, 800)
    }
    else if (length < 8) {
        setTimeout(function () {
            errorMessage(password, log, 'Password is too short (minimum is 8 characters), needs at least 1 number, and is in a list of passwords commonly used on other websites.') // "Password is too short (minimum is 8 characters)"
        }, 800)
    }
    else if ((length >= 8) && (value.match(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,20})/g))) { //^[\w]+[\w]$
        setTimeout(function () {
            successMessage(password,log)

        }, 800)
    }
    else {
        setTimeout(function () {
            errorMessage(password, log, 'Password must include a number, a uppercase letter and a lowercase letter.') // "Password is too short (minimum is 8 characters)"
        }, 800)
    }
}

// checks if the value of the password field is the same has the current value
function checkPassword() {
    var log = document.getElementById('error-message')
    let value = checkpassword.value.trim()
    let length = checkpassword.value.length
    if (length < 1) {
        setTimeout(function () {
            errorMessage(cpassword, log, `Field can't be blank`)
        }, 800)
    }
    else if (password.value === value) {
        setTimeout(function () {
            successMessage(cpassword, log)
        }, 800)
    }
}
function checkPassword1() {
    var log = document.getElementById('error-message')
    let cPasswordValue = checkpassword.value.trim()
    let passwordValue = password.value.trim()
    if (passwordValue !== cPasswordValue) { //&& password.value.length > 0 && cpassword.value.length > 0
        setTimeout(function () {
            errorMessage(cpassword, log, 'Password does not match.')
        }, 800)
    }
}
password.addEventListener('input', passwordValidator)
checkpassword.addEventListener('input', checkPassword)
checkpassword.addEventListener('focusout', checkPassword1)

// to prevent the submit to perform default operation

// document.getElementById('submit').addEventListener('click', function (e) {
//     e.preventDefault()
// })
