let sliderContainer = document.querySelector(".slider-container");

let sliderLeft = document.querySelector(".left-part");
let sliderRight = document.querySelector(".right-part");

let buttonUp = document.querySelector(".up-button");
let buttonDown = document.querySelector(".down-button");

let slideCount = sliderRight.querySelectorAll("div").length;

sliderLeft.style.top = `-${(slideCount - 1) * 100}vh`;

let activeSlidInd = 0;

buttonUp.addEventListener("click", () => changeSlide("up"));
buttonDown.addEventListener("click", () => changeSlide("down"));

// Start the EventListener part

const changeSlide = (dir) => {
  const slideHeight = sliderContainer.clientHeight;
  if (dir === "up") {
    activeSlidInd++;
    if (activeSlidInd > slideCount - 1) {
      activeSlidInd = 0;
    }
    console.log(activeSlidInd);
    sliderRight.style.transform = `translateY(-${(activeSlidInd * slideHeight)}px)`;
    sliderLeft.style.transform = `translateY(${(activeSlidInd * slideHeight)}px)`;
  }
  if (dir === "down") {
    activeSlidInd--;
    if (activeSlidInd < 0) {
      activeSlidInd = slideCount-1;
    }
    console.log(activeSlidInd);
    sliderRight.style.transform = `translateY(-${(activeSlidInd * slideHeight)}px)`;
    sliderLeft.style.transform = `translateY(${(activeSlidInd * slideHeight)}px)`;
  }

  
};
