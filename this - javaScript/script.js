


// console.log('this глобальный >>>', this)


// function func() {
//     console.log('this в теле функции >>>', this)
// }

// func()


// /* 
// const user = {
//     name: 'Ilishan',
//     age: 21,
//     logThis: function() {
//         console.log('this в теле метода объекта user >>>', this)
//         console.log('this.name >>>', this.name)
//         console.log('this.age >>>', this.age)
//     },
//     address: {
//         city: 'Moscow',
//         zipcode: 123456,
//         logInnerThis: function() {
//             console.log('this в теле метода объекта address >>>', this)
//             console.log('this.city >>>', this.city)
//             console.log('this.zipcode >>>', this.zipcode)
//         }
//     }
// }

// user.logThis()

// user.address.logInnerThis()

// */





// const user = {
//     name: 'ilishan',
//     age: 21,
//     logThis() {
//         console.log('this в теле метода объекта user >>>', this)
//     }
// }

// user.logThis()











// const user1 = {name: 'Misha'}

// const user2 = {name: 'Vasy'}


// function logInfo() {
//     console.log('this >>>', this)
//     console.log('this.name >>>', this.name)
// }


// logInfo()



// user1.logName = logInfo

// user2.logName = logInfo

// user1.logName()
// user2.logName()
























/* ЗАДАЧА - 1  

const calculator = {
    read: function () {
        this.a = Number(prompt('Введите первое число:', 0))
        this.b = Number(prompt('Введите второе число:', 0))
    },
    sum: function() {
        return this.a + this.b
    },

    mul: function() {
        return this.a * this.b
    }
}

calculator.read()
console.log('calculator >>>', calculator)
console.log('Сумма >>>', calculator.sum())
console.log('Произведение', calculator.mul())

*/










/* ЗАДАЧА - 2*/ 


const ladder = {
    step: 0,
    up() {
        this.step++
        return this
    },
    down() {
        this.step--;
        return this
    },
    showStep() {
        console.log('Current step >>>',this.step) // Показывает текушую ступенку
        return this
    }
}

// ladder.up()
// ladder.up()
// ladder.up()
// ladder.showStep()
// ladder.down()
// ladder.showStep()
// ladder.down()
// ladder.showStep()
// ladder.down()
// ladder.showStep()
// ladder.down()
// ladder.showStep()


ladder
.up()
.up()
.showStep()
.down()
.showStep()
.down()
.showStep(  )