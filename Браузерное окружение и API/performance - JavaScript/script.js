// performance

// Изучаем, какие инструменты предоставляет браузер для измерения времени работы программ и функций.



/* Кратко

    Performance API — это API браузера, позволяющее измерять время работы программы
    при помощи различных методов. Для этого используется очень точный тип измерения времени
    – DOMHighResTimeStamp, работающий с точностью до 5 микросекунд (в одной миллисекунде их тысяча). 

*/ 


// Пример

// Создание меток и измерений

// Получаем время, прошедшее с начала навигации на страницу



const t = performance.now()
console.log(t)












/* Создаём именованную метку времени,

    сохраняющую время в миллисекундах с начала навигации на страницу. 
    Это полезно для измерения работы программы, например, можно вычислить разницу
    между метками и узнать время работы функции.

*/ 




performance.mark('Старт приложения')
console.log(t)




// Вычисляем время между двумя метками:


try {
    const start = performance.mark('Start')
    const finish = performance.mark('End')


performance.measure('итого', 'начало', 'конец')
console.log(performance.getEntriesByName('итого')[0].duration)
// количество миллисекунд между метками 'начало' и 'конец'


} catch (error) {
    console.log(error.name)
    console.log(error.type)
}




// Работа с записанными данными

// Получаем список меток и измерений


for (const entry of performance.getEntries()) {
    console.log(`
        Запись: "${entry.name}", тип ${entry.entryType}
        Старт в: ${entry.startTime}мс, продолжительность ${entry.duration}мс
    `)
}







// Очищаем список меток и измерений:



performance.clearMeasures()
performance.clearMarks()





// Или можем очистить всё сразу:

performance.clearResourceTimings()









/* Как пишется

    Создание меток

    Метка (mark) — время с начала перехода на страницу до создания метки в миллисекундах.
    Например, от клика по ссылке или после подтверждения введённого урла в строку поиска.


    При создании меток мы можем передать первым аргументом строку - имя метки. В дальнейшем,
    мы можем обращаться к этому имени для поиска.
*/ 



const markName = 'Старт выполнения функции'
performance.mark(markName)

const entries = performance.getEntriesByName(markName)
console.log(entries)

// Объект метки содержит значение mark в поле entryType.





