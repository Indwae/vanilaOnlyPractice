const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const regLink = document.querySelector('.register-link');
const btn = document.querySelector('.btnLogin-popup')
const iconClose = document.querySelector('.icon-close')

btn.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

regLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});