let play = document.querySelector('.play')
let pause = document.querySelector('.pause')
let reset = document.querySelector('.reset')

let obj = document.querySelector('h2')
let sm = document.querySelector('.session-minutes')
let ss = document.querySelector('.session-seconds')

let progressBar = document.querySelector('.circular-progress')
let progressValue = 0
let progressEnd = 100
let speed 
let playTimer
let progress
let buttonClicked

let audio = new Audio('./sound/bell.mp3')
function bell () {
    audio.play()
}

let studyBtn = document.querySelector('.bs-input')
studyBtn.addEventListener('click',studyClicked)

let breakBtn = document.querySelector('.bb-input')
breakBtn.addEventListener('click',breakClicked)

function studyClicked(){
    sm.innerText = '25'
    ss.innerText = '00'
    speed = ((25*60)/100)*1000
    obj.innerText = 'Bons Estudos'
}
function breakClicked(){
    sm.innerText = '05'
    ss.innerText = '00'
    speed = ((05*60)/100)*1000
    obj.innerText = 'Bom Descanso'
}


play.addEventListener('click', init)

function init() {

    if (playTimer === undefined) {
        playTimer = setInterval(countDown, 1000)
        progress = setInterval(fillProgress, speed)
    } else {
        alert('Timer já está rodando')
    }

}
function fillProgress() {
    progressValue++
    progressBar.style.background = `conic-gradient(
            #4d5bf9 ${progressValue * 3.6}deg,
            #FFF ${progressValue * 3.6}deg
        )`
    if (progressValue == progressEnd) {

        clearInterval(progress)
    }
}

pause.addEventListener('click', function () {
    stopInterval()
    playTimer = undefined;
})
reset.addEventListener('click', function(){
    sm.innerText = '--'
    ss.innerText = '--'
    obj.innerText = 'App'
    stopInterval()
    playTimer = undefined;
    progressValue = 0
    progressBar.style.background = `#FFF`

})
function countDown() {
    //session countdown

    if (ss.innerText != 00) {
        console.log(sm.innerText)
        ss.innerText--
        if (ss.innerText < 10) {
            ss.innerText = '0' + ss.innerText
        }
    } else if (sm.innerText != 00 && ss.innerText == 00) {
        ss.innerText = 59
        sm.innerText--
        if (sm.innerText < 10) {
            sm.innerText = '0' + sm.innerText
        }  
    } else {
        bell()
        clearInterval(playTimer);
        clearInterval(progress)
    }

}


function stopInterval() {
    clearInterval(playTimer);
    clearInterval(progress)
}
