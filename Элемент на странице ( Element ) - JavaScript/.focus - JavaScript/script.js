// .focus()

// Метод, который устанавливает фокус на DOM-элемент, на котором вызван.




/* Кратко

    Вызов метода focus() на DOM-элементе устанавливает фокус на этот элемент. 
    Когда элемент находится в фокусе, он перехватывает и обрабатывает события клавиатуры.


    Фокус нельзя поставить на элемент, если он заблокирован. Например, если у кнопки 
    или поля ввода стоит атрибут disabled.

*/ 





// Как пишется 

// Метод focus() обычно вызывается без аргументов, но в него также можно передать 

// объект со свойством preventScro


try {
    element.focus()
    element.focus( { preventScroll: true, } )
} catch(err) {}




/* По умолчанию браузер прокручивает страницу до элемента, 

    на который перемещён фокус. Это так же происходит, если preventScroll установлен в false. 
    Если preventScroll установлен в true, то прокрутки страницы к элементу не произойдёт
    
*/ 






// Пример:

// Представим, что мы работаем с веб-страницей с формой




/* form HTML 

<form action="/apply" method="POST">
  <label>
    Ваше имя:
    <input type="text" name="name">
  </label>

  <label>
    Email:
    <input type="email" name="email" id="email">
  </label>

  <button type="submit">Подать заявку</button>
</form>

*/ 



const emailInput = document.getElementById('email')

emailInput.focus()




/* Как понять

    Что такое фокус?


    Фокус в вебе — это обозначение активного элемента на странице. 
    Такой элемент браузеры чаще всего обозначают голубой полупрозрачной обводкой. 
    С активным элементом можно взаимодействовать, он принимает события клавиатуры. 
    Например, когда мы печатаем значение в поле ввода, это поле ввода находится в фокусе.


    Фокус критически важен для людей, которые не могут или не хотят пользоваться мышью. 
    С помощью кнопки Tab такие пользователи перемещают фокус между интерактивными элементами 
    внутри страницы. Это поведение предоставляется браузером по умолчанию.


    На фокус можно влиять с помощью HTML-атрибутов autofocus и tabindex, а также из 
    JavaScript с помощью вызова методов focus() и blur() у DOM-элементов.


    Когда браузер отображает страницу, то по умолчанию фокус не установлен. 
    При нажатии Tab фокус установится в первый интерактивный элемент сверху 
    страницы и будет двигаться сверху вниз по порядку в разметке.





    Когда нужен focus() ?

    Бывают случаи, когда нужно программно установить фокус на элемент:


    1. пользователь нажал на кнопку, которая открывает модальное окно. 
    Нужно переместить фокус в это окно, чтобы пользователь не потерялся;


    2. при выборе значения из списка нужно автоматически переместить фокус на зависимый список;


    3. при реализации кастомных горячих клавиш. Например, хотим перемещаться между 
    элементами формы стрелками.


    Эти случаи объединяет необходимость перемещать фокус непоследовательно, не так, 
    как браузер делает по умолчанию. Произвольно переместить фокус позволяет метод focus().


    Например, в случае с открытием модального окна нужно переместить фокус на него. 
    Подпишемся на событие click на кнопке открытия окна и вызовем focus() в обработчике:

*/ 



const openWindowButton = document.getElementById('open-modal-button')
const modalWindow = document.getElementById('modal-window')


openWindowButton.addEventListener('click', (event) => {
    modalWindow.focus()
})





// Полный пример реализации модального окна описан в WAI-ARIA Authoring Practices.








/* Не на каждый элемент можно установить фокус

    Фокус — это обозначение активного элемента на странице, но не все элементы могут иметь фокус. 
    Обычно фокус можно выставить интерактивным элементам, с которыми можно взаимодействовать с клавиатуры.


    В спецификации HTML описаны все критерии, которые делают элемент доступным для фокуса. 
    Мы же разберём самые важные.


    Если не устанавливать атрибуты, которые влияют на доступность элемента для фокуса,
    то каждый браузер самостоятельно определяет, какой элемент может иметь фокус. 
    Во всех современных браузерах, следующие элементы могут иметь фокус:


    1. ссылки <a> с установленным атрибутом href;

    2. кнопки <button>;

    3. поля ввода <input>, кроме скрытых (type="hidden");

    4. выпадающие списки <select>;

    5. поля многостраничного ввода textarea;

    6. элементы <summary>;

    7. произвольный элемент, если у него установлен атрибут tabindex.


    Если у любого из этих элементов установить атрибут disabled, то элемент перестаёт быть 
    доступным для фокуса.

*/ 








// На практике




/* Николай Лопин советует

    🛠 Если нужно установить фокус на элемент сразу после загрузки страницы, 
    то лучше добавить атрибут autofocus прямо в вёрстку. Браузер установит фокус 
    на элемент самостоятельно:


    <form action="/apply" method="POST">
  <label>
    Ваше имя
    <input type="text" name="name" autofocus>
  </label>

  <label>
    Email:
    <input type="email" name="email">
  </label>

  <button type="submit">Подать заявку</button>
</form>

*/ 





/* 🛠 Чтобы программно убрать фокус с элемента,

    нужно либо вызвать метод blur(), либо переместить фокус на другой элемент. 
    Непрограммно фокус убирается с помощью мыши, как только пользователь нажал на любую кнопку мыши.


    🛠 За обводку элемента в фокусе отвечает CSS-свойство outline. Не скрывайте её, если на 
    сайте нет альтернативного способа выделения элементов в фокусе

*/ 