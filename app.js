

let cards = [];
let sum =0;
let hasBlackJack = false
let isAlive = false;
let message = ""
let player = {
    name:['Abeer','Ali','Sally','Aya','Omar'],
    chips:Math.floor(Math.random()*200)
}
let messageEl = document.getElementById('message');
let sumEl = document.querySelector('#sum');
let cardEl = document.querySelector('#card');
let playerEl = document.getElementById('playerEl')

function getRandomName() {
    let ramdomIndex = Math.floor(Math.random()*(player.name.length))
    for ( let i = 0; i < player.name.length ; i++) {
        playerEl.textContent= player.name[ramdomIndex] + ": $" + player.chips
    }
}
getRandomName();

function getRandomCard() {

    let randomNumber= Math.floor(Math.random()*13) + 1;
    if( randomNumber === 1) {
        return 11
    } else if( randomNumber > 10 ){
        return 10
    } else {
    return randomNumber 
    }
}


function startGame() {
    isAlive=true;
    hasBlackJack=false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame()
}


function renderGame() {

//render out firstCard and secondCard
sumEl.textContent=`Sum: ${sum}`;
//render out All the cards we have
cardEl.textContent = `Cards: `
for ( let i =0; i<cards.length ; i++) {
cardEl.textContent += `${cards[i]} `

}
if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true;
} else {
    message = "You're out of the game!"
    isAlive = false;
}
messageEl.textContent = message;
}

console.log(isAlive)
function newCard() {
     // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
if (isAlive === true && hasBlackJack === false) {
let card = getRandomCard();
sum+=card;
cards.push(card)
renderGame()
    }
}
