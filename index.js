const homeScore = document.getElementById("home-score")
const guestScore = document.getElementById("guest-score")
const gameIsOver = document.getElementById("game-over")
const header = document.getElementById("header")
const btn1Home = document.getElementById("btn1-home")
const btn2Home = document.getElementById("btn2-home")
const btn3Home = document.getElementById("btn3-home")
const btn1Guest = document.getElementById("btn1-guest")
const btn2Guest = document.getElementById("btn2-guest")
const btn3Guest = document.getElementById("btn3-guest")
const countdownbtn = document.getElementById("countdown-timer")
const footerbtn = document.getElementById("footer")
let counter = 10

let homeCounter = 0;
let guestCounter = 0;

function home1() {
    homeScore.textContent = homeCounter += 1 
    disable()
}

function home2() {
    homeScore.textContent = homeCounter += 2
    disable()
}

function home3() {
    homeScore.textContent = homeCounter += 3
    disable()
}

function guest1() {
    guestScore.textContent = guestCounter += 1
    disable()
}
function guest2() {
    guestScore.textContent = guestCounter += 2
    disable()
}
function guest3() {
    guestScore.textContent = guestCounter += 3
    disable()
}

function reset() {
    homeCounter = 0
    guestCounter = 0 
    homeScore.textContent = 0
    guestScore.textContent = 0
    document.getElementById("header").style.color = 'red';
    header.innerHTML = "First to 21 Wins!"
    document.getElementById("footer").style.backgroundColor = 'black';
    footerbtn.innerHTML = "RESET"
    btn1Home.disabled = false
    btn2Home.disabled = false
    btn3Home.disabled = false
    btn1Guest.disabled = false
    btn2Guest.disabled = false
    btn3Guest.disabled = false
}

function disable() {
    if (guestCounter >= 21 && guestCounter > 0) {
        document.getElementById("header").style.color = 'green';
        header.innerHTML = "Guest Wins!"
        document.getElementById("footer").style.backgroundColor = 'red';
        footerbtn.innerHTML = "RESET"
        btn1Home.disabled = true
        btn2Home.disabled = true
        btn3Home.disabled = true
        btn1Guest.disabled = true
        btn2Guest.disabled = true
        btn3Guest.disabled = true
    } else if (homeCounter >= 21 && homeCounter > 0) {
        document.getElementById("header").style.color = 'orange';
        header.innerHTML = "Home Wins!"
        document.getElementById("footer").style.backgroundColor = 'red';
        footerbtn.innerHTML = "RESET"
        btn1Home.disabled = true
        btn2Home.disabled = true
        btn3Home.disabled = true
        btn1Guest.disabled = true
        btn2Guest.disabled = true
        btn3Guest.disabled = true
    }
}