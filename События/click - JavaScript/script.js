// click


// Если у пользователя есть мышка, то он точно будет кликать курсором по странице.






/* Кратко

    Событие клика на HTML-элементе. Когда пользователь кликает мышкой по странице, 
    браузер определяет на каком элементе произошёл клик и создаёт событие click.


    На события можно подписаться и выполнять JavaScript-код, когда событие произошло.

*/ 



// Как пишется 

// Подписаться на все клики на странице:

document.addEventListener('click', (event) => {
    console.log('Вы кликнули по странице!')
    console.log('Событие:', event.type)
}, {
    once: true,
})











// Подписаться только на клики по кнопке (она должна быть на странице):

const button = document.querySelector('.button')

button.addEventListener('click', (event) => {
    console.log('Вы кликнули на кнопку')
})









/* Как понять

    Подробнее о механизме событий читайте в статье «События».


    В функцию-обработчик так же передаётся объект события, который содержит 
    дополнительную информацию о клике. Самые полезные свойства:


    1. detail — количество кликов, которые произвёл пользователь. 1 — для одиночного 
    клика, 2 — для двойного и так далее.
    
    2. view — возвращает объект window, в котором произошло событие.



    Чтобы получить доступ к объекту события, функция-обработчик должна принимать на 
    вход параметр:

*/ 




const buttonTwo = document.querySelector('.button-2')


buttonTwo.addEventListener('click', (event) => {
    console.log(event.detail)
})












// На практике:



/* Николай Лопин советует

    🛠 С кликами есть тонкость. Если пользователь нажал кнопку мыши, увёл 
    курсор из элемента и потом кнопку отпустил, то события click не произойдёт.



    🛠 Можно обработать клики по любым HTML элементам: <div>, <p>, <button> — браузеры это умеют.



    🛠 Некоторые мобильные браузеры (например, Safari Mobile) создают события click 
    только на интерактивных элементах — <button>, <a>, <img>, <input> и так далее.



    🛠 Мобильные браузеры так же порождают событие touch.

*/ 


const body = document.body
const html = document.Element