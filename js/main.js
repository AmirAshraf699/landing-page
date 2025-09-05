let heroPanal =  document.querySelector('.hero-panal')
let heroPanalButtons = document.querySelectorAll('.hero-panal .buttons .button')
let heroPanalVideos = document.querySelectorAll('.hero-panal .hero-video')

heroPanalButtons.forEach(btn => {
    btn.addEventListener("click", (ele) => {
        heroPanalButtons.forEach(e => {
            e.classList.remove('active')
        })
        ele.target.classList.add('active')
        localStorage.setItem("hero-video", ele.target.dataset.button)
        heroPanalVideos.forEach(vid => {
            vid.classList.remove("active")
            if(vid.dataset.video === ele.target.dataset.button) {
                vid.classList.add("active") 
            }
        })
    })
})


if (localStorage.getItem('hero-video') !== null) {    
    heroPanalVideos.forEach(e => {
        if (e.dataset.video === localStorage.getItem('hero-video')) {
            e.classList.add('active')
        } else {
            e.classList.remove('active')
        }
    })
    heroPanalButtons.forEach(e => {
        if (e.dataset.button === localStorage.getItem('hero-video')) {
            e.classList.add('active')
        } else {
            e.classList.remove('active')
        }
    })
}


// let toggleMenu = document.querySelector('.header .info .toggle')

// toggleMenu.addEventListener('click',() => {
//     document.querySelector('.header nav').classList.toggle('open')
// })


let linkIcon = document.querySelector("header .icon")
let mobileLinks = document.querySelector("header .mobile-links")

linkIcon.addEventListener('click', () => {
    mobileLinks.classList.toggle("active")
})