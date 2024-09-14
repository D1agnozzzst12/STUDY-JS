/* Кратко

    Чтобы приложение было интерактивным, нам нужно понимать, что
     пользователь совершил то или иное действие на странице.
      Браузер распознает действия пользователя и создаёт событие.



      События — это сигналы, которые браузер посылает разработчику, а 
      разработчик может на сигнал реагировать. По аналогии со светофором:
       видим зелёный свет, едем дальше 🚦



       События бывают разных типов: клик, нажатие клавиши на клавиатуре,
        прокрутка страницы и так далее.


        Происходящие события можно обрабатывать и выполнять код, когда нужное 
        событие происходит. Например, при клике на кнопку показывать всплывающее окно.
*/



/* Как пишеться


    Существует два способа обработать события:



с помощью on-свойств DOM-элементов;
методом addEventListener().


on-свойства DOM-элементов Скопировать ссылку "on-свойства DOM-элементов"
Большинство событий связаны с DOM-элементами. Если пользователь кликнул на
 кнопку, то событие click связано с конкретным DOM-элементом — кнопкой, на
  которой кликнул пользователь.




Каждый DOM-элемент имеет большой набор свойств, которые начинаются на on:


onclick;

onscroll;

onkeypress;

onmouseenter;

и так далее.



Если в это свойство записать анонимную функцию, то эта функция будет 
вызываться каждый раз, когда браузер будет создавать событие, связанное 
с этим элементом. Такие функции называют функциями-обработчиками события.

*/


const buttonElement = document.getElementById('btn-1')
const squareDiv = document.getElementById('square')

// Чтобы реагировать на нажатие кнопки, записываем функцию в свойство onclick.
// Эта функция будет вызываться при каждом нажатии на кнопку. Часто говорят,
// что эта функция обрабатывает событие


buttonElement.onclick = function() {
    squareDiv.style = `background-color: ${getColor()};`
    squareDiv.style.transition = '1s'
}

function getColor() {
    const colors = [ 
        '#49A16C', '#064236',
        '#ED6742', '#F498AD',
        '#1A5AD7', '#AFC9DA',
        '#FFD829', '#282A2E',
        '#5E6064', '#E6E6E6'
    ]
    return colors[Math.floor(Math.random() * colors.length)]
}




// Чтобы перестать обрабатывать событие, нужно записать в свойство значение null.


/* Метод addEventListener()

    🤖 Если обрабатывать события с помощью on-свойств, то получится добавить 
    только одну функцию-обработчик на каждый элемент. Часто одного обработчика
     недостаточно. Чтобы не создавать ограничение на пустом месте, используют 
     альтернативный метод подписки на события — метод addEventListener().



    Метод вызывается у DOM-элемента. Аргументами нужно передать тип события 
    (справочная информация) и функцию, которую нужно выполнить:

*/


const buttonElementTwo = document.getElementById('btn-3')
const squareDivTwo = document.getElementById('square-2')

// Чтобы реагировать на нажатие кнопки, подписываемся
// на событие click и передаём функцию-обработчик.
// Эта функция будет вызываться при каждом нажатии на кнопку

buttonElementTwo.addEventListener('click' , function() {
    squareDivTwo.style = `background-color: ${getColor()};`
})




/* Как понять, Функция-обработчик

    Функция-обработчик, или просто обработчик, — это функция,
    которая вызывается браузером при наступлении события.



    При вызове браузер передаёт в обработчик объект события с помощью 
    аргумента.



    Объект события — это JavaScript-объект с информацией о событии.
    В объекте события есть как общие свойства (тип события, время события),
    так и свойства, которые зависят от типа события (например, на какую кнопку
    нажал пользователь).



    Чтобы работать с объектом события, нужно добавить параметр в 
    объявление обработчика. Обработаем нажатие на кнопки клавиатуры 
    и получим из объекта события информацию о нажатой кнопке:

*/



window.addEventListener('keydown' , function (event) {
    // Используем объект события,
    // чтобы получить информацию о нажатой клавише
    console.log(`Вы нажали на кнопку: ${event.key}`)
})






/*  Всплытие событий

    Рассмотрим пример. У нас есть <div> элемент, в который вложено видео.
    Мы подписались на события click как на <div>, так и на <video>.
    Если событие происходит на <div>, то мы меняем его цвет на случайный 
    из списка. Если событие происходит на <video>, то мы запускаем видео.
    Попробуйте кликнуть на коробку:

*/


// const containerVideo = document.getElementById('container')
// const video = document.getElementById('video')

// // Обрабатываем событие click на <div>
// containerVideo.addEventListener('click' , function () {
//   const colorsTwo = [
//     '#49A16C', '#064236', '#ED6742', '#F498AD',
//     '#1A5AD7', '#AFC9DA', '#FFD829', '#282A2E', '#5E6064'
//   ]
//   const randomColorIndex = Math.floor(Math.random() * colorsTwo.length)
//   container.style = `background-color: ${colorsTwo[randomColorIndex]}`
// })

// // Обрабатываем событие click на видео
// video.addEventListener('click', function() {
//   // Отматываем видео на начало
//   this.currentTime = 0
//   this.play()
// })




/* Всплытие события (event  bubbling).

🤖 Обратите внимание, что событие срабатывает на обоих элементах — цвет фона меняется и
 запускается видео. Этому есть объяснение, оно называется всплытие событий (event bubbling).



Когда пользователь совершает действие, браузер ищет самый вложенный элемент, к
 которому относится событие. Затем это событие передаётся родительскому элементу
  и так далее до самого корня DOM.

В нашем примере мы кликнули на <video>, это самый вложенный элемент. Браузер создал событие,
 и мы обработали его в коде. После этого браузер передаёт событие родителю <video> 
 (то есть элементу, который содержит <video>) — элементу <div>. Мы получаем его и обрабатываем. 
 И он всплывает дальше, пока не дойдёт до <body>.




Обработчики сначала срабатывают на самом вложенном элементе, затем на его родителе,
 затем выше и так далее, вверх по цепочке вложенности.



Если кликнуть по блокам на демо, то можно увидеть, как событие всплывает вверх к родителям:

*/





// Всплытие события можно остановить с помощью метода stopPropagation() у объекта события:

// video.addEventListener('click', function (event) {
//     event.stopPropogation()
//     this.currentTime = 0
//     this.play
// })



/* Николай Лопин советует 

    
    🛠 Всегда подписывайтесь на события с помощью addEventListener(). Так вы избежите доработок, 
    когда потребуется повесить несколько обработчиков на одно и то же событие.



    🛠 Если нужно обработать все события определённого типа, вызовите метод addEventListener() 
    у объекта window:


    🛠 Если вы не используете объект события в обработчике, то можно не указывать его в 
    списке параметров обработчика. Вместо function (event) {…} пишите function() {…}.

    🛠 Всплытие событий — важный концепт, поэкспериментируйте с ним, чтобы лучше в нём разобраться.

*/


// Обрабатываем все клики на странице

window.addEventListener('click' , function () {
    console.log('clicked')
})





















































































































































































































