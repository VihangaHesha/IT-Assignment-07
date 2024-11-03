const result = document.getElementById("result");
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "=") {
      try {
        result.value = eval(result.value);
      } catch (error) {
        result.value = "Error";
      }
    } else if (button.textContent === "AC") {
      result.value = "";
    } else if (button.classList.contains("delete")) {
      result.value = result.value.slice(0, -1);
    } else {
      result.value += button.textContent;
    }
  });
});