// Асинхронность в JavaScript

/* 

Конечно, я могу помочь вам понять основы асинхронности в JavaScript. 
В языке JavaScript асинхронность - это способность выполнения операций 
без блокировки других операций. Это позволяет выполнять длительные операции, 
такие как загрузка данных или выполнение запросов к серверу, не блокируя 
основной поток выполнения кода.



Существует несколько способов работы с асинхронным кодом в JavaScript:

Callbacks (Обратные вызовы): Обратные вызовы являются одним из 
старейших методов работы с асинхронным кодом в JavaScript. Вы передаете 
функцию в качестве аргумента другой функции, и она будет вызвана в момент 
завершения операции.


Пример:

function fetchData(callback) {
  setTimeout(() => {
    const data = 'Данные';
    callback(data);
  }, 2000);
}

fetchData((data) => {
  console.log(data);
});
Promises (Обещания): Обещания - это объекты, представляющие успешное завершение или неудачу асинхронной операции. Вы можете выполнить операции в цепочке с помощью методов then и catch.
Пример:

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Данные';
      resolve(data);
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
Async/Await: Async/Await - это синтаксический сахар над обещаниями, который делает код асинхронных операций более читаемым. Вы можете использовать ключевые слова async и await для работы с асинхронным кодом как синхронным.
Пример:

async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = 'Данные';
      resolve(data);
    }, 2000);
  });
}

async function getData() {
  const data = await fetchData();
  console.log(data);
}

getData();


*/


function hello() {
    console.log('hello')
}

function world() {
    console.log('world')
}

function myName() {
    console.log('ilishan')
}

function myAge() {
    console.log('I am 21 years old')
}

async function jump() {
    // Задержка начинается
    await new Promise((resolve, reject) => setTimeout(resolve, 4000))
    // Задержка завершается
    console.log('Jump')
}

async function fly() {
    // Задержка начинается
    await new Promise((resolve, reject) => setTimeout(resolve, 3000))
    // Задержка завершается
    await jump()
    console.log('Лечу')
}


async function age() {
    // Задержка начинается
    await new Promise((resolve, reject) => setTimeout(resolve, 3000))
    // Задержка завершается
    return 20
}

// let x = await age()
// console.log(x)



// console.log(await age())