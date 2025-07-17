const button= document.getElementById("roll-button");
const box= document.querySelector('.box');
const rollhistory= document.getElementById("roll-history");


function getRandomDice(){
  return Math.floor(Math.random()*6) + 1 ;
};

function getDiceDisplay(number){
const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
box.innerHTML=diceFaces[number - 1];
};

function rollHistory(rollNumber, diceValue){
 const newItem = document.createElement('li');
newItem.innerHTML=`Roll ${rollNumber}: <span>${diceValue}</span>`
rollhistory.appendChild(newItem);
};
let rollCount = 2;

button.addEventListener('click', ()=>{
const diceNumber = getRandomDice();
getDiceDisplay(diceNumber);
rollHistory(++rollCount, box.innerHTML);
});
