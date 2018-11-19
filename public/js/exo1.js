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
// niveau 1
let ina = document.querySelector('.ina');
let inb = document.querySelector('.inb');
let egal = document.querySelector('.egal');
let result = document.querySelector('.result');

function add() {
    let resulta;
    resulta = parseInt(ina.value) + parseInt(inb.value);
    result.innerText = resulta;
}

egal.addEventListener('click', add);

// niveau 2
var nombre1 = document.querySelector(".touche1")
var nombre2 = document.querySelector(".touche2")
var nombre3 = document.querySelector(".touche3")
var nombre4 = document.querySelector(".touche4")
var nombre5 = document.querySelector(".touche5")
var nombre6 = document.querySelector(".touche6")
var nombre7 = document.querySelector(".touche7")
var nombre8 = document.querySelector(".touche8")
var nombre9 = document.querySelector(".touche9")
var egale= document.querySelector('.egale')
var efface =document.querySelector(".effacer")
var fois = document.querySelector('.touchefois')
var plus = document.querySelector(".toucheplus")
var moins = document.querySelector(".touchemoins")
var divise = document.querySelector(".touchedivise")
var nombre0 =document.querySelector(".touche0")
let operateur = "";
// let elem1 = "";
// let elem2 = "";
// let result = "";
// let index;
// let e = document.getElementById("jad");
// nombre1.addEventListener('click', function(){
//     e.value += "1";
// });
// nombre2.addEventListener('click', function(){
//     e.value += "2";
// });
// nombre3.addEventListener('click', function(){
//     e.value += "3";
// });
// nombre4.addEventListener('click', function(){
//     e.value += "4";
// });
// nombre5.addEventListener('click', function(){
//     e.value += "5";
// });
// nombre6.addEventListener('click', function(){
//     e.value += "6";
// });
// nombre7.addEventListener('click', function(){
//     e.value += "7";
// });
// nombre8.addEventListener('click', function(){
//     e.value += "8";
// });
// nombre9.addEventListener('click', function(){
//     e.value += "9";
// });
// nombre0.addEventListener('click', function(){
//     e.value += "0";
// });
// plus.addEventListener('click', function(){
//     operateur = "+";
//     elem1 = e.value;
//     e.value += operateur;
// });
// moins.addEventListener('click', function(){
//     operateur = "-";
//     elem1 = e.value;
//     e.value += operateur;
// });
// fois.addEventListener('click', function(){
//     operateur = "*";
//     elem1 = e.value;
//     e.value += operateur;
// });
// divise.addEventListener('click', function(){
//     operateur = "/";
//     elem1 = e.value;
//     e.value += operateur;
// });
// egale.addEventListener('click', function(){
//     switch(operateur){
//         case "+":
//             index = e.value.indexOf("+") + 1;
//             elem2 = e.value.substring(index);
//             result = Number(elem1) + Number(elem2);
//             e.value = result;
//             break;
//             case "-":
//             index = e.value.indexOf("-") + 1;
//             elem2 = e.value.substring(index);
//             result = Number(elem1) - Number(elem2);
//             e.value = result;
//             break;
//             case "*":
//             index = e.value.indexOf("*") + 1;
//             elem2 = e.value.substring(index);
//             result = Number(elem1) * Number(elem2);
//             e.value = result;
//             break;
//             case "/":
//             index = e.value.indexOf("/") + 1;
//             elem2 = e.value.substring(index);
//             result = Number(elem1) / Number(elem2);
//             e.value = result;
//             break;
//     }
// });
