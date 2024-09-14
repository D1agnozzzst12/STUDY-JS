// Map

// Коллекция для хранения данных по ключу.



/* Кратко

    Map — коллекция для хранения данных любого типа в виде пар [ключ, значение], 
    то есть каждое значение сохраняется по уникальному ключу, который потом используется 
    для доступа к этому значению. Причём в качестве ключей тоже принимаются значения любого типа.

*/ 




// const myMap = new Map()


// myMap.set('name', 'ilishan')
// myMap.set('lastName', 'Gazdiev')
// myMap.set('middleName', 'Movsarovich')

// console.log(myMap)


// myMap.forEach((item) => {
//     console.log(item)
// })


// console.log(myMap.size)

// myMap.delete('name')
// console.log(myMap)

// console.log(myMap.values())
// console.log(myMap.keys())
// console.log(myMap.entries())
















// Пример:


const someData = new Map()

someData.set('1', 'Значение под строковым ключом 1')

someData.set(1, 'Значение под числовым ключом 1')

someData.set(true, 'Значение под булевым ключом true')


console.log(someData.size)
// 3



console.log(someData.get('1'))
// Значение под строковым ключом 1


console.log(someData.has(true))
// true


someData.clear()

console.log(someData.size)








/* Как понять

    Создание коллекции:

    Коллекция создаётся при помощи конструктора. Можно создать пустой Map:

*/  

const map = new Map()

console.log(map.size)
// 0






/* А можно сразу передать начальные значения. Для этого в конструктор нужно передать массив, 

    состоящий из других массивов. Эти массивы должны состоять из двух элементов: первый элемент — ключ, 

    а второй — значение:

*/ 


const mapTwo = new Map([['js', 'JavaScript'], ['css', 'Cascading Style Sheets']])


console.log(mapTwo.size)

console.log(mapTwo)






const map3 = new Map()

map3.set('html', 'HTML')
map3.set('css', 'CSS')
map3.set('js', 'JavaScript')



for (let [key, value] of map3) {
    console.log(`${key}: ${value}`)
}


map3.forEach((value, key) => {
    console.log(`${key}: ${value}`)
})




const array = ['gazdiev', 'ilishan', 2, 4, 5, 6,]


const hasAnyName = array.some(item => {
    if(item === 'ilishan') {
        console.log(item)
    } else {
        Error('We not found this element !!!')
    }
})