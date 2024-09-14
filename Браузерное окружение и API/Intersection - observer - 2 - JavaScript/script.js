


const options = {
    threshold: 1 // [0.5, 1]
}


const callback = function (entries, observer) {


    entries.forEach( entry => {

        const {target, isIntersecting, intersenctionRatio} = entry
        console.log(entry)
        console.log('yes its work')

        if (isIntersecting && IntersectionRatio == 1) {
            target.classList.add('red')
        } else {
            target.classList.remove('red')
        }


        // if (isIntersecting) {
        //     target.classList.add('red')
        //     console.log('пересекается')
        // } else {
        //     target.classList.remove('red')
        //     console.log('no')
        // }
      
    })
 

}



const observer = new IntersectionObserver(callback, options)


const target = document.querySelector('#target')

observer.observe(target)
