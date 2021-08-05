// works with event ---------------------------------------------------
// bubling (всплытие и перехват события)
// stopImmediatePropagation - полностью прекратить событие
// stopPropagation - прекратить событие

const btn = document.getElementById('btn');
const list = document.getElementById('list');
const li = document.getElementById('li');

// btn.addEventListener('click', function () {});

const clickHandler = (event) => {
    if(event.currentTarget.nodeName === 'BUTTON') {
        event.stopImmediatePropagation();
    }
    console.dir(event.currentTarget.nodeName);
};

btn.addEventListener('click', clickHandler);
btn.addEventListener('click', function() {
    console.log('second func');
})
list.addEventListener('click', clickHandler, true);
li.addEventListener('click', clickHandler); // осуществляем перехват обработчика события

// btn.removeEventListener('click', clickHandler)