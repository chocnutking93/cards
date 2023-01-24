const cards = document.querySelectorAll(".cards");
const cardsArray = Array.from(cards);
const notice = document.querySelector(".notice");
const front = document.querySelectorAll(".front");
const back = document.querySelectorAll(".back");
const button = document.querySelector(".btn");

let cardsWon = 0;
let firstCard = false;
let flippedCard = false;
let firstPickedCard;
let secondCard;
let arr = [];
const countedArr = [];

function cardEvent() {
  firstCard = !firstCard;
  firstPickedCard = this;
  console.log(firstPickedCard.dataset);
  // console.log(`my cards is ${pickedCard}`);
  arr.push(firstPickedCard);

  countedArr.push(firstPickedCard);

  if (arr.length === 2) {
    checkMatch();
  }
}

function checkMatch () {
    if (
      firstCard.dataset.card == secondCard.dataset.card && firstCard != secondCard)
    {
    notice.innerText = "You found a match";
      disableCards();
      cardsWon += 1;
      checkFinish();
    return;
  } else {
    notice.innerText = "Try again!"
    unflipCard();

  }
}

function flipCard() {
  this.classList.add("flipped");

  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;
    // console.log(firstCard.dataset)
    return;
  } 
  secondCard = this;
  console.log(secondCard.dataset)
  flippedCard = false;
  // console.log(secondCard.dataset)
  checkMatch();
  
}


function unflipCard () {
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
  }, 700
  )
}


function disableCards () {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard)
  // secondCard.removeEventListener('click',flipCard)
}

function checkFinish () {
  if (cardsWon === 5) {
     notice.innerText = "Congratulations, you beat the game!"
  }
}

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});

// cardsArray.forEach(card => {
//   card.addEventListener('click', cardEvent)
// })
