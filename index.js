var randomNumber1 =  Math.floor(Math.random()*6)+1;
var randomdice = "dice" + randomNumber1+".png";
var randomImageSource = "img/"+randomdice;
var img1 = document.querySelectorAll("img")[0]
img1.setAttribute("src",randomImageSource)

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "img/dice"+randomNumber2+".png";
var img2 = document.querySelectorAll("img")[1]
img2.setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="You Won! ⛳"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="You Lose!😞"
}
else{
    document.querySelector("h1").innerHTML="Match Draw!😉 "
}

