// .blur()

// Снимает фокус с DOM-элемента, на котором вызван.




/* Кратко

    Вызов метода blur() на DOM-элементе снимает фокус с элемента. 
    Порождает событие blur, которое можно обработать с помощью addEventListener().

*/ 




// Как пишется 

// Метод blur() не принимает аргументов:


const input = document.getElementById('input')
const button = document.getElementById('button')
const buttonOnFocus = document.getElementById('buttonOnFocus')


button.addEventListener('click', () => {
    input.blur()
})

buttonOnFocus.addEventListener('click', () => {
    input.focus()
})



/* Как понять 

    Метод blur() используют чтобы программно снять фокус с элемента.


    Самым распространённым применением является снятие фокуса с текущего элемента при 
    появлении всплывающего окна, которое закрывает весь текущий интерфейс. Это необходимо, 
    чтобы фокус с клавиатуры двигался по элементами окна, а не по элементам под ним.

*/ 



// На практике


/* Николай Лопие советует

    🛠 Чаще всего нужно не просто снять фокус с элемента, а сразу переместить его на другой элемент. 
    В этом случае лучше использовать метод focus() на целевом элементе. Фокус с текущего элемента 
    будет снят автоматически.

*/ 