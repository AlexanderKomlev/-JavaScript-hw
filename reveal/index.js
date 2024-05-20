const reveal = document.querySelectorAll(".reveal");

document.addEventListener("scroll", () => {
    for (const object of reveal) {
        const { top, bottom } = object.getBoundingClientRect();

        if (top < window.innerHeight && bottom > 0) {
            object.classList.add("reveal_active");
        } else {
            object.classList.remove("reveal_active");
        }
    }
});