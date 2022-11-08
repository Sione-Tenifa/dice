let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDiceImg = "dice" + randomNumber1 + ".png"
let randomImgSource2 = "images/dice" + randomNumber2 + ".png"
let randomImageSource = "images/" + randomDiceImg

let img1 = document.querySelectorAll("img")[0]
let img2 = document.querySelectorAll("img")[1]

img1.setAttribute("src", randomImageSource)
img2.setAttribute("src", randomImgSource2)

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Won!👏"
}else if( randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Won!👏"
}else{
    document.querySelector("h1").innerHTML = "Draw"

}