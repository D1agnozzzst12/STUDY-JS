// load


// Запускаем код, когда страница полностью загрузилась.





/* Кратко

    Событие load происходит, когда загрузилась и HTML-страница 
    (за это отвечает событие DOMContentLoaded), и все ресурсы для 
    её отображения пользователю: стили, картинки и другое.

*/ 



// Как пишется:

// Можно подписаться на объект window:



window.addEventListener('load', (event) => {
    console.log('Document is Done')
    console.log(event.target)
    console.log(event.currentTarget)
    console.log(event.type)
})




// Или поймать событие на элементах, у которых есть ресурс загрузки:


const img = document.querySelector('img')

img.addEventListener('load', () => {
    console.log('Img is loaded!')
    console.log(event.target)
    console.log(event.currentTarget)
    console.log(event.type)
})








/* Кратко 

    Событие load гарантирует, что браузер отображает страницу полностью: все стили и картинки готовы, 
    размеры элементов на странице посчитаны верно и доступны. Предшествующее load событие DOMContentLoaded 
    таких гарантий не даёт. То же самое с отдельными элементами на странице. Если случился load, значит 
    элемент полностью загрузился.


    Попробуйте открыть новую страничку кнопкой в демо:

*/ 





const button = document.querySelector('button')

button.addEventListener('load', () => {
    console.log('Button is also loaded!')
})








// Николай Лопин советует 

// 🛠 Чаще применяют DOMContentLoaded.

// 🛠 Событие load используется, когда код работает со стилями и другими параметрами 

// отображения. Такой код нужен редко, поэтому и событие используется нечасто.