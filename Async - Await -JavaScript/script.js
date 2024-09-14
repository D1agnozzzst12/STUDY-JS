// Async, Await 




/* fetch and Promise 

const myGit = fetch('https://api.github.com/users/D1agnozzzst12')

console.log(myGit)

myGit.then((data) => {
    console.log(data)
})

myGit.then((data) => {
    data.json().then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
        console.log(err.name)
        console.log(err.type)
    })
})

*/



//  getUserMedia-


// const video = document.querySelector('video')

// const myVideo = navigator.mediaDevices.getUserMedia({video: true}).then(mediaStream => {
//     video.srcObject = mediaStream
// }).catch((err) => {
//     console.log(err)
//     console.log(err.name)
//     console.log(err.type)
// })

// console.log(myVideo)





/* my Promise function 

function sleep(time) {
    return new Promise((resolve, reject) => {

        if(time < 500) {
            reject('Слишком мало сна!')
        }

        setTimeout(() => {
            resolve(`Поспал ${time}`)
        }, time);

    })
}

sleep(1500).then((res) => {
    console.log(res)
    return sleep(1000)
}).then((res) => {
    console.log(res)
    return sleep(500)
}).then((res) => {
    console.log(res)
    return sleep(200)
}).then((res) => {
    console.log(res)
}).catch(err => {
    console.log(err)
})


*/




// setInterval(() => {
//     console.log(Date.now())
// }, 500)


// Async Await
// fetch('https://api.github.com/users/D1agnozzzst12').then(res => {
//     return res.json()
// }).then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })



/* My function 
let userInfo;

const cardUserAvatar = document.querySelector('.card_user_avatar')
const cardUserLogin = document.querySelector('.card_user_login')
const cardUserId = document.querySelector('.card_user_id')
const cardWhenCreateAkkaunt = document.querySelector('.card_create_user_akk')


async function getGitData() {
    try {

        const response = await fetch('https://api.github.com/users/D1agnozzzst12')
        const data = await response.json()
        console.log(data)
        userInfo = {...data}
        console.log(userInfo)


        cardUserAvatar.innerHTML = `<img src="${userInfo.avatar_url}">`
        cardUserLogin.innerHTML = `<h1>Логин Пользователя: ${userInfo.login}</h1> <hr>`
        cardUserId.innerHTML = `<h1>ID Пользователя: ${userInfo.id}</h1> <hr>`
        cardWhenCreateAkkaunt.innerHTML = `<h1>Когда создан аккаунт: ${userInfo.created_at}</h1> <hr>`
    } catch(err) {

        console.log(err)
        console.log(err.name)
        console.log(err.type)

    }
}


const cardUserAvatar2 = document.querySelector('.card_user_avatar2')
const cardUserLogin2 = document.querySelector('.card_user_login2')
const cardUserId2 = document.querySelector('.card_user_id2')
const cardWhenCreateAkkaunt2 = document.querySelector('.card_create_user_akk2')

let userInfoTwo
async function getGitDataTwo() {
    try {

        const response = await fetch('https://api.github.com/users/ingush')
        const data = await response.json()
        console.log(data)
        userInfoTwo = {...data}
        console.log(userInfoTwo)


        cardUserAvatar2.innerHTML = `<img src="${userInfoTwo.avatar_url}">`
        cardUserLogin2.innerHTML = `<h1>Логин Пользователя: ${userInfoTwo.login}</h1> <hr>`
        cardUserId2.innerHTML = `<h1>ID Пользователя: ${userInfoTwo.id}</h1> <hr>`
        cardWhenCreateAkkaunt2.innerHTML = `<h1>Когда создан аккаунт: ${userInfoTwo.created_at}</h1> <hr>`
    } catch(err) {

        console.log(err)
        console.log(err.name)
        console.log(err.type)

    }
}

getGitData()
getGitDataTwo()
*/




const getGitData = async () => {
    try {
        const response = await fetch('https://api.github.com/users/D1agnozzzst12')
        const data = await response.json()
        console.log(data)
    } catch(err) {
        console.log(err)
        console.log(err.type)
    }
}

getGitData()








// const video = document.querySelector('video')

// const myVideo = navigator.mediaDevices.getUserMedia({video:true}).then(mediaStream => {
//     video.srcObject = mediaStream
// }).catch(err => {
//     console.log(err)
//     console.log(err.type)
// }) 

// console.log(myVideo)


const video = document.querySelector('video')

const getUserVideo = async () => {
try {

    const response = await navigator.mediaDevices.getUserMedia({video: true})
    video.srcObject = response

}catch (error) {
    console.log('ERROR >>>', error)
    console.log('ERROR TYPE >>>', error.type)
    console.log('ERROR NAME >>>', error.name)
}

}
getUserVideo()




function sleep(time) {
    return new Promise((resolve, reject) => {
        if(time < 500) {
            reject('Слишком мало сна!')
        }
        setTimeout(() => resolve(`Поспал ${time}`), time)
    })
    
}

const sleepSession = async (time) => {
    const sleep1 = await sleep(1000)
    console.log(sleep1)
    
    const sleep2 = await sleep(2000)
    console.log(sleep2)
    
    const sleep3 = await sleep(3000)
    console.log(sleep3)

    const sleep4 = await sleep(4000)
    console.log(sleep4)

    const sleep5 = await sleep(5000)
    console.log(sleep5)

    const sleep6 = await sleep(400)
    console.log(sleep6)


} 
sleepSession()

