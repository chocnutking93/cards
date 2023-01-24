const cards = document.querySelectorAll(".cards");
const cardsArray = Array.from(cards);
const notice = document.querySelector(".notice");
const front = document.querySelectorAll(".front");
const back = document.querySelectorAll(".back");
const button = document.querySelector(".btn");
const cardContainer = document.querySelectorAll('.card-container');
const resetButton = document.querySelector('.reset')

resetButton.style.display = 'none'

let cardsWon = 0;
let firstCard = false;
let flippedCard = false;
let firstPickedCard;
let secondCard;
let arr = [];
let lockedCard = false;

randomizeCards()

function cardEvent() {
  firstCard = !firstCard;
  firstPickedCard = this;
  console.log(firstPickedCard.dataset);
  arr.push(firstPickedCard);

  countedArr.push(firstPickedCard);

  if (arr.length === 2) {
    checkMatch();
  }
}


function checkMatch() {
  if (
    firstCard.dataset.card == secondCard.dataset.card &&
    firstCard != secondCard
  ) {
    notice.innerText = "You found a match";
    disableCards();
    cardsWon += 1;
    checkFinish();
    return;
  } else {
    notice.innerText = "Try again!";
    unflipCard();
  }
}

function flipCard() {
  this.classList.add("flipped");

  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;

    return;
  }
  if (this === firstCard) return;
  secondCard = this;
  flippedCard = false;
  console.log(secondCard.dataset);
  lockedCard = true;

  checkMatch();
}

function unflipCard() {
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");


  }, 700);
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);


}

function checkFinish() {
  if (cardsWon === 5) {
    notice.innerText = "Congratulations, you beat the game!";
    resetButton.style.display='block'
  }
}

function randomizeCards () {
  cards.forEach(card => {
    let randomSort = Math.floor(Math.random() * 100);
    card.style.order = randomSort;
  })
}

function resetCards () {
  window.location.reload(true)
} 



resetButton.addEventListener('click', resetCards)

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});
