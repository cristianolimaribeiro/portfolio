let rangeNumber = document.querySelector('#range');
let button = document.querySelector('#button');

const lMin = document.querySelector('#letras_minusculas');

const lMaiusc = document.querySelector('#letras_maiusculas');
const charEsp = document.querySelector('#char_special');
const number = document.querySelector('#numero');

let sizePassword = document.querySelector('#valor_char');
let password = document.querySelector('#password');

let containerPassword = document.querySelector('#container_password');

let charset = '';
let novaSenha = '';
console.log(novaSenha);

let letraMin = 'abcdefghijklmnopqrstuvwxyz';
let letraMaiusc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let caracEsp = `!"#$%&'*+,-./:;<=>?@^[}_{]~`;
let numeros = '1234567890';

let toasts = document.getElementById('toasts')
const notification = 'Senha Copiada com Sucesso'
const option = 'Escolha pelo menos um dos tipos de caracter'

sizePassword.innerHTML = rangeNumber.value ;

rangeNumber.oninput = function(){
    sizePassword.innerHTML = this.value
};


function geraSenha(){
    if(lMin.checked === true && lMaiusc.checked === false && charEsp.checked === false && number.checked === false){
        charset = letraMin
        let pass = '';
        
        for(let i = 0 , n = charset.length ; i < rangeNumber.value; ++i ){
            pass += charset.charAt(Math.floor(Math.random()*n))
        }

        containerPassword.classList.remove('hide')
        password.innerHTML = pass
        novaSenha = pass

    } else if (lMin.checked === true && lMaiusc.checked === true && charEsp.checked === false && number.checked === false){
        charset = letraMin + letraMaiusc
        let pass = '';
        
        for(let i = 0 , n = charset.length ; i < rangeNumber.value; ++i ){
            pass += charset.charAt(Math.floor(Math.random()*n))
        }

        containerPassword.classList.remove('hide')
        password.innerHTML = pass
        novaSenha = pass

    } else if (lMin.checked === true && lMaiusc.checked === true && charEsp.checked === true && number.checked === false){
        charset = letraMin + letraMaiusc + caracEsp
        let pass = '';
        
        for(let i = 0 , n = charset.length ; i < rangeNumber.value; ++i ){
            pass += charset.charAt(Math.floor(Math.random()*n))
        }

        containerPassword.classList.remove('hide')
        password.innerHTML = pass
        novaSenha = pass

    } else if (lMin.checked === true && lMaiusc.checked === true && charEsp.checked === true && number.checked === true){
        charset = letraMin + letraMaiusc + caracEsp + numeros
        let pass = '';
        
        for(let i = 0 , n = charset.length ; i < rangeNumber.value; ++i ){
            pass += charset.charAt(Math.floor(Math.random()*n))
        }

        containerPassword.classList.remove('hide')
        password.innerHTML = pass
        novaSenha = pass

    }  else if (lMin.checked === true && lMaiusc.checked === false && charEsp.checked === true && number.checked === false){
        charset = letraMin + caracEsp 
        let pass = '';
        
        for(let i = 0 , n = charset.length ; i < rangeNumber.value; ++i ){
            pass += charset.charAt(Math.floor(Math.random()*n))
        }

        containerPassword.classList.remove('hide')
        password.innerHTML = pass
        novaSenha = pass

    }  else if (lMin.checked === true && lMaiusc.checked === false && charEsp.checked === false && number.checked === true){
        charset = letraMin +  numeros
        let pass = '';
        
        for(let i = 0 , n = charset.length ; i < rangeNumber.value; ++i ){
            pass += charset.charAt(Math.floor(Math.random()*n))
        }

        containerPassword.classList.remove('hide')
        password.innerHTML = pass
        novaSenha = pass

    }  else if (lMin.checked === true && lMaiusc.checked === false && charEsp.checked === true && number.checked === true){
        charset = letraMin  + caracEsp + numeros
        let pass = '';
        
        for(let i = 0 , n = charset.length ; i < rangeNumber.value; ++i ){
            pass += charset.charAt(Math.floor(Math.random()*n))
        }

        containerPassword.classList.remove('hide')
        password.innerHTML = pass
        novaSenha = pass

    }  else if (lMin.checked === false && lMaiusc.checked === true && charEsp.checked === false && number.checked === false){
        charset = letraMaiusc 
        let pass = '';
        
        for(let i = 0 , n = charset.length ; i < rangeNumber.value; ++i ){
            pass += charset.charAt(Math.floor(Math.random()*n))
        }

        containerPassword.classList.remove('hide')
        password.innerHTML = pass
        novaSenha = pass

    }  else if (lMin.checked === false && lMaiusc.checked === true && charEsp.checked === true && number.checked === false){
        charset = letraMaiusc + caracEsp 
        let pass = '';
        
        for(let i = 0 , n = charset.length ; i < rangeNumber.value; ++i ){
            pass += charset.charAt(Math.floor(Math.random()*n))
        }

        containerPassword.classList.remove('hide')
        password.innerHTML = pass
        novaSenha = pass

    }  else if (lMin.checked === false && lMaiusc.checked === true && charEsp.checked === false && number.checked === true){
        charset = letraMaiusc  + numeros
        let pass = '';
        
        for(let i = 0 , n = charset.length ; i < rangeNumber.value; ++i ){
            pass += charset.charAt(Math.floor(Math.random()*n))
        }

        containerPassword.classList.remove('hide')
        password.innerHTML = pass
        novaSenha = pass

    }  else if (lMin.checked === false && lMaiusc.checked === true && charEsp.checked === true && number.checked === true){
        charset =  letraMaiusc + caracEsp + numeros
        let pass = '';
        
        for(let i = 0 , n = charset.length ; i < rangeNumber.value; ++i ){
            pass += charset.charAt(Math.floor(Math.random()*n))
        }

        containerPassword.classList.remove('hide')
        password.innerHTML = pass
        novaSenha = pass

    }  else if (lMin.checked === false && lMaiusc.checked === false && charEsp.checked === true && number.checked === true){
        charset =  caracEsp + numeros
        let pass = '';
        
        for(let i = 0 , n = charset.length ; i < rangeNumber.value; ++i ){
            pass += charset.charAt(Math.floor(Math.random()*n))
        }

        containerPassword.classList.remove('hide')
        password.innerHTML = pass
        novaSenha = pass

    }  else if (lMin.checked === false && lMaiusc.checked === false && charEsp.checked === true && number.checked === false){
        charset = caracEsp
        let pass = '';
        
        for(let i = 0 , n = charset.length ; i < rangeNumber.value; ++i ){
            pass += charset.charAt(Math.floor(Math.random()*n))
        }

        containerPassword.classList.remove('hide')
        password.innerHTML = pass
        novaSenha = pass

    }  else if (lMin.checked === false && lMaiusc.checked === false && charEsp.checked === false && number.checked === true){
        charset = numeros
        let pass = '';
        
        for(let i = 0 , n = charset.length ; i < rangeNumber.value; ++i ){
            pass += charset.charAt(Math.floor(Math.random()*n))
        }

        containerPassword.classList.remove('hide')
        password.innerHTML = pass
        novaSenha = pass

    }  else if (lMin.checked === true && lMaiusc.checked === true && charEsp.checked === false && number.checked === true){
        charset = letraMin + letraMaiusc + numeros
        let pass = '';
        
        for(let i = 0 , n = charset.length ; i < rangeNumber.value; ++i ){
            pass += charset.charAt(Math.floor(Math.random()*n))
        }

        containerPassword.classList.remove('hide')
        password.innerHTML = pass
        novaSenha = pass

    } else if (lMin.checked === false && lMaiusc.checked === false && charEsp.checked === false && number.checked === false){
        // alert('Escolha pelo menos um dos tipos de caracter')
        escolhaOpcao()
    }

}

function criaNotificacao() {
    const notify = document.createElement('div')
    notify.classList.add('toast')

    notify.innerText = notification
    toasts.appendChild(notify)

    setTimeout(() => {
        notify.remove()
    },3000)
}
function escolhaOpcao() {
    const notify = document.createElement('div')
    notify.classList.add('toast')

    notify.innerText = option
    toasts.appendChild(notify)

    setTimeout(() => {
        notify.remove()
    },3000)
}

function copiaSenha(){
    navigator.clipboard.writeText(novaSenha)
    .then(() => criaNotificacao())
   console.log(novaSenha);
}
button.addEventListener('click', geraSenha)
containerPassword.addEventListener('click', copiaSenha)