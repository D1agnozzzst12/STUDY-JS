// CSSStyleDeclaration


// Объект, который хранит информацию о ваших CSS-стилях.



/* Кратко

    Интерфейс CSSStyleDeclaration представляет объект, в котором хранится информацию о CSS-стилях
    и связанных с ними методах и свойствах


    CSSStyleDeclaration-объект возвращают другие API — HTMLElement.style, 
    CSSStyleSheet и Window.getComputedStyle().

*/ 



/* Как пишеться

    Атрибуты и свойства 


    Через CSSStyleDeclaration можете обращаться ко всем CSS-свойствам. Для этого укажите название 
    нужного свойства в CamelCase. Например, maxWidth или flexDirection.


    Специальные атрибуты и свойства:

    1. cssText — текстовое представление блока с CSS-правилами.

    2. length — количество свойств. Только для чтения.

    3. parentRule — CSS-правила для родительского элемента. Только для чтения.

    4. cssFloat — алиас для CSS-свойства float.
    



    Методы:

    1. .setProperty() — изменяет или задаёт новое CSS-свойство.

    2. .removeProperty() — удаляет CSS-свойство.

    3. .getPropertyValue() — возвращает значение свойства по его названию.

    4. .getPropertyCSSValue() — возвращает значение свойства в виде интерфейса 

    CSSPrimitiveValue или null для сокращённых CSS-свойств.

    5. .item() — возвращает название свойства.
    
    6. .getPropertyPriority() — возвращает необязательный приоритет !important.

*/ 