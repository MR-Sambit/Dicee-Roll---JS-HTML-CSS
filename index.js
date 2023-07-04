var randomNumber1 = Math.floor(Math.random()*7);
var randomNumber2 = Math.floor(Math.random()*7);
// alert(randomNumber1);

switch (randomNumber1) {
    case 1:
        document.querySelector(".img1").setAttribute("src","images/dice1.png");
        break;
    case 2:
        document.querySelector(".img1").setAttribute("src","images/dice2.png");
        break;
    case 3:
        document.querySelector(".img1").setAttribute("src","images/dice3.png");
        break;
    case 4:
        document.querySelector(".img1").setAttribute("src","images/dice4.png");
        break;
    case 5:
        document.querySelector(".img1").setAttribute("src","images/dice5.png");
        break;
    case 6:
        document.querySelector(".img1").setAttribute("src","images/dice6.png");
        break;
    default:
        document.querySelector(".img1").setAttribute("src","images/dice1.png");
        break;
}

// if (randomNumber1==1){
//     document.querySelector(".img1").setAttribute("src","images/dice1.png");
// }
// else if(randomNumber1==2){
//     document.querySelector(".img1").setAttribute("src","images/dice2.png");
// }
// else if(randomNumber1==3){
//     document.querySelector(".img1").setAttribute("src","images/dice3.png");
// }
// else if(randomNumber1==4){
//     document.querySelector(".img1").setAttribute("src","images/dice4.png");
// }
// else if(randomNumber1==5){
//     document.querySelector(".img1").setAttribute("src","images/dice5.png");
// }
// else{
//     document.querySelector(".img1").setAttribute("src","images/dice6.png")
// }
//alert 2
switch (randomNumber2) {
    case 1:
        document.querySelector(".img2").setAttribute("src","images/dice1.png");
        break;
    case 2:
        document.querySelector(".img2").setAttribute("src","images/dice2.png");
        break;
    case 3:
        document.querySelector(".img2").setAttribute("src","images/dice3.png");
        break;
    case 4:
        document.querySelector(".img2").setAttribute("src","images/dice4.png");
        break;
    case 5:
        document.querySelector(".img2").setAttribute("src","images/dice5.png");
        break;
    case 6:
        document.querySelector(".img2").setAttribute("src","images/dice6.png");
        break;
    default:
        document.querySelector(".img2").setAttribute("src","images/dice1.png");
        break;
}
// if (randomNumber2==1){
//     document.querySelector(".img2").setAttribute("src","images/dice1.png");
// }
// else if(randomNumber2==2){
//     document.querySelector(".img2").setAttribute("src","images/dice2.png");
// }
// else if(randomNumber2==3){
//     document.querySelector(".img2").setAttribute("src","images/dice3.png");
// }
// else if(randomNumber2==4){
//     document.querySelector(".img2").setAttribute("src","images/dice4.png");
// }
// else if(randomNumber2==5){
//     document.querySelector(".img2").setAttribute("src","images/dice5.png");
// }
// else{
//     document.querySelector(".img2").setAttribute("src","images/dice6.png")
// }
//------------------Winner Decleration--------------
var x = document.getElementById("h1").innerHTML;
if (randomNumber1>randomNumber2) {
    document.getElementById("h1").innerHTML = "🚩 Player 1 Wins";
    
}
else if(randomNumber1==randomNumber2){
    document.getElementById("h1").innerHTML = "🚩 Draw 🚩";
}
else{
    document.getElementById("h1").innerHTML = " Player 2 Wins 🚩 ";
}

