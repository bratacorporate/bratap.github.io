// question
const inputAge = parseInt(prompt("Masukkan Tahun Lahir Kamu !"));
const inputYear = document.querySelector("header .age");
inputYear.innerHTML = 2021 - inputAge;

// scroll
const aboutHer = document.querySelector(".description .col");
const img = document.querySelector(".description img");
const zodiac = document.querySelectorAll(".about .col");
const topHeader = document.querySelector(".about .top-header");
const videoTalk = document.querySelector(".about .video-talk");
window.addEventListener("scroll", function () {
  if (window.pageYOffset >= 365) {
    aboutHer.style.opacity = "1";
    aboutHer.style.transform = "translateY(0)";
    img.style.opacity = "1";
    img.style.transform = "translateY(0)";
    img.style.transitionDelay = "0.5s";
  } else {
    aboutHer.style.opacity = "0";
    aboutHer.style.transform = "translateY(-100px)";
    img.style.opacity = "0";
    img.style.transform = "translateY(-100px)";
    img.style.transitionDelay = "0.5s";
  }
  if (window.pageYOffset >= 850) {
    topHeader.style.opacity = "1";
    topHeader.style.transform = "translateY(0)";
    zodiac[0].style.opacity = "1";
    zodiac[0].style.transform = "translateY(0)";
    zodiac[0].style.transitionDelay = "0.3s";
    zodiac[1].style.opacity = "1";
    zodiac[1].style.transform = "translateY(0)";
    zodiac[1].style.transitionDelay = "0.5s";
    zodiac[2].style.opacity = "1";
    zodiac[2].style.transform = "translateY(0)";
    zodiac[2].style.transitionDelay = "0.7s";
    zodiac[3].style.opacity = "1";
    zodiac[3].style.transform = "translateY(0)";
    zodiac[3].style.transitionDelay = "0.9s";
    videoTalk.style.opacity = "1";
    videoTalk.style.transform = "translateY(0)";
    videoTalk.style.transitionDelay = "1.1s";
  } else {
    topHeader.style.opacity = "0";
    topHeader.style.transform = "translateY(100px)";
    zodiac[0].style.opacity = "0";
    zodiac[0].style.transform = "translateY(100px)";
    zodiac[1].style.opacity = "0";
    zodiac[1].style.transform = "translateY(100px)";
    zodiac[2].style.opacity = "0";
    zodiac[2].style.transform = "translateY(100px)";
    zodiac[3].style.opacity = "0";
    zodiac[3].style.transform = "translateY(100px)";
    videoTalk.style.opacity = "0";
    videoTalk.style.transform = "translateY(100px)";
  }
});

// popup
const playBtn = document.querySelector("header .btn");
const popup = document.querySelectorAll(".popup");
const popupVideo = document.querySelector(".popup video");
const closePopUp = document.querySelectorAll(".close");
const misteryBtn = document.querySelector(".description .btn");
playBtn.addEventListener("click", function () {
  popup[0].style.opacity = "1";
  popup[0].style.transform = "scale(1)";
});
misteryBtn.addEventListener("click", function () {
  popup[1].style.opacity = "1";
  popup[1].style.transform = "scale(1)";
});
zodiac[0].addEventListener("click", function () {
  popup[2].style.opacity = "1";
  popup[2].style.transform = "scale(1)";
});
zodiac[1].addEventListener("click", function () {
  popup[3].style.opacity = "1";
  popup[3].style.transform = "scale(1)";
});
zodiac[2].addEventListener("click", function () {
  popup[4].style.opacity = "1";
  popup[4].style.transform = "scale(1)";
});
zodiac[3].addEventListener("click", function () {
  popup[5].style.opacity = "1";
  popup[5].style.transform = "scale(1)";
});
closePopUp[0].addEventListener("click", function () {
  popup[0].style.opacity = "0";
  popup[0].style.transform = "scale(0)";
  popupVideo.pause();
});
closePopUp[1].addEventListener("click", function () {
  popup[1].style.opacity = "0";
  popup[1].style.transform = "scale(0)";
});
closePopUp[2].addEventListener("click", function () {
  popup[2].style.opacity = "0";
  popup[2].style.transform = "scale(0)";
});
closePopUp[3].addEventListener("click", function () {
  popup[3].style.opacity = "0";
  popup[3].style.transform = "scale(0)";
});
closePopUp[4].addEventListener("click", function () {
  popup[4].style.opacity = "0";
  popup[4].style.transform = "scale(0)";
});
closePopUp[5].addEventListener("click", function () {
  popup[5].style.opacity = "0";
  popup[5].style.transform = "scale(0)";
});

// console.log(window.scrollY);
