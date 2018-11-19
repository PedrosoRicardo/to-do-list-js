// ex5 ------------------------------------
let ajout = document.querySelector('.ajout');

function aze() {
    let img = document.createElement('IMG');
    img.setAttribute('src', "../public/img/oeuf.jpg");
    let oeuf = document.querySelector('.oeuf');
    oeuf.appendChild(img);
}
ajout.addEventListener('click', aze);
