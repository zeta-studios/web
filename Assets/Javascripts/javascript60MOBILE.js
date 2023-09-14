const main_img = document.querySelector('.main_img')
const thumbnails = document.querySelectorAll('.thumbnail')
const opacity = document.querySelector('.opacity')

thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function(){
        
        const active = document.querySelector('.active')
        active.classList.remove('active')
        thumb.classList.add('active')
        main_img.src = thumb.src
        
    })
})

