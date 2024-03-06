var button = document.querySelector("button");

function rollDice(){
//image 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //generating random num between 1-6
var randomDiceImage = "dice"+ randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/"+ randomDiceImage; //folderName+imageName (images/dice1.png - images/dice6.png)
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource); //querySelectorAll cause we've 2 images to tap into the fist one we need to specify the position[0]

//image 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//the title
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins🚩";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins🚩";
}else {
    document.querySelector("h1").innerHTML="Draw!";
}

}

button.addEventListener("click", rollDice);

