const hasTooltip = document.querySelectorAll('.has-tooltip');

for (const object of hasTooltip) {
    const tooltip = document.createElement('div');
    tooltip.classList.add("tooltip");
    const tooltipText = object.getAttribute('title');
    tooltip.innerText = tooltipText;
    tooltip.style.position = "absolute";
    tooltip.dataset.position = "right";
    object.insertAdjacentHTML("afterend", tooltip.outerHTML);
}

const tooltips = document.querySelectorAll('.tooltip');

for (const tooltip of tooltips) {
    tooltip.previousSibling.addEventListener('click', (event) => {
        event.preventDefault();
        for (const tooltip of tooltips) {
            if (tooltip.previousSibling !== event.target) {
                tooltip.classList.remove('tooltip_active');
            }
        }
        tooltip.classList.toggle('tooltip_active');
        setTooltipPosition(tooltip);
    });
}

function setTooltipPosition(tooltip) {
    switch (tooltip.dataset.position) {
        case "top":
            tooltip.style.top = `${tooltip.previousSibling.offsetTop - 28.4}px`;
            tooltip.style.left = `${tooltip.previousSibling.offsetLeft}px`;
            break;
        case "bottom":
            tooltip.style.top = `${tooltip.previousSibling.offsetBottom}px`;
            tooltip.style.left = `${tooltip.previousSibling.offsetLeft}px`;
            break;
        case "left":
            const x1 = tooltip.previousSibling.offsetLeft - tooltip.offsetWidth - 2;
            tooltip.style.left = `${x1}px`;
            tooltip.style.top = `${tooltip.previousSibling.offsetTop - 5.4}px`;
            break;
        case "right":
            const x2 = tooltip.previousSibling.getBoundingClientRect().right + 2;
            tooltip.style.left = `${x2}px`;
            tooltip.style.top = `${tooltip.previousSibling.offsetTop - 5.4}px`;
            break;
    }
}