const menuBtn = document.getElementById("btn");
const menu = document.querySelector(".menus");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
}



//dark mood and light mood 
// const html = document.documentElement;
// const lightBtn = document.getElementById("lightBtn");
// const darkBtn = document.getElementById("darkBtn");

// lightBtn.addEventListener("click", () => {
//   html.classList.remove("dark");
// });

// darkBtn.addEventListener("click", () => {
//   html.classList.add("dark");
// });





