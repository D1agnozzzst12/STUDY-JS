// .classList

// Динамически читаем, добавляем и удаляем классы у элементов.




// Кратко:

// Свойство classList даёт возможность просматривать и манипулировать классами элемента.






// Пример:

const button = document.querySelector('button')


// Добавили класс

button.classList.add('active')


// Удалили класс

button.classList.remove('active')



button.classList.contains('active')
// Вернёт false, так как такого класса у элемента нет


console.log(button)

console.log(button.classList.contains('active'))


if (button.classList.contains('active') === true) {
    console.log('Да такой класс есть у этой кнопки')
} else {
    console.log('Такого класса нет у этой кнопки')
}







// My project


const h1Zagolovok = document.querySelector('.zagalovok')
const buttonAddStyles = document.querySelector('.btn-1')
const buttonRemoveStyles = document.querySelector('.btn-2')
const buttonRemoveDisplay = document.querySelector('.btn-3')
const buttonReturnAll = document.querySelector('.btn-4')





buttonAddStyles.addEventListener('click', () => {
    h1Zagolovok.classList.add('active-2')
})

buttonRemoveStyles.addEventListener('click', () => {
    h1Zagolovok.classList.remove('active-2')
    h1Zagolovok.style.transition = 'all 0.5s'
})

buttonRemoveDisplay.addEventListener('click', () => {
    h1Zagolovok.classList.add('display')
    h1Zagolovok.style.transition = 'all 0.5s'
})


buttonReturnAll.addEventListener('click', () => {
    h1Zagolovok.classList.remove('active-2')
    h1Zagolovok.classList.remove('display')
})




/* Как понять

    Управлять классами элемента — одна из распространённых задач, потому браузеры 
    предоставляют встроенные средства для решения такой задачи. В свойстве classList 
    содержится специальный объект, который хранит информацию о текущих классах элемента и 
    содержит методы для работы с ними.

*/ 





const buttonTwo = document.querySelector('.button')


buttonTwo.classList.add('active')

console.log(buttonTwo.classList[0])

console.log(buttonTwo.classList[1])

console.log(buttonTwo.classList[2])



// Как пишется:

// У classList есть множество методов, но мы рассмотрим только часто используемые.










// classList.add() Скопировать ссылку "classList.add()"

// Этот метод используется для добавления класса к элементу. В качестве аргументов нужно 

// передавать строку с именем класса.

// Добавим элементу класс animate:



const element = document.querySelector('.element')

element.classList.add('animate')

console.log(element)




// Можно так же передать несколько строк-аргументов, тогда добавится несколько классов:




const elementTwo = document.querySelector('.element-2')

// Добавятся классы black, fade и animate
elementTwo.classList.add('black', 'fade', 'animate')


console.log(elementTwo)






/* Можно не бояться, 

    что один и тот же класс добавится два раза. Если вызвать метод add() и передать уже 
    существующий класс, то он не добавится второй раз.

*/ 




const elementThree = document.querySelector('div.header')


// Добавится только animate, так как header уже есть на элементе

elementThree.classList.add('header', 'animate')









// classList.remove()

// Метод используется для удаления класса у элемента. В качестве аргумента нужно передавать строку

// с именем класса.

// Предположим, что кнопке назначен единственный класс submit






const buttonFour = document.querySelector('.submit')


// Убираем класс


buttonFour.classList.remove('submit')

console.log(buttonFour.classList[0])








/* В remove() можно передать несколько аргументов и удалится несколько классов

    Предположим что в HTML есть элемент <div class="banner hidden animated">...</div>:

*/ 




const elem = document.querySelector('div.banner')



// Убираем классы hidden и animated


button.classList.remove('hidden',  'animated')








/* classList.replace()  - 

    Метод позволяет заменить одно значение класса другим. Метод принимает 2 параметра:


    1. название класса, который нужно заменить;

    2. название класса, на что нужно заменить.



    После выполнения replace() возвращает boolean-значение, которые сообщает нам об успешности операции:

    1. true если класс был заменён;

    2. false если ничего не изменилось.
*/ 










// На кнопке есть класс hidden:

const buttonFive = document.querySelector('button.hidden-2')


// Заменяем класс hidden на visible

const result = buttonFive.classList.replace('hidden', 'visible')

console.log(result)
// true, класс успешно заменился на visible






// Попробуем заменить ещё раз
const resultAgain = buttonFive.classList.replace('hidden', 'visible') 


console.log(resultAgain)
// false, потому что ничего не изменилось









/* classList.toggle()

    Метод можно использовать, чтобы включать или выключать класс. Если при вызове toggle() переданный 
    класс уже есть на элементе, то он будет убран. Если класса не было — то добавлен.

*/ 


const buttonSix = document.querySelector('button.hidden-3')


// Так как класс есть, он будет убран
buttonSix.classList.toggle('hidden-3')
console.log(buttonSix)



// А при повторном вызове будет снова добавлен

buttonSix.classList.toggle('hidden-3')
console.log(buttonSix)









/* Метод toggle() принимает только один класс для переключения. 

    Опционально вторым аргументом можно передать boolean-значение: метод будет работать как add(), 
    если передать true, и как remove(), если передать false.

*/ 




// На кнопке есть класс submit

const buttonSeven = document.querySelector('button.submit-2')


// Передаём вторым аргументом false, и будет работать как remove()
buttonSeven.classList.toggle('submit-2', false)

console.log(buttonSeven.classList[0])

// undefinden, потому что класса больше нет



// Передаем true, и теперь класс добавится

buttonSeven.classList.toggle('submit-2', true)








/* classList.contains() 

    Метод позволяет проверить наличие класса у элемента. Метод принимает один параметр — 
    строку с названием класса, наличие которого нужно проверить.


    Метод contains() вернёт true, если класс есть, и false, если класса нет.

*/ 




// На кнопке есть класс hidden, найдём эту кнопку

const buttonEight = document.querySelector('button.hidden-4')

// Проверим, есть ли класс visible на кнопке

const isVisible = buttonEight.classList.contains('visible')
console.log(isVisible)
// false, класс 'visible' у кнопки отсутствует





// Проверим, есть ли класс hidden на кнопке

const isHidden = buttonEight.classList.contains('hidden')
console.log(isHidden)









/* Имена классов

    ☝️
    Классом не может быть строка, содержащая пробелы. При попытке передать в аргументах такую строку, 
    будет выброшена ошибка. Это правило касается любого метода в classList.

*/ 



try {
    const elementFour = document.querySelector('div.element-4')

    elementFour.classList.add('my awesome class')
} catch (error) {
    console.log(`Ошибка: ${error}`)
    console.log(`Имя ошибки: ${error.name}`)
    console.log(`Тип ошибки: ${error.type}`)
}











// На практике


/* Егор Огарков советует

    🛠 Свойство classList является псевдомассивом, поэтому разработчик может 
    обращаться к классам по индексам, как в массиве. При этом новые классы добавляются 
    в конец, а при удалении все классы (и соответственно их индексы) смещаются. 
    classList легко превращается в обычный массив, по которому можно итерироваться 
    любым привычным способом.

*/ 






const elementFive = document.querySelector('div.element-5')

// Через специальный метод
const classes = Array.from(element.classList)


// Либо через спред-оператор

const classesTwo = [...elementFive.classList]

// Теперь нам доступны любые операции обычного массива
// classes.map(...)
// classes.filter(...)
// classes.reduce(...)







// 🛠 Вместо использования classList можно попробовать пользоваться свойством className. 

// Это поле содержит строку с именами всех классов через пробел.



// Предположим, у нас есть элемент шапки:


/* 

    <header class="head theme-light">
        <!-- Навигация по сайту -->
    </header> 


*/ 


// В поле className будет находиться точно такая же строка, что и в 

// атрибуте элемента class, даже если в ней будут лишние пробелы.


const head = document.querySelector('header')


console.log(head.className)

// head theme-light,
// то же значение, что и в атрибуте class










/* С помощью этого поля можно легко менять класс элемента — 

    достаточно присвоить ему новое значение. Если добавляете несколько классов, 
    то их нужно обязательно указывать через пробел.

*/ 


// Используем элемент из предыдущего примера

const elementSix = document.querySelector('div.element-6')

// Теперь у элемента шапки будет три класса

elementSix.className = 'firstclass secondclass therdclass'

console.log(elementSix)




/* Однако, если с классами приходится работать часто или нужно сделать что-то сложнее, 

    чем просто переопределить класс, то удобнее использовать методы из classList.
    
*/ 