const email = document.getElementById('email')
const password = document.getElementById('password')
const checkpassword = document.getElementById('cpassword')
const emailLabel = document.getElementById('emailLabel')
const username = document.getElementById('username')


function usernameValidator() {
    let regexTest = /^[\w]+$/gi
    let numberRegex = /^[\d+/_]/
    let value = username.value
    // let regexTest = /[a-zA-Z0-9]+/gi
    let regex = regexTest.test(value)
    let log = document.getElementById('username-error')
    console.log(value.length)

    if (value.length <= 0) {

        setTimeout(function () {
            log.innerHTML = ''
            log.style.color = '#D73A49'
            username.style.borderColor = '#D73A49'
            username.style.boxShadow = '0 0 0px 3.5px rgba(215, 58, 73, 0.2)'

        }, 1200)

        username.addEventListener('focusout', function () {
            username.style.boxShadow = 'none'
        })

        username.addEventListener('focusin', function () {
            username.style.boxShadow = '0 0 0px 3.5px rgba(215, 58, 73, 0.2)'
        })

    }
    else if (value.length < 6 || value.length >= 20) {
        setTimeout(function () {
            log.innerHTML = 'Username must be between six and 20 characters long.'
            log.style.opacity = '1'
            username.style.borderColor = '#D73A49'
            log.style.color = '#D73A49'
            username.style.boxShadow = '0 0 0px 3.5px rgba(215, 58, 73, 0.2)'

        }, 1200)

        username.addEventListener('focusout', function () {
            username.style.boxShadow = 'none'
            // username.style.borderColor = '#D73A49'
        })
        username.addEventListener('focusin', function () {
            // username.style.borderColor = '#D73A49'
            username.style.boxShadow = '0 0 0px 3.5px rgba(215, 58, 73, 0.2)'
        })

    }

    else if (!regex || numberRegex.test(value)) {

        setTimeout(function () {

            log.innerHTML = "Username may only contain alphanumeric characters, and cannot begin with a number." //'Please enter a valid username'
            username.style.borderColor = '#D73A49'
            log.style.color = '#D73A49'
            log.style.opacity = '1'
            username.style.boxShadow = '0 0 0px 3.5px rgba(215, 58, 73, 0.2)'

        }, 1000)

        username.addEventListener('focusout', function () {
            username.style.boxShadow = 'none'
        })

        username.addEventListener('focusin', function () {
            username.style.boxShadow = '0 0 0px 3.5px rgba(215, 58, 73, 0.2)'
        })

    }
    // else if (username) {
    //     setTimeout(function () {

    //         log.innerHTML = "Username may only contain alphanumeric characters, and cannot begin with a number." //'Please enter a valid username'
    //         username.style.borderColor = '#D73A49'
    //         username.style.boxShadow = '0 0 0px 3.5px rgba(215, 58, 73, 0.2)'

    //     }, 1000)

    //     username.addEventListener('focusout', function () {
    //         username.style.boxShadow = 'none'
    //     })

    //     username.addEventListener('focusin', function () {
    //         username.style.boxShadow = '0 0 0px 3.5px rgba(215, 58, 73, 0.2)'
    //     })
    //     log.style.color = '#D73A49'
    //     log.style.opacity = '1'
    // }

    else if (regex) {

        setTimeout(function () {
            log.innerHTML = ''
            username.style.borderColor = '#85e89d'
            username.style.boxShadow = '0 0 0px 3.5px rgba(133, 232, 157, 0.2)'

        }, 1100)

        username.addEventListener('focusout', function () {
            username.style.boxShadow = 'none'
        })

        username.addEventListener('focusin', function () {
            username.style.boxShadow = '0 0 0px 3.5px rgba(133, 232, 157, 0.2)'
        })
    }

}
username.addEventListener('input', usernameValidator)


// validate email

function emailValidator() {

    //Email is invalid or already taken
    var log = document.getElementById('info-message')
    var test = email.value
    // switch(test){
    if (test.length < 1) {
        setTimeout(function () {

            log.innerHTML = 'Enter a valid email'
            log.style.opacity = '1'
            email.style.borderColor = '#D73A49'
            email.style.boxShadow = '0 0 0px 3.5px rgba(215, 58, 73, 0.2)'
            log.style.color = '#D73A49'

        }, 1000)


        email.addEventListener('focusout', function () {
            email.style.boxShadow = 'none'
        })

        email.addEventListener('focusin', function () {
            email.style.boxShadow = '0 0 0px 3.5px rgba(215, 58, 73, 0.2)'
        })

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
    let length = password.value.length
    let value = password.value

    if (length <= 0) {
        setTimeout(function () {
            log.innerHTML = "Make sure it's at least 8 characters including a number and a lowercase letter."// "Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter" //"Password must contains alphabet and numbers"
            password.style.boxShadow = '0 0 0px 3.5px rgba(215, 58, 73, 0.2)'
            password.style.borderColor = '#D73A49'
        }, 1000)

        password.addEventListener('focusout', function () {
            password.style.boxShadow = 'none'
        })

        password.addEventListener('focusin', function () {
            password.style.boxShadow = '0 0 0px 3.5px rgba(215, 58, 73, 0.2)'
        })

    }
    else if (length < 8) {
        setTimeout(function () {
            log.innerHTML = 'Password is too short (minimum is 8 characters), needs at least 1 number, and is in a list of passwords commonly used on other websites.' // "Password is too short (minimum is 8 characters)"
            password.style.borderColor = '#D73A49'
            password.style.boxShadow = '0 0 0px 3.5px rgba(215, 58, 73, 0.2)'
            log.style.opacity = '1'
            log.style.color = '#D73A49'
        }, 1000)

        password.addEventListener('focusout', function () {
            password.style.boxShadow = 'none'
        })

        password.addEventListener('focusin', function () {
            password.style.boxShadow = '0 0 0px 3.5px rgba(215, 58, 73, 0.2)'
        })
    }
    else if (length >= 8) {
        setTimeout(function () {
            log.innerHTML = ""
            password.style.borderColor = '#85e89d'
            password.style.boxShadow = '0 0 0px 3.5px rgba(133, 232, 157, 0.2)'

        }, 1000)

        password.addEventListener('focusout', function () {
            password.style.boxShadow = 'none'
        })

        password.addEventListener('focusin', function () {
            password.style.boxShadow = '0 0 0px 3.5px rgba(133, 232, 157, 0.2)'
        })

    }
}

// checks if the value of the password field is the same has the current value

function checkPassword() {
    var log = document.getElementById('error-message')
    let length = checkpassword.value.length
    let value = checkpassword.value

    if (length < 1) {
        setTimeout(function () {
            log.innerHTML = ""
            cpassword.style.borderColor = '#D73A49'
            cpassword.style.boxShadow = '0 0 0px 3.5px rgba(215, 58, 73, 0.2)'
            log.style.opacity = '1'
            log.style.color = '#D73A49'
        }, 0)

        cpassword.addEventListener('focusout', function () {
            cpassword.style.boxShadow = 'none'
        })

        cpassword.addEventListener('focusin', function () {
            cpassword.style.boxShadow = '0 0 0px 3.5px rgba(215, 58, 73, 0.2)'
        })

    }

    else if (password.value === value) {

        setTimeout(function () {
            log.innerHTML = ""
            cpassword.style.borderColor = '#85e89d'
            cpassword.style.boxShadow = '0 0 0px 3.5px rgba(133, 232, 157, 0.2)'

        }, 1000)

        cpassword.addEventListener('focusout', function () {
            cpassword.style.boxShadow = 'none'
        })

        cpassword.addEventListener('focusin', function () {
            cpassword.style.boxShadow = '0 0 0px 3.5px rgba(133, 232, 157, 0.2)'
        })
        
    }
    // else if (checkpassword.value.length < 1) {
    //     console.log("I get overwhelemed")
    //     setTimeout(function () {
    //         log.innerHTML = "field must not be blank"
    //         password.style.borderColor = '#D73A49'
    //         password.style.boxShadow = '0 0 0px 3.5px rgba(215, 58, 73, 0.2)' 
    //         log.style.opacity = '1'
    //         log.style.color = '#D73A49'
    //     }, 0)
    // }

}
function checkPassword1() {
    var log = document.getElementById('error-message')
    if (password.value !== checkpassword.value) { //&& password.value.length > 0 && cpassword.value.length > 0
        // cpassword.addEventListener('focusout', function () {
        // setTimeout(function () {
        log.innerHTML = 'password does not correspond'
        cpassword.style.boxShadow = '0 0 0px 3.5px rgba(215, 58, 73, 0.2)'
        cpassword.style.borderColor = '#D73A49'
        // }, 100)
        // })
        // cpassword.addEventListener('focusout', function () {
        // })
        // cpassword.style.boxShadow = 'none'
        cpassword.addEventListener('focusin', function () {
            cpassword.style.boxShadow = '0 0 0px 3.5px rgba(215, 58, 73, 0.2)'
        })
    }
}
password.addEventListener('input', passwordValidator)

checkpassword.addEventListener('input', checkPassword)

checkpassword.addEventListener('focusout', checkPassword1)

// to prevent the submit to perform default operation

// document.getElementById('submit').addEventListener('click', function (e) {
//     e.preventDefault()
// })