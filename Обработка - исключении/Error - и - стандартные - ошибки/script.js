// Error и стандартные ошибки

// Какие бывают стандартные ошибки в JavaScript, и как создавать собственные типы ошибок.


/* Кратко

    Программа может работать правильно, только если код написан корректно 
    и не содержит ошибок. JavaScript умеет обрабатывать некорректный код и
    сообщать об ошибке в коде. Существует семь встроенных видов ошибок, 
    также можно создать свои собственные. Встроенные ошибки генерируются 
    самим движком JavaScript при выполнении программы, а пользовательские — 
    создаются с помощью конструктора Error. Оба типа ошибок можно ловить в
    конструкции try...catch.

*/ 

// Как понять

// Error

// Общий конструктор ошибок.

new Error('Общая ошибка. Проверьте код')




// Вызов конструктора возвращает объект ошибки со следующими свойствами:

/*

    1. message представляет понятное человеку описание ошибки для
    встроенных типов (SyntaxError, TypeError и так далее) и переданное
    в конструктор значение для общего типа Error;



    2. name — имя типа (класса) ошибки

*/ 


const commonError = new Error('Общая ошибка. Проверьте код')


console.log(commonError.message)
// 'Общая ошибка. Проверьте код'


console.log(commonError.name)

// 'Error'


/* Нестандартное свойство stack показывает,

    на какой строке кода возникла ошибка. Первая строка отформатирована как
    <имя класса ошибок>: <сообщение об ошибке>, и за ней следует серия кадров
    стека (каждая строка начинается с «at»).



    Пример из документации к движку V8:

    ReferenceError: FAIL is not defined
    at Constraint.execute (deltablue.js:525:2)
    at Constraint.recalculate (deltablue.js:424:21)
    at Planner.addPropagate (deltablue.js:701:6)
    at Constraint.satisfy (deltablue.js:184:15)
    at Planner.incrementalAdd (deltablue.js:591:21)
    at Constraint.addConstraint (deltablue.js:162:10)
    at Constraint.BinaryConstraint (deltablue.js:346:7)
    at Constraint.EqualityConstraint (deltablue.js:515:38)
    at chainTest (deltablue.js:807:6)
    at deltaBlue (deltablue.js:879:2)
  
  */ 


/* Встроенные ошибки 

    SyntaxError 
    Чаще всего встречаются опечатки — неправильные названия методов,
    лишние или отсутствующие точки с запятой или скобочки и так далее.
    Такой тип ошибок называется «синтаксическим», SyntaxError:

*/ 



    // console.log(;)
    // SystaxError: Unexpected token ';'


    // console.log(()
    // SystaxError: missing ) after argument list





// ReferenceError

// Если попытаться обратиться к несуществующей переменной, произойдёт ошибка ReferenceError:


// console.log(name)
// ReferenceError: name is not defined




// TypeError

// Если попытаться обратиться к несуществующему свойству, произойдёт ошибка TypeError:


// console.log(null.length)
// TypeError: Cannot read property 'length' of null


// undefined()
// TypeError: undefined is not a function




// RangeError

// Ошибка для значений, которые выходят за диапазон допустимого.

// new Array(10000000000)
// RangeError: Недопустимая длина массива



// URIError

// Этот тип ошибок возникает при неправильном использовании обработки URI.

// decodeURIComponent('%')
// URIError: URI malformed





// EvalError

// EvalError представляет ошибку, возникающую в глобальной функции eval().

// eval (  
//     'console.log(null.length)'
// )


// Эта ошибка в настоящее время не используется и остаётся для совместимости
//  с предыдущими версиями JavaScript.




// InternalError(не стандартно)

// Ошибка внутри движка JavaScript. Не является стандартом и почти не используется. Например:

// "InternalError: инициализатор массива слишком большой".






// Собственный класс ошибок

// Можно расширять базовый класс Error и создавать собственные типы ошибок.


class WrongDataTypeForSumError extends Error {
    constructor(message) {
        super(message)
        this.name = 'WrongDataTypeForSumError'
    }
}


const myCustomError = new WrongDataTypeForSumError('Невалидный тип данных для суммирования')


// Сгенерируем ошибку WrongDataTypeForSumError в случае, если хотя
//  бы один из аргументов функции sum — не число.



function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new WrongDataTypeForSumError('Невалидный тип данных для суммирования')
    }
    return a + b
}

console.log(sum('1', 2))
// VM840:3 Uncaught WrongDataTypeForSumError:
// Невалидный тип данных для суммирования
// at sum (<anonymous>:3:11)
// at <anonymous>:9:13
// WrongDataTypeForSumError @ VM830:3
// sum @ VM840:3
// (anonymous) @ VM840:9



/* Функция будет выполняться только в том случае, если

    оба аргумента будут числами, в противном случае функция будет возвращать 
    ошибку WrongDataTypeForSumError.



    Собственные типы ошибок делают отладку более наглядной — например,
     из имени WrongDataTypeForSumError сразу понятно, что не так с кодом.
      Стандартная ошибка для таких случаев — TypeError — менее читаема.
      
*/ 