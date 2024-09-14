// mouseover


// Реагируем, когда пользователь наводит курсор на элемент.


/* Кратко

    Событие на HTML-элементе. Происходит, когда пользователь передвигает курсор на сам 
    элемент или на вложенные элементы.


    На события можно подписаться и выполнять JavaScript-код, когда событие произошло.


    Событие является противоположным событию mouseout. Эти события часто используются в паре.

*/ 






// Как пишется:



const div = document.querySelector('.block')


function getColor() {
    const colors = [
        '#00FFFF', '#8A2BE2', '#7FFF00', '#7FFFD4', '#808000',
        '#DA70D6', '#FFFF00', '#FF6347', '#008080', '#6A5ACD',
    ]
    return colors[Math.floor(Math.random() * colors.length)]
}


div.addEventListener('mouseover', (event) => {

    let currentColor = getColor()

    div.style.backgroundColor = currentColor

    console.log('курсор вошёл в границы элемента!')
    console.log(event.target)
    console.log(event.type)
    
})







/* Как понять

    Подробнее о механизме событий читай в статье «События».


    Событие проще всего понять на демо. При событии mouseover мы устанавливаем элементу, 
    на котором произошло событие, синий фоновый цвет

*/ 





let current = undefined

function onMouseover() {
  if (current) {
    current.classList.remove('mouseover')
  }
  this.classList.add('mouseover')
  current = this
  // Записываем текущий пункт,
  // чтобы удалить с него класс
  // при переходе курсора на новый элемент
}

const items = document.getElementsByTagName('li')
for (let i = 0; i < items.length; ++i) {
  const item = items[i]
  item.addEventListener('mouseover', onMouseover)
}










/* Николай Лопин советует

    🛠 С помощью пары событий mouseover и mouseout можно делать выпадающие списки и меню. 
    Но у таких меню могут быть проблемы с доступностью.


    🛠 Есть очень похожее событие mouseenter, но оно не всплывает. Вместо этого для 
    каждого элемента в цепочке вложенности (с самого вложенного элемента, на котором 
    произошло событие до <body>) создаётся собственное событие. Если у вас глубокое 
    DOM-дерево, то таких событий может быть много. Это может привести к проблемам с 
    производительностью.

*/ 