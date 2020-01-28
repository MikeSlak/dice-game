var randomNumber1 = Math.floor(Math.random() * 6 + 1);0 //random number 1 to 6
var diceSource1 = "images/dice" + randomNumber1 + ".png"; //set image file to random number
console.log(diceSource1);
document.querySelector(".img1").setAttribute("src", diceSource1); //change first dice to random number


var randomNumber2 = Math.floor(Math.random() * 6 +1); //random number 1 to 6
var diceSource2 = "images/dice"  + randomNumber2 + ".png"; //set image file to random number
console.log(diceSource2);
document.querySelector(".img2").setAttribute("src", diceSource2); //change second dice to random number

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player One Wins!";
}
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player Two Wins!";
}
else{
  document.querySelector("h1").innerHTML = "DRAW!";
}

