// Function - DECLARATION




// Function return


function calculateNumber() {
    let x = 5
    x = x + 100
    x = x / 5
    return x
}


const result = calculateNumber()

console.log(result)



// Function parameter


function calculateNumberTwo(initialValue) {
    let x = initialValue
    x = x + 100
    x = x / 5
    console.log(x)
    return x

}


calculateNumberTwo(6)


function calculateCircleArea(circleRadius) {
    const area = 3.14 * circleRadius ** 2
    return area
}

const circleArea1 = calculateCircleArea(40)
console.log(circleArea1)


const circleArea2 = calculateCircleArea(5)
console.log(circleArea2)




// function creating html element



function createHTMLElement() {
    const element = document.createElement('div')
    element.id = '1'
    element.innerText = 'some text'
    return element
}


const newElement = createHTMLElement()
console.log(newElement)






function createHTMLElementTwo(tag, id, text) {
    const elementTwo = document.createElement(tag)
    elementTwo.id = id
    elementTwo.innerText = text
    return elementTwo
}



const h1Element = createHTMLElementTwo('h1', 'header_1', 'some text')

document.body.append(h1Element)






// Function параметры по умолчянию


function createHTMLElementThree(tag = 'button', text = 'submit', id = 'btn') {
    const element = document.createElement(tag)
    element.id = id
    element.innerText = text
    return element
}


const divElement = createHTMLElementThree()

document.body.append(divElement)






// Function parameters argument


function logArgsToConsole() {
    if (!arguments.length) {
        return;
    }
    for (let argument of arguments) {
        console.log(argument)
    }
    console.log('Больше аргументов нет')

}
logArgsToConsole(1)





// Function - EXPRESSION



const sayHello = function() {
    console.log('hello')
}
sayHello()








// Стрелочные функции


const sayBye = () => {
    console.log('bye')
}


sayBye()




// primer strelochnoy function


