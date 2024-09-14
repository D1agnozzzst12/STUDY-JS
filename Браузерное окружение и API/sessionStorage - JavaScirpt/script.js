// sessionStorage

// Храним данные пользователя в браузере, но только до момента, пока открыта текущая вкладка.

// sessionStorage — один из способов хранить данные в браузере. 
// Обзор всех способов описан в статье «Хранение данных в браузере».


/* Кратко

    Это объект, хранящийся в window, который позволяет сохранять данные в браузере на время сессии.
    Этот тип хранилища очень похож на localStorage и работает как хранилище данных в формате 
    ключ-значение. При сохранении данных мы указываем имя поля, в которое должны быть сохранены 
    данные, и затем используем это имя для их получения.



    1. Сессия страницы создаётся при открытии новой вкладки браузера. Сессия остаётся активной до тех пор, 
    пока открыта вкладка, а состояние сессии сохраняется между перезагрузками. Открытие новой вкладки 
    с таким же адресом приведёт к созданию новой сессии.


    2. Значения хранятся в виде строк. При попытке сохранения других типов данных, они будут приведены 
    к строке. Например, если записать число, то при чтении нам вернётся число, записанное в строку.



    3. Максимальный объем данных ограничен размером 5MB.
*/ 





// Пример

// Записываем данные:

window.sessionStorage.setItem('name', 'Doka Dog')


// При чтении ранее записанных данных по ключу name мы получим Дока Дог:


const name = window.sessionStorage.getItem('name')
console.log(name)








// Повторная запись по тому же ключу приведёт к замене данных:

window.sessionStorage.setItem('name', 'Dog Doka new')

const nameTwo = window.sessionStorage.getItem('name')
console.log(nameTwo)







/* Как понять

    Если вам нужно хранить данные в течение активной сессии, то sessionStorage отлично подойдёт для этого.

*/ 



/* Как пишется

    Запись производит метод setItem('ключ', 'значение'), который принимает два строковых 
    параметра: ключ, по которому будет сохранено значение, и само значение

*/ 


window.sessionStorage.setItem('name', 'Ilishan')


















/* Чтение

    За чтение отвечает getItem('ключ') c одним параметром, который указывает на ключ для чтения 
    и возвращает полученное значение из хранилища. Если по этому ключу нет значения, то метод вернёт null.

*/ 


window.sessionStorage.getItem('name')
// return 'Ilishan'


window.sessionStorage.getItem('user')
// return null




















/* Удаление

    Удаляет запись из хранилища removeItem('ключ'). Он успешно выполнится даже если указанного 
    ключа не существует в хранилище.

*/ 


window.sessionStorage.removeItem('name')
window.sessionStorage.removeItem('user')













// Очистка хранилища

// Метод clear() очищает хранилище полностью.



window.sessionStorage.clear()










// Количество полей в хранилище

// Используя свойство length, можно узнать, сколько всего полей было записано в хранилище.


window.sessionStorage.length










/*Получение ключа по индексу

    Метод key() получает ключ по индексу. Значения в хранилище хранятся в порядке их добавления,
    поэтому значение, добавленное первым, будет храниться в позиции 0 и так далее.

*/ 

window.sessionStorage.setItem('name', 'Ilishan')
window.sessionStorage.setItem('id', '5ac9bc9d1984')

console.log(window.sessionStorage.key(0))
console.log(window.sessionStorage.key(1))















// Таким образом, используя количество полей в хранилище и получение ключа по индексу, можно перебрать
//  все значения в хранилище.

// ДОКА

const sessionStorageSize = window.sessionStorage.length

for (let i = 0; i < sessionStorageSize; i++) {
    console.log(window.sessionStorage.key(i))
}


// МОЙ ВАРИАНТ КОДА
for (let i = 0; i < window.sessionStorage.length; i++) {
    console.log(window.sessionStorage.key(i))
}

const inputUserName = document.getElementById('inputUserName')
const submitBtnOne = document.getElementById('submitOne')
const inputPassword = document.getElementById('password')
const submitBtnTwo = document.getElementById('submitTwo')



submitBtnOne.addEventListener('click', function () {
    window.localStorage.setItem('name', inputUserName.value)
    console.log(window.localStorage.getItem('name'))
})



submitBtnTwo.addEventListener('click', function () {
    window.sessionStorage.setItem('password', inputPassword.value)
    console.log(window.sessionStorage.getItem('password'))
}
)