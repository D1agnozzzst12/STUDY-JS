// .getPropertyValue()


// Получаем строку с CSS-свойством элемента.




// Кратко:

// Метод getPropertyValue() возвращает строку, в которой записано значение указанного CSS-свойства. 

// Если свойство не указано, возвращает пустую строку.






// Как пишется:

try {
    element.getPropertyValue('value')
}catch(err){}



// Пример:

// Создадим блочный элемент размером 100 на 200 пикселей.


// <div class="block"></div>



// .block {
//     background-color: aqua;
//     width: 100px;
//     height: 200px;
// }






// Запишем ширину элемента в переменную и выведем её на экран:


const block = document.querySelector('.block')
// Получаем все типы элемента


const styles = window.getComputedStyle(block)
const width = styles.getPropertyValue('width')
const height = styles.getPropertyValue('height')
const background = styles.getPropertyValue('background')



console.log(`Все стили div элемента с классом block: ${styles}`)
console.log(`Ширина block: ${width}`)
console.log(`Высота block: ${height}`)
console.log(`Background block: ${background}`)