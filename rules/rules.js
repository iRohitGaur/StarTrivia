const backBtn = document.querySelector("#go-back");
const playByn = document.querySelector("#move-forward");

backBtn.addEventListener("click", () => {
  window.location = "/category/category.html";
});

playByn.addEventListener("click", () => {
  window.location = "/quiz/quiz.html";
});

if (localStorage.getItem("stv-mode") === "dark") {
  document.documentElement.setAttribute("stv-mode", "dark");
} else {
  document.documentElement.setAttribute("stv-mode", "light");
}
