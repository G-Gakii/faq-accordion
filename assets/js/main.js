const questions = document.querySelectorAll(".quiz");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    question.classList.toggle("active");
  });
});
