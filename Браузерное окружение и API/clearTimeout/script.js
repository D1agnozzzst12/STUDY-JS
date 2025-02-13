// clearTimeout()

// Отменяет регулярное выполнение функции, установленное вызовом setTimeout().


// Кратко

// clearTimeout() очищает таймаут установленный с помощью setTimeout().

// Как пишется

const timerId = setTimeout(() => {
    console.log('Прошла секунда')
}, 1000)


clearTimeout(timerId)



/* Функция clearTimeout() принимает один аргумент – числовой идентификатор 

    таймаута. Этот идентификатор можно получить в результате вызова 
    setTimeout().

*/ 


/*  Функция clearTimeout() принимает один аргумент – числовой 

    идентификатор таймаута. Этот идентификатор можно получить в результате 
    вызова setTimeout().

*/ 



/* Как понять

    Не всегда бывает необходимо, чтобы отложенный вызов обязательно сработал.
     clearTimeout() прерывает таймер и установленная функция уже не вызовется.




    Когда устанавливается таймер, браузер записывает этот идентификатор в 
    свой список активных таймеров. При очищении браузер найдёт таймер по 
    его идентификатору и уберёт из списка.


    Мы рекомендуем всегда подчищать таймеры, если они больше не нужны. 
    Даже если в самой функции стоят необходимые проверки и её вызов не 
    приведёт к неожиданным последствиям.


    ☝️ Упомянутый выше список активных таймеров общий и для таймеров, 
    установленных с помощью setTimeout() и для таймеров, установленных с 
    помощью setInterval(). Потому в clearTimeout можно использовать 
    идентификаторы обоих типов таймеров.

    Однако для интервалов мы рекомендуем использовать отдельную функцию 
    clearInterval для лучшей читаемости.

*/ 




/* Егор Огарков советует

   🛠 Связку setTimeout и clearTimeout часто можно увидеть во время 
   реализации всплывающей подсказки. Ниже приводим базовый пример такой 
   функциональности. Этот код можно использовать как стартовый шаблон для 
   ваших наработок.

    Создадим HTML-разметку, в которой будет кнопка и скрытая подсказка к 
    этой кнопке. 


*/ 






const trigger = document.querySelector('button')
const hint = document.querySelector('div')

let hideTimeoutId = null

trigger.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeoutId)
    hint.hidden = false
})


trigger.addEventListener('mouseleave', () => {
    hideTimeoutId = setTimeout(() => {
        hint.hidden = true
    }, 1000)
})







































































