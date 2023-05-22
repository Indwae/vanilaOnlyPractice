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
// ------------ Code Wars ----------------
const bin = () => {
    const apl = {
        "a":	"1",
        "b":	"2",
        "c":	"3",
        "d":	"4",
        "e":	"5",
        "f":	"6",
        "g":	"7",
        "h":	"8",
        "i":	"9",
        "j":	"10",
        "k":    "11",
        "l":    "12",
        "m":	"13",
        "n":	"14",
        "o":	"15",
        "p":    "16",
        "q":	"17",
        "r":    "18",
        "s":	"19",
        "t":    "20",
        "u":	"21",
        "v":	"22",
        "w":	"23",
        "x":	"24",
        "y":	"25",
        "z":    "26"
        };
        let res = [];
    let tra = "The sunset sets at twelve o' clock.".split('');
    for(ind in tra) { 
        res.push(apl[(tra[ind]).toLowerCase()])
    }
    res.pop();
    res = res.filter((x) => x !== undefined);
    console.log(res.join(" "))
}

console.log(bin());