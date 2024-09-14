// // window.matchMedia

// // Доступ к медиавыражениям из JavaScript.



// /* Каратко

//     Интерфейс в глобальной области видимости window.matchMedia, 
//     который позволяет получить доступ к медиавыражениям из JavaScript 
//     и подписываться на их срабатывание. Медиавыражения активно используются
//     в CSS с помощью директивы @media.

// */ 



// // Пример

// /* Определение ширины экрана по заданному медиавыражению

//     Создадим медиавыражение с параметрами ширины и подпишемся его изменение.
//     Теперь при изменении ширины экрана, в момент прохода через пороговое
//     значение 420px, будет выведено сообщение:

// */ 


// const mobileWidthMediaQuery = window.matchMedia('(max-width: 420px)')


// function printLog(isMobileSize) {
//     const size = isMobileSize ? 'уже или равен' : 'шире'

//     console.log(`Размер экрана ${size} 420px`)
// }



// printLog(mobileWidthMediaQuery.matches)


// mobileWidthMediaQuery.addEventListener('change', function (event) {
//     printLog(event.matches)
// })






// /* Определение системной темы оформления

//     Создадим медиавыражение и предадим условие, которое будет положительным
//      в случае, когда установлена тёмная тема оформления. Выведем сообщение 
//      о текущем состоянии системы, а также подпишемся на её изменение.



//     При смене темы оформления, в системе будет выводиться сообщение и
//      сообщать текущее состояние.

// */ 




// const themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')


// function printLog(isDark) {
//     const theme = isDark ? 'dark' : 'bright'

//     console.log(`In the system usage theme: ${theme} theme`)
// }


// printLog(themeMediaQuery.matches)

// themeMediaQuery.addEventListener('change', function (event) {
//     printLog(event.matches)
// })




// /* Как пишется

//     Для создания медиа объекта нужно вызвать функцию matchMedia() и передать
//     ей медиавыражение. Синтаксис медиавыражений и их варианты полностью
//     совпадают с выражениями, которые используются в CSS.

// */ 


// const mediaQueryList = window.matchMedia('(медиавыражение)')


// /* Как понять

//     Если вам нужно реагировать на изменения в браузере одновременно 
//     с изменениями в вёрстке, вы можете создавать медиавыражения в 
//     JavaScript и реагировать на эти события синхронно с CSS.

// */ 


const m = window.matchMedia('(min-width: 400px)')
console.log(m)





