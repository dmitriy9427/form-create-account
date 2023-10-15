import "./index.scss";

(function stepForm() {
  const steps = document.querySelectorAll(".completion");
  const nextBtn = document.querySelector(".next");
  const backBtn = document.querySelector(".back");
  const stepForm = document.querySelector(".steps__form");
  const stepsNumbers = document.querySelectorAll(".steps__image");
  const progress = document.querySelector(".steps__sucsess");
  const finish = document.querySelector(".finish");
  const createBtn = document.querySelector(".header__items-button");
  const header = document.querySelector(".header");
  const stepsBlock = document.querySelector(".steps");

  let stepNumber = 0;

  createBtn.addEventListener("click", () => {
    header.style.display = "none";
    stepsBlock.style.display = "block";
    steps[stepNumber].classList.add("active");
    backBtn.style.display = "none";
  });

  stepForm.addEventListener("submit", (e) => e.preventDefault());
  nextBtn.onclick = () => {
    if (stepNumber < steps.length - 1) {
      stepNumber++;
      updateStep();
    }

    backBtn.onclick = () => {
      stepNumber--;

      stepsNumbers[stepNumber + 1].classList.remove("active-image");

      updateStep();
    };
    function updateStep() {
      steps.forEach((step) => {
        step.classList.contains("active") && step.classList.remove("active");
      });

      steps[stepNumber].classList.add("active");
      stepsNumbers[stepNumber].classList.add("active-image");

      if (stepNumber === 0) {
        backBtn.style.display = "none";
      } else if (stepNumber === steps.length - 1) {
        nextBtn.textContent = "Complete";

        nextBtn.addEventListener("click", () => {
          finish.style.display = "flex";
          nextBtn.style.display = "none";
          backBtn.style.display = "none";
          stepForm.style.display = "none";
          steps[stepNumber].style.display = "none";
        });
      } else {
        nextBtn.textContent = "Next";
        nextBtn.style.display = "";
        backBtn.style.display = "";
      }

      const actives = document.querySelectorAll(".active-image");
      const persent = ((actives.length - 1) / (steps.length - 1)) * 100 + "%";

      progress.style.width = persent;
    }
    updateStep();
  };
})();
