var randomNumber1=Math.floor(Math.random()*6)+1;   //random number 1-6
var randomDiceImage="dice"+randomNumber1+".png";   //dice1-dice6
var randomImageSource="images/"+randomDiceImage;   //folder images
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource); //random dice to the left dice

var randomNumber2=Math.floor(Math.random()*6)+1;  //All down bellow are the same for the right dice
var randomDiceImage2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);


if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML="Player 2 Wins!";  //if player 2 wins
}
else if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";  //if player 1 wins
}
else { 
    document.querySelector("h1").innerHTML="Draw!";   //if players have the same number of the dice
}