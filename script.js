const cards = document.querySelectorAll(".cards");

const cardsArray = Array.from(cards);


let firstCard = false;
let pickedCard;
let arr = [];

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
  if (arr.length === 2) {
    console.log(arr);
    checkMatch();
  }
}

function checkMatch() {
  if (arr[0] === arr[1]) {
    console.log("you found a match");
    arr = [];
    console.log(arr);
  } else {
    console.log("try again");
    arr = [];
  }
}
