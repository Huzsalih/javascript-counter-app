let counter = 2;

const counterDisplay = document.getElementById("counter");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

increaseButton.addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = counter;
});

decreaseButton.addEventListener("click", () => {
  counter--;
  counterDisplay.textContent = counter;
});
