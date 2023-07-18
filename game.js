let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let age = 25; // Update the age value to test the club entry condition
let cards = [];
/*if (age < 20) {
  console.log("You cannot enter the club!");
} else {
  console.log("Welcome!");
}
*/

let player = {
  name: "enola",
  chips: 200,
};
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

console.log(cards);

let messageEl = document.getElementById("message-el");

let sumEl = document.getElementById("sum-el");

let cardsEl = document.getElementById("cards-el");

function getRandomCard() {
  // if 1     -> return 11
  // if 11-13 -> return 10
  she = Math.floor(Math.random() * 13) + 1;

  if (she == 1) {
    return 11;
  } else if (she > 10) {
    return 10;
  } else {
    return she;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  sumEl.textContent = "sum:" + sum;
  cardsEl.textContent = "cards :";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  if (sum < 21) {
    message = "Do you want to draw a new card? 😄";
  } else if (sum > 21) {
    message = "You are done! 😢";
    isAlive = false;
  } else {
    message = "YOO WON! 🤟";
    hasBlackJack = true;
  }
  console.log(isAlive);
  console.log(message);
  messageEl.textContent = message; // Update the displayed message
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    //push new cards to the array
    cards.push(card);

    renderGame();
  }
}
