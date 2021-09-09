let toggleSignInMethod = (showCreateAccount) => { /*******show create account*************/
    if (showCreateAccount) {
        document.querySelector('#CAccount').classList.remove('hide');
        document.querySelector('#SignIn').classList.add('hide');
    } else {
        document.querySelector('#CAccount').classList.add('hide');
        document.querySelector('#SignIn').classList.remove('hide');
    }
}
let show = (show) => {
    if (show) {
        document.querySelector('.auth').classList.remove('hide');
    } else {
        document.querySelector('.auth').classList.add('hide');
    }
}

document.querySelector('.itsfree').addEventListener('click', () => show(true));
document.querySelector('.itsfreemobilemode').addEventListener('click', () => show(true));
document.querySelector('.Cancel').addEventListener('click', () => show(false));

document.querySelector('.signin').addEventListener('click', () => toggleSignInMethod(false));
document.querySelector('.sign-up').addEventListener('click', () => toggleSignInMethod(true));
document.querySelector('.signMobile').addEventListener('click', () => toggleSignInMethod(false));
document.querySelector('.SignUpMobile').addEventListener('click', () => toggleSignInMethod(true));