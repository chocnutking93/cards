const cards = document.querySelectorAll(".cards");
const cardsArray = Array.from(cards);
const notice = document.querySelector(".notice");

let firstCard = false;
let pickedCard;
let arr = [];
const countedArr = [];

cardsArray.forEach((card) => {
  card.addEventListener("click", cardEvent);
});

function pickFirstCard() {
  cardsArray.forEach((card) => {
    card.addEventListener("click", cardEvent);
  });
}

function cardEvent() {
  firstCard = !firstCard;
  pickedCard = this.innerText;
  console.log(`my card is ${pickedCard}`);
  arr.push(pickedCard);
  countedArr.push(pickedCard)

  if (arr.length === 2) {
    checkMatch();
  }
}

function checkMatch() {
  if (arr[0] === arr[1]) {
    notice.innerText = "You found a match!";
    arr = [];
  } else {
    notice.innerText = "Try again";

    arr = [];
  }
}
