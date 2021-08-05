// works with event ---------------------------------------------------
// bubling (всплытие и перехват события)
// stopImmediatePropagation - полностью прекратить событие
// stopPropagation - прекратить событие
// preventDefault - отменяет поведение элемента по-умолчанию

const btn = document.getElementById('btn');
const list = document.getElementById('list');
const li = document.getElementById('li');

// btn.addEventListener('click', function () {});

// const clickHandler = (event) => {
//     if(event.currentTarget.nodeName === 'BUTTON') {
//         event.stopImmediatePropagation();
//     }
//     console.dir(event.currentTarget.nodeName);
// };

// btn.addEventListener('click', clickHandler);
// btn.addEventListener('click', function() {
//     console.log('second func');
// })
// list.addEventListener('click', clickHandler, true);
// li.addEventListener('click', clickHandler); // осуществляем перехват обработчика события

// btn.removeEventListener('click', clickHandler)

const clickHandler2 = (event) => {
    if(event.target.nodeName === 'LI') {
        console.log(event.target.textContent);
    }
}
 list.addEventListener('click', clickHandler2);




const sub = document.getElementById('sub');
const userName = document.getElementById('userName');
const form = document.getElementById('form');

sub.addEventListener('click', function (event) {
    event.preventDefault();
    if (isNaN(userName.value)) {
        console.log('OK');
        form.submit(); // вручную запускаем отправить запрос формы
    } else {
        console.log('NOT OK');
        userName.focus();
    }
})

const a = document.getElementById('a');
const text = document.getElementById('text');
const check = document.getElementById('check');
const sel = document.getElementById('sel');


const clickFunc = (event) => {
    event.preventDefault();
    if(event.target.nodeName === "INPUT"){
        text.blur();
    } else if (event.target.nodeName === "SELECT") {
        sel.blur();
    }
}

a.addEventListener('click', clickFunc);
text.addEventListener('click', clickFunc);
check.addEventListener('click', clickFunc);
sel.addEventListener('click', clickFunc);



