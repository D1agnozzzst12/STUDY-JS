
async function getData() {
    let res = await fetch('https://gorest.co.in/public/v2/comments	')
    let data = await res.json()
    console.log(data)
}

let list = getData()

for (const item of data) {
    console.log(item)
}