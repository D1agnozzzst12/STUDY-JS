// wheel 



// Событие, когда кто-то крутит колесо мыши 🖱




/* Кратко 

    Событие wheel происходит, когда пользователь физически прокручивает колесо 
    мыши, даже если на странице ничего не происходит. За традиционный скролл 
    отвечает событие scroll.

*/ 





// Как пишется:

// Отловим все случаи, когда пользователь крутит колесо мыши при наведённом на первый <div> курсоре:



const divElement = document.querySelector('.div')


divElement.addEventListener('wheel', (event) => {
    console.log(event)
    console.log( event.target)
    console.log(event.currentTarget)
    console.log(divElement)
})







/* Объект события wheel

    Объект события wheel содержит информацию о направлении и «силе» прокрутки в свойствах:


    1. deltaX — горизонтальная прокрутка. Значение — целое число:
        1. отрицательное, если пользователь прокручивает влево;
        2. 0 — если в этом направлении прокрутка не происходит;
        3. положительное при прокрутке вправо.



    2. deltaY — вертикальная прокрутка. Значение — целое число:
        1. отрицательное, если пользователь прокручивает вверх;
        2. 0 — если в этом направлении прокрутка не происходит;
        3. положительное при прокрутке вниз.


    С помощью объекта события можно, например, перемещать элемент по экрану при прокрутке колеса 
    мыши на десктопе. Чтобы посмотреть, как это работает, откройте демо в новой вкладке по ссылке внизу.

*/ 







/* Подсказка

    💡 Если элемент имеет полосу прокрутки, то обычно после события wheel происходит scroll. 
    Этого можно избежать, вызвав метод события preventDefault():

*/ 


document.addEventListener('wheel', (event) => {
     // Останавливаем поведение по умолчанию,
     // то есть прокрутку
    event.preventDefault()
})