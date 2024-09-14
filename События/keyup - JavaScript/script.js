 

 // keyup


// Событие, когда клавишу отпустили.




/* Кратко

	Событие keyup фиксирует момент отпускания клавиши после нажатия. 
	Таким образом, keyup это вторая фаза нажатия, первая фаза — keydown.

*/ 






// Как пишется 


const input = document.querySelector('[name="input"]')


input.addEventListener('keyup', (event) => {
	console.log('Нажата клавиша', event.key)
	console.log(event.type)
})


if (!console.clear()) {
	const clearConsole = setInterval(() => {
	console.clear()
}, 5000)

} else if (console.clear()) {
	clearInterval(clearConsole)
} 






/* Как понять 

	Демо меняет цвет фона при наступлении события keyup на любой клавише. 
	Если зажать любую клавишу на клавиатуре и не отпускать, то цвет меняться не будет:

*/ 
