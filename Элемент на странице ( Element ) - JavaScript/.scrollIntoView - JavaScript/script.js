// .scrollIntoView()

// Прокрутить окно браузера до указанного элемента.


// Кратко:

// Метод scrollIntoView() позволяет программно прокрутить окно до определённого элемента.







// Как пишется:

// Получаем элемент и накладываем метод scrollIntoView():



// const element = document.querySelector('')

// element.scrollIntoView()



// В scrollIntoView() можно передать аргумент типа boolean:

// если указать true, то скролл окна остановится у верхней границы элемента;

// если указать false, то у нижней границы.












// А ещё в scrollIntoView() можно передать объект с опциями скролла, где:

// behavior отвечает за анимацию прокрутки. Принимает smooth, чтобы было плавно, по умолчанию резкое auto;

// block за вертикальное выравнивание. Принимает start, center, end и nearest;

// inline за горизонтальное выравнивание. Принимает то же, что и block.




// element.scrollIntoView(
//     {
//         behavior: 'smooth',
//         block: 'center',
//         inline: 'start',
//     }
// )







// Как понять

// Использовать scrollIntoView() полезно в случаях длинных веб-страниц, 

// когда нужно прокрутить страницу к определённым частям, а использования ссылок с якорями недостаточно.






const item1 = document.querySelector('#item-1')
const item2 = document.querySelector('#item-2')
const item3 = document.querySelector('#item-3')
const item4 = document.querySelector('#item-4')

const homeElement = document.querySelector('.home')
const storeElement = document.querySelector('.store')
const aboutElement = document.querySelector('.about')
const faqElement = document.querySelector('.faq')



item1.addEventListener('click', () => {
    homeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
    })
})


item2.addEventListener('click', () => {
    storeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
    })
})

item3.addEventListener('click', () => {
    aboutElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
    })
})

item4.addEventListener('click', () => {
    faqElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
    })
})
