// change images using mouse over
function mouseOver1() {
    document.getElementById("thumbnail-large1").style.display="block";
    document.getElementById("thumbnail-large2").style.display="none";
    document.getElementById("thumbnail-large3").style.display="none";
    document.getElementById("thumbnail-large4").style.display="none";
    document.getElementById("thumbnail-large5").style.display="none";
}

function mouseOver2() {
    document.getElementById("thumbnail-large2").style.display="block";
    document.getElementById("thumbnail-large1").style.display="none";
    document.getElementById("thumbnail-large3").style.display="none";
    document.getElementById("thumbnail-large4").style.display="none";
    document.getElementById("thumbnail-large5").style.display="none";
}
function mouseOver3() {
    document.getElementById("thumbnail-large3").style.display="block";
    document.getElementById("thumbnail-large1").style.display="none";
    document.getElementById("thumbnail-large2").style.display="none";
    document.getElementById("thumbnail-large4").style.display="none";
    document.getElementById("thumbnail-large5").style.display="none";
}
function mouseOver4() {
    document.getElementById("thumbnail-large4").style.display="block";
    document.getElementById("thumbnail-large1").style.display="none";
    document.getElementById("thumbnail-large3").style.display="none";
    document.getElementById("thumbnail-large2").style.display="none";
    document.getElementById("thumbnail-large5").style.display="none";
  }
  function mouseOver5() {
      document.getElementById("thumbnail-large5").style.display="block";
    document.getElementById("thumbnail-large1").style.display="none";
    document.getElementById("thumbnail-large3").style.display="none";
    document.getElementById("thumbnail-large4").style.display="none";
    document.getElementById("thumbnail-large2").style.display="none";
  }
  //=====================================================================

  //change background text and page color

function Bg_Color(){
//get the color id for background color change
let $bgColor=document.getElementById("bg_switch").value;
//get the body id to change the color
let $body=document.getElementById("body");
//change body color
$body.style.backgroundColor=$bgColor;
}

function Txt_Color(){
//get the color id for text color change
let $txtColor=document.getElementById("txt_switch").value;
//get the universal selector to change text color
let allElements = document.getElementsByTagName("*");
//change body color
for (var i = 0, len = allElements.length; i < len; i++) {
    var element = allElements[i];
    element.style.color=$txtColor;
}

}