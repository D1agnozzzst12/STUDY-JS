const form = document.getElementById('article-form')
form.addEventListener('submit', saveArticle)

async function saveArticle(event) {
    event.preventDefault();

    const myFormData = new FormData(form)
    // const params = new URLSearchParams()
    // for (const [key, value] of myFormData.entries())  {
    //     params.append(key, value)
    // }
    // const result = params.toString()
    // console.log(result)

    const formDataAsObject = Object.fromEntries(myFormData)
    console.log(formDataAsObject)

    const content = myFormData.get('content')
    console.log(myFormData)

    for(let data of myFormData) {
        console.log(data)
    } 
    console.log(content)

    myFormData.set('author', 'gazdiev ilihan')
    myFormData.set('pidor', false)
    myFormData.delete('pidor')
   

    await fetch('https://www.google.com/', {
        method: 'POST',
        body: myFormData
    }
    )
}

const data = [
    { section: 'HTML', count: 212 },
    { section: 'CSS', count: 121 },
    { section: 'JavaScript', count: 182 },
    { section: 'Tools', count: 211 },
  ]
  
  console.table(data)

