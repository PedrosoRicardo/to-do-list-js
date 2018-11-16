// ex1 --------------------------------
let div = document.querySelector('.mod');
let h2 = document.querySelector('.modif');
let exo1 = document.querySelector('.exo1');
// let a = document.querySelector('a, a:hover');

let ex1 = document.querySelector('.ex1');

function efx1() {
    h2.style.color = 'red';
    div.style.backgroundColor = 'rgb(31, 117, 251)';
    exo1.style.backgroundColor = 'rgb(31, 117, 251)';
    ex1.style.color = 'white'
    h2.innerHTML = 'le titre modifié'
    // a.style.textDecoration = 'none';

    exo2.style.backgroundColor = 'white';
    ex2.style.color = 'rgb(31, 117, 251)';

    exo3.style.backgroundColor = 'white';
    ex3.style.color = 'rgb(31, 117, 251)';

    exo4.style.backgroundColor = 'white';
    ex4.style.color = 'rgb(31, 117, 251)';

    exo5.style.backgroundColor = 'white';
    ex5.style.color = 'rgb(31, 117, 251)';

    exo6.style.backgroundColor = 'white';
    ex6.style.color = 'rgb(31, 117, 251)';

    // 
    p1.style.display = 'block';
    p2.style.display = 'none';
    p3.style.display = 'none';
    p4.style.display = 'none';
    p5.style.display = 'none';
    p6.style.display = 'none';

}

ex1.addEventListener('click', efx1);


// ex2 ----------------------------

// variables div's
let exo2 = document.querySelector('.exo2');
let exo3 = document.querySelector('.exo3');
let exo4 = document.querySelector('.exo4');
let exo5 = document.querySelector('.exo5');
let exo6 = document.querySelector('.exo6');

// variables anchor
let ex2 = document.querySelector('.ex2');
let ex3 = document.querySelector('.ex3');
let ex4 = document.querySelector('.ex4');
let ex5 = document.querySelector('.ex5');
let ex6 = document.querySelector('.ex6');
// var pages
let p1 = document.querySelector('#p1');
let p2 = document.querySelector('#p2');
let p3 = document.querySelector('#p3');
let p4 = document.querySelector('#p4');
let p5 = document.querySelector('#p5');
let p6 = document.querySelector('#p6');

// fonctions 
function efx2() {
    exo2.style.backgroundColor = 'rgb(31, 117, 251)';
    ex2.style.color = 'white';

    exo1.style.backgroundColor = 'white';
    ex1.style.color = 'rgb(31, 117, 251)';

    exo3.style.backgroundColor = 'white';
    ex3.style.color = 'rgb(31, 117, 251)';

    exo4.style.backgroundColor = 'white';
    ex4.style.color = 'rgb(31, 117, 251)';

    exo5.style.backgroundColor = 'white';
    ex5.style.color = 'rgb(31, 117, 251)';

    exo6.style.backgroundColor = 'white';
    ex6.style.color = 'rgb(31, 117, 251)';

    // 
    p1.style.display = 'none';
    p2.style.display = 'block';
    p3.style.display = 'none';
    p4.style.display = 'none';
    p5.style.display = 'none';
    p6.style.display = 'none';
}

ex2.addEventListener('click', efx2);

// 
function efx3() {
    exo3.style.backgroundColor = 'rgb(31, 117, 251)';
    ex3.style.color = 'white';

    exo1.style.backgroundColor = 'white';
    ex1.style.color = 'rgb(31, 117, 251)';

    exo2.style.backgroundColor = 'white';
    ex2.style.color = 'rgb(31, 117, 251)';

    exo4.style.backgroundColor = 'white';
    ex4.style.color = 'rgb(31, 117, 251)';

    exo5.style.backgroundColor = 'white';
    ex5.style.color = 'rgb(31, 117, 251)';

    exo6.style.backgroundColor = 'white';
    ex6.style.color = 'rgb(31, 117, 251)';

    // 
    p1.style.display = 'none';
    p2.style.display = 'none';
    p3.style.display = 'block';
    p4.style.display = 'none';
    p5.style.display = 'none';
    p6.style.display = 'none';
}

ex3.addEventListener('click', efx3);

//

function efx4() {
    exo4.style.backgroundColor = 'rgb(31, 117, 251)';
    ex4.style.color = 'white';

    exo1.style.backgroundColor = 'white';
    ex1.style.color = 'rgb(31, 117, 251)';

    exo3.style.backgroundColor = 'white';
    ex3.style.color = 'rgb(31, 117, 251)';

    exo2.style.backgroundColor = 'white';
    ex2.style.color = 'rgb(31, 117, 251)';

    exo5.style.backgroundColor = 'white';
    ex5.style.color = 'rgb(31, 117, 251)';

    exo6.style.backgroundColor = 'white';
    ex6.style.color = 'rgb(31, 117, 251)';

    // 
    p1.style.display = 'none';
    p2.style.display = 'none';
    p3.style.display = 'none';
    p4.style.display = 'block';
    p5.style.display = 'none';
    p6.style.display = 'none';

}

ex4.addEventListener('click', efx4);

// 
function efx5() {
    exo5.style.backgroundColor = 'rgb(31, 117, 251)';
    ex5.style.color = 'white';

    exo1.style.backgroundColor = 'white';
    ex1.style.color = 'rgb(31, 117, 251)';

    exo3.style.backgroundColor = 'white';
    ex3.style.color = 'rgb(31, 117, 251)';

    exo4.style.backgroundColor = 'white';
    ex4.style.color = 'rgb(31, 117, 251)';

    exo2.style.backgroundColor = 'white';
    ex2.style.color = 'rgb(31, 117, 251)';

    exo6.style.backgroundColor = 'white';
    ex6.style.color = 'rgb(31, 117, 251)';

    // 
    p1.style.display = 'none';
    p2.style.display = 'none';
    p3.style.display = 'none';
    p4.style.display = 'none';
    p5.style.display = 'block';
    p6.style.display = 'none';
}

ex5.addEventListener('click', efx5);

// 
function efx6() {
    exo6.style.backgroundColor = 'rgb(31, 117, 251)';
    ex6.style.color = 'white';

    exo1.style.backgroundColor = 'white';
    ex1.style.color = 'rgb(31, 117, 251)';

    exo3.style.backgroundColor = 'white';
    ex3.style.color = 'rgb(31, 117, 251)';

    exo4.style.backgroundColor = 'white';
    ex4.style.color = 'rgb(31, 117, 251)';

    exo5.style.backgroundColor = 'white';
    ex5.style.color = 'rgb(31, 117, 251)';

    exo2.style.backgroundColor = 'white';
    ex2.style.color = 'rgb(31, 117, 251)';

    // 
    p1.style.display = 'none';
    p2.style.display = 'none';
    p3.style.display = 'none';
    p4.style.display = 'none';
    p5.style.display = 'none';
    p6.style.display = 'block';
}

ex6.addEventListener('click', efx6);

// ex3 -------------------------------

let btn1 = document.querySelector('.btn1');
let sp1 = document.querySelector('.sp1');

function s1() {
    let input = document.querySelector('input').value;
    sp1.innerText = input;
}

btn1.addEventListener('click', s1);

// ex4 ------------------------------
let ck1 = document.querySelector('.ck1');
let pla = document.querySelector('.place');
let cd1 = document.querySelector('.cd1');
let cd2 = document.querySelector('.cd2');

let cnt = document.querySelector('.cnt');
let cmp = 0;


function bl1() {
    if (document.querySelector('.cd2 div') === null) {
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

// ex5 ------------------------------------
let ajout = document.querySelector('.ajout');

function aze() {
    let img = document.createElement('IMG');
    img.setAttribute('src', "../public/img/oeuf.jpg");
    let oeuf = document.querySelector('.oeuf');
    oeuf.appendChild(img);
}
ajout.addEventListener('click', aze);

// ex6 ------------------------------------



