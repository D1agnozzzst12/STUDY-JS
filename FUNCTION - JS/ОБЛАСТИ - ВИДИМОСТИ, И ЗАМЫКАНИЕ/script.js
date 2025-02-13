// Область видимости JS


/* Область видимости

    Область видимости в JavaScript определяет, где и какие переменные могут быть использованы
    в коде. В JavaScript существует три типа области видимости


    1. Глобальная область видимости 

    Глобальная область видимости - это область видимости, в которой переменные могут быть 
    использованы в любом тесте в программе. Переменные, объявленые в глобальной области
    видимости , могут быть доступны в любой другой области видимости.


*/ 


let globalVariable = 'Я глобальная переменная'

function myFunction() {
    console.log(globalVariable)  // Выводит: Я глобальная переменная
}

myFunction()





// Локальная область видимости


/* Локальная Область Видимости

    Локальная область видимости - это область видимости , в которой переменные могут быть использованы
    только внутри определенной функции или блока кода. Переменные, 
    объявленные в локальной области  видимости, не могут быть доступны в других областях видимости.

*/ 


function myFunctionTwo() {
    let localVariable = 'Я локальная переменная'
    console.log(localVariable) // Выводит: Я локальная переменная
}
myFunctionTwo()

try {
    console.log(localVariable) // Выводит: ReferenceError: localVariable is not defined
} catch(error) {
    console.log(error.name)
    console.log(error.message)
}







//Блочная область видимости


/* Блочная Область Видимости

    Блочная область видимости - это область видимости, в которой 
    переменные могут быть использованы только внутри определенного
    блока кода. Блок кода определяется фигурными скобками {}.
    Переменные, объявленные в блочной области видимости, не могут быть доступны в других областях
    видимости.

*/ 


try {
    function myFunctionThree() {
        if (true) {
            let blockVariable = 'Я в блоке'
            console.log(blockVariable) // Выводит: Я в блоке
        }
        console.log(blockVariable) // Выводит: ReferenceError: blockVariable is not defined
    }
    myFunctionThree()

} catch(error) {
    console.log(error.name)
    console.log(error.message)
}









// ЗАМЫКАНИЕ


/* Замыкание 

    Замыкание - это функция, которая запоминает переменные из
    своей внешней области видимости , даже после того, как это область
    видимости была завершена

*/ 



/* КАК СОЗДАВАТЬ ЗАМЫКАНИЕ ?

    Замыкание создается путем определения функции внутри другой функции, 
    и доступа к переменной внешней функции из внутренней функции.

*/ 



function outerFunction() {
    let outerVariable = 'Я глобальная переменная'

    function innerFunction() {
        console.log(outerVariable) // Выводит: Я глобальная переменная
    }

    return innerFunction;
}

let innerFunc = outerFunction();
innerFunc()




// ЗАЧЕМ ИСПОЛЬЗОВАТЬ ЗАМЫКАНИЕ ?

/* Зачем использовать замыкание 

    Замыкание могут быть использованы для сохранения данных между вызовами
    функции, скрытия данных от внешнего кода, создание приватных переменных и
    методов, и многого другого.

*/ 

function counter() {
    let count = 0

    function increment() {
        count++;
        console.log(count)
    }
    return increment;

}


let myCounter = counter()
myCounter() //Выводит: 1
myCounter() //Выводит: 2
myCounter() //Выводит: 3



// ====================================== ЗАКЛЮЧЕНИЕ ======================================

/* Заключение

    Замыкание и область видимости - это важные концепции в JavaScript,
    которые могут быть использованы для улучшения струкруры и эффективности
    кода.

*/ 