import { render } from "./render";

export function cardProcessor(cardBase) {
    const cards = document.querySelectorAll(".card");

    for ( let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("mouseover", () => {
            cards[i].querySelector(".card-close").classList.remove("hide");
        });
        cards[i].addEventListener("mouseout", () => {
            cards[i].querySelector(".card-close").classList.add("hide");
        });
        // cards[i].querySelector(".card-close").addEventListener("click", () => {
        //     const text = cards[i].querySelector(".card-text").innerText;
        //     const column = cards[i].closest(".column").classList[1];
        //     for (let i = 0; i < cardBase.length; i++) {
        //         if(cardBase[i].text === text && cardBase[i].column === column) {
        //             cardBase = cardBase.splise(i, 1);
        //         }
        //     }
        //     render(cardBase);
        //     localStorage.setItem("cardBase", JSON.stringify(cardBase));
        // }); //Что-то не работает
    }
}
