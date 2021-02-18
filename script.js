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
  "leary20.bmp",
  "leary21.bmp",
  "leary22.bmp",
  "leary23.bmp",
  "leary24.bmp",
  "leary25.bmp"
);
console.log(learyArray);
window.onload = randomImg;

var randomNum = Math.floor(Math.random() * learyArray.length);
function randomImg() {
  var randomNum = Math.floor(Math.random() * learyArray.length);
  document.querySelectorAll(".slot__img img").src = learyArray[randomNum];
}
//var slot = document.getElementsByClassName("slot")[0];
// PROBA DRUGA VARIAJNATA

var slotArray = document.querySelectorAll(".slot");

slotArray.forEach(function (slot) {
  slot.addEventListener("mousedown", function () {
    // event.stopPropagation();
    slot.classList.add("rotate");
    document.querySelector("img").classList.add("grow");
    function ranDom() {
      document.querySelector("img").src = learyArray[randomNum];
    }
    setTimeout(ranDom, 1000);

    /////////////////////PROBA RANDOM ZA SVE
    var imgz = document.querySelectorAll("img");
    for (i = randomNum; i <= imgz.length; i++) {
      /////ako je i=randomNum, nema fora efekta, ali baca random
      imgz[randomNum].src = learyArray[randomNum];
    }
    setTimeout(randomAll, 1000);
  });
  //PROBA RANDOM FOR EACH
  // var imgz = document.querySelectorAll("img");
  console.log("clix");
});
//IZ RANDOMALL; PROBAVAM SA FOR EACH
// imgz.forEach(function randomAll(img) {
//   document.querySelector("img").src = learyArray[randomNum];
// });

function otherImg() {
  for (i = 0; i <= learyArray.length; i++) {
    document.getElementsByClassName("slot__img")[i].src = learyArray[randomNum];
  }
  return otherImg();
}
