// .addEventListener()

// Учим приложение реагировать на действия пользователя.



// Кратко:

// Добавляет элементу действие, которое будет выполнено после срабатывания события. 

// Например, на клик мышки или нажатие клавиши.





// Пример:

// Найдём первую кнопку на странице и будем выводить сообщение в консоль,

// когда произошёл клик по этой кнопке.



const button = document.querySelector('.button')


button.addEventListener('click', (event) => {
    console.log('Произошло событие', event.type)
})










/* Как понять 
    
    При вызове функции, в неё передаётся специальный объект (в примере выше — event), 
    который у разных типов событий разный. Например, у событий нажатия клавиши есть код 
    клавиши, а у событий перемещения мыши — координаты.

    Функция может быть объявлена ранее:
    
*/ 



const buttonTwo = document.querySelector('.buttonTwo')


function handleClickFunction(event) {
    console.log('Именованная функция')
}

buttonTwo.addEventListener('click', handleClickFunction)






// А может быть анонимной:


const buttonThree = document.querySelector('.buttonThree')

buttonThree.addEventListener('click', function (event) {
    console.log('Anonim function')
})





/* 🤖 Заранее созданные функции обычно используют,

    когда функция содержит в себе много кода или к ней нужно ссылаться несколько раз. 
    Например, когда нужно отписаться от события позже. Для отписки используется метод элемента 
    Element.removeEventListener().

    Анонимные функции удобно использовать при быстрой разработке или когда обработчик создаётся в 
    одном единственном месте и выносить его в отдельную именованную функцию — дольше, чем писать код 
    самой этой функции. В этом случае очень часто используют короткую, стрелочную запись функции:
    
*/ 



// element.addEventListener('click', (event) => {
//     alert('Анонимная функция')
//   })















//   Как пишется:

// Сигнатура функции выглядит следующим образом:


// element.addEventListener(eventType, handler, options)






/* element — любой HTMLElement на странице.

    1. eventType — строка, содержащая название события. Наиболее популярные
    события 'click', 'change', 'submit', 'keydown', 'keyup', 'mousemove', 'mouseenter', 'mouseleave'.

    2. handler — функция, которая будет вызвана, когда событие произойдёт.

    3. options/capture — необязательный параметр, который описывает дополнительные свойства для
    срабатывания события.

    4. capture — включает или выключает захват события элементом, на который установлен обработчик. 
    Это значит, что событие сначала сработает на элементе и только потом сработает на всех 
    вложенных элементах. Принимает значение true или false

    5. options: { capture: bool, passive: bool, once: bool } — при передаче объекта аргумент будет распознан
    как объект настроек, так можно установить больше параметров.

    6. passive – говорит о том, что внутри handler никогда не будет вызвана 
    функция event.preventDefault(), если функция event.preventDefault() все-таки вызвана, 
    браузер должен её игнорировать и выводить предупредительное сообщение в консоль.

    7. once – включает автоматическую отписку от события после первого срабатывания.*/ 












    // Ниже приведено несколько вариантов вызова функции с разными параметрами:



function handleMouseClick(event) {
    console.log('Вы нажали на элемент:', event.target)
}


window.addEventListener('click', handleMouseClick)
window.addEventListener('click', handleMouseClick, true)
window.addEventListener('click', handleMouseClick, false)
window.addEventListener('click', handleMouseClick, {
    passive: true,
    capture: false
})


/* У объекта event есть специальные методы, 
   
    такие как preventDefault() и stopPropagation(). Остальные методы практически не используются:

    1. preventDefault() позволяет заблокировать стандартное поведение браузера. Например, по клику на ссылке — заблокировать переход по этой ссылке.
    2. stopPropagation() позволяет остановить всплытие события по DOM-дереву.
    
*/ 



    




// На практике 



// Павел Минеев советует


// 🛠 Обработк0а передачи третьего параметра для устаревших браузеров.

// Проверим, поддерживает ли браузер объект options. Добавим обработчик события на window, передав 
// ему объект options. В нём поле passive будет менять ранее установленную переменную на true при 
// попытке доступа к объекту. Если браузер проверит содержимое options.passive, он поддерживает данные 
// настройки.


let hasPassiveSupport = false

try {
    const options = Object.defineProperty({}, 'passive', {
        get() {
          hasPassiveSupport = true
        },
      })
    
      window.addEventListener('test', null, options)
} catch (err) {}


// Далее можем просто проверить, поддерживается ли passive. 

// Если поддерживается, то передаём options, иначе — false.




window.addEventListener(
    'resize',
    function () {
      // Обработка события
    },
    hasPassiveSupport ? { passive: true } : false
  )



//   В случае, если используете passive и capture одновременно, такую проверку можно не делать. 
//   Старый браузер воспримет переданный объект как true и включит capture, а новый обработает 
//   оба параметра внутри объекта.


window.addEventListener('resize', function () {
    // Обработка события
  }, { passive: true, capture: true })




  
//Дока Дог советует


// 🛠 Базовая обработка событий клавиатуры.

// С помощью событий, можно обрабатывать нажатие клавиш на клавиатуре, когда фокус 

// установлен в поле ввода.

// В момент нажатия клавиш будем выводить код клавиши, а по нажатию клавиши Enter добавлять 

// сообщение, которое было введено в поле.



const element = document.querySelector('input')

element.addEventListener('keydown', function (event) {
  const message = '<code>' + event.key + '</code>'
  const value = event.target.value

  if (event.key === 'Enter' && value.length > 0) {
    const messageElement = document.createElement('div')

    messageElement.classList.add('message')
    messageElement.innerText = value
    document.querySelector('.result').appendChild(messageElement)
    event.target.value = ''
  }

  document.querySelector('.event').innerHTML = message
})





/* 🛠 Предотвращение срабатывания события по умолчанию.

    В этом примере мы заменим стандартное поведение в случае, когда пользователь кликает на ссылку. 
    Чтобы стандартное поведение не сработало, нужно вызывать метод preventDefault у события.
    
*/ 




const linkElement = document.querySelector('#custom')
const resultElement = document.querySelector('#result-2')


linkElement.addEventListener('click', function (event) {
    event.preventDefault()

    resultElement.innerText = 'Вы нажали на ссылку, но ничего не произошло!'

    setTimeout(() => {
        resultElement.innerText = ''
    }, 2500)

})
