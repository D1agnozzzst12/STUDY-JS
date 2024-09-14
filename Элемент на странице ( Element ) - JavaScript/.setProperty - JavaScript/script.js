// .setProperty()

// Как задать CSS-свойство, используя setProperty().


/* Кратко

    Метод setProperty() устанавливает стиль. Может быть применён как к DOM-элементу, 
    так и конкретному CSS-правилу.


    В первом случае специфичность будет у атрибута style, т. к. стили будут записаны инлайново. 
    Во втором случае специфичность не изменится.

*/ 






/* Как пишется

    Метод setProperty() может принимать три параметра.


    propertyName. Обязательная строка с названием CSS-свойства. Должна совпадать с названием 
    свойства, например, max-width.


    value. Строка с новым значением свойства. Если параметр не указан, то будет передана пустая строка.


    priority. При помощи этого параметра можно установить новому значению самый высокий приоритет 
    !important. Для этого передайте строку "important".

*/ 


// setProperty(propertyName, value, priority)




// Пример:

// Рассмотрим случай, когда метод применяется к конкретному CSS-правилу. У нас есть HTML-элемент со следующими классами:



/* HTML - <div class="one two"></div>*/ 


/* Styles -

.one {
  background: blue;
  width: 100px;
  height: 100px;
  transition: background .2s ease-in;
  cursor: pointer;
}

.two {
  background: grey;
}

*/ 





// Давайте изменим CSS-правило для класса .two.




// <div>, цвет которого будем менять
const sq = document.querySelector('div')


// Таблица стилей, где будем искать нужное правило
const stylesheet = document.styleSheets[1]


// Находим нужное правило
const newRule = [...stylesheet.cssRules].find(
    (r) => r.selectorText === ".two"
  )


// При наведении <div> окрашивается в новый цвет
sq.addEventListener('mouseover', () => {
    newRule.style.setProperty('background', 'tomato')
})



// Когда курсор уходит с элемента,
// окрашиваем <div> обратно в серый


sq.addEventListener('mouseout', () => {
    newRule.style.setProperty('background', 'gray')
})