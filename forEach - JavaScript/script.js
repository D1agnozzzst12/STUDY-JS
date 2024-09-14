const names = ['John', 'Doe', 'James', 'Kim']




names.forEach((name, i, arr) => {
    console.log(name, i , arr)
})

myForEach = function (arr, fn) {
    for (let i = 0; i < arr.length; i++) {
       fn(arr[i], i, arr)
    }   
}

