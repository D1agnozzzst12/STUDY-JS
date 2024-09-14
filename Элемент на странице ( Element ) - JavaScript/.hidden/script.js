// .hidden

// Свойство, с помощью которого узнают или изменяют значение HTML-атрибута hidden.







/* Кратко 

    Свойство hidden позволяет узнать значение HTML-атрибута hidden или изменить его. 
    Когда hidden равен true, элемент скрыт на странице и недоступен для скринридеров.

*/ 








/* Как пишется

    Обращение к свойству hidden вернёт текущее значение HTML-атрибута hidden. 
    Если атрибута нет на элементе, результат будет false:

*/ 




/* HTMl - 

    <input type="text" placeholder="Введите почту">
    <div class="error" hidden>Неправильная почта</div>

*/ 




const input = document.querySelector('input')
const div = document.querySelector('.error')




console.log(input.hidden)
console.log(div.hidden)

console.log(input)
console.log(div)






// Присвоение значения в hidden изменит значение атрибута. В зависимости от 

// значения элемент скроется или появится. Скроем поле ввода из примера выше:





const button = document.querySelector('.button')
const buttonTwo = document.querySelector('.button-2')




button.addEventListener('click', () => {
    input.hidden = true
})


buttonTwo.addEventListener('click', () => {
    input.hidden = false
})




// Если присвоить false, то атрибут будет удалён с элемента, а сам элемент снова станет видимым:






/* Как понять

    HTML-атрибут hidden существует давно и работает так же, как display: none. 
    Когда атрибут активен, элемент будет не только визуально скрыт, но и не будет 
    занимать место на странице. То есть скрытый элемент будет вести себя так, будто 
    его совсем нет.


    Скрывать элементы через display можно в CSS или с помощью свойства style, но 
    атрибутом hidden удобно управлять из JavaScript.



    ❗️ Приоритет CSS-свойства display выше, чем у атрибута hidden. Если на элементе 
    одновременно установлен атрибут hidden и display: block, то элемент будет виден.

*/ 