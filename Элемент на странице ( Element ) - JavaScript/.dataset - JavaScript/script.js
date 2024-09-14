// .dataset


// Простейший способ хранить данные в HTML и читать их из JavaScript.


/* Кратко

    Свойство dataset позволяет считывать или устанавливать любые дата-атрибуты на HTML-элементе.


    Дата-атрибут — это пользовательский атрибут на элементе, название которого начинается 
    с data-, например data-testid. Дата атрибуты используются, чтобы хранить значения на 
    элементах в HTML.

*/ 



/* Как пишеться

    Обращение к свойству dataset вернёт объект со всеми дата-атрибутами, которые есть на элементе. 
    Названиями полей в объекте будут имена дата-атрибутов после префикса data-. Например, 
    если атрибут называется data-columns, то поле в объекте для этого атрибута будет называться 
    columns.

*/ 



/* HTML - 

    <h1>Известные ситхи</h1>

    <ul>
        <li data-id="1541" data-episode="1">Дарт Мол</li>
        <li data-id="9434" data-episode="4">Дарт Вейдер</li>
        <li data-id="5549" data-episode="4">Дарт Сидиус</li>
    </ul>

*/ 

try {
    
const items = document.querySelector('li')

const firstItem = items[0]


console.log(firstItem.dataset)


} catch(error) {
    console.log(error)
    console.log(error.name)
    console.log(error.type)
}



// Если дата-атрибутов на элементе нет, то вернётся пустой объект:




const heading = document.querySelector('.h1')

console.log(heading.dataset)



const itemsTwo = document.querySelector('.li')

console.table(itemsTwo.dataset)











/* Чтобы добавить дата-атрибут к элементу, 

    нужно добавить новое поле в объект dataset. Название поля так же должно быть без префикса data-, 
    браузер автоматически подставит его. В значениях атрибутов в HTML могут быть только строки, 
    потому любое значение будет автоматически приведено к строке
    
*/ 


const itemsThree = document.querySelector('.li-2')

itemsThree.dataset.side = 'evil'
itemsThree.dataset.age = 21
itemsThree.dataset.lightsaber = {color: 'red',}


console.log(itemsThree)







/* Использование camelCase и kebab-case 

    В dataset необходимо присваивать поля, названия которых записываются в одно слово. 
    Потому для составных имён используется только camelCase-нотация. При попытке присвоить 
    название в kebab-case будет выброшена ошибка.

*/ 




try {
    const bodyElement = document.querySelector('body')
    
    console.log(bodyElement.dataset['dark-theme'] = true)
    
} catch(err) {
    console.log(err)
    console.log(err.name)
    console.log(err.type)


    // Uncaught DOMException: Failed to set
// a named property on 'DOMStringMap':
// 'dark-theme' is not a valid property name
}














// Дата-атрибуты, записанные в dataset с помощью camelCase, в HTML будут иметь названия в kebab-case. 

// Браузер преобразует camelCase в kebab-case:



/* HTML - 

    <ul>
        <li>Иван Иванов</li>
    </ul>

*/ 




const itemsFour = document.querySelector('.li-3')

itemsFour.dataset.yearsOfExperience = 2
itemsFour.dataset.condidateRole = 'junior'

console.log(itemsFour.dataset)
console.table(itemsFour.dataset)
console.log(itemsFour)




// После выполнения кода выше получится следующий HTML:

/* <ul>
  <li data-candidate-role="junior" data-years-of-experience="2">
    Иван Иванов
  </li>
</ul> */










/* Преобразование названий работает и в обратную сторону 

    – дата-атрибут на HTML-элементе, записанный в kebab-case, будет превращён в dataset в camelCase.

*/ 




const itemsFive = document.querySelector('.li-4')

console.log(itemsFive.dataset)
console.log(itemsFive)







/* Удаление дата-атрибута 
    
    Удалить дата-атрибут можно только с помощью оператора delete. Если попытаться присвоить 
    к полю значение undefined или null, то браузер просто присвоит атрибуту строку 'undefined' 
    или 'null'.

*/ 


// Возьмём следующий HTML:

// <div data-testid="test">Любое содержимое<div>





// При установке undefined в значение дата-атрибута, он не удалится с элемента.



const element = document.querySelector('.element')


element.dataset.testid = undefined


console.log(element)



// В результате получится следующий HTML:


// <div data-testid="undefined">Любое содержимое<div>








// Если использовать оператор delete, то получим элемент без дата-атрибута.


delete element.dataset.testid
// <div>Любое содержимое</div

console.log(element)









// Свойство dataset защищено от перезаписи. Это значит, что попытка присвоить в 

// dataset новое значение будет проигнорирована.



const elementTwo = document.querySelector('.element-2')



// Ничего не произойдёт, дата-атрибуты
// на элементах тоже не изменятся


elementTwo.dataset.hello = {}
elementTwo.dataset.hello = 'string'


console.log(elementTwo)









/* Как понять

    Дата-атрибуты появились в HTML5 и добавили возможность разработчикам добавлять свои 
    собственные атрибуты к элементам. Причин для использования таких атрибутов можно придумать 
    множество. Чаще всего в дата-атрибутах хранят нужные значения, которые используют 
    в CSS или JavaScript.


    Дата-атрибуты были созданы специально для того, чтобы хранить и работать с данными прямо 
    в HTML. Отсюда и префикс data, что в переводе значит данные. Например, с помощью 
    дата-атрибутов можно хранить значение выбранное в выпадающем списке прямо на элементе.



    Хранение данных на HTML-элементах так же полезно для инициализации виджетов в JavaScript. 
    Они могут находить нужные элементы, используя дата-атрибут как селектор, и читать данные 
    из атрибута. Например, в многостраничных приложениях HTML генерируется на сервере, и готовая 
    страница отправляется в ответ на запрос. Во время генерации в HTML можно подставить 
    дата-атрибуты с данными с сервера, и, таким образом, пробросить их в JavaScript.



    В теории для такой же цели можно использовать и обычный идентификатор id, но цель у 
    этого атрибута совсем другая. Плюс спецификация требует, чтобы значение атрибута id было 
    уникальным на всей странице.



    Дата-атрибутов на элементе может быть сколько угодно, потому удобно располагать отдельные кусочки 
    данных в свой атрибут. Такого точно нельзя достичь, используя только идентификатор.



    Браузер даёт возможность управлять дата-атрибутами через специальное API dataset.

*/ 










/* Егор Огарков советует

    🛠 Дата-атрибут можно использовать для применения стилей. Элементы можно 
    выделять CSS-селектора по атрибуту:

*/ 



// [data-id] {
//     /* Селектор для всех элементов с data-id */
//   }
  
//   [data-id="123"] {
//     /* Селектор только для элементов с data-id="123" */
//   }

// Найти элемент с data-id="123":



try {
    const elementThree = document.querySelector('[data-id="123"]')
} catch(err) {
    console.log(err)
    console.log(err.name)
    console.log(err.type)
}




/* 🛠 Некоторые фреймворки во время компиляции 

    самостоятельно генерируют дата-атрибуты и присваивают их к элементам, чтобы делать изоляцию CSS.

    🛠 Дата-атрибуты широко используются в автоматизированном тестировании. Для этого на 
    необходимых элементах расставляют дата-атрибуты, и тест обращается к ним. В документациях к 
    различным библиотекам для тестирования часто можно встретить атрибут data-testid.
    
*/ 