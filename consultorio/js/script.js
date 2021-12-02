const menuBar = document.querySelector('.menu-mobile a img')

menuBar.addEventListener('click', function(){
    const navLink = document.querySelector('.nav-link-mobile')
    const image = document.querySelector('#btn-menu img')

    if(image.src.match('menu-bars')){
        image.src = "./img/close.png"
    } else {
        image.src = "./img/menu-bars.png"
    }
    navLink.classList.toggle('btn-menu')
    console.log(image);
})

const plus = document.querySelector('.nav-link-mobile img')

plus.addEventListener('click', function (){
    const plusSpecialities = document.querySelector('.nav-link-mobile ul ul')
    plusSpecialities.classList.toggle('hide-spec')
})

