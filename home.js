const logo = document.querySelector(".logo");
const tooltip = document.createElement("div");
tooltip.className = "tooltip";
tooltip.textContent = "Click me, I dare you!";
document.body.appendChild(tooltip);

logo.addEventListener("mousemove", (e) => {
    tooltip.style.left = e.pageX + 15 + "px";
    tooltip.style.top = e.pageY + 15 + "px";
    tooltip.style.opacity = 1;
});

logo.addEventListener("mouseleave", () => {
    tooltip.style.opacity = 0;
});

logo.addEventListener("click", () => {
    logo.style.opacity = "0";

    setTimeout(() => {
        logo.style.opacity = "";
    }, 900);
});