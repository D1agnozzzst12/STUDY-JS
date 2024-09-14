// location, history, Date, navigator

console.log(window.location)



document.querySelector('.button').addEventListener('click', () => {
    window.location.href = 'https://sider.ai/invite'

    // window.location.replace('https://sider.ai/invite')
})





// window.history


console.log(window.history)



// navigator


console.log(window.navigator)


document.querySelector('.button2').addEventListener('click', () => {

    navigator.geolocation.getCurrentPosition((data) => {
        console.log(data)
    })

})


// Date


const today = new Date()
console.log(today)

// console.log(`Year: ${today.getFullYear()}`)
// console.log(`Month: ${today.getMonth()}`)
// console.log(`Day: ${today.getDay()}`)
// console.log(`Hours:${today.getHours()}`)
// console.log(`Minute: ${today.getMinutes()}`)
// console.log(`Seconds: ${today.getSeconds()}`)
// console.log(`MilliSeconds ${today.getMilliseconds()}`)



// console.log(today.getTime())


const yesterday = new Date('08/16/2002')
console.log(yesterday)


const difference = (today - yesterday)/(1000*60*60*24)
console.log(difference)




