const cards = [{ //create an object array of Major Arcana tarot cards
    "id": 0,
    "name": "The Fool",
    "method": "Upright: innocence, new beginnings, free spirit. | Reversed: recklessness, taken advantage of, inconsideration.",
    "image": "images/00.png"
  }, 
  {
    "id": 1,
    "name": "The Magician",
    "method": "Upright: willpower, desire, creation, manifestation. | Reversed: trickery, illusions, out of touch.",
    "image": "images/01.png"
  },
  {
      "id": 2,
    "name": "The High Priestess",
    "meaning": "Upright: intuitive, unconscious, inner voice. | Reversed: lack of center, lost inner voice, repressed feelings.",
    "image": "images/02.png"
    },
   {
      "id": 3,
      "name": "The Empress",
      "meaning": "Upright: motherhood, fertility, nature. | Reversed: dependence, smothering, emptiness, nosiness.",
      "image": "images/03.png"
  },
  {
      "id": 4,
    "name": "The Emperor",
    "meaning": "Upright: authority, structure, control, fatherhood. | Reversed: tyranny, rigidity, coldness.",
    "image": "images/04.png"
    },
    {
      "id": 5,
      "name": "The Hirophant",
      "meaning": "Upright: tradition, conformity, morality, ethics. | Reversed: rebellion, subversiveness, new approaches.",
      "image": "images/05.png"
  },
  {
      "id": 6,
      "name": "The Lovers",
      "meaning": "Upright: partnerships, duality, union. | Reversed: loss of balance, one-sidedness, disharmony.",
      "image": "images/06.png"
  },
  {
      "id": 7,
      "name": "The Chariot",
      "meaning": "Upright: direction, control, willpower. | Reversed: lack of control, lack of direction, aggression.",
      "image": "images/07.png"
  },
  {
      "id": 8,
      "name": "Strenght",
      "meaning": "Upright: inner strength, bravery, compassion, focus. | Reversed: self doubt, weakness, insecurity.",
      "image": "images/08.png"
  },
  {
      "id": 9,
      "name": "The Hermit",
      "meaning": "Upright: contemplation, search for truth, inner guidance. | Reversed: loneliness, isolation, lost your way.",
      "image": "images/09.png"
  },
  {
      "id": 10,
      "name": "The Wheel of Fortune",
      "meaning": "Upright: change, cycles, inevitable fate. | Reversed: no control, clinging to control, bad luck.",
      "image": "images/10.png"
  },
  {
      "id": 11,
      "name": "Justice",
      "mmeaning": "Upright: cause and effect, clarity, truth. | Reversed: dishonesty, unaccountability, unfairness.",
      "image": "images/11.png"
  },
  {
      "id": 12,
      "name": "The Hanged Man",
      "meaning": "Upright: sacrifice, release, martyrdom. | Reversed: stalling, needless sacrifice, fear of sacrifice",
      "image": "images/12.png"
  },
  {
      "id": 13,
      "name": "Death",
      "meaning": "Upright: end of cycle, beginnings, change, metamorphosis. | Reversed: fear of change, holding on, stagnation, decay.",
      "image": "images/13.png"
  },
  {
      "id": 14,
      "name": "Temperance",
      "meaning": "Upright: middle path, patience, finding meaning. | Reversed: extremes, excess, lack of balance.",
      "image": "images/14.png"
  },
  {
      "id": 15,
      "name": "The Devil",
      "meaning": "Upright: addiction, materialism, playfulness. | Reversed: freedom, release, restoring control.",
      "image": "images/15.png"
  },
  {
      "id": 16,
      "name": "The Tower",
      "meaning": "Upright: sudden upheaval, broken pride, disaster. | Reversed: disaster avoided, delayed disaster, fear of suffering.",
      "image": "images/16.png"
  },
  {
      "id": 17,
      "name": "The Star",
      "meaning": "Upright: hope, faith, rejuvenation. | Reversed: faithlessness, discouragement, insecurity.",
      "image": "images/17.png"
  },
  {
      "id": 18,
      "name": "The Moon",
      "meaning": "Upright: unconscious, illusions, intuition. | Reversed: confusion, fear, misinterpretation.",
      "image": "images/18.png"
  },
  {
      "id": 19,
      "name": "The Sun",
      "meaning": "Upright: joy, success, celebration, positivity. | Reversed: negativity, depression, sadness.",
      "image": "images/19.png"
  },
  {
      "id": 20,
      "name": "Judgement",
      "meaning": "Upright: reflection, reckoning, awakening. | Reversed: lack of self awareness, doubt, self loathing",
      "image": "images/20.png"
  },
  {
      "id": 21,
      "name": "The World",
      "meaning": "Upright: fulfillment, harmony, completion | Reversed: incompletion, no closure",
      "image": "images/21.png"
  }]



function pickCard() {   //function which pick an object from the array cards
    let randomCard = Math.floor(Math.random() * cards.length); //get a randon card considering the number of cards
  for (let i = 0; i < cards.length; i++) {
    if ( cards[i].id === randomCard ) {
        alert("Your card is " +cards[i].name) //alerts the card's name
        drawCard( cards[i] );
    }
  }
}

/*function drawCard( draw ) {  //function to draw card from array cards
document.getElementById("draw").src = draw.image; //add the image related wiht the randon item sorted by array
document.getElementById("cardDescription").innerText = draw.meaning; //add meaning of the card bellow the same
  let cardPosition = Math.floor(Math.random() * 2 );  //function 
  //console.log( cardPosition ); =>debug function to analyze why the cards are inverting just one time (it was a CSS error)
  if ( cardPosition === 0) {
      document.getElementById("draw").classList.remove("original"); //by removing and adding the css class again we were able to get a reversed or not card accordingly to the random
      document.getElementById("draw").classList.add("rotate"); 
  }else{
    document.getElementById("draw").classList.remove("rotate");
    document.getElementById("draw").classList.add("original");
  }
}

*/

function drawCard( space ) {
     //function to draw card from array cards
document.getElementById("draw").src = space.image; //add the image related with the randon item sorted by array
document.getElementById("cardDescription").innerText = space.meaning; //add meaning of the card bellow the same
  let cardPosition = Math.floor(Math.random() * 2 );  //function 
  //console.log( cardPosition ); =>debug function to analyze why the cards are inverting just one time (it was a CSS error)
  if ( cardPosition === 0) {
      document.getElementById(space).classList.remove("original"); //by removing and adding the css class again we were able to get a reversed or not card accordingly to the random
      document.getElementById(space).classList.add("rotate"); 
  }else{
    document.getElementById(space).classList.remove("rotate");
    document.getElementById(space).classList.add("original");
  }
}


/*function chooseCard() {
    return Math.floor(Math.random() * cards.length);
  }
  
  function card1() {
    document.getElementById("card1").src = "images/" + cards[chooseCard()];
  }
  draw1.addEventListener("click", card1);

  function card2() {
    document.getElementById("card1").src = "images/" + cards[chooseCard()];
  }
  draw2.addEventListener("click", card2);
  function card3() {
    document.getElementById("card1").src = "images/" + cards[chooseCard()];
  }
  draw3.addEventListener("click", card3);