// scroll


// Событие, когда что-то прокручивается.





/* Кратко

    scroll — это событие, когда пользователь прокручивает страницу или элемент в любой плоскости. 
    Способами прокрутки могут быть: колесо мыши, кнопки клавиатуры, полосы прокрутки на экране.



    👾 Существует похожее на scroll событие wheel. Оно происходит, когда пользователь 
    прокручивает колесо мыши, при этом реального прокручивания может и не происходить.

*/ 




// Как пишется:


document.addEventListener('scroll', (event) => {
    console.log(event)
})


const consoleClear = setTimeout(() => {
    console.clear()
}, 5000)

if (console.clear()) {
    clearTimeout(consoleClear)
}




/* scroll использует базовый элемент события, 

    в котором отсутствует информация о скорости прокрутки и направлении.


    Чтобы понять, насколько прокрутилась страница или элемент, этот элемент 
    получают из DOM-дерева или ключевого слова this и запрашивают свойства 
    scrollTop или scrollLeft.
    
*/ 




const divText = document.querySelector('.text')

divText.addEventListener('scroll', (event) => {
     // Получаем высоту элемента,
  // на котором произошло событие
  console.log(this.scrollTop)
})








/* Николай Лопин советует 

    🛠 Если вы подписались на scroll, то приготовьтесь получать большое количество событий. 
    Событие будет приходить примерно на каждый кадр. Поэтому в обработчике не рекомендуется 
    производить тяжёлых вычислений и модификации DOM. Это приведёт к потере кадров при 
    отрисовке и ощущению, что сайт тормозит.



    🛠 Избежать большого количества событий scroll можно, используя технику под 
    названием throttling. Её смысл состоит в том, чтобы принимать следующее событие 
    только после истечения некоторого промежутка времени.

*/ 




const throttle = (func, limit) => {
    let lastFunc
    let lastRan
    return function() {
      const context = this
      const args = arguments
      if (!lastRan) {
        func.apply(context, args)
        lastRan = Date.now()
      } else {
        clearTimeout(lastFunc)
        lastFunc = setTimeout(function() {
          if ((Date.now() - lastRan) >= limit) {
            func.apply(context, args)
            lastRan = Date.now()
          }
        }, limit - (Date.now() - lastRan))
      }
    }
  }
  
  // Код будет срабатывать раз в 1 секунду
  document.addEventListener('scroll', throttle(function() {
    return console.log('Hey! It is', new Date().toUTCString())
  }, 1000))