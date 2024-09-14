/* Что такое Promise?

    Promise – это специальный объект, который содержит своё состояние. 
    Вначале pending («ожидание»), затем – одно из: fulfilled («выполнено успешно») 
    или rejected («выполнено с ошибкой»).



const listPromise = fetch('https://api.sampleapis.com/countries/countries')

Теперь мы можем следить за выполнением promise(Обещяние) с помошью специальной функцией then()

listPromise.then((data) => {
    console.log(data)
})

Response - это объект, наш ответ от сервера к которому мы обрашяемся


Для того что бы получить нашы данные нам нужно указать тип данных за которыми мы обращяемся
в нашем случае это json()

listPromise.then((data) => {
    data.json().then(countries => {
        console.log(countries)
        // Если произлошла ошибка есть функция .catch()
        // И в этой функции catch мы должны отловить эту ошибку
    }).catch((error) => {
        console.log(error)
        console.log(error.type)
        console.log(error.name)
    })
})


const listPromise = fetch('https://api.sampleapis.com/countries/countries')
Создаем наш собственный promise


const coffee = new Promise((resolve, reject)) первый параметр если все хорошо, второй если все плохо

const coffee = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Ваш коффе готов')
        reject(Error('Your coffee is done'))
    }, 1500);
})


coffee.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
    console.log(error.name)
    console.log(error.type)
})


*/ 


/* CODE

const family = [
    {member: 'mother', id: 111, coffee: 'Latte'},
    {member: 'father', id: 222, coffee: 'Espresso'},
    {member: 'son', id: 333, coffee: 'Cappuccino'},
]


const getCoffee = (member) => {
    const coffeePromise = fetch('https://api.sampleapis.com/coffee/hot')
    return coffeePromise.then(data => data.json())
    .then(list => {
        const coffee = list.find(res => res.title === member.coffee)
        return {
            ...member,
            coffee: coffee,
        }
    })
}


const getFamilyMember = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const member = family.find(res => res.id === id)
            if (member) {
                resolve(member)
            } else {
                reject(Error('Член семьи не найден!'))
            }
        }, 1500);
    })
}


getFamilyMember(111).then((data) => {
    return getCoffee(data)
}).then((newMember) => {
    console.log('newMember >>>', newMember)
}).catch((err) => {
    console.log(err)
    console.log(err.name)
    console.log(err.type)
})



*/

/* function - makeCoffee
const makeCoffee = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Ваш коффе готов')
        }, 500);
    })
}

*/

/* function - makeToast

const makeToast = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Ваши тосты готовы!')
        }, 2500)
    })
}


*/

// const coffeePromise = makeCoffee()
// const toastPromise = makeToast()

/*
coffeePromise.then((data) => {
    console.log(data)
})

toastPromise.then((data) => {
    console.log(data)
})

*/


/* Но бывает такая ситуация - 

    когда нам нужно сначала дождаться всех данных из всех источников
    и уже после этого продолжать выполнение нашей функции
    для этого используеться еще одна конструкция она называеться

    Promise.all()

*/ 

/* Promise.all()

Promise.all([coffeePromise, toastPromise]).then((data) => {
    console.log(data)
})

*/



/* диструктизация данных: 
 
Promise.all([coffeePromise, toastPromise]).then(([coffeePromise, toastPromise]) => {
    console.log(coffeePromise, toastPromise)
})

*/ 
5к43 










// ТЕПЕРЬ ТО ЖЕ САМОЕ НО С НАСТОЯЩИМИ API И МЕТОД FETCH





t

const beersPromise = fetch('https://api.sampleapis.com/beers/ale')
const winesPromise = fetch('https://api.sampleapis.com/wines/reds')



Promise.all([beersPromise, winesPromise]).then((data) => {
    return Promise.all(data.map(res => res.json()))
}).then((finalData) => {
    console.log(finalData)
}).catch((err) => {
    console.log(err)
    console.log(err.name)
    console.log(err.type)
}) 