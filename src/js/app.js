import { switchingHide } from "./switchingHide";
import { render } from "./render";

const addButtons = document.querySelectorAll(".add-button");
const addCardButtons = document.querySelectorAll(".add-card-button");
const removeCardButtons = document.querySelectorAll(".remove-card-button");
const cardsContainers = document.querySelectorAll(".cards-container");
const cards = document.querySelectorAll(".card");
let cardBase = [];
let currentText = "";
let currentCard;

if (localStorage.getItem("cardBase")) {
  cardBase = JSON.parse(localStorage.getItem("cardBase"));
}

render(cardBase);

for (let i = 0; i < 3; i++) {
  addButtons[i].addEventListener("click", (event) => {
    switchingHide(event);
  });
  addCardButtons[i].addEventListener("click", (event) => {
    const container = event.target.closest(".column-footer");
    const formData = new FormData(container.querySelector(".column-form"));
    currentText = formData.get("text");
    const column = container.closest(".column").classList[1];
    cardBase.push({text: currentText, column: column});
    render(cardBase);
    localStorage.setItem("cardBase", JSON.stringify(cardBase));
    switchingHide(event);
  });
  removeCardButtons[i].addEventListener("click", (event) => {
    switchingHide(event);
  });
};

const onMouseUp = () => {
  currentCard.classList.remove("dragged");
  currentCard = undefined;
  document.documentElement.removeEventListener("mouseup", onMouseUp);
  document.documentElement.removeEventListener("mouseower", onMouseOver);
  console.log("up");
};

const onMouseOver = (event) => {
  console.log("over");
  currentCard.style.top = event.clientY + 'px';
  currentCard.style.left = event.clientX + 'px';
};

for (let i = 0; i < 3; i++) {
  cardsContainers[i].addEventListener("mousedown", (event) => {
    event.preventDefault();
    currentCard = event.target;
    currentCard.classList.add("dragged");
    document.documentElement.addEventListener("mouseup", onMouseUp);
    document.documentElement.addEventListener('mouseover', onMouseOver); //Из-за того, что вешать обработчик на mouseover нужно при событии mousedown, а у меня три отдельных обработчика каждый контейнер, mouseover вешается три раза и потом не убирается при mouseup. Помогите(
  });
};







