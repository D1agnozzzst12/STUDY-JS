// .scrollTo()


// Прокрутить страницу до точки координат.


// Кратко:

// Метод scrollTo() позволяет программно прокрутить элемент до некоторой точки координат на странице.







// Как пишется:



// window.scrollTo(x, y)




// Где x и y — это координаты левого верхнего угла экрана.

// Для скролла внутри элемента (например, в <div>) нужно сначала получить этот элемент. 

// Прокрутим первый на странице <div> на 100 пикселей вниз (этот блок должен содержать 

// достаточно контента, чтобы появилась полоса прокрутки):









// const div = document.querySelector('div')

// div.scrollTo({
//     top: 150,
//     left: 0,
//     behavior: 'smooth',
// })




const buttonScrollUp = document.querySelector('#scrollUp')
const buttonScrollDown = document.querySelector('#scrollDown')
const divTextElement = document.querySelector('.block-text')


buttonScrollUp.addEventListener('click', () => {
    divTextElement.scrollTo({
        top: 550,
        left: 0,
        behavior: 'smooth',
    })
})


buttonScrollDown.addEventListener('click', () => {
    divTextElement.scrollTo({
        top: 5000,
        left: 0,
        behavior: 'auto',
    })
})






/* Как понять:

    scrollTo() необходим в случае, когда прокрутку нужно совершить до определённых координат на экране. 
    В случае прокрутки относительно текущего положения лучше воспользоваться scrollBy(), а в случае 
    прокрутки до конкретного элемента — методом scrollIntoView().

*/ 



// На практике:



/* Дока Дог советует

    🛠 Прокрутка на определённые координаты полезна, когда вёрстка страницы или элемента одинакова. 
    Это сложно гарантировать в реальном мире, где сайт пытается адаптироваться под разрешение экрана 
    каждого пользователя. Но рассмотрим пример из идеальной вселенной:

*/ 




/* Во вселенной, где адаптивный дизайн 

используется везде — используют scrollBy() или scrollIntoView() 😎

*/ 