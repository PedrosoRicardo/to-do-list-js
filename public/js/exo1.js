// ex1 --------------------------------
let div = document.querySelector('.mod');
let h2 = document.querySelector('.modif');
// let a = document.querySelector('a, a:hover');


// variables div's
let exo1 = document.querySelector('.exo1');
let exo2 = document.querySelector('.exo2');
let exo3 = document.querySelector('.exo3');
let exo4 = document.querySelector('.exo4');
let exo5 = document.querySelector('.exo5');
let exo6 = document.querySelector('.exo6');
let exo7 = document.querySelector('.exo7');

// variables anchor
let ex2 = document.querySelector('.ex2');
let ex3 = document.querySelector('.ex3');
let ex4 = document.querySelector('.ex4');
let ex5 = document.querySelector('.ex5');
let ex6 = document.querySelector('.ex6');
let ex7 = document.querySelector('.ex7');
// var pages
let p1 = document.querySelector('#p1');
let p2 = document.querySelector('#p2');
let p3 = document.querySelector('#p3');
let p4 = document.querySelector('#p4');
let p5 = document.querySelector('#p5');
let p6 = document.querySelector('#p6');
let p7 = document.querySelector('#p7');


let ex1 = document.querySelector('.ex1');

function efx1() {
    h2.style.color = 'red';
    div.style.backgroundColor = 'rgb(31, 117, 251)';
    exo1.style.backgroundColor = 'rgb(31, 117, 251)';
    ex1.style.color = 'white';
    h2.innerHTML = 'le titre modifié';

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

    exo7.style.backgroundColor = 'white';
    ex7.style.color = 'rgb(31, 117, 251)';

    // 
    p1.style.display = 'block';
    p2.style.display = 'none';
    p3.style.display = 'none';
    p4.style.display = 'none';
    p5.style.display = 'none';
    p6.style.display = 'none';
    p7.style.display = 'none';

}

ex1.addEventListener('click', efx1);