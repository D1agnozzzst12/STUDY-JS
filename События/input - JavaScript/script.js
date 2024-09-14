// input 


// Событие, срабатывающее каждый раз при изменении значения.




/* Кратко

    Событие input возникает, когда пользователь изменяет содержимое поля для ввода информации.


    Примеры таких полей:


    1. <textarea>;

    2. <input> с текстовым содержимым (атрибуты type="text" или type="number");

    3. <input> с нетекстовым содержимым (атрибуты type="file" или type="image");

    4. <input> в виде чекбокса (type="checkbox") или радиокнопки (type="radio");

    5. <select>.




    Событие input возникает, когда DOM-дерево обновляется или вот-вот обновится. 
    Если пользователь вставит текст из буфера обмена, то событие input возникнет один раз. 
    Если же пользователь печатает текст, то событие input возникает после добавления и удаления 
    каждого символа.

*/ 



// Простой пример:



/* HTML and JS - 

<label>
  Введите текст:
  <input type="text" id="textField">
</label>

<label>
  При каждом изменении возникает событие <code>input</code>:
  <textarea disabled id="textResult"></textarea>
</label>

<script>
  var inputTextField = document.getElementById('textField')
  var outputTextField = document.getElementById('textResult')

  inputTextField.oninput = function() {
      outputTextField.value = inputTextField.value
  }
</script>

*/





const inputTextField = document.querySelector('#textField')
const outputTextField = document.querySelector('#textResult')

inputTextField.oninput = () => {
    outputTextField.value = inputTextField.value
}












// Как пишется


const textInput = document.querySelector('#inputText')


function callback(event) {
    console.log('Произлошло событие:', event.type)
}


textInput.addEventListener('input', callback)




/* Если ввести в текстовое поле слово - 

    «Дока» и щёлкнуть вне этого поля, в консоли будут показаны сообщения: «4 раза: 
    Произошло событие input».
    
*/ 









/* Отличие от события change

    События input и change похожи — оба помогают отслеживать изменения в полях ввода


    Различие есть для текстовых полей ввода:


    1. input — срабатывает при каждом изменении значения в поле;

    2. change — срабатывает, когда изменяемый элемент теряет фокус. Например, 
    при переходе к другому полю или клику на другую часть страницы.

*/ 





// Для прочих полей ввода они работают одинаково:


/* HTML and JS - 

<label>
  Кликните:
  <input type="checkbox" name="checkbox-input">
</label>

<label>
  Типы событий:
  <textarea disabled name="checkbox-result"></textarea>
</label>

<script>
  const checkbox = document.querySelector('[name=checkbox-input]')
  const textArea = document.querySelector('[name=checkbox-result]')

  function handleCheckboxChange(evt) {
      textArea.value += evt.type + '; '
  }

  checkbox.addEventListener('input', handleCheckboxChange)
  checkbox.addEventListener('change', handleCheckboxChange)
</script>

*/ 






const checkbox = document.querySelector('[name=checkbox-input]')
const textArea = document.querySelector('[name=checkbox-result]')



function handleCheckboxChange(event) {
    textArea.value += event.type + ';'
}

checkbox.addEventListener('input', handleCheckboxChange)
checkbox.addEventListener('change', handleCheckboxChange)





/* Примечания 

    Событие input не произойдёт, если:


    1. текст не меняется, например, при нажатиях клавиш влево ⇦, вправо ⇨, Control, Alt, Shift;

    2. тег <input> имеет атрибут type="button" или type="submit";
    
    3. поле изменит не пользователь, а JavaScript-код. Чтобы в этом случае получить событие input, нужны дополнительные действия. К примеру, использовать dispatchEvent().

*/ 