import { cardProcessor } from "./cardProcessor";

export function render(cardBase) {
    const columns = document.querySelectorAll(".cards-container");
    const todo = document.querySelector(".column-todo").querySelector(".cards-container");
    const inProgress = document.querySelector(".column-in_progress").querySelector(".cards-container");
    const done = document.querySelector(".column-done").querySelector(".cards-container");

    for (let i = 0; i < columns.length; i++) {
        columns[i].innerHTML = "";
    }

    for (let i = 0; i < cardBase.length; i++) {
    let html = `
        <div class="card">
        <p class="card-text">${cardBase[i].text}</p>
        <button class="card-close hide">╳</button>
        </div>
    `
    if (cardBase[i].column == "column-todo") {
        todo.insertAdjacentHTML("beforeend", html);
    } else if (cardBase[i].column == "column-in_progress") {
        inProgress.insertAdjacentHTML("beforeend", html);
    } else if (cardBase[i].column == "column-done") {
        done.insertAdjacentHTML("beforeend", html);
    } else {
        continue;
    }
    }

    cardProcessor(cardBase);
}