export function switchingHide(event) {
    const container = event.target.closest(".column-footer");
    
    for (let i = 0; i < container.children.length; i++) {
        container.children[i].classList.toggle("hide");
    }

}