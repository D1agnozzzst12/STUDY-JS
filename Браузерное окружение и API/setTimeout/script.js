// setTimeout()

// Отложенный вызов функции. Вызывает функцию через указанный промежуток времени.




/* Кратко

    setTimeout() позволяет исполнить функцию через указанный промежуток времени. 
    Функция возвращает числовой идентификатор установленного таймера. 
    Этот идентификатор можно передать в функцию clearTimeout(), чтобы остановить таймер.

*/ 




// Как пишется


const timerId = setTimeout(() => {
    console.log('Прошло 5 секунда')
}, 5000)


console.log(timerId)
// Выведет число


// Пример выше установит таймер в 1 секунду и по истечении этого времени сработает функция, 
// которая выведет в консоль сообщение.





// setTimeout() принимает два аргумента:

// 1. функция, которая выполнится, когда таймер закончится;
// 2. время таймера в миллисекундах.





// ⏱ Миллисекунда – это одна тысячная доля секунды, то есть одна секунда состоит из 1000 миллисекунд.

// В результате вызова setTimeout() вернёт идентификатор установленного таймера.








// Есть вариант вызова setTimeout() с произвольным количеством аргументов. 
// Тогда все аргументы после второго будут передаваться в выполняемую функцию:




setTimeout(function(greeting) {
    console.log(`Через секунду напечатаю <<${greeting}>>`)
}, 1000, 'Hello')


// Этот вариант вызова используется редко.










/* Как понять

    В JavaScript код выполняется по порядку сверху вниз. Если интерпретатор встречает вызов функции,
    то он сразу выполняет её. Но разработчику часто может понадобиться запланировать вызов функции,
    чтобы она выполнилась не сразу.




    Запланировать одноразовое выполнение функции можно как раз с помощью setTimeout(). 
    Это самый простой способ исполнить функцию асинхронно.




    Время таймера не гарантирует, что функция будет выполнена точно в момент, когда таймер закончится. 
    Таймер ждёт, пока выполнится синхронный код и только потом запускает отложенную функцию, если 
    время истекло. Строго говоря, когда мы устанавливаем таймаут, то нужно ожидать, что функция 
    выполнится в произвольный момент после указанного времени.

*/ 




/* Таймауты всегда имеют свой числовой идентификатор, 

    он хранится в браузере в списке активных таймеров. Этот идентификатор нужно использовать, 
    если необходимо очистить таймаут.

    Таймауты часто применяются для выпадающих списков или тултипов, чтобы закрывать их с 
    небольшой задержкой. Только с помощью таймаутов можно создать такую полезную функцию 
    как debounce().

*/ 




// На практике


/* Егор Огарков советует

    🛠 Функция переданная в setTimeout() всегда будет вызвана только после выполнения синхронного кода, 
    даже если выставить таймер в 0. Дело в том, что такая функция сразу попадает в асинхронную очередь 
    вне зависимости от значения таймера.

*/ 


setTimeout(() => {
    console.log('I am first')
}, 0)
// Таймер равен 0

console.log('i am second')


// В консоль сообщения выведется в следующем порядке:

// 1. 'Я второй!'
// 2. 'Я первый!'







// 🛠 Время таймера нельзя изменить динамически




// Изначально 1 секунда 
let time = 1000

setTimeout(() => {
    console.log('Я сработал')
}, time)


// Поставили время 2 секунды
time = 2000




/* Функция всё равно вызовется через секунду. 

    Если возникла необходимость изменить время, то придётся сначала очистить предыдущий 
    таймер и установить новый.
    
*/ 