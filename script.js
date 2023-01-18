const cards = document.querySelectorAll(".cards");

const cardArray = [];
const cardsArray = Array.from(cards);
console.log(cardsArray);

let firstCard = false;
let secondCard;
let currentTurn;

// const cardArray = [
//     { name: "1" },
//     { name: "1" },
//     { name: "2" },
//     { name: "2" },
//     { name: "3" },
//     { name: "3" },
//     { name: "4" },
//     { name: "4" },
//     { name: "5" },
//     { name: "5" },
//     { name: "6" },
//     { name: "6" },

// ]
startGame();


function startGame() {
  pickFirstCard()

}


// cardsArray.forEach(card => {
//   card.addEventListener("click", pickCard())
// })

// function pickCard (e) {
//   console.log('this is my')
// }
 

function pickFirstCard() {
  cardsArray.forEach((card) => {
    card.addEventListener("click", (e) => {
      firstCard = !firstCard
      console.log(`my card is ${e.target.innerText}`);
      e.target = firstCard;

      if (firstCard) {
        isTrue()
      }
      else {
        isFalse()
      }
    });
  });
}



function isTrue () {
  console.log('this is my first card')
}

function isFalse () {
  console.log('this is my second card')
}


// function switchTurns () {
//   currentTurn = currentTurn === firstCard ? secondCard : firstCard;
// }

// function checkMatch () {

// }
