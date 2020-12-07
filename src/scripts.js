'use strict'

window.onload = () => {

    const signIn = document.getElementById('sign-in')
    const contact = document.getElementById('contact')
    const password = document.getElementById('password')

    contact.addEventListener('change', (event) => {
        contact.classList.remove('error')
    })
    signIn.addEventListener('click', () => {
        const contactValue = contact.value
        const passwordValue = password.value

        if (auth(contactValue, passwordValue)) {
            //redirect
            window.location.href = 'walkthrough.html'
        } else {
            contact.classList.add('error')
        }

    })
}

function auth(contact, password) {
    const userEmail = "test@gmail.com";
    const userPhone = "+380937883234";
    const userPassword = "lorem182";
    let auth = false;
    //Define what is contact
    if (validateEmail(contact)) {
        console.log("contact is email", contact);
        if (contact === userEmail && password === userPassword) {
            auth = true;
        }
    } else {
        if (validatePhone(contact)) {
            console.log("contact is phone", contact);
            if (contact === userPhone && password === userPassword) {
                auth = true;
            }
        }
    }
    return auth;
};
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return re.test(phone);
}