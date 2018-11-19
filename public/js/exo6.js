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
let nombre1 = document.querySelector(".touche1");
let nombre2 = document.querySelector(".touche2");
let nombre3 = document.querySelector(".touche3");
let nombre4 = document.querySelector(".touche4");
let nombre5 = document.querySelector(".touche5");
let nombre6 = document.querySelector(".touche6");
let nombre7 = document.querySelector(".touche7");
let nombre8 = document.querySelector(".touche8");
let nombre9 = document.querySelector(".touche9");
let egale = document.querySelector('.egale');
let efface = document.querySelector(".effacer");
let fois = document.querySelector('.touchefois');
let plus = document.querySelector(".toucheplus");
let moins = document.querySelector(".touchemoins");
let divise = document.querySelector(".touchedivise");
let nombre0 = document.querySelector(".touche0");
let operateur = "";
let elem1 = "";
let elem2 = "";
let resultu = "";
let index;
let e = document.querySelector(".ric");

nombre1.addEventListener('click', function () {
    e.value += "1";
});
nombre2.addEventListener('click', function () {
    e.value += "2";
});
nombre3.addEventListener('click', function () {
    e.value += "3";
});
nombre4.addEventListener('click', function () {
    e.value += "4";
});
nombre5.addEventListener('click', function () {
    e.value += "5";
});
nombre6.addEventListener('click', function () {
    e.value += "6";
});
nombre7.addEventListener('click', function () {
    e.value += "7";
});
nombre8.addEventListener('click', function () {
    e.value += "8";
});
nombre9.addEventListener('click', function () {
    e.value += "9";
});
nombre0.addEventListener('click', function () {
    e.value += "0";
});
plus.addEventListener('click', function () {
    operateur = "+";
    elem1 = e.value;
    e.value += operateur;
});
moins.addEventListener('click', function () {
    operateur = "-";
    elem1 = e.value;
    e.value += operateur;
});
fois.addEventListener('click', function () {
    operateur = "*";
    elem1 = e.value;
    e.value += operateur;
});
divise.addEventListener('click', function () {
    operateur = "/";
    elem1 = e.value;
    e.value += operateur;
});
egale.addEventListener('click', function () {
    switch (operateur) {
        case "+":
            index = e.value.indexOf("+") + 1;
            elem2 = e.value.substring(index);
            resultu = Number(elem1) + Number(elem2);
            e.value = resultu;
            break;
        case "-":
            index = e.value.indexOf("-") + 1;
            elem2 = e.value.substring(index);
            resultu = Number(elem1) - Number(elem2);
            e.value = resultu;
            break;
        case "*":
            index = e.value.indexOf("*") + 1;
            elem2 = e.value.substring(index);
            resultu = Number(elem1) * Number(elem2);
            e.value = resultu;
            break;
        case "/":
            index = e.value.indexOf("/") + 1;
            elem2 = e.value.substring(index);
            resultu = Number(elem1) / Number(elem2);
            e.value = resultu;
            break;
    }
});

efface.addEventListener('click', function () {
    e.value = "";
});