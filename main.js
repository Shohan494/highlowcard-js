var numbers = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
var suits = ['hearts', 'spades', 'clubs', 'diamonds'];

var pickedNumber1 = numbers[Math.floor(Math.random()*numbers.length)];
var pickedSuit1 = suits[Math.floor(Math.random()*suits.length)];

var pickedNumber2 = numbers[Math.floor(Math.random()*numbers.length)];
var pickedSuit2 = suits[Math.floor(Math.random()*suits.length)];

//2 players game
var p1Card = pickedSuit1 + " " + pickedNumber1
var p2Card = pickedSuit2 + " " +  pickedNumber2

console.log("Before checking for matched card");
console.log("Player 1: ", p1Card);
console.log("Player 2: ", p2Card);
console.log("\n");

if (p1Card === p2Card){
  
  console.log("Matched, trying again");
  
  pickedNumber1 = numbers[Math.floor(Math.random()*numbers.length)];
  pickedSuit1 = suits[Math.floor(Math.random()*suits.length)];
  
  pickedNumber2 = numbers[Math.floor(Math.random()*numbers.length)];
  pickedSuit2 = suits[Math.floor(Math.random()*suits.length)];
  
  p1Card = pickedSuit1 + " " + pickedNumber1
  p2Card = pickedSuit2 + " " +  pickedNumber2
}

console.log("After checking for matched card");

console.log("Player 1: ", p1Card);
console.log("Player 2: ", p2Card);

console.log("\n** Result **\n");

if (numbers.indexOf(pickedNumber1) > numbers.indexOf(pickedNumber2)) {
  console.log("Player 1 wins");
} else if (numbers.indexOf(pickedNumber1) == numbers.indexOf(pickedNumber2)) {
  console.log("Duo, It's a tie");
} else {
  console.log("Player 2 wins");
}

