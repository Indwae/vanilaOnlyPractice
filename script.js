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
// ------------ Code Wars ------------

const bin = (value) => {
    if(value === 7) return true;

    let str = value.toString();
    let res = 0;

    for(let i = 0; str.length <= i; i++){
        res += Number(str[i])**3;
    }

    if(res === value)
      return true;
}

console.log(bin(153));