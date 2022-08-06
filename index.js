let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let userName = prompt("Please enter your name", "John Doe")
let userChips = prompt("Please enter number of chips you want to bet", 200)
let player = {
    name: userName,
    chips: userChips
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard() {
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    // Generate two random numbes
    // Re-assign the cards and sum variables so that the game can start
    renderGame()
}

function draw(){
  message = " You've Drawn "
  messageEl.textContent = message
  isAlive=false
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        player.chips*=2
        playerEl.textContent = player.name + ": $" + player.chips
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        player.chips=0
        playerEl.textContent = player.name + ": $" + player.chips
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
  if(isAlive===true && hasBlackJack===false ){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }
}
