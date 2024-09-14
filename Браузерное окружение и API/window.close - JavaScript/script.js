// window.close()



// Закройте окно, а то что-то холодно.


// Кратко

// Метод close() объекта window закрывает текущее или другое вызванное окно.



let openedWindow



function openWindow() {
    openedWindow = window.open('doka.guide.html')
}


function closeOpenedWindow() {
    openedWindow.close()
}



// Как пишется:
// Метод можно вызвать только если окно было открыто через window.open() 
// или если это окно верхнего уровня без записей в истории.