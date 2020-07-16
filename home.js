var slideCount = 0;
var bool;
var slideTransition;

function controlSlideShow(n) {
  if(n) {
    bool = true;
    hideElements("play");
    slideShow();
  } else {
    bool = false;
    hideElements("pause");
    slideShow();
  }
}

function getBool() {
  return bool;
}

function slideShow() {
  if(getBool()) {
    showSlide(1);
    slideTransition = setTimeout(slideShow, 3000);
  } else {
    clearTimeout(slideTransition);
  }
}

function showSlide(n) {
  var i;
  var slideElements = document.getElementsByClassName("slide");
  var bulletElements = document.getElementsByClassName("bullet-indicator");

  for (i = 0; i < slideElements.length; i++) {
    slideElements[i].style.display = "none";
  }

  slideCount+=n;

  if (slideCount > slideElements.length) {slideCount = 1};
  if (slideCount < 1) {slideCount = 4};
  for (i = 0; i < bulletElements.length; i++) {
    bulletElements[i].className = bulletElements[i].className.replace(" bullet-active", "");
  }
  slideElements[slideCount-1].style.display = "block";
  bulletElements[slideCount-1].className += " bullet-active";
}

function getSlideCount() {
  return slideCount;
}

function slideAction(n) {
  showSlide(n);
}

function hideElements(n) {
  if(n == "play") {
    document.getElementById("play-button").classList.add('hidden');
    document.getElementById("prev-button").classList.add('hidden');
    document.getElementById("next-button").classList.add('hidden');
    document.getElementById("pause-button").classList.remove('hidden');
  } else {
    document.getElementById("play-button").classList.remove('hidden');
    document.getElementById("prev-button").classList.remove('hidden');
    document.getElementById("next-button").classList.remove('hidden');
    document.getElementById("pause-button").classList.add('hidden');
  }
}

var slidePos;
function bulletControls(n) {
  slidePos = n - getSlideCount();
  slideAction(slidePos);
  controlSlideShow(false);
}
