// DARK MODE
const modeBtn = document.querySelector("#mode-btn");
const logoBtn = document.querySelector("#stv-logo");

if (localStorage.getItem("stv-mode") === "dark") {
  setLightmode(false);
} else {
  setLightmode(true);
}

document.querySelector("#mode").addEventListener("click", () => {
  if (modeBtn.classList.contains("fa-moon")) {
    setLightmode(true);
    localStorage.setItem("stv-mode", "light");
  } else {
    setLightmode(false);
    localStorage.setItem("stv-mode", "dark");
  }
});

function setLightmode(light) {
  if (light) {
    modeBtn.className = "fas fa-lightbulb";
    document.documentElement.setAttribute("stv-mode", "light");
  } else {
    modeBtn.className = "fas fa-moon";
    document.documentElement.setAttribute("stv-mode", "dark");
  }
}

logoBtn.addEventListener("click", () => {
  window.location = "/";
});
