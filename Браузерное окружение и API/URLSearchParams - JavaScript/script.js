// URLSearchParams

// Получить или отформатировать поисковые параметры из URL без боли


/* Кратко

    URLSearchParams — это класс, предоставляющий удобное API для формирования строки
    поисковых параметров, которую потом можно использовать для формирования полного адреса.
    Все параметры в строке будут закодированы для безопасной вставки в адрес.
    Также этот класс можно встретить как часть класса URL.

*/ 


// Пример

// Создаём экземпляр класса параметров поиска:


const params = new URLSearchParams({count: '10'})

// Далее мы можем добавлять или удалять параметры:


// Добавление

params.append('size', 'lg')
console.log(params.toString())
// 'count=10&size=lg'



// удаление
params.delete('count')
console.log(params.toString())
// 'size=lg'

// удаление




// Повторное добавление параметра с тем же именем добавит ещё одно значение с таким же именем, 
// а получение всех возможных значений вернёт все добавленные значения:



params.append('size', 'xl')
console.log(params.getAll('size'))
//['lg', 'xl'] 


// Получение параметров в виде строки:



const paramsString = params.toString()
console.log(paramsString)
// 'count=10&size=lg&size=xl'


const url = `/caralog/?${paramsString}`
console.log(url)
// '/catalog/?count=10&size=lg&size=xl'
















/* Как понять

    Когда нужно сформировать URL, включающий в себя строку поиска, то удобнее всего использовать 
    URLSearchParams. Раньше для той же операции нужно было использовать цикл, в котором строка 
    собиралась вручную, а также делать её безопасной для вставки в адрес с помощью encodeURLComponent().
    Сейчас же можно использовать специальный класс и управлять им с помощью предоставляемого API.

*/ 



// Как пишеться

/* Создание экземпляра класса

    При создании URLSearchParams мы можем передать аргумент в виде объекта, состоящего из полей со
    строками/цифрами или поисковую строку из адреса страницы. Это создаст новый экземпляр с уже
    добавленными в него параметрами.

*/ 



const emptyParams = new URLSearchParams()
const paramsFromUrl = new URLSearchParams(window.location.search)
const paramsTwo = new URLSearchParams({minPrice: '1000', maxPrice: '2000'}) 

console.log(emptyParams.toString())
// ''

console.log(paramsTwo.toString())
// 'minPrice=1000&maxPrice=2000'














/* Добавление 

    Добавление нового параметра в поиск производится с помощью метода append('ключ', 'значение') и 
    принимает пару ключ/значение.

*/ 


const paramsThree = new URLSearchParams()

paramsThree.append('color', 'red')

console.log(params.toString())

// 'color=red'















/* Запись

    При записи по имени, параметр добавится, если до этого такого не существовало, и заменит значение,
    если таковой существовал ранее.

*/ 



const paramsFour = new URLSearchParams()

paramsFour.set('size', 'lg')

console.log(paramsFour.toString())
// 'size=lg'

params.append('size', 'xl')

console.log(paramsFour.toString())
// size=lg&size=xl


paramsFour.set('size', 'sm')

console.log(paramsFour.toString())
// 'size=sm'















/*  Получение

    С помощью методов get('ключ') и getAll('ключ') можно читать уже хранящиеся параметры.

    1. get() - вернёт первое добавленное в поле значение;
    2. getAll() – вернёт все значения, добавленные в поле

*/



const paramsFive = new URLSearchParams()

paramsFive.append('size', 'lg')
console.log(paramsFive.get('size'))
// 'lg'



paramsFive.append('size', 'xl')
console.log(paramsFive.get('size'))
// lg


console.log(params.getAll('size'))
// ['lg', 'xl']
















// Проверка наличия

// has('ключ') – проверяет, был ли добавлен параметр с таким именем.



const paramsSix = new URLSearchParams()

paramsSix.append('size', 'lg')
console.log(paramsSix.has('size'))
// true


console.log(paramsSix.has('count'))
// false















/* Получение имён всех параметров

    Можно получить имена всех параметров, записанных в поиск, используя метод keys().
    Результатом выбора будет итератор.

*/ 





const paramsSeven = new URLSearchParams('count=10%&size=lg&size=xl')

for (let value of paramsSeven.keys()) {
    console.log(value)
}

// 'count' 
// 'size'
// 'size'



// Если параметр был добавлен несколько раз, он также будет добавлен в итератор в том же количестве,
//  сколько раз был добавлен














/* Получение всех значений параметров

    Метод values() получает значения параметров аналогично получению имён их
     параметров из примера выше.

*/ 


const paramsEight = new URLSearchParams('count=10&size=lg&size=xl')


for (let value of paramsEight.values()) {
    console.log(value)
}












/* Получение всех параметров

    По аналогии с предыдущими двумя методами entries() получает итератор, 
    содержащий пары ключ/значение.

*/ 



const paramsNine = new URLSearchParams('count=10&size=lg&size=xl')


for (let [key, value] of paramsNine.entries()) {
    console.log(key, value)
}











// Удаление

// Удаляет параметр из поиска по ключу delete('ключ').



const paramsTen = new URLSearchParams('count=10&size=lg&size=xl')

paramsTen.delete('size')

console.log(paramsTen.toString())

// 'count=10'









// Сортировка

// Метод sort() предоставляет возможность отсортировать параметры по алфавиту.


const paramsEleven = new URLSearchParams('a=1&z=4&d=2&x=3')



paramsEleven.sort()
console.log(paramsEleven.toString())
// // 'a=1&d=2&x=3&z=4'



/* Перебор 

    Метод forEach() перебирает значения, содержащиеся в поиске. Функция, переданная в метод,
    будет вызвана для каждого элемента в поиске и получит три аргумента – название параметра,
    значение параметра и сам экземпляр поиска.

*/ 


const paramsTwelve = new URLSearchParams('count=10&size=lg&size=xl')

paramsTwelve.forEach((key, value, params) => {
    console.log(key, value, params)
})





















/* Приведение параметров к строке

    После того как параметры сформированы, можно сохранить их в строку с помощью метода toString()
    и использовать для обновления адреса страницы.

*/ 



const paramsTherTen = new URLSearchParams()

paramsTherTen.append('size', 'lg')
paramsTherTen.append('size', 'lg')

paramsTherTen.toString()

console.log(paramsTherTen)


















/* Павел Минеев советует

    Формирование url для запроса в API
    Класс URLSearchParams хорошо подходит для формирования строки адреса при запросе в API.
    Например, если нужно сделать запрос с фильтрами или другими параметрами поиска.

*/ 


// Без URLSearchParams:


  // формируем строку вручную
try {
    const paramsMineev = {
        size: 'xl',
        count: 10,
        page: 2,
      }
      
    const paramsStringTwo = Object.entries(paramsMineev)
    .map(
      ([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join('&')
  
  fetch(`/catalog/t-shirts?${paramsStringTwo}`)

} catch(error) {
    console.log(`Ошибка: ${error}`)
    console.log(`Имя ошибки: ${error.name}`)
    console.log(`Тип ошибки: ${error.type}`)
} 













//   URLSearchParams упрощает решение этой задачи:

try {
    const paramsStringThree = new URLSearchParams({
        size: 'xl',
        count: 10,
        page: 2,
    }).toString()
    
    fetch(`/catalog/t-shirts?${paramsStringThree}`)
    
        
} catch(error) {
    console.log(`Ошибка: ${error}`)
    console.log(`Имя ошибки: ${error.name}`)
    console.log(`Тип ошибки: ${error.type}`)
}



/* Парсинг параметров из URL 

    Так как URLSearchParams может получать параметры в виде строки, то его можно использовать как парсер
    текущего адреса страницы. Так мы можем без труда модифицировать их и обновлять адрес.

*/ 

// const paramsFourTeen = new URLSearchParams(window.location.search)

// paramsFourTeen.append('size', 'lg')

// window.location.assign(
//   `${window.location.origin}${window.location.pathname}?${paramsFourTeen.toString()}`
// )
