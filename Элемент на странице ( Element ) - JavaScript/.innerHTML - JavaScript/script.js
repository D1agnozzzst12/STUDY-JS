// .innerHTML


// Читаем и изменяем содержание HTML-элемента.





 
/* Кратко

    Свойство innerHTML позволяет считать содержимое элемента в виде 
    HTML-строки или установить новый HTML.


    Новое значение HTML необходимо передавать в виде строки, и оно 
    заменит текущее содержимое элемента. При передаче невалидной 
    HTML-строки будет выброшена ошибка. HTML-строкой является 
    строка, которая содержит валидную HTML-разметку. В innerHTML 
    нельзя передать DOM-элемент.

*/ 






/* HTML - 

    <form>
        <label>Логин</label>
        <input type="text" id="login">
        <div class="error">Введите логин</div>
    </form>

*/ 



const form = document.querySelector('form')
const buttonSubmitForm = document.querySelector('button')
console.log(form.innerHTML)

// '<label>Логин</label>
// <input type="text" id="login">
// <div class="error">Введите логин</div>'

// Меняем содержимое новым HTML



form.innerHTML = '<div class="success">Вход выполнин</div>'







const formTwo = document.querySelector('.form-2')
const inputUserName = document.querySelector('#inputUserName')
const inputUserLastName = document.querySelector('#inputUserLastName')
const inputUserMiddleName = document.querySelector('#inputUserMiddleName')
const inputUserEmail = document.querySelector('#inputUserEmail')
const inputUserEmailPassword = document.querySelector('#inputUserEmailPassword')
const buttonSubmit = document.querySelector('.btn-submit')



buttonSubmit.addEventListener('click', () => {
    formTwo.innerHTML = `
    
        <div>Вход выполнин</div>
        <h1>Информация о пользователе</h1>
        <ul>
            <li>Имя: ${inputUserName.value}<li>
            <li>Фамилия: ${inputUserLastName.value}<li>
            <li>Отчество: ${inputUserMiddleName.value}<li>
            <li>Аддрес электронной почты: ${inputUserEmail.value}<li>
            <li>Пароль Эл Почты: ${inputUserEmailPassword.value}<li>
        </ul>
    
    `
})









/* Как понять 

    Браузер предоставляет разработчику возможность управлять содержимым на странице и менять 
    его как угодно. innerHTML – самый простой способ считать или изменить HTML-содержимое элемента. 
    Это свойство использует строки, что даёт возможность легко менять и очищать содержимое элементов.


    Когда в innerHTML присваивается новое значение, всё предыдущее содержимое удаляется и создаётся 
    новое, что приводит к перерисовке страницы.

*/ 






/* Как пишется

    Обращение к свойству innerHTML вернёт содержимое элемента в виде HTML-строки. 
    Просмотреть или изменить содержимое можно у всех элементов, включая <html> и <body>. 
    Присвоение нового значения к свойству очистит всё текущее содержимое и заменит его новым HTML.

*/ 








/* ☝️Стоит помнить, что строка с HTML-разметкой — 

    это не DOM-элемент. innerHTML работает только со строкой, самостоятельно разбирает 
    её содержимое и создаёт элементы.
    
*/ 



// Скрипт станет частью body, но не выполнится
// document.body.innerHTML =
// '<script>alert("Мы не смогли вас взломать :(")</script>'

// После вставки в HTML, картинка не загрузится,
// и тогда сработает код из onerror
// document.body.innerHTML =
// '<img src="broken-link" onerror="alert("Теперь вы точно взломаны!")">'


