// change

// Работаем со значением, когда пользователь зафиксирует свои изменения.





/* Кратко 

    Событие change срабатывает, когда пользователь изменяет значение в <input>, <select> или 
    <textarea> и фиксирует свои изменения.


    Это событие лучше всего использовать при создании форм, когда не требуется постоянно 
    взаимодействовать с каждым изменённым символом в поле ввода. Так же данное событие пригодится 
    и при создании чекбоксов, полей выбора и т. п.

*/ 







// Как пишется 


const input = document.querySelector('.input')
const div = document.querySelector('.text') 
const body = document.body


input.addEventListener('change', (event) => {
    console.log(event.target.value)
    div.innerText = 'Запишите свое имя'
    body.style.cssText = 'background-color: aqua; transition: all 0.5s;'
})












/* Как понять

    Подробнее о механизме событий читай в статье «Событийная модель».


    Событие change похоже на события input и blur, но есть важные отличия:


    1. blur – срабатывает каждый раз при расфокусировке поля.

    2. input – срабатывает сразу же при изменении значения поля.

    3. change – срабатывает, когда значение поля изменено, но при условии снятия с него фокуса.

*/ 



const inputUserName = document.querySelector('#inputUserName')
const inputUserLastName = document.querySelector('#inputUserLastName')
const inputUserEmail = document.querySelector('#inputUserEmail')
const inputUserPassword = document.querySelector('#inputUserPassword')
const listUl = document.querySelector('.list-ul')
const button = document.querySelector('.button')


inputUserName.addEventListener('change', (event) => {
    listUl.innerHTML = `<li>User Name: ${inputUserName.value}</li>`
})

inputUserLastName.addEventListener('change', (event) => {
    listUl.innerHTML = `<li>User Last Name: ${inputUserLastName.value}</li>`
})

inputUserEmail.addEventListener('change', (event) => {
    listUl.innerHTML = `<li>User Email: ${inputUserEmail.value}</li>`
})

inputUserPassword.addEventListener('change', (event) => {
    listUl.innerHTML = `<li>User Password: ${inputUserPassword.value}</li>`
})


