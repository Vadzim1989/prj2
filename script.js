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
//  list.addEventListener('click', clickHandler2);




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


// working with classes ----------------------------------------------------

// list.addEventListener('click', function(event) {
//     event.target.classList.remove('test');
//     event.target.classList.toggle('selected');
//     console.log(event.target.classList.contains('test'));
// })

// working with CSS

// list.addEventListener('click', function(event) {
//     event.target.style.color = 'red';
//     event.target.style.fontSize = '20px';
//     event.target.style.border = '2px solid orange';
// })

// list.addEventListener('mousemove', function(event) {
//     event.target.style.fontSize = `${event.clientY}px`;
// })


const chbox = document.getElementById('chbox');
const testbtn = document.getElementById('testbtn');

// testbtn.addEventListener('click', function (event) {
//     console.log(chbox.setAttribute('type', 'radio'));
// })

chbox.addEventListener('click', function (event) {
    testbtn.disabled = !testbtn.disabled;
})

chbox.addEventListener('click', function (event) {
    if(chbox.checked){
        console.log('its checked');
    } else {
        console.log('its not checked')
    }
})


//---------------------------------------------------------------------

const goods = [
    {
        name: 'noski',
        price: 2
    },
    {
        name: 'trusi',
        price: 10
    },
    {
        name: 'shampoo',
        price: 100
    },
    {
        name: 'stanok',
        price: 99
    }
];

function createElem (goodsName, price) {
    const elem = document.createElement('li');
    elem.textContent = goodsName;
    elem.setAttribute('data-price', price);
    return elem
}

goods.forEach((tovar) => {
    list.append(createElem(tovar.name, tovar.price));
});

list.addEventListener('click', function (event) {
    console.log(event.target.dataset.price );
})
// data attribute