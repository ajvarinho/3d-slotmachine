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

// funkcija za random assign na startu

window.addEventListener("load", function () {
  console.log("loaded");
  var size = learyArray.length;
  console.log("size", size);
  //var imgAll = document.querySelectorAll(".slot__img");
  var imgAll = document.getElementsByTagName("img");
  var imgz = imgAll.length;
  console.log("imgz", imgz);
  for (i = 0; i <= imgAll.length; i++) {
    var x = Math.floor(size * Math.random());
    //console.log("X", x);
    imgAll[i].src = learyArray[x];
  }
});

// get attribute je ključ za usporedbu slika i za slot
//.getAttribute(src)
// var proba = document.getElementById("proba");
// var probaDva = proba.getAttribute("src");
// console.log("proba", probaDva);
// var probaTri = document.getElementById("proba3");
// var probaTris = probaTri.getAttribute("src");
// function compare() {
//   if (probaDva === probaDva) {
//     console.log("RAMBO");
//   } else {
//     console.log("paa nijee");
//   }
// }
//compare(); ///radi, može preko src get attribute

//var slotArray = document.querySelectorAll(".slot");

var frame = document.getElementById("frame");
var slots = frame.getElementsByClassName("slot");

// var front1 = getElementById("front1");
// var front11 = front1.getAttribute("src");
// console.log("front11", front11);
// var front2 = getElementById("front2").getAttribute("src");
// var front3 = getElementById("front3").getAttribute("src");
// var frontsArray = new Array(front1, front2, front3);

//FUNKCIJA SLOTCHECK RADI

// function slotCheck() {
//   console.log("oujea");
//   if (front1 === front2) {
//     console.log("brrr");
//   } else {
//     console.log("rambo");
//   }
// }

function game(event) {
  if (event.keyCode === 32) {
    slots[0].classList.add("rotate");
    slots[1].classList.add("rotate");
    slots[2].classList.add("rotate");
    //randomImg();
    slotCheck();
  }
}

// function randomImg() {
//   var size = learyArray.length;
//   console.log("size", size);
//   for (i = 0; i <= frontsArray.length; i++) {
//     var x = Math.floor(size * Math.random());
//     //console.log("X", x);
//     frontsArray[i].src = learyArray[x];
//   }
//   setTimeout(randomImg, 1000);
// }

document.addEventListener("keydown", game);
