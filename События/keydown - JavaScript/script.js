

// keydown


// Событие, когда клавишу нажали.


/* Кратко

	Событие keydown фиксирует момент нажатия клавиши ещё до того, как 
	эта клавиша будет отпущена. Отпускание клавиши становится событием keyup.

*/ 




// Как пишется:

const inputText = document.querySelector('[name="inputText"]')


inputText.addEventListener('keydown', (event) => {
	console.log('Нажата клавиша', event.key)
	console.log(event.target)
	console.log(event.currentTarget)
	console.log(event.type)
})




/* Алекс Стегура советует

	🛠 События помогут добавить горячие клавиши на сайт. Например, 
	открывать меню по комбинации клавиш или скрывать окна по кнопке Esc.


	🛠 Существует похожее событие keypress, оно устаревшее. 
	Вместо него нужно использовать keydown.

*/ 
