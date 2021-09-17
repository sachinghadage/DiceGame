var randomnumber1 = Math.floor(Math.random()*6)+1;
var diceimgsrc1="images/dice"+randomnumber1+".png";
var dice1=document.querySelectorAll("img")[0];
dice1.setAttribute("src",diceimgsrc1);

var randomnumber2 = Math.floor(Math.random()*6)+1;
var diceimgsrc2="images/dice"+randomnumber2+".png";
var dice2=document.querySelectorAll("img")[1];
dice2.setAttribute("src",diceimgsrc2);


if (randomnumber1>randomnumber2){
    document.getElementById("tit").innerHTML="Player-1 Wins!"
}
else if (randomnumber1<randomnumber2){
    document.getElementById("tit").innerHTML="Player-2 Wins!"
}
else{
    document.getElementById("tit").innerHTML="Drow!"
}