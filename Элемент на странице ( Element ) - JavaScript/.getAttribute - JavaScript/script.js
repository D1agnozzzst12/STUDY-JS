// .getAttribute()

// Получить значение любого HTML-атрибута.




// Кратко:

// Метод getAttribute() позволяет получить значение указанного атрибута у HTML-элемента. 

// Если атрибута нет, то метод вернёт null.






/* Как пишеться

    getAttribute() принимает один аргумент – строку с именем атрибута. 
    В ответ метод возвращает значение атрибута в виде строки или null, 
    если атрибута нет на элементе.

*/ 



// <script type="application/json" id="hydration"></script>



const scriptElement = document.getElementById('hydration')

console.log(scriptElement.getAttribute('type'))
// 'application/json'



console.log(scriptElement.getAttribute('id'))
// 'hydration'



console.log(scriptElement.getAttribute('class'))
// null









/* Как понять

    Существует множество стандартных HTML-атрибутов, и разработчики могут задавать элементу 
    свои собственные атрибуты. Метод getAttribute() является универсальным способом прочитать 
    значение любого атрибута.


    Не все атрибуты имеет смысл считывать с помощью getAttribute(). Например, атрибут hidden 
    лучше читать из поля hidden DOM-элемента, а дата-атрибуты — из поля dataset.


    Сравним два варианта получения значения атрибута. Возьмём элемент и считаем его атрибуты:

*/ 



/* <div data-color="red" hidden>Ошибка!</div> */




const element = document.querySelector('div')

console.log(element.hidden)
// true


console.log(element.getAttribute('hidden'))
// '' - пустая строка
// т. к. строкового значения у атрибута неt



console.log(element.dataset.color)
// red


console.log(element.getAttribute('data-color'))
// red


