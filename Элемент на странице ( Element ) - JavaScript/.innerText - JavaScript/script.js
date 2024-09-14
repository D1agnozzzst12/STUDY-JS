// .innerText

// Читаем весь текст во вложенных элементах или записываем свой.


/* Кратко

    Свойство innerText позволяет считывать или задавать текстовое содержимое элемента. 
    При считывании текста с элемента, возвращается строка с текстовым содержимым всех 
    вложенных дочерних элементов. Не будет считываться только содержимое скрытых с 
    помощью CSS элементов, а также содержимое тегов <script> и <style>.


    Аналогичной функциональностью обладает свойство textContent, но оно возвращает содержимое 
    всех дочерних элементов, даже скрытых:

*/ 





// Пример:


/* HTML - 

    <form>
        <label for='name'>Имя</label>
        <input type="text" id="name">
        <button type="submit" id="submit">Submit</button>
    </form>

*/ 



const form = document.querySelector('form')
const button = document.querySelector('#submit')


console.log(form.innerText)
// "ИмяSubmit"


button.innerText = 'Done'

console.log(button)
// <button type="submit" id="submit">Done</button>










/* Как понять 

    Считывание и изменение текстового содержимого – довольно распространённая задача. 
    innerText позволяет считывать содержимое элемента и его потомков, но с несколькими 
    исключениями:


    1. не считывается содержимое тегов <script> и <style>;

    2. не считывается содержимое скрытых элементов.


    Свойство может изменять только текстовое содержимое элемента. Если попытаться присвоить 
    строку с HTML, она вставится как текст и не превратится в реальные DOM-элементы. 
    Чтобы HTML в строке сработал, используйте innerHTML.

*/ 










/* Как пишется

    Свойство innerText работает и как геттер, и как сеттер — обращение к свойству вернёт 
    текстовое содержимое элементов и его потомков, а установка нового значения изменит все 
    текстовое содержимое элемента.


    Например, мы хотим изменить текст в блоке после окончания загрузки:

*/ 





const statusElement = document.querySelector('.loading-status')


setTimeout(() => {
    statusElement.innerText = 'Data loaded!'
}, 5000)







/* Установка нового текста с помощью innerText 

    полностью удалит все старое содержимое и запишет новое текстовое значение. 
    Если внутри элемента были другие вложенные потомки, то все они удалятся.
    
*/






const statusElementTwo = document.querySelector('.loading-status-2')

console.log(statusElementTwo)

setTimeout(() => {
    statusElementTwo.innerText = 'Error occurred'
    console.log(statusElementTwo)
}, 5000)
