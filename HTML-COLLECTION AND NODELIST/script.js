//======================================HTMLCollection и NodeList============================================== 


/* Кратко

    HTMLCollection и NodeList — это очень похожие на массив коллекции. 
    Они хранят элементы веб-страницы (узлы DOM). NodeList может хранить 
    любые типы узлов, а HTMLCollection — только узлы HTML-элементов. 
    К элементам коллекций можно обращаться по индексу, но у них нет привычных методов массива.




    HTMLCollection возвращает методы getElementsByTagName() и getElementsByClassName().



    NodeList возвращает метод querySelectorAll() и свойство childNodes.



    Полный список всех методов, возвращающих типы NodeList или HTMLCollection, найдёте в стандарте DOM.

*/



/* Как понять

    HTMLCollection возвращают методы, которые работают с DOM — представлением
     HTML-кода страницы в JavaScript.



    Полученная один раз коллекция всегда остаётся актуальной. JavaScript будет обновлять её в случае,
     если на странице появляется подходящий элемент. Поэтому HTMLCollection называют «живой» коллекцией.



    Например, единожды получив коллекцию, можем не заботиться о её поддержке:

*/





/* NodeList работает почти так же, как и HTMLCollection.

    Разница:

    1. NodeList хранит любые типы узлов, например, текстовые узлы и комментарии,
    а HTMLCollection — только узлы HTML-элементов.


    2. HTMLCollection позволяет обращаться к элементам не только по индексу,
     но и по имени, с помощью метода namedItem.

     
    3. NodeList может быть не только «живой» коллекцией, но и статической. Такая 
    коллекция не обновляется при появлении на странице новых элементов.


    «Живой» NodeList возвращают метод getElementsByName() и свойство childNodes.


    Статический NodeList возвращает метод querySelectorAll().

*/




// Николай Лопин советует

// 🛠 Используйте индексы для получения отдельных элементов коллекции:



const paragraphs = document.getElementsByTagName('p')
console.log(paragraphs[0])



// 🛠 Если нужно обойти все элементы в цикле, можно написать классический цикл for:

const paragraphsTwo = document.getElementsByTagName('p')
for (let i = 0; i < paragraphsTwo.length; i++) {
    console.log(paragraphsTwo[i].id)
     // Печатаем значение атрибута id элемента
}




// Другой вариант — воспользоваться синтаксисом for..of:

const paragraphsThree = document.getElementsByTagName('p')

for (let item of paragraphsThree) {
    console.log(item.id)
}





/*    🛠 При создании цикла над HTMLCollection убедитесь, 
что подходящие элементы не добавляются или удаляются со страницы 
в момент работы цикла. Так как коллекция живая, её обновление в этот 
момент приведёт к бесконечному циклу.





🛠 Если нужны методы массива, преобразуйте HTMLCollection или NodeList в массив с помощью Array.from().

*/
 

const paragraphsFour = document.getElementsByTagName('p')

let array = Array.from(paragraphsFour)

console.log(array.pop())
































































































































































































































