// preventDefault()

// Отменяет действие по умолчанию для события.







/* Кратко 

    На каждое действие пользователя на сайте браузер создаёт события. 
    Это главный способ понимать в коде, что происходит на странице. 
    Событие — это объект, который имеет набор свойств и методов для 
    взаимодействия с ним.


    preventDefault() — метод события. Этот метод отменяет поведение браузера по 
    умолчанию, которое происходит при обработке события.


    Например, при нажатии на ссылку мы переходим по адресу этой ссылки. 
    Вызов preventDefault() отменит это поведение.

*/ 





/* Как пишется

    Отменим переход по ссылке для всех тегов <a> на странице. Для этого получим 
    все ссылки с помощью querySelector(), подпишемся на событие 'click' и 
    вызовем preventDefault():

*/ 




const linkItem = document.querySelector('.link-item')
const divText = document.querySelector('.block-text')
const onPrevent = document.querySelector('.on-default')
const offDefault = document.querySelector('.off-default')




linkItem.addEventListener('click', (event) => {
    console.log('preventDefault is on')
    event.preventDefault()
})









// Как понять:

// Давайте разберём код из интерактивного примера:



const runTimer = (inputElement) => {
    setTimeout(() => {
        inputElement.focus()
    }, 5000);
}



const inputElement = document.querySelector('[name="input"]')


inputElement.addEventListener('mousedown', (event) => {
    event.preventDefault()
    document.body.style.scrollBehavior = 'smooth'
    runTimer(inputElement)
})





/* 

    Когда пользователь нажимает на элемент с классом input, генерируется цепочка событий в 
    следующем порядке: mousedown → mouseup → click.


    Когда происходит событие mousedown, браузер устанавливает фокус на поле ввода. 
    Вызовом event.preventDefault() мы отменили это поведение. Затем мы запустили таймер, 
    который установит фокус на элементе через 5 секунд с помощью вызова метода focus().

*/ 
















/* Георгий Милевский советует 

    🛠 Часто возникает необходимость отправить данные из формы на сервер без перезагрузки страницы. 
    Поведение по умолчанию формы — это отправка запроса на сервер и перезагрузка страницы. 
    Тут нам на помощь приходит метод preventDefault(), который отменит действия, связанные 
    с отправкой формы.

*/ 





const form = document.querySelector('.form-2')

form.addEventListener('submit', (event) => {
    event.preventDefault()
     // Код по подготовки данных
  // и их отправка на сервер
})



