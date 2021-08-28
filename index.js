

/*function takeMeHome {

  window.open("https://www.youtube.com");
}

document.getElementsByClassName("clickable")[0].addEventListener("click",takeMeHome);*/

var roll1 = Math.random();
var roll2 = Math.random();
roll1 = roll1*7;
roll2 = roll2*7;
roll1 = Math.floor(roll1);
roll2 = Math.floor(roll2);

document.getElementsByClassName("value1")[0].innerText = roll1;
document.getElementsByClassName("value2")[0].innerText = roll2;


if(roll1 > roll2)
{
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS";
    document.querySelector("h1").classList.add("posChange");
}
else if(roll2 > roll1)
{
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS";
    document.querySelector("h1").classList.add("posChange");
}
else
{
  document.querySelector("h1").innerHTML = "ROLL AGAIN";
}

var image1 = document.getElementsByClassName("image1")[0].src;
var image2 = document.getElementsByClassName("image2")[0].src;

if(roll1 == 0)
{
  document.getElementsByClassName("image1")[0].src = "images/pepe.gif";
}
if(roll2 == 0)
{
  document.getElementsByClassName("image2")[0].src = "images/pepe.gif";
}
if(roll1 == 1)
{
  document.getElementsByClassName("image1")[0].src = "images/one.png";
}
if(roll2 == 1)
{
  document.getElementsByClassName("image2")[0].src = "images/one.png";
}
if(roll1 == 2)
{
  document.getElementsByClassName("image1")[0].src = "images/two.png";
}
if(roll2 == 2)
{
  document.getElementsByClassName("image2")[0].src = "images/two.png";
}
if(roll1 == 3)
{
  document.getElementsByClassName("image1")[0].src = "images/three.png";
}
if(roll2 == 3)
{
  document.getElementsByClassName("image2")[0].src = "images/three.png";
}
if(roll1 == 4)
{
  document.getElementsByClassName("image1")[0].src = "images/four.png";
}
if(roll2 == 4)
{
  document.getElementsByClassName("image2")[0].src = "images/four.png";
}
if(roll1 == 5)
{
  document.getElementsByClassName("image1")[0].src = "images/five.png";
}
if(roll2 == 5)
{
  document.getElementsByClassName("image2")[0].src = "images/five.png";
}
if(roll1 == 6)
{
  document.getElementsByClassName("image1")[0].src = "images/six.png";
}
if(roll2 == 6)
{
  document.getElementsByClassName("image2")[0].src = "images/six.png";
}
