"user strict"

const innerContainer = document.querySelector('.inner')
const btn = document.querySelector('.btn')
const api = 'https://jsonplaceholder.typicode.com/users'



async function showFriendsList() {
    // const response = await fetch(api)
    // if (response.ok) {
    //     const data = await response.json()
    //     console.log(data)
    // } else {
    //     console.log('Error HTTP:' + response.status)
    // }
    try {
        const response = await fetch(api)
            if (response.ok) {
                const data = await response.json()
                createCards(data)
            } else {
                console.log('Error HTTP:' + response.status)
            }
    } catch (error) {
        console.log('Ошибка при выполнении запроса:' + error.message)
    }
}



function createCards(cardsData) {
    cardsData.forEach(cardData => {
        const card = 
        `
                <div class="card">
                    <div class="card_img"><img src="https://yandex.ru/images/search?pos=18&from=tabbar&img_url=https%3A%2F%2Fi.imgur.com%2FlXwScFh.png&text=profile+img&rpt=simage&lr=139385" alt=""></div>
                    <div class="card_name">${cardData.name}</div>
                    <div class="card_email">${cardData.email}</div>
                    <div class="card_city">${cardData.address.city}</div>
                    <div class="card_website">${cardData.website}</div>
                </div>

        `;
        innerContainer.insertAdjacentHTML('beforeend', card)
    });
}

btn.addEventListener('click', function() {
    if (innerContainer.childElementCount > 0) {
        innerContainer.innerHTML = ''
    } else {
        showFriendsList()
    }
})