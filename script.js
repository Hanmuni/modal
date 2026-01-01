const clickBtn = document.querySelector(".click-btn");
const closeBtn = document.querySelector(".close-btn");

clickBtn.addEventListener("click", () => {
  document.body.classList.add("modal-open");
  console.log("Click me!");
});

closeBtn.addEventListener("click", () => {
  document.body.classList.remove("modal-open");
});
