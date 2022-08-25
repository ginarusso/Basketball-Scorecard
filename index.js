const homeScore = document.getElementById("home-score")
const guestScore = document.getElementById("guest-score")
const header = document.getElementById("header")
const h3ElHome = document.getElementById("h3-el-home")
const h3ElGuest = document.getElementById("h3-el-guest")
const btn1Home = document.getElementById("btn1-home")
const btn2Home = document.getElementById("btn2-home")
const btn3Home = document.getElementById("btn3-home")
const btn1Guest = document.getElementById("btn1-guest")
const btn2Guest = document.getElementById("btn2-guest")
const btn3Guest = document.getElementById("btn3-guest")
const footerbtn = document.getElementById("footer")

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
    document.getElementById("header").style.textShadow = '-2px -2px #000000';
    header.innerHTML = "First to 21 Wins!"
    document.getElementById("footer").style.backgroundColor = 'black'
    footerbtn.innerHTML = "RESET"
    // document.getElementById("h3-el-home").style.textShadow = '-5px -5px #1B244A';
    document.getElementById("home-score").className = "home"
    // document.getElementById("h3-el-guest").style.textShadow = '-5px -5px #1B244A';
    document.getElementById("guest-score").className = "guest"
    h3ElGuest.innerHTML = "GUEST"
    btn1Home.disabled = false
    btn2Home.disabled = false
    btn3Home.disabled = false
    btn1Guest.disabled = false
    btn2Guest.disabled = false
    btn3Guest.disabled = false
}

function disable() {
    if (homeCounter >= 21 && homeCounter > 0) {
        document.getElementById("header").style.color = '#008000';
        header.innerHTML = "Home Wins!"
        confetti()
        // document.getElementById("h3-el-home").style.textShadow = '5px 5px darkorange';
        // h3ElHome.innerHTML = "HOME"
        document.getElementById("home-score").className = "border"
        document.getElementById("footer").style.backgroundColor = 'red';
        footerbtn.innerHTML = "RESET"
        btn1Home.disabled = true
        btn2Home.disabled = true
        btn3Home.disabled = true
        btn1Guest.disabled = true
        btn2Guest.disabled = true
        btn3Guest.disabled = true
        } else if (guestCounter >= 21 && guestCounter > 0) {
            document.getElementById("header").style.color = '#008000';
            header.innerHTML = "Guest Wins!"
            confetti()
            // document.getElementById("h3-el-guest").style.textShadow = '5px 5px #008000';
            // h3ElGuest.innerHTML = "GUEST"
            document.getElementById("guest-score").className = "border"
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

function confetti() {
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()
}
