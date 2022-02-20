const backBtn = document.querySelector("#go-back");
backBtn.addEventListener("click", () => {
  window.location = "/";
});

document.querySelectorAll(".play-btn").forEach((btn) =>
  btn.addEventListener("click", () => {
    window.location = "/rules/rules.html";
  })
);
