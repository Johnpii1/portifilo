const btns = document.getElementById("btn");
const menus = document.getElementById("menu");
btns.addEventListener("click", () => {
    menus.classList.toggle("show");
});