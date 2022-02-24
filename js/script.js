/* Go Top */
var btnGoTop = document.getElementById("go-top")
btnGoTop.style.display ="none"
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    btnGoTop.style.display = "flex";
  } else {
    btnGoTop.style.display = "none";
  }
}

/* Day Nigth */

const dayNight = document.querySelector('.day-night');
const logo = document.querySelector('.logo img')

dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('fa-sun')
    dayNight.querySelector('i').classList.toggle('fa-moon')
    document.body.classList.toggle('dark')
    
    if(document.body.classList.contains('dark')){
        logo.src = './img/logo_dark.png'
    }
    else {
        logo.src = './img/logo.png'
    }
})
window.addEventListener('load',() => {
    if(document.body.classList.contains('dark')){
        dayNight.querySelector('i').classList.add('fa-sun')
    }
    else {
        dayNight.querySelector('i').classList.add('fa-moon')
    }
})

/* Typing Animation */

let typed = new Typed('.typing', {
    strings: ['Front-End Developer', 'Desenvolvedor Web'],
    typeSpeed:100,
    BackSpeed:80,
    loop:true
})



/* Sending Email  */

const btnSubmit = document.getElementById('submit')


btnSubmit.addEventListener('click', () =>{
    let name = document.getElementById('name').value
    let mailAddress = document.getElementById('email').value
    let subject = document.getElementById('subject').value
    let textMessage = document.getElementById('message').value
    let toasts = document.getElementById('toasts')
    const notification = 'Mensagem Enviada'
    
    function createNotification() {
        const notify = document.createElement('div')
        notify.classList.add('toast')

        notify.innerText = notification
        toasts.appendChild(notify)

        setTimeout(() => {
            notify.remove()
        },3000)
    }
    Email.send({
        Host : "smtp.gmail.com",
        Username : "conta.cristiano.lima.ribeiro@gmail.com",
        Password : "bpwfrbohevjbwptr",
        To : 'cristiano.lima.ribeiro@gmail.com',
        From : `${mailAddress}`,
        Subject : `${subject}`,
        Body: `<html><h2>Nome do Cliente: ${name}</h2><strong>${textMessage}</strong><br></br></html>`
    }).then(
        // message => alert(message)
        createNotification()
    );
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('subject').value = ''
    document.getElementById('message').value = ''
})

