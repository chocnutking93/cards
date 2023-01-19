const cards = document.querySelectorAll(".cards");


const cardsArray = Array.from(cards);
// console.log(cardsArray);

let firstCard = false;
let secondCard;
let currentTurn;
let secondPick;
let pickedCard;
let arr = []

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


function startGame() {
  pickFirstCard()

  // pickSecondCard()
}


// cardsArray.forEach(card => {
//   card.addEventListener("click", pickCard())
// })

// function pickCard (e) {
//   console.log('this is my')
// }
 

// function pickFirstCard() {
//   cardsArray.forEach((card) => {
//     card.addEventListener("click", (e) => {
//       firstCard = !firstCard
//       pickedCard = e.target.innerText;
//       console.log(`my first card is ${pickedCard}`);
//       card.removeEventListener('click', e, true)
//       pickSecondCard()

//       // console.log(currentTurn.innerText)
//       // console.log(firstCard ? 'this is my first card' : 'this is my second card')


//     });
//   });
// }

  cardsArray.forEach(card => {
  card.addEventListener("click", cardEvent)
})


function pickFirstCard () {
  cardsArray.forEach(card => {
    card.addEventListener("click", cardEvent)
  })
}

function cardEvent () {
  firstCard = !firstCard
  pickedCard = this.innerText;
  console.log(`my card is ${pickedCard}`)
  arr.push(pickedCard)
  if (arr.length === 2) {
   checkMatch()
  }
}

function checkMatch () {
  if (arr[0] === arr[1]) {
    console.log('you found a match')
    arr = []
    console.log(arr)
    
  } else {
    console.log('try again')
  }
}  




 

function cardEvent2 () {
  secondPick = this.innerText;
  console.log(`my second card is ${secondPick}`)  

  cardsArray.forEach(card => {
    card.removeEventListener("click",cardEvent2)
  })
  
}


function pick2nd () {
  cardsArray.forEach(card => {
    card.addEventListener("click", cardEvent2)
  })
}

// function pickSecondCard () {
//   cardsArray.forEach(card => {
//     card.addEventListener("click", e => {
//       firstCard = true
//        secondPick = e.target.innerText;
//       console.log(`my second card is ${secondPick}`)
//       card.removeEventListener('click', e)
//       return secondPick
//     })
//   })
// }

// function switchTurns () {
//   currentTurn = currentTurn === pickedCard ? secondPick 
// }


// function checkMatch () {
//   if (currentTurn.innerText === cardsArray[0].innerText) {
//     console.log('this is a match')
//   }
// }
// function switchTurns () {
//   currentTurn = currentTurn === firstCard ? secondCard : firstCard;
// }

// function checkMatch () {

// }
