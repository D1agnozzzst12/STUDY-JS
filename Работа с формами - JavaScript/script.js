// let form = document.forms.form1 // также можно указать индекс: document.forms[0] и найдет первую форму которую нашел




/* Работа с radio кнопками 
let radioBtns = form.elements.radioBtn

console.log(radioBtns)

console.log(radioBtns[0])
console.log(radioBtns[1])
console.log(radioBtns[2])



console.log('radion is a checked ? >>>',radioBtns[0].checked)
console.log('radion is a checked ? >>>',radioBtns[1].checked)
console.log('radion is a checked ? >>>',radioBtns[2].checked)


console.log('Radio button value >>>',radioBtns[0].value)
console.log('Radio button value >>>',radioBtns[1].value)
console.log('Radio button value >>>',radioBtns[2].value)










*/


/* Работа с fieldset

let form = document.forms.form1 

let fieldset = form.elements.myFieldset

console.log(fieldset)

console.log(fieldset.elements.password)

*/













/* Работа с элементами select*/ 

// let form = document.forms.form1

// let select = form.elements.mySelect

// console.log(select)


// console.log(select.options)

// console.log(select.options[0])
// console.log(select.options[1])
// console.log(select.options[2])



/*  Проверка Выделины элементы options

console.log(select.options[0].selected)
console.log(select.options[1].selected)
console.log(select.options[2].selected)

console.log(select.selectedIndex)


console.log(select.options[0].value)
console.log(select.options[1].value)
console.log(select.options[2].value)

*/




/* Что бы сделать options отмеченным (selected) есть три способа


//  1. Способ


select.options[2].selected = true

console.log(select.options[2].selected)



// 2. Способ 

select.selectedIndex = 1



// 3. Способ


select.value = 'item1'

*/


/* Получаем value из mySelect2 через filter и map
  
    let form = document.forms.form1

    let select = form.elements.mySelect2

    let selected = [...select.options].filter(options => options.selected)
    .map(options => options.value)

    console.log(selected)

*/ 




/* Создаем свой собственный options*/ 


let form = document.forms.form1

let select = form.elements.mySelect2

// Первое значение - Текст который мы будем видеть 
// Второе значение - Его значение value
// Третье значение - Мы указываем true или false для отметки(selected), если false то
// selected будет отсутствовать 
let newOpt = new Option('Element 4', 'item7', true)

console.log(newOpt)

select.append(newOpt)

