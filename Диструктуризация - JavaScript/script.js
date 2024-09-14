


// const employee = {
//     firstName: 'Ivan',
//     lastName: 'Ivanov',
//     middleName: 'Ivanovich',
//     message: 'Hello'
// }

 
// const {firstName, lastName} = employee


// console.log(firstName)
// console.log(lastName)

// console.log(employee)



/* how do not do

    let middleName;
    let message;

    let {middleName, message} = employee

    console.log(err)
    console.log(err.type)
    console.log(err.name)

*/


/* how to do right

let middleName
let message

// Без let и в скобках

( {middleName, message} = employee)


console.log(middleName, message)


*/

//  Значение по умолчянию в диструктуризации

// const employee = {
//     firstName: 'Ivan',
//     lastName: 'Ivanov',
//     middleName: 'Ivanovich',
//     message: 'Hello',
//     role: 'user',
// }

// let { firstName, lastName, role = 'admin' } = employee

// console.log('firstName >>>', firstName)

// console.log('lastName >>>', lastName)

// console.log('role >>>', role)


// console.log(employee)











// Извлекаем свойство ключа в переменную с альтернативным именем не как у ключа



// const employee = {
//     firstName: 'Ivan',
//     lastName: 'Ivanov',
//     middleName: 'Ivanovich',
//     message: 'Hello',
//     role: 'user',
// }

// let { firstName: fName, lastName: lName } = employee

// console.log(fName)
// console.log(lName)

// console.log(employee)











// Диструктуризация вложенных объектов

// const employee = {
//     firstName: 'Ivan',
//     lastName: 'Ivanov',
//     middleName: 'Ivanovich',
//     message: 'Hello',
//     permission: {
//         canEdit: true,
//         canDelete: false,
//         role: 'user',
//     }
// }


// const { permission: { canEdit, canDelete } } = employee

// console.log(canEdit)
// console.log(canDelete)




// const userInfo = {
//     name: 'Ilishan',
//     lastName: 'Gazdiev',
//     middleName: 'Movsarovich',
//     age: 21,
//     address: {
//         country: 'Russia',
//         respublic: 'Ingushetia',
//         city: 'Chermen',
//         street: 'Kirova',
//         house: 28,
//     }
// }



// const { name, lastName, middleName, age } = userInfo 

// console.log('Имя >>>', name)
// console.log('Фамилия >>>', lastName)
// console.log('Отчество >>>', middleName)
// console.log('Возраст >>>', age)

// const { address: { country, respublic, city, street, house } } = userInfo


// console.log('Страна >>>', country)
// console.log('Республика >>>', respublic)
// console.log('Город >>>', city)
// console.log('Улица >>>', street)
// console.log('Дом >>>', house)









// const employee = {
//     firstName: 'Ivan',
//     lastName: 'Ivanov',
//     middleName: 'Ivanovich',
//     message: 'Hello',
//     permission: {
//         canEdit: true,
//         canDelete: false,
//         role: 'user',
//         app: {
//             someApp: 'The first app',
//             secondApp: 'The second app'
//         }
//     }
// }


 
// const { permission: { app: { someApp, secondApp } } } = employee


// console.log('someApp >>>', someApp)

// console.log('secondApp >>>', secondApp)
















const employee = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    middleName: 'Ivanovich',
    message: 'Hello Mother Fucker',
    permission: {
        canEdit: true,
        canDelete: false,
        role: 'user',
        app: {
            someApp: 'The first app',
            secondApp: 'The second app'
        }
    }
}




function say( { firstName, message } ) {
    console.log(firstName + ': ' + message)
}


say(employee)


function sayTwo({firstName, lastName, middleName}) {
    console.log(`
        
        Фамилия: ${lastName},
        Имя: ${firstName},
        Отчество: ${middleName},

        `)
}

sayTwo(employee)












// Диструктуризация Массива




// const colors = ['red', 'blue', 'orange', 'brown']


// const [ red, blue,, brown ] = colors // если нам нужно пропустить какой нубудь элемент то стовим ' , ' 

// ['red', 'blue', 'orange', 'brown'] 
// liek that: [ rec, blue,, brown ]


// console.log(red, blue, brown)




// Вложеный массив


const colors = ['red', ['green'], 'blue', 'orange', 'brown']

const [red, [green], blue, orange, brown] = colors


console.log(red)
console.log(green)



const anotherColors = ['yellow', 'black', [['aqua']]]


const [yellow, black, [[aqua]]] = anotherColors

console.log(yellow)
console.log(black)
console.log(aqua)



const array = ['element1', 'element2', 'element3', 'element4', 'element5']

const [firstElementOnArray,,,, theLastElementOnArray] = array

console.log('Массив:', array)
console.log(firstElementOnArray)
console.log(theLastElementOnArray)








/* ОБМЕН ЗНАЧЕНИЯМИ

    При деструктуризации массивов можно поменять
    значения переменной местами

*/ 



// ОБМЕН ЗНАЧЕНИЯМИ

// let a = 1
// let b = 2

// let temp = a
// a = b

// b = temp


// console.log(a, b)


// Можно сделать код сверху по изашнее


try {

    let a = 1

    let b = 2

    [a, b] = [b, a]
    console.log(a, b)

} catch(err) {
    
    console.log('Error: ', err)
    console.log('Error type: ', err.type)
    console.log('Error name: ', err.name)

}

















/* МНОЖЕСТВО (Set)

    Деструктуризацию можно применять к множествам.

*/  




// const mySet = new Set(['Igor', 'Antonov'])

// const [firstName, lastName] = mySet

// console.log(firstName)
// console.log(lastName)









// const myMap = new Map()

// myMap.set('firstName', 'Igor')
// myMap.set('lastName', 'Antonov')

// const [firstName, lastName] = myMap

// console.log(firstName)
// console.log(lastName)








const myMap = new Map()

myMap.set('firstName', 'Igor')
myMap.set('lastName', 'Antonov')


const [[, firstNameTwo], [, lastName]] = myMap


console.log(firstNameTwo)
console.log(lastName)


const myMapTwo = new Map()


myMapTwo.set('Name:', 'Ilishan')
myMapTwo.set('lastName:', "gazidev")



const albumList1 = new Set(['White Album', 'Revolver', 'Help!'])
const albumList2 = new Set(['Revolver', 'Rubber Soul', 'Help!', 'Abbey Road'])

const result = albumList1.symmetricDifference(albumList2)

console.log(result)

