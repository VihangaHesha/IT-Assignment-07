const resultInput = document.getElementById("result");
const buttons = document.querySelectorAll(".buttons button");

let currentInput = "";
let operator = "";
let firstValue = null;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;

    if (button.classList.contains("number")) {
      // If the current input is an operator, clear the input
      if (operator && currentInput !== "") {
        currentInput = "";
      }
      currentInput += buttonText;
      resultInput.value = currentInput;
    } else if (button.classList.contains("operator")) {
      // If the current input is not empty, set the first value and operator
      if (currentInput !== "") {
        firstValue = parseFloat(currentInput);
        operator = buttonText;
        // Clear the current input
        currentInput = "";
      }
    } else if (button.classList.contains("equals")) {
      if (firstValue !== null && currentInput !== "") {
        const secondValue = parseFloat(currentInput);
        resultInput.value = calculate(firstValue, operator, secondValue);
        // Reset the values
        firstValue = null;
        operator = "";
        currentInput = "";
      }
    } else if (button.classList.contains("clear")) {
      // All clear Function
      resultInput.value = "";
      currentInput = "";
      firstValue = null;
      operator = "";
    } else if (button.classList.contains("delete")) {
      // Backspace Function
      currentInput = currentInput.slice(0, -1);
      resultInput.value = currentInput;
    }
  });
});

// =================== calculation performing functions ===================
function calculate(firstValue, operator, secondValue) {
  switch (operator) {
    case "+":
      return firstValue + secondValue;
    case "-":
      return firstValue - secondValue;
    case "*":
      return firstValue * secondValue;
    case "/":
      return secondValue !== 0 ? firstValue / secondValue : "Error";
    default:
      return "";
  }
}
