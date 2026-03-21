
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""

// let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el") // another way to select an element
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

let player = {
    name: "Per",
    chips: 145
}

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() 
{
    let randomNumber = Math.floor( Math.random() * 13 ) + 1 

    if (randomNumber === 1)
    {
        return 11
    }
    else if (randomNumber > 10)
    {
        return 10
    }
    else
    {
        return randomNumber
    }
}


function renderGame()
{
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {    
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackjack = true
        isAlive = false
    }
    else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    return  
}

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}


function newCard() {

    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }

}




