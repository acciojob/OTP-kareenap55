const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;
    if (value.match(/[0-9]/)) {
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    } else {
      e.target.value = ""; // clear invalid input
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (input.value === "") {
        if (index > 0) {
          inputs[index - 1].focus();
          inputs[index - 1].value = "";
        }
      } else {
        input.value = "";
      }
    } else if (e.key >= "0" && e.key <= "9") {
      input.value = ""; // overwrite any existing value
    }
  });
});

window.addEventListener("load", () => {
  inputs[0].focus();
});
