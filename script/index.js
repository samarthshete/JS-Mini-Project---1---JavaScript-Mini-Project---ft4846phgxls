
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 2000);
let le = 1;
function nex() {
    document.getElementById('radio' + le).checked = true; 
    le++;
    if(le > 4){
       le = 1;
      }
}
function pre() {
    le--;
    if(le<1){
        le=4
    }
    document.getElementById('radio' + le).checked = true; 
    if(le < 1){
       le = 4;
      }
}
window.addEventListener("resize", changequery);
function changequery() {
  location.reload();
}
 

// dino-slider
function responsiveSlider() {
  var slider = document.querySelector("#dino-container");
  var sliderWidth = slider.offsetWidth / 6;
  
  
  var slideList = document.querySelector("#dino-slider");

  var count = 1;

  function prevSlide() {
    if (count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";

      document.getElementById("next").style.color="rgb(245, 245, 245)"

      count++;
    }else{
      document.getElementById("prev").style.color="rgb(206, 206, 206)"
  }
  }
  function nextSlide() {
    if (count < 6) {
      slideList.style.left = "-" + count * sliderWidth + "px";

      document.getElementById("prev").style.color="rgb(245, 245, 245)"
      count++;
    }else{
      document.getElementById("next").style.color="rgb(206, 206, 206)"
  } 
  }
  prev.addEventListener("click", prevSlide);
  next.addEventListener("click", nextSlide);

}

window.onload = function () {
  
};

//watchPics slider js
function responsivewatchSlider() {
  var slideList = document.querySelector("#sliderwatch");

  var count = 1;

  function prevwatchSlide() {
    if (count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * 330 + "px";

      document.getElementById("nextwatch").style.opacity = 1;

      count++;
    } else {
      document.getElementById("prevwatch").style.opacity = 0.5;
    }
  }
  function nextwatchSlide() {
    if (count < 4) {
      slideList.style.left = "-" + count * 330 + "px";

      document.getElementById("prevwatch").style.opacity = 1;
      count++;
    } else {
      document.getElementById("nextwatch").style.opacity = 0.5;
    }
  }
  document.getElementById("prevwatch").addEventListener("click", prevwatchSlide);
  document.getElementById("nextwatch").addEventListener("click", nextwatchSlide);
}

 
