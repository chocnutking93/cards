

const cards = document.querySelectorAll(".cards");
const cardsArray = Array.from(cards);
const notice = document.querySelector(".notice");
const front = document.querySelectorAll('.front');
const back = document.querySelectorAll('.back');
const button = document.querySelector('.btn');


let firstCard = false;
let pickedCard;
let arr = [];
const countedArr = [];

cards.forEach(card => {
  card.addEventListener('click',flipCard)
})


// cardsArray.forEach((card) =>  {
//   card.addEventListener("click", () => {
//     flipCard();
//     cardEvent();
//   });
// });

function pickFirstCard() {
  cardsArray.forEach((card) => {
    card.addEventListener("click", flipCard);
  });
}

function cardEvent() {
  firstCard = !firstCard;
  pickedCard = this.textContent;
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

function flipCard () {
  console.log(this)

  this.classList.toggle('flipped');
}

