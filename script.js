console.log("ovonijetvojkompa-juter");
console.log($, "ourajt");

//PRoBA RANDOM SLIKA NA UPLOAD
var learyArray = new Array(
  "leary1.bmp",
  "lery2.bmp",
  "leary3.bmp",
  "leary4.bmp",
  "leary5.bmp",
  "leary6.bmp",
  "leary7.bmp",
  "leary8.bmp",
  "leary9.bmp",
  "leary10.bmp",
  "leary11.bmp",
  "leary12.bmp",
  "leary13.bmp",
  "leary14.bmp",
  "leary15.bmp",
  "leary16.bmp",
  "leary17.bmp",
  "leary18.bmp",
  "leary19.bmp",
  "leary20vece.bmp",
  "leary21.bmp",
  "leary23.bmp",
  "leary24.bmp",
  "leary25.bmp"
);
console.log(learyArray);
var pressed = false;

//CANVAS

function canVas() {
  var canvas = document.getElementById("canvas");
  console.log("cancas!", canvas);
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.strokeStyle = "rgb(58, 255, 58)";
  ctx.lineWidth = 5;
  // ctx.moveTo(0, 600);
  // ctx.lineTo(0, 600);
  // ctx.lineTo(1000, 600);
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  ctx.shadowBlur = 10;
  ctx.shadowColor = "rgb(58, 255, 58)";
  ctx.stroke();
  //sa beginpath počinje
  ctx.beginPath();
  ctx.strokeStyle = "rgb(58, 255, 58)";
  ctx.lineWidth = 2;
  ctx.moveTo(0, 550);
  ctx.lineTo(0, 550);
  ctx.lineTo(1000, 550);
  ctx.stroke();
  //završava
  //sa beginpath počinje
  ctx.beginPath();
  ctx.strokeStyle = "rgb(58, 255, 58)";
  ctx.lineWidth = 2;
  ctx.moveTo(0, 500);
  ctx.lineTo(0, 500);
  ctx.lineTo(1000, 500);
  ctx.stroke();
  //završava
  //sa beginpath počinje
  ctx.beginPath();
  ctx.strokeStyle = "rgb(58, 255, 58);";
  ctx.lineWidth = 2;
  ctx.moveTo(0, 450);
  ctx.lineTo(0, 450);
  ctx.lineTo(1000, 450);
  ctx.stroke();
  //završava
  //sa beginpath počinje
  ctx.beginPath();
  ctx.strokeStyle = "rgb(58, 255, 58);";
  ctx.lineWidth = 2;
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 0);
  ctx.lineTo(1000, 0);
  ctx.stroke();
  //završava

  ctx.beginPath();
  ctx.strokeStyle = "rgb(58, 255, 58)";
  ctx.lineWidth = 2;
  ctx.moveTo(0, 150);
  ctx.lineTo(0, 150);
  ctx.lineTo(1000, 150);
  ctx.stroke();

  //sa beginpath počinje
  ctx.beginPath();
  ctx.strokeStyle = "rgb(58, 255, 58)";
  ctx.lineWidth = 2;
  ctx.moveTo(0, 50);
  ctx.lineTo(0, 50);
  ctx.lineTo(1000, 50);
  ctx.stroke();
  //završava
  //sa beginpath počinje
  ctx.beginPath();
  ctx.strokeStyle = "rgb(58, 255, 58)";
  ctx.lineWidth = 2;
  ctx.moveTo(0, 100);
  ctx.lineTo(0, 100);
  ctx.lineTo(1000, 100);
  ctx.stroke();
  //završava

  ///////OKOMITE
  ctx.beginPath();
  ctx.strokeStyle = "rgb(58, 255, 58)";
  ctx.lineWidth = 2;
  ctx.moveTo(0, 600);
  ctx.lineTo(0, 600);
  ctx.lineTo(200, 450);
  ctx.stroke();
  //
  ctx.beginPath();
  ctx.strokeStyle = "rgb(58, 255, 58)";
  ctx.lineWidth = 2;
  ctx.moveTo(0, 475);
  ctx.lineTo(0, 475);
  ctx.lineTo(50, 450);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "rgb(58, 255, 58)";
  ctx.lineWidth = 2;
  ctx.moveTo(150, 800);
  ctx.lineTo(150, 800);
  ctx.lineTo(350, 450);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "rgb(58, 255, 58)";
  ctx.lineWidth = 2;
  ctx.moveTo(500, 800);
  ctx.lineTo(500, 800);
  ctx.lineTo(500, 450);
  ctx.stroke();
  //
  ctx.beginPath();
  ctx.strokeStyle = "rgb(58, 255, 58)";
  ctx.lineWidth = 2;
  ctx.moveTo(750, 600);
  ctx.lineTo(750, 600);
  ctx.lineTo(650, 450);
  ctx.stroke();
  //
  ctx.beginPath();
  ctx.strokeStyle = "rgb(58, 255, 58)";
  ctx.lineWidth = 2;
  ctx.moveTo(1000, 475);
  ctx.lineTo(1000, 475);
  ctx.lineTo(950, 450);
  ctx.stroke();
  //
  ctx.beginPath();
  ctx.strokeStyle = "rgb(58, 255, 58)";
  ctx.lineWidth = 2;
  ctx.moveTo(1000, 600);
  ctx.lineTo(1000, 600);
  ctx.lineTo(800, 450);
  ctx.stroke();

  //OKOMITE GORNJE
  ctx.beginPath();
  ctx.strokeStyle = "rgb(58, 255, 58)";
  ctx.lineWidth = 2;
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 0);
  ctx.lineTo(200, 150);
  ctx.stroke();
  //
  ctx.beginPath();
  ctx.strokeStyle = "rgb(58, 255, 58)";
  ctx.lineWidth = 2;
  ctx.moveTo(0, 125);
  ctx.lineTo(0, 125);
  ctx.lineTo(50, 150);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "rgb(58, 255, 58)";
  ctx.lineWidth = 2;
  ctx.moveTo(250, 0);
  ctx.lineTo(250, 0);
  ctx.lineTo(350, 150);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "rgb(58, 255, 58)";
  ctx.lineWidth = 2;
  ctx.moveTo(500, 0);
  ctx.lineTo(500, 0);
  ctx.lineTo(500, 150);
  ctx.stroke();
  //
  ctx.beginPath();
  ctx.strokeStyle = "rgb(58, 255, 58)";
  ctx.lineWidth = 2;
  ctx.moveTo(750, 0);
  ctx.lineTo(750, 0);
  ctx.lineTo(650, 150);
  ctx.stroke();
  //
  ctx.beginPath();
  ctx.strokeStyle = "rgb(58, 255, 58)";
  ctx.lineWidth = 2;
  ctx.moveTo(1000, 125);
  ctx.lineTo(1000, 125);
  ctx.lineTo(950, 150);
  ctx.stroke();
  //
  ctx.beginPath();
  ctx.strokeStyle = "rgb(58, 255, 58)";
  ctx.lineWidth = 2;
  ctx.moveTo(1000, 0);
  ctx.lineTo(1000, 0);
  ctx.lineTo(800, 150);
  ctx.stroke();

  //DEKORTIVNE
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(75, 205, 1, 0, 2 * Math.PI);
  //arc(x,y, radius, startingAngle, endAngle)
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.strokeStyle = "wheat";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(365, 255, 0.8, 0, 2 * Math.PI);
  //arc(x,y, radius, startingAngle, endAngle)
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();
  //
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(85, 355, 0.7, 0, 2 * Math.PI);
  //arc(x,y, radius, startingAngle, endAngle)
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();
  //
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(635, 175, 0.3, 0, 2 * Math.PI);
  //arc(x,y, radius, startingAngle, endAngle)
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();
  //
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(605, 355, 0.5, 0, 2 * Math.PI);
  //arc(x,y, radius, startingAngle, endAngle)
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();
  //
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(105, 405, 0.5, 0, 2 * Math.PI);
  //arc(x,y, radius, startingAngle, endAngle)
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();
  //
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(905, 355, 0.5, 0, 2 * Math.PI);
  //arc(x,y, radius, startingAngle, endAngle)
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();
  //
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(875, 395, 0.7, 0, 2 * Math.PI);
  //arc(x,y, radius, startingAngle, endAngle)
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();
  //
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(920, 285, 0.3, 0, 2 * Math.PI);
  //arc(x,y, radius, startingAngle, endAngle)
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();
  //
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(1015, 255, 0.3, 0, 2 * Math.PI);
  //arc(x,y, radius, startingAngle, endAngle)
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();
  //
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(360, 365, 0.2, 0, 2 * Math.PI);
  //arc(x,y, radius, startingAngle, endAngle)
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();
  //
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(425, 265, 0.8, 0, 2 * Math.PI);
  //arc(x,y, radius, startingAngle, endAngle)
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();
  //
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(40, 405, 0.2, 0, 2 * Math.PI);
  //arc(x,y, radius, startingAngle, endAngle)
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();
}
canVas();

var canvasImg = canvas.toDataURL();
console.log("cansvas", canvasImg);

// funkcija za random assign na startu

window.addEventListener("load", function () {
  console.log("loaded");
  var size = learyArray.length;
  console.log("size", size);
  //var imgAll = document.querySelectorAll(".slot__img");
  var imgAll = document.getElementsByTagName("img");
  var imgz = imgAll.length;
  console.log("imgz", imgz);
  for (let i = 0; i <= imgAll.length; i++) {
    //išao it var u let
    var x = Math.floor(size * Math.random());
    //console.log("X", x);
    imgAll[i].src = learyArray[x];
  }
});

//FUNKCIJA SLOTCHECK RADI

// function slotCheck() {
//   var checkOne = document.getElementById("front1").getAttribute("src");
//   console.log("checksrc", checkOne);
//   var checkTwo = document.getElementById("front2").getAttribute("src");
//   var checkThree = document.getElementById("front3").getAttribute("src");
//   console.log("oujea");
//   if (checkOne === checkTwo) {
//     console.log("brrr");
//     alert("ostavi se kompjutera");
//   } else {
//     console.log("rambo");
//   }
// }

function randomImg() {
  var size = learyArray.length;
  //console.log("opetsize", size);
  var frontOne = document.getElementById("front1");
  //console.log("front", frontOne);
  var frontTwo = document.getElementById("front2");
  var frontThree = document.getElementById("front3");
  var frontsArray = new Array(frontOne, frontTwo, frontThree);
  for (i = 0; i <= frontsArray.length; i++) {
    var x = Math.floor(size * Math.random());
    //console.log("X", x);
    frontsArray[i].src = learyArray[x];
    console.log("random jea");
  }
  setTimeout(randomImg, 1000);
}

function game(event) {
  var repeat = event.repeat;
  var frame = document.getElementById("frame");
  var canvas = document.getElementById("canvas");
  var canvasImg = canvas.toDataURL();
  //frame.style.backgroundImage = "url(" + canvasImg + ")";
  let slots = frame.getElementsByClassName("slot");
  if ((pressed = true || event.keyCode === 32)) {
    slots[0].classList.toggle("rotate"); //proba toggle umjesto add
    slots[1].classList.toggle("rotate");
    slots[2].classList.toggle("rotate");
    slotCheck();
    randomImg();
    //return null; //dodao zadnje
  } else {
    //pressed = false;
    console.log("somfool");
  }
}

document.addEventListener("keydown", game);
//slotCheck();

function slotCheck() {
  var left = document.getElementById("left");
  var checkOne = document.getElementById("front1").getAttribute("src");
  console.log("checksrc", checkOne);
  var checkTwo = document.getElementById("front2").getAttribute("src");
  var checkThree = document.getElementById("front3").getAttribute("src");
  console.log("oujea");
  if (
    checkOne === checkTwo ||
    checkTwo === checkThree ||
    (checkOne === checkTwo) === checkThree
  ) {
    // left.classList.toggle("win");
    console.log("win");
    alert("ostavi se kompjutera");
    //return null; //dodao zadnje
  } else {
    return;
  }
}

