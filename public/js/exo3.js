// ex3 -------------------------------

let btn1 = document.querySelector('.btn1');
let sp1 = document.querySelector('.sp1');

function s1() {
    let input = document.querySelector('input').value;
    sp1.innerText = input;
}

btn1.addEventListener('click', s1);