// invalid

// Проверяем валидность формы.






// Кратко:

// Событие invalid срабатывает при попытке отправить форму с неверными значениями. 

// Например, если не заполнено одно из необходимых полей.



// Как пишется:

// На invalid можно подписаться и отреагировать, например, вывести фразу или массив с 

// неправильными данными в консоль:




// const gandalf = document.querySelector('input')

// gandalf.addEventListener('invalid', (event) => {
//     console.log('Не пройдешь!')
//     console.log(event)
//     console.log(event.target)
//     console.log(event.type)
// })








/* Как понять

    Событие invalid срабатывает после события submit при проверке полей формы, если значение 
    в одном из полей не соответствует условию.


    Если в форме ниже ввести значение 6, сработает событие invalid, так как на поле есть проверка max=5:

*/ 



/* HTML - 

<form>
  <label for="input-containter">
    Введите количество пчёл от 1 до 5:
  </label>
  <input id="input-containter" type="number" min="1" max="5" required>
</form>
<div>
  <button type="submit" value="submit">
    Получить мёд
  </button>
</div>

*/ 



const input = document.querySelector(`input`)

input.addEventListener('invalid', (event) => {
    console.log('Неправильная пчела')
    console.log(event)
    console.log(event.target)
    console.log(event.type)
})
console.log(input)