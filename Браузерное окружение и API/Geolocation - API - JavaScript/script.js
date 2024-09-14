/* Собственная практическая работа

const btn = document.getElementById('button')
const result = document.getElementById('result')


btn.addEventListener('click', function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude
            const longitude = position.coords.longitude
            result.innerHTML = `Latitude: ${latitude} <br/> Longitude: ${longitude}`
            console.log(`Широта(Latitude) : ${latitude}`)
            console.log(`Долгота(Longitude) : ${longitude}`)
        })
    }
})

*/ 


// Geolocation API 


// Узнаём местоположение пользователя 🧭


// Эта статья связана с понятием Application Programming Interface.
//  Подробнее о нём читайте в отдельном материале про API.



// Кратко 


// Geolocation API позволяет запросить у пользователя данные о географическом местоположении.


// Работать с геопозицией пользователей можно только при защищённом соединении (HTTPS).



// Как пишеться

// Получить доступ к геолокации позволяет свойство navigator.geolocation объекта navigator:


navigator.geolocation

// const geolocationElement = navigator.geolocation.getCurrentPosition(function (position) {
//     const latitude = position.coords.latitude
//     const longitude = position.coords.longitude
//     console.log(`Широта(Latitude) : ${latitude}`)
//     console.log(`Долгота(Longitude) : ${longitude}`)
// })







/* Как понять 

    Иногда может понадобиться узнать, где находится пользователь. Например, мы хотим показать
    на карте, где расположен ближайший к нему пункт выдачи товаров.



    Для этого браузер предлагает своё API. Когда мы воспользуемся свойством navigator.geolocation, 
    в ответе получим интерфейс Geolocation, — он позволяет работать с данными геопози

*/ 

// Geolocation {}

/* Внутри него:

    1. clearWatch: ƒ clearWatch()
    2. getCurrentPosition: ƒ getCurrentPosition()
    3. watchPosition: ƒ watchPosition()
    4. constructor: ƒ Geolocation()
    5. Symbol(Symbol.toStringTag): "Geolocation"
    6. [[Prototype]]: Object

*/ 



/* Для Geolocation есть различные методы: getCurrentPosition, 

    watchPosition и clearWatch. Если их вызвать, то пользователь 
    получит уведомление. Например, в Chrome появится следующее диалоговое
     окно: 

*/ 


/* Если человек одобрит запрос, мы получим возможность работать с
 
    интерфейсом GeolocationPosition:
    
    GeolocationPosition {
    coords: GeolocationCoordinates,
    timestamp: 1665141114856
}

 */ 


/* Он включает объект GeolocationCoordinates с данными

    геолокации пользователя и параметр timestamp со временем получения 
    координат:
 
    GeolocationCoordinates {
    latitude: 36.01068878173828,
    longitude: 37.20875549316406,
    altitude: null,
    accuracy: 40,
    altitudeAccuracy: null,
  …
}

*/


/*    Чаще всего используются широта latitude и долгота longitude.
    Помимо них в объекте содержатся:

    1. altitude — отвечает за высоту в метрах над эллипсоидом (что за 
    эллипсоид под нами?);
    2. accuracy — точность широты и долготы в метрах (например, 40 метров);
    3. altitudeAccuracy — уровень точности высоты над эллипсоидом в метрах;
    4. heading — направление движения. Угол, который отсчитывается по
    часовой стрелке относительно истинного севера и может принимать 
    значения от 0° до 360°;
    5. speed — скорость движения в метрах в секунду.


    
 */ 


/* Как узнать геолокацию единожды

    Чтобы получить координаты один раз, воспользуйтесь методом
    getCurrentPosition и передайте внутрь колбэк. Его аргументом в случае
    успеха выступит объект GeolocationPosition:  

*/ 

navigator.geolocation.getCurrentPosition(position => {
    const {latitude, longitude} = position.coords
})

// Записываем в переменные latitude и longitude
// координаты пользователя




/* Кроме колбэка в getCurrentPosition 

можно передать ещё два аргумента: функцию на случай ошибки и 
объект с дополнительными опциями:

*/ 

navigator.geolocation.getCurrentPosition(success, error, options) 

function error() {
    alert('Где ты вообще') // На случай ошибки
}


const options = {
    enableHigAccuracy: true,
    maximumAge: 1000,
    timeout: 3600
}


/* Опции помогают настроить запрос детальнее:

    1. enableHighAccuracy — просит передавать геолокацию особенно точно, 
    жертвуя энергией устройства и временем;

    2. maximumAge — устанавливает время, по истечении которого кэшированную
    геолокацию следует обновить;

    3. timeout — устанавливает временной интервал обновления геолокации.
*/ 


/* Наблюдать в динамике

    Если getCurrentPosition позволяет узнать геолокацию единожды, 
    то для наблюдения за постоянно меняющимся местоположением лучше
    использовать метод watchPosition:

*/ 


navigator.geolocation.watchPosition(position => {
    const {latitude, longitude} = position.coords
})

// Постоянно перезаписываем в latitude и longitude
// координаты пользователя



// Метод watchPosition без конца вызывает колбэк, чтобы данные 
// не застаивались.





/* Остановить наблюдение

    Метод watchPosition возвращает id текущего наблюдения. Его 
    можно использовать в методе clearWatch, чтобы прекратить наблюдение:

*/ 

const geold = navigator.geolocation.watchPosition((position) => {
    // Наблюдаем за геолокацией и храним в geoId идентификатор
})


function geoWatchStopper() {
    navigator.geolocation.clearWatch(geold)
    // Останавливаем наблюдение
}




/* Как обработать ошибки

    В методы getCurrentPosition и watchPosition можно передать колбэк на случай ошибок.
    За них отвечает объект GeolocationPositionError, его удобно обрабатывать через конструкцию 
    switch:

*/ 

function handleError(error) {
    // Эту функцию можно передать колбэком в случае ошибок

    const { code } = error 

    switch (code) {
        case GeolocationPositionError.TIMEOUT:
            // Время получения геолокации истекло
            break
            case GeolocationPositionError.PERMISSION_DENIED:
                // Пользователь запретил отслеживание своей геопозиции
                break
              case GeolocationPositionError.POSITION_UNAVAILABLE:
                // Получить местоположение не удалось
                break
    }
}






/* Алексей Никитченко советует

    🛠 С помощью Geolocation API можно получить координаты пользователя, а после найти по ним
    место на карте. Для этого создадим небольшую функцию, которая соберёт ссылку с долготой 
    и широтой, а после вставим её в iframe c картой:

*/ 


const button = document.getElementById('button')

// На клик по кнопке ищем локацию

button.addEventListener('click', findLocation)

function findLocation() {
    if (!navigator.geolocation) {
        status.textContent = 'Ваш браузер не дружит с геолокацией...'
    } else {
        navigator.geolocation.getCurrentPosition(success, error)
    }

    // Если всё хорошо, собираем ссылку

    function succes(position) {
        const {latitude, longitude} = position.coords
        map.src = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude}%2C${latitude}&amp;layer=mapnik`
    }
    // Если всё плохо, просто напишем об этом

    function error() {
        status.textContent = 'Не получается определить вашу геолокацию :('
    }

}





































































