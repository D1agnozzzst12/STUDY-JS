const observer = new IntersectionObserver((entries) => {
    console.log(entries)
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.nav_link').forEach((link) => {
                let id = link.getAttribute('href').replace('#', '')
                if (id === entry.target.id) {
                    link.classList.add('nav_link--active')
                } else {
                    link.classList.remove('nav_link--active')
                }
            })
        }
    })
}, {
    threshold: 0.2
})



document.querySelectorAll('.section').forEach(section => {observer.observe(section)})



