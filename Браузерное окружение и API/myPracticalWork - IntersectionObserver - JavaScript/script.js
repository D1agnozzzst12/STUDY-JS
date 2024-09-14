

const option = {
    threshold: 1,
}

function callBack(entries, observer) {
    entries.forEach((entry) => {
        const {isIntersecting} = entry 
        if (isIntersecting) {
            target.classList.add('red')
        } else {
            target.classList.remove('red')
        }
    })
}


const observer = new IntersectionObserver(callBack, option)

const target = document.getElementById('target')
observer.observe(target)