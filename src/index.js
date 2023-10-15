import "./index.scss";
const radioBtns = document.querySelectorAll(".form__input");
const labels = document.querySelectorAll(".form__label");

for (let i = 0; i < radioBtns.length; i++) {
  for (let j = 0; j < labels.length; j++) {
    radioBtns[i].onchange = function () {
      if (radioBtns[i].checked === true) {
        labels[j].style.backgroundColor = "white";
        console.log(labels[j]);
        console.log("поставил");
      } else {
        labels[j].style.backgroundColor = "lightGray";
      }
    };
  }
}
