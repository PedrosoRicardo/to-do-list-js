// ex4 ------------------------------
let ck1 = document.querySelector('.ck1');
let pla = document.querySelector('.place');
let cd1 = document.querySelector('.cd1');
let cd2 = document.querySelector('.cd2');
let cli = document.querySelector('.cli');
let cnt = document.querySelector('.cnt');
let cmp = 0;


function bl1() {
    if (document.querySelector('.cd2 div') == null) {
        cd2.appendChild(ck1);
        cmp++
        cnt.innerText = cmp;
    } else {
        cd1.appendChild(ck1);
        cmp++
        cnt.innerText = cmp;
    }
}

pla.addEventListener('click', bl1);

function bl2() {
    cmp = 0;
    cnt.innerText = cmp;
}

cli.addEventListener('click', bl2);
