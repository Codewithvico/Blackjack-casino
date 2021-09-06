
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let player = {
    name: "CodeWithVico",
    chips: 245
}

let playEl = document.getElementById ("play-el")

playEl.textContent = player.name  + ": $" + player.chips

// Create a function, get RamdomCard(),

function getRandomCard() {
    
    let randomNumber = Math.floor (Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10 
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {

    cardsEl.textContent = "Cards: "
    //create a for loop that render out all the cards instead of just two

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you still want to draw a new card?"
    }else if (sum === 21){
        message = "Wohoo: You've got Blackjack!"
        hasBlackJack = true
    }else{
         message = "You are out of the game!"
         isAlive = false
    }
    
   messageEl.textContent = message
}


function newCard() {
   if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
   }

}
