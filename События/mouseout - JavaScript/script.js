// mouseout


// Реагируем, когда курсор пользователя покидает элемент.



/* Кратко

	Событие на HTML-элементе. Происходит, когда пользователь передвигает курсор, 
	который находится на элементе, за пределы элемента.


	Событие является противоположным событию mouseover. Эти события часто 
	используются в паре.

*/ 




// Как пишется:



const div = document.querySelector('.block')

function getColorTwo() {
	const colorsTwo = [

		'#41E847', '#286C2D', '#2E9AFF', '#123E66', '#F498AD',
    	'#623D45', '#FF8630', '#663613', '#FFD829', '#665610'

		]
	return colorsTwo[Math.floor(Math.random() * colorsTwo.length)]
}




div.addEventListener('mouseout', (event) => {
	let currentColorTwo = getColorTwo()
	div.style.backgroundColor = currentColorTwo
})





/* Как понять

	Подробнее о механизме событий читайте в статье «События».



	Событие проще всего понять на демо. При событии mouseout мы меняем цвет 
	фигуры на случайный. Чтобы событие произошло, нужно навести курсор на фигуру, 
	а затем убрать его:

*/ 






const blockTwo = document.querySelector('.block-2')

const blockText = document.querySelector('.block-text')




function getColor() {
	const colors = [

		'#41E847', '#286C2D', '#2E9AFF', '#123E66', '#F498AD',
    	'#623D45', '#FF8630', '#663613', '#FFD829', '#665610'

		]
	return colors[Math.floor(Math.random() * colors.length)]
}


blockTwo.addEventListener('mouseout', (event) => {
	let currentColor = getColor()
	blockTwo.style.backgroundColor = currentColor
	blockText.style.color = currentColor
})













/* Николай Лопин советует

	🛠 С помощью пары событий mouseover и mouseout можно делать выпадающие 
	списки и меню. Но у таких меню могут быть проблемы с доступностью.



	🛠 Есть очень похожее событие mouseleave, но оно не всплывает. 
	Вместо этого для каждого элемента в цепочке вложенности 
	(с самого вложенного элемента, на котором произошло событие до <body>) 
	создаётся собственное событие. Если у вас глубокое DOM-дерево, то 
	таких событий может быть много. Это может привести к проблемам с 
	производительностью.

*/ 
