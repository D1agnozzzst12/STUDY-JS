// .closest()

// Возвращаем ближайший родительский элемент, который соответствует

 // нужному CSS-селектору.




/* Кратко

	Метод Element.closest() ищет и возвращает ближайший (начиная с самого элемента) 
	родительский элемент, соответствующий указанному CSS-селектору. Если ни один 
	элемент не соответствует указанному CSS-селектору, возвращается null.

*/ 



/* Пример 

	Для элемента <div id="25" class="common"> найдём ближайшие родительские элементы, 
	соответствующие селекторам '.container' и 'div.common':

*/ 



const element = document.getElementById('25')
const closestElement1 = element.closest('.container')
const closestElement2 = element.closest('div.common')


console.log(closestElement1)
// <header class="container-header container">



console.log(closestElement2)
// <div id="25" class="common">






/* Как пишется

	Element.closest() принимает в качестве аргумента строку с искомым CSS-селектором.


	Если строка не является валидным CSS-селектором, произойдёт ошибка «'SyntaxError' 
	DOMException».


	Element.closest() возвращает Element, соответствующий указанному CSS-селектору, 
	или null, если искомый элемент не был найден.

*/ 





/* Как понять

	Метод Element.closest() позволяет искать в DOM ближайший подходящий элемент 
	среди родительских, начиная от элемента для которого метод был вызван.


	Типичный пример использования Element.closest() — определение области действия 
	при клике. Допустим, у нас есть множество кнопок, находящихся во вложенных 
	контейнерах. Необходимо найти ближайший к нажатой кнопке контейнер.

*/ 



// Для решения задачи достаточно добавить только один обработчик события click:


const mainContainer = document.querySelector('.main-container')

mainContainer.addEventListener('click', function (e) {
	 // Элемент, на котором был выполнен клик
	const targetElem = e.target

   // Определяем был ли выполнен клик
  // на одной из кнопок или внутри её

	const buttonElem = targetElem.closest('.button')


	// Если клик был выполнен вне кнопки, buttonElem === null

	if (buttonElem === null) {
		// Если клик выполнен не на кнопке, ничего не делаем
		e.stopPropagation()
		return
	}

	const containerElem = targetElem.closest('.container')
	// Выводим в консоль контейнер, содержащий нажатую кнопку
	console.log(containerElem)
})





const mainContainerTwo = document.querySelector('.main-container') 
const parenContainerTwo = document.querySelector('.parent-container')
const childContainerTwo = document.querySelector('.child-container')



mainContainerTwo.addEventListener('click', (event) => {
	mainContainerTwo.style.backgroundColor = '#333'
	mainContainerTwo.style.color = '#fff'
	console.log(event.target)
})


parenContainerTwo.addEventListener('click', (event) => {
	parenContainerTwo.style.backgroundColor = 'red'
	console.log(event.target)
})

childContainerTwo.addEventListener('click', (event) => {
	childContainerTwo.style.backgroundColor = 'blue'
	console.log(event.target)
})