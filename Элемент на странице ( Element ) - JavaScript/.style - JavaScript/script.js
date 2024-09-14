// .style

// Меняем CSS-стили из кода.





/* Кратко

    Свойство style получает и устанавливает инлайновые стили элемента, то есть те, что 
    записываются через HTML-атрибут style.


    С помощью него можно управлять стилем элемента. Специфичность этого свойства такая же, 
    как у атрибута style.

*/ 







/* Как пишется

    Чтобы получить значения инлайновых стилей с помощью свойства style, мы можем записать:

*/ 



const element = document.querySelector('.element')

const inlineStylesInElement = element.style

console.log(inlineStylesInElement)


// В этом случае в значение inlineStyles запишется объект CSSStyleDeclaration, который 

// будет содержать в себе все инлайновые стили элемента element.









/* Чтобы задать стили для элемента - 

    Мы можем использовать несколько способов. Например, через cssText, чтобы указать 
    несколько свойств разом (этим же эффектом обладает установка стиля через setAttribute()). 
    Альтернативно, через отдельные свойства в style.[propertyName].

*/ 



// Следующие две записи работают одинаково и устанавливают несколько стилей в одном выражении:



const elementTwo = document.querySelector('.element-2')
const elementThree = document.querySelector('.element-3')

const buttonAddStyles = document.querySelector('.button-add-style')
const buttonAddStylesTwo = document.querySelector('.button-add-style-2')
const closeButtonOne = document.querySelector('.close')
const closeButtonTwo = document.querySelector('.close-2')




buttonAddStyles.addEventListener('click', () => {
    elementTwo.style.cssText = 'color: #fff; border-radius: 20px; box-shadow: 0 0 50px #333; padding: 50px; width: 50%; background-color: blue; transition: all .5s;'
    elementTwo.innerHTML = `beforeend, 
    <button class="close">Close</button>
    `
})


buttonAddStylesTwo.addEventListener('click', () => {
    elementThree.style.cssText = 'color: #fff; border-radius: 20px; box-shadow: 0 0 50px #333; padding: 50px; width: 50%; background-color: blue; transition: all .5s;'
    elementThree.innerHTML = `beforeend, 
    <button class="close-2">Close</button>
    `
})


const elementFour = document.querySelector('.element-4')
const elementFive = document.querySelector('.element-5')



elementFour.style.cssText = 'color: blue; border: 1px solid black'

elementFive.setAttribute('style', 'color:red; border: 1px solid blue;')



// Следующая — устанавливает значение определённого свойства, 

// оставляя другие значения стиля нетронутыми:




const elementSix = document.querySelector('.element-6')

elementSix.style.color = 'blue' 



























/* Как понять 

    Свойство style — это механизм для работы со стилями на элементе. С его помощью можно управлять 
    отображением элементов в «рантайме», то есть во время выполнения скрипта.


    Этот механизм позволяет «перетирать» стили, описанные в CSS-таблицах, так как специфичность 
    стилей в атрибуте style выше (за исключением стилей с !important).


    Чтобы указать значение конкретного CSS-свойства, мы можем использовать 
    одноимённое отображение в style:

*/ 





const elementSeven = document.querySelector('.element-7')
const elementEight = document.querySelector('.element-8')


// Если хотим указать color
elementSeven.style.color = 'red' // или 'rgb(255,0,0)', или '#f00'


// Если хотим указать font-family
elementEight.style.fontFamily = 'Arial'



/* Обратите внимание, что имена свойств в style.[propertyName] 

    записываются в camelCase, в отличие от CSS-свойств, которые записываются через дефис.


    Таким образом font-family превращается в fontFamily, а, например, 
    background-color — в backgroundColor.


    При сомнениях в том, как правильно называется то или иное свойство, 
    воспользуйтесь списком соответствий.

*/ 

















// На практике:


/* Саша Беспоясов советует

    🛠 В целом для управления стилями лучше использовать CSS. Можно использовать 
    классы-модификаторы, чтобы придавать какие-то наборы стилей элементу.


    Инлайновые стили имеют более высокую специфичность — их труднее переопределить, 
    и это мешает нормальной работе со стилями элемента.


    Пример. Мы пишем библиотеку, которая умеет красиво рисовать кнопки. Если мы 
    установим цвет и размер кнопки с помощью инлайновых стилей, то пользователь 
    библиотеки не сможет их легко поменять. Использовать такую библиотеку никто не захочет.


    Однако есть некоторые случаи, когда манипуляция инлайн-стилями — это ок. 
    Например, если мы хотим управлять отображением элемента точечно, и описывать 
    это в CSS невозможно.


    Представьте, что вы хотите сделать анимацию движения точки на экране так, 
    чтобы движение было случайным. В CSS (пока что) этого сделать нельзя, только 
    скриптами. И вот здесь изменение инлайновых стилей как раз кстати.


    Для изменения таких стилей используется свойство style.


    Используйте style, чтобы изменить или получить инлайновые стили элемента.


    🛠 Чтобы переписать стиль элемента полностью, можно использовать 
    cssText или setAttribute.

*/ 




const elementNine = document.querySelector('.element-9')
const elementTen = document.querySelector('.element-10')


elementNine.style.cssText = 'color: blue; border: 1px solid black'
elementTen.setAttribute('style', 'color:red; border: 1px solid blue;')







// 🛠 Чтобы обновить значение конкретного свойства, 

// а остальные оставить нетронутыми, используйте style.[propertyName]:



elementNine.style.color = 'aqua'
elementTen.style.fontFamily = 'monospace'






// 🛠 Чтобы сбросить значение, присвойте ему null.


elementTen.style.backgroundColor = null








// 🛠 Численным свойствам, таким как margin, padding, border-width и другим, 

// следует указывать не только значение, но и единицу измерения:


elementTen.style.marginTop = '50px'
