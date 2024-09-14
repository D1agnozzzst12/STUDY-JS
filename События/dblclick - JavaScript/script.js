// dblclick


// Что такое событие dblclick и чем оно отличается от click?"






/* Кратко

    Событие двойного клика на HTML-элементе происходит, когда пользователь в 
    течение короткого времени дважды кликает один элемент. Временной промежуток между кликами должен быть небольшим, иначе браузер интерпретирует его не как dblclick, а как несколько отдельных click-событий.

*/ 





/* Как пишется

    На событие dblclick можно подписаться и информировать пользователя, например:

*/ 

const element = document.querySelector('.element')
const h1Element = document.querySelector('.h1')


element.addEventListener('dblclick', (event) => {
    console.log('Зафексирован вдойной клик пользователя:', event.type)
})

element.addEventListener('click', (event) => {
    console.log('Обычный клик пользователя:', event.type)
})



// Также можно отслеживать двойные клики по любым элементам на странице:







/* В функцию-обработчик можно передать объект события, 

который содержит поля с информацией о клике, например:


    1. target — ссылка на целевой DOM-элемент, на котором произошло событие.

    2. type — тип события.

    
    Чтобы получить доступ к объекту события, функция-обработчик должна принимать 

    его в качестве параметра:

*/ 



const container = document.querySelector('.container')
const item = document.querySelectorAll('.item')

container.addEventListener('click', (event) => {
    console.log(event.target.classList)
    
})