const menuBtn = document.getElementById("btn");
const closeBtn = document.getElementById("closebtn")
const menu = document.querySelector(".menus");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
}

closeBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});


//dark mood and light mood 
  const btn = document.getElementById("toggle");
  const html = document.documentElement;

  btn.addEventListener("click", () => {
    html.classList.toggle("dark");
  });








