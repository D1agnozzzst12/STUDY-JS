// setInterval()


// Регулярно запускает функцию через указанный промежуток времени.



// Кратко 

// setInterval() позволяет регулярно исполнять функцию через указанный промежуток времени.






// Пример:

// Раз в секунду напечатать текст в консоль:


const intervalId = setInterval(function () {
    console.log('Я выполняюсь каждую секунду')
}, 1000)







/*Как пишется Скопировать ссылку "Как пишется"

    Функция setInterval() принимает два аргумента:

    функцию, которая будет регулярно выполняться при истечении таймера;
    время в миллисекундах между запусками функции.
    ⏱
    Миллисекунда – это одна тысячная доля секунды. Одна секунда состоит из 
    1000 миллисекунд.

    Возвращает идентификатор установленного таймера. Индикатор передаётся в 
    функцию clearInterval, чтобы остановить регулярное выполнение функции.

    Есть вариант вызова setInterval() с произвольным количеством аргументов. 
    Тогда все аргументы после второго будут передаваться в выполняемую 
    функцию:


*/


setInterval(function (name, age) {
    console.log(`Раз в секунду я печетаю имя <<${name}>> и <<${age}>>`)
}, 1000, 'ilishan', 21)







/* Как понять 

    В JavaScript код выполняется по порядку сверху вниз. Если интерпретатор 
    встречает вызов функции, то он сразу выполняет её. Но разработчику может 
    понадобится запланировать вызов функции, чтобы она выполнилась регулярно 
    через заданные промежутки времени. Например, чтобы регулярно проверять 
    обновления данных на сервере.

    Запланировать регулярное выполнение функции по расписанию можно с 
    помощью setInterval(). Выполнение setInterval() создаёт активный таймер 
    в окружении браузера. Таймеры имеют числовой идентификатор, он хранится 
    в браузере в списке активных таймеров. Этот идентификатор нужно 
    использовать, чтобы остановить регулярное выполнение функции.

    Время между запусками 
    Указанное вторым аргументом число в миллисекундах обозначает время 
    между запусками функции. При этом не учитывается время работы самой 
    функции.

    Рассмотрим пример:



*/ 


let i = 1


setInterval(function print() {
    console.log(i)
    i++
}, 1000)




/* Если функция выполняется долго, то может сложиться ситуация, когда следующая функция вызывается сразу

    после завершения текущей, потому что указанное время вышло. 
 
*/ 



// На практике


/* Николай Лопин советует

    🛠 Нужно быть абсолютно уверенным, что выполняемая функция отрабатывает быстрее, 
    чем указанный таймер.

    setInterval() не гарантирует точный запуск по таймеру, но гарантирует, что предыдущая 
    функция завершила свою работу. Если функция работает дольше указанного времени, то вызовы 
    станут идти один за другим без пауз.

    🛠 Если необходимо выжидать время не между запусками функций, как в setInterval(), а между 
    завершениями, то этого можно достичь цепочкой вызовов setTimeout():

*/ 



let timerIdTwo;

timerIdTwo = setTimeout(function work() {
    console.log('я выполняюсь через сукунду после преведущей')
    timerIdTwo = setTimeout(work, 1000)
}, 1000)

