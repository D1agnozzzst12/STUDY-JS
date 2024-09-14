// localStorage


// Храним данные в браузере пользователя бесконечно долго (почти).




// localStorage — один из способов хранить данные в браузере. 
// Обзор всех способов описан в статье «Хранение данных в браузере».



/* Кратко

    Это объект, хранящийся в window, который позволяет долговременно сохранять данные в браузере. 
    Работает как хранилище данных в формате ключ-значение — при сохранении данных мы указываем имя
    поля, в которое должны быть сохранены данные, и затем используем это имя для их получен



    1. Значения хранятся в виде строк. При попытке сохранения других типов данных, они
    будут приведены к строке. Например, если записать число, то при чтении нам вернётся
    число, записанное в строку.



    2. Не имеет ограничений по времени хранения, может быть очищен пользователем вручную или браузером 
    при переполнении автоматически (браузеры на основе движка WebKit, например Safari, очищают
    localStorage, если к нему не обращались в течение 7 дней).



    3. Максимальный объем данных ограничен размером 5MB.
*/ 



// Пример:

// Записываем данные:

 
window.localStorage.setItem('name', 'Дока Дог')
window.localStorage.setItem('lastName', 'gazdiev')
window.localStorage.setItem('middleName', 'movsarovich')



// При чтении ранее записанных данных по ключу name мы получим Дока Дог:


const name = window.localStorage.getItem('name')
console.log(name)
// 'Дока Дог'


const lastName = window.localStorage.getItem('lastName')
console.log(lastName)
// 'gazdiev'


const middleName = window.localStorage.getItem('middleName')
console.log(middleName)
// 'movsarovich'



// Повторная запись по тому же ключу приведёт к замене данных:


window.localStorage.setItem('name', 'dog')

const nameTwo = window.localStorage.getItem('name')
console.log(nameTwo)
// 'dog'


/* Моя функция
const userPassword = document.getElementById('userPassword')
const buttonSubmit = document.getElementById('btnSubmit')

buttonSubmit.addEventListener('click', function () {
    window.localStorage.setItem('password', userPassword.value)
    const storagePasword = window.localStorage.getItem('password')
    console.log(storagePasword)
})
*/





/* Как понять

    Если вам нужно сохранить данные в браузере на долгое время и объем этих данных достаточно большой,
    то localStorage — то, что вам нужно. Данные будут храниться бессрочно и могут быть стёрты только 
    в двух случаях: при превышении лимита по размеру данных или очистке хранилища пользователем или
    программно.    

*/ 


/* Как пишется

    Запись:
    Для записи используйте метод setItem('ключ', 'значение'). Он принимает два строковых параметра: 
    ключ, по которому будет сохранено значение, и само значение.

*/  

window.localStorage.setItem('name', 'doka dog')


/* Чтение

    За чтение отвечает getItem('ключ') c одним параметром, который указывает на ключ для чтения 
    и возвращает полученное значение из хранилища. Если по этому ключу нет значения, то метод вернёт null.

*/ 


window.localStorage.getItem('name') // вернет "Дока Дог"
window.localStorage.getItem('user') // null


/* Удаление

    Удаляет запись из хранилища removeItem('ключ'). Он успешно выполнится даже если
    указанного ключа не существует в хранилище.

*/ 



window.localStorage.removeItem('name')
window.localStorage.removeItem('user')











// Очистка хранилища
// Метод clear() очищает хранилище полностью.

window.localStorage.clear()















// Количество полей в хранилище

// Используя свойство length, можно узнать, сколько всего полей было записано в хранилище.


console.log(window.localStorage.length)









/* Получение ключа по индексу

    Метод key() получает ключ по индексу. Значения в хранилище хранятся в порядке их добавления, 
    поэтому значение, добавленное первым, будет храниться в позиции 0 и так далее.

*/


window.localStorage.setItem('firstItem', 'i am first item')
window.localStorage.setItem('secondItem', 'i am second item')
window.localStorage.setItem('therdItem', 'i am therd item')
window.localStorage.setItem('fourthItem', 'i am fourth item')
window.localStorage.setItem('name', 'ilishan')
window.localStorage.setItem('lastName', 'gazdiev')
window.localStorage.setItem('middleName', 'movsarovich')


console.log(window.localStorage.key(0))
console.log(window.localStorage.key(1))
console.log(window.localStorage.key(2))
console.log(window.localStorage.key(3))
console.log(window.localStorage.key(4))
console.log(window.localStorage.key(5))
console.log(window.localStorage.key(6))
console.log(window.localStorage.key(7))











// Таким образом, используя количество полей в хранилище и получение ключа по индексу, 
// можно организовать перебор всех значений в хранилище.



const localStorageSize = window.localStorage.length

for (let i = 0; i < localStorageSize; i++) {
    console.log(window.localStorage.getItem(localStorage.key(i)))
}










/* События

    При установке значения в хранилище срабатывает глобальное событие storage,
    с помощью которого можно отслеживать изменения в хранилище.



    💡 Событие происходит только на других открытых страницах текущего сайта.



    1. key - ключ, который был изменён (при вызове метода clear(), ключ будет null);
    2. oldValue - старое значение, записанное в поле;
    3. newValue - новое значение, записанное в поле;
    4. url - адрес страницы, на которой вызвано изменение.
*/ 

window.addEventListener('storage', function (event) {
    console.log(event)
})












// На практике


/* Павел Минеев советует

    🛠 При помощи localStorage можно сохранять данные, относящиеся к пользователю, не храня их на
    сервере. В следующем примере мы будем запоминать размер шрифта на сайте и восстанавливать размер
    из хранилища, если он был изменён до этого.

*/ 




/* 🛠 Можно использовать для

    синхронизации нескольких открытых в браузере вкладок. При изменении размера шрифта в одной
    вкладке мы узнаем об этом во всех остальных и тоже изменим размер.

*/ 

function changePageFontSize(size) {
    document.style.fontSize = `${size}`
}



window.addEventListener('storage', function (event) {
    if (event.key === 'pageFontSize') {
        changePageFontSize(event.newValue)
    }
})













/* 🛠 Иногда нам нужно сохранить не просто текст,

    а целую структуру данных, и в этом нам поможет JSON.stringify().

*/ 


const user = {
    name: 'Ilishan',
    avatarUrl: 'moscot-doka.svg',
}


localStorage.setItem('user', JSON.stringify(user))



// И после чтения парсим:


function readUser() {
    const userJSON = localStorage.getItem('user')
    if (userJSON === null) {
        return undefined;
    }

    // Если вдруг в хранилище оказался невалидный JSON предохраняемся от этого

    try {
        return JSON.parse(userJSON)
    } catch {
        localStorage.removeItem('user')
        return undefined
    }

    

}

console.log(readUser())

// {
//     name: 'Ilishan',
//     avatarUrl: 'mascot-doka.svg'
// }












/* 🛠 Если ваш сайт использует скрипты аналитики или другие внешние библиотеки,

    то они также имеют доступ к хранилищу. Поэтому лучше именовать ключи для записи в хранилище с 
    префиксом в едином стиле. Например, при записи чего-либо на таком сайте я бы выбрал префикс 
    YD_{название ключа}, тогда можно сгруппировать только нужные значения или отфильтровать их 
    в инструментах разработчика




    🛠 Используйте функции-обёртки для предотвращения ошибок, связанных с неудачными попытками
    записи, отсутствием localStorage в браузере и дублированием кода.

*/ 

function getItem(key, value) {
    try {
      return window.localStorage.getItem(key)
    } catch (e) {
      console.log(e)
    }
  }
  
  function setItem(key, value) {
    try {
      return window.localStorage.setItem(key, value)
    } catch (e) {
      console.log(e)
    }
  }
  
  function setJSON(key, value) {
    try {
      const json = JSON.stringify(value)
  
      setItem(key, json)
    } catch (e) {
      console.error(e)
    }
  }
  
  function getJSON(key) {
    try {
      const json = getItem(key)
  
      return JSON.parse(json)
    } catch (e) {
      console.error(e)
    }
  }















/* Артём Гусев советует

    🛠 Как предотвратить удаление данных из хранилища?

    🛠 Когда и как происходит удаление данных? Как нам сохранить данные?

    Вы можете использовать два способа хранения данных — «временный» и «постоянный». 
    Во «временном» режиме браузер может удалить ваши данные, при условии, что этот 
    процесс не помешает работе пользователя. В постоянном режиме этого не случится,
    даже в случае нехватки места. Однако, в этом режиме пользователь может самостоятельно
    очищать хранилище.




    По умолчанию все хранилища (localStorage, IndexedDB, Cache API и т. д.) работают во временном режиме
    . Если сайт не запросил постоянное хранение данных — браузер может удалить его данные по своему 
    усмотрению. Например, если на устройстве мало места.



    🛠 Процесс очистки



    При автоматической очистке места браузеры должны удалить наименее ценные для пользователя данные.


    1. Браузеры на основе Chromium освобождают место последовательно, удаляя данные сайтов. 
    Удаление начинается с сайтов, которые давно не посещались, и продолжается пока не 
    освободится достаточно места.


    2. Internet Explorer 10+ не очищает данные, но при этом не даёт записывать данные сверх лимита.


    3. Firefox начинает очистку, когда заканчивается свободное место на диске. Порядок удаления 
    определяется по тому же принципу, что и в браузерах на основе Chromium.


    4. Safari раньше вообще не удалял данные, но сейчас использует семидневный лимит на
    хранение всех записываемых данных.




    Как включить режим постоянного хранения данных?



    Все необходимые методы для работы с браузерным хранилищем находятся в window.navigator.storage.
    Нужный нам метод называется persist():
*/   




(async () => {
    // Пытается переключиться на «постоянный» режим хранения.
    // Возвращает true, если получилось. И false, если нет.

    const persistModelEnabled = await window.navigator.storage?.persist()
})()


// Можно усовершенствовать наш код, воспользовавшись методом persisted(). 
// Этот метод вернёт нам true, если хранилище уже переключено в постоянный режим.

// Мы вызываем метод persisted() и переключаем хранилище на постоянный режим,
//  только если оно ещё не переключено:




async function moreGreatCode() {
    // boolean значение, указавающее на то, включен ли «постоянный» режим хранения данных изначально
    const isAlreadyPersist = await window.navigator.storage?.persisted()
  
    if (isAlreadyPersist) {
      console.info('Хранилище уже переключено в постоянный режим хранения.')
      return
    }
  
    // boolean значение, указывающее на то, удалось ли переключиться на «постоянный» режим хранения
    const persistModeEnabled = await window.navigator.storage?.persist()
  
    if (persistModeEnabled) {
      console.info('Браузер успешно сменил режим хранения на «постоянный».')
      return
    }
  
    console.info(
      'Браузер столкнулся с проблемами при попытке смены режима. Возможно вам стоит обновиться до последней версии, либо использовать на сайте HTTPS протокол.'
    )
  }
moreGreatCode()