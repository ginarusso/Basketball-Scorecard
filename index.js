const homeScore = document.getElementById("home-score")
const guestScore = document.getElementById("guest-score")
const header = document.getElementById("header")
const container = document.querySelector(".container")
const containerEl = document.getElementById("container-el")
const resetBtn = document.getElementById("reset")
const audio = new Audio('Buzzer.mp3')

let homeCounter = 0;
let guestCounter = 0;

container.addEventListener("click", function (e) {
    // console.log(e.target.dataset.homePoints)
    // console.log(e.target.dataset.guestPoints)
    const target = e.target
    // console.log(e.target)
    const homePoints = target.dataset.homePoints
    const guestPoints = target.dataset.guestPoints

    if (homePoints && homeCounter < 21) {
        // console.log(homePoints)
        homeCounter += +homePoints
        // console.log(homeCounter)
        homeScore.textContent = homeCounter
    }
    
     if (guestPoints && guestCounter < 21) {
        // console.log(homePoints)
        guestCounter += +guestPoints
        // console.log(homeCounter)
        guestScore.textContent = guestCounter
    }
    highlight()
})

function highlight() {
    homeScore.classList.toggle("highlight", homeCounter > guestCounter)
    guestScore.classList.toggle("highlight", guestCounter > homeCounter)
    
    if (homeCounter >= 21 || guestCounter >= 21) {
        const buttons = document.getElementsByTagName("button")
        for (const button of buttons) {
            button.disabled = true
    }
    resetBtn.disabled = false
    showWinner()
}}

function reset() {
    homeCounter = 0
    guestCounter = 0 
    homeScore.textContent = 0
    guestScore.textContent = 0
    header.style.color = "red"
    header.style.textShadow = '-2px -2px #000000';
    header.innerHTML = "First to 21 Wins!"
    homeScore.classList.remove("highlight")
    guestScore.classList.remove("highlight")
    homeScore.style.background = "#000000"
    guestScore.style.background = "#000000"
    containerEl.setAttribute('style', 'pointer-events: auto')
    const buttons = document.getElementsByTagName("button")
    
    for (const button of buttons) {
        button.disabled = false;
    }
}

function showWinner() {  
    if (homeCounter >= 21) {
        header.style.color = '#008000';
        homeScore.style.background = "#ffffff"
        audio.play()
        header.textContent = "Home Wins!"
        } else if (guestCounter >= 21) {
            header.style.color = '#008000'
            guestScore.style.background = "#ffffff"
            audio.play()
            header.textContent = "Guest Wins!"
            }
            confetti()
            containerEl.setAttribute('style', 'pointer-events: none')
}

function confetti() {
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti({
    emojis: ['🏀'],
    confettiNumber: 100,
    emojiSize: 100
    })
    jsConfetti.addConfetti()
}
