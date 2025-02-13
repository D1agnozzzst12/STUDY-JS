// submit


// Пользователь отправляет форму, а мы реагируем.





/* Кратко

    Событие submit возникает, когда пользователь отправляет валидную форму. 

    Если форма невалидна и её нельзя отправить, то и submit не будет.

*/ 




// Как пишется:

// На submit можно подписаться и отреагировать, например, сказать спасибо:



const submitBtn = document.querySelector('#buttonSubmit')


submitBtn.addEventListener('submit', (event) => {
    console.log('Спасибо, что заполнили форму!')
})







/* Как понять

    Пользователь может отправить форму (и создать для нас событие submit) разными способами. 
    Например, нажать клавишу Enter внутри поля <input> или кликнуть по кнопке <button>.


    Если мы вытащим, например, кнопку <button> из формы, то событие submit при клике на 
    кнопку уже не произойдёт, потому что связи с формой больше нет. В то же время, нажатие 
    Enter внутри поля <input> будет работать.

*/ 







const formTwo = document.querySelector('.form-2')


formTwo.addEventListener('submit', () => {
    console.log('Случился submit')
})










/* Алексей Никитченко советует

    🛠 За отправкой формы лучше всегда наблюдать через подписку именно на событие submit.


    Это удобнее и правильнее, ведь submit связан сразу с каждым элементом формы, а 
    пользователь может отправить её разными способами. Например, нажать на клавишу 
    Enter в поле ввода и не трогать вовсе красивую кнопку подтверждения. В то же 
    время подписка на другие события, например, на click по кнопке, будет лишь 
    косвенно связано с отправкой формы.


    В примере ниже подпишемся на событие click по кнопке формы и выведем сообщение с названием 
    элемента, на котором сработает click. Попробуйте нажать Enter внутри поля ввода ⌨️

*/ 



const buttonSumbitTwo = document.querySelector('.button')

buttonSumbitTwo.addEventListener('submit', (event) => {
    console.log('Событие поймано на:', event.currentTarget)
})




/* Хотя мы не трогаем кнопку, событие click 

    на ней всё равно возникает. При отправке формы браузер «синтетически» кликает по 
    кнопке на случай, если какое-то действие привязано к ней, а не к submit. Выходит, 
    мы работаем с одним элементом, а событие возникает на другом.


    Иначе с submit — мы точно работаем с формой в целом, вместо отдельных элементов, и 
    улучшаем доступность для пользователей без мыши.
    
*/ 