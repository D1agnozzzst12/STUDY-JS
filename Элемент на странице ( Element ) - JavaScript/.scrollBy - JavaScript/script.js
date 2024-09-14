// .scrollBy()

// Прокрутить страницу на указанные величины.





// Кратко:

// Метод scrollBy() позволяет программно прокрутить элемент на определённое 

// количество пикселей относительно текущего положения.







// Пример:

// Для скролла внутри элемента (например, в <div>) нужно сначала получить этот элемент:


const div = document.querySelector('.text')
const button1 = document.querySelector('.btn-1')
const button2 = document.querySelector('.btn-2')



button1.addEventListener('click', () => {
    div.scrollBy(0, 100)
})


button2.addEventListener('click', () => {
    div.scrollBy(0, -100)
})








/* Как пишется

    window.scrollBy(x, y)

*/ 



/* Тут x и y — это координаты,

    на которые будет прокручено окно.



    Вместо координат в scrollBy() можно передать объект с тремя параметрами:



    1. top задаёт количество пикселей для прокрутки по оси y;

    2. left — то же самое, но по оси x;

    3. behavior определяет поведение прокрутки. По умолчанию резкое auto, но можно указать плавный smooth.

*/ 





const div2 = document.querySelector('.text-2')
const button3 = document.querySelector('.btn-3')
const button4 = document.querySelector('.btn-4')




button3.addEventListener('click', () => {
    div2.scrollBy({
        top: 150,
        left: 0,
        behavior: 'smooth',
    })
})

button4.addEventListener('click', () => {
    div2.scrollBy({
        top: -150,
        left: 0,
        behavior: 'smooth',
    })
})






// Как понять:

// scrollBy() необходим в случае, когда прокрутку нужно совершить относительно текущего положения. 

// В случае прокрутки до определённых координат на экране лучше воспользоваться scrollTo(), 

// а в случае прокрутки до конкретного элемента — методом scrollIntoView().