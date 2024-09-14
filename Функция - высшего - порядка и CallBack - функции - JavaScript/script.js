


function highOrderFunc(callB) {
    console.log('callB')

    setTimeout(() => {
        let data = {
            cashier: 'Natalia',
            id: 1,
        }
        callB(data)
    }, 3000);
    return 
}


function callBack(data) {
    console.log('callBack:', data)
}



highOrderFunc(callBack)


