// new task --------------------------
let i = document.querySelector('.i');
let liste = document.querySelector('.liste');
let add = document.querySelector('.add');
let ni2 = document.querySelector('.ni2');

function addo() {
    if (i.value == "") {
        // let i2 = document.createElement('input');
        // i2.appendChild(ni2);
        // i2.setAttribute('placeholder', 'Champ obligatoire');
        // i2.setAttribute('class', 'i2');
        i.setAttribute('placeholder', 'Champ obligatoire');
    } else {
        //span + button 
        let li = document.createElement('li');
        liste.appendChild(li);
        let span = document.createElement('span');
        li.appendChild(span);
        span.innerText = i.value;
        i.value = "";
        let check = document.createElement('button');
        check.innerText = 'check';
        let delet = document.createElement('button');
        delet.innerText = 'delete';
        let edit = document.createElement('button');
        edit.innerText = 'edit';
        li.appendChild(check);
        li.appendChild(edit);
        li.appendChild(delet);

        // style
        check.setAttribute('class', 'bg-success text-white');
        delet.setAttribute('class', 'bg-danger text-white');
        edit.setAttribute('class', 'bg-primary text-white');

        check.style.borderStyle = 'none';
        check.style.borderRadius = '5px';
        check.style.marginLeft = '10px';

        delet.style.borderStyle = 'none';
        delet.style.borderRadius = '5px';
        delet.style.marginLeft = '10px';

        edit.style.borderStyle = 'none';
        edit.style.borderRadius = '5px';
        edit.style.marginLeft = '10px';

        span.style.backgroundColor = 'white';
        span.style.borderRadius = '5px';
        span.style.padding = '5px';

        li.style.marginTop = '10px';
    }
}

add.addEventListener('click', addo);

i.addEventListener('keyup', function (event) {
    event.preventDefault();

    if (event.keyCode == 13) {
        document.querySelector(".add").click();
    }
});


// buttons working ------------------

// check.addEventListener('click', function () {
//     if (done.classList.contains('done')) {
//         span.style.backgroundColor = 'green';
//     } else {
//         for()
//         span.remove()
//     }
// });