const options = document.querySelectorAll(".question_option");
const correctOption = document.querySelector(".correct_ans");

options.forEach((opt) =>
  opt.addEventListener("click", () => {
    opt.classList.contains("correct_ans")
      ? opt.classList.add("right_ans")
      : opt.classList.add("wrong_ans");

    correctOption.className = "question_option correct_ans right_ans";
    setTimeout(() => (window.location = "/result/result.html"), 1000);
  })
);

const backBtn = document.querySelector("#quit-quiz");
backBtn.addEventListener("click", () => {
  window.location = "/category/category.html";
});
