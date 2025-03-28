//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll(".code");

    inputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            const value = e.target.value;
            if (/^\d$/.test(value)) {
                input.value = value;
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            } else {
                input.value = "";
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
                e.preventDefault();
            }
        });

        input.addEventListener("paste", (e) => {
            e.preventDefault();
            const pasteData = e.clipboardData.getData("text").replace(/\D/g, "");
            if (pasteData.length === inputs.length) {
                inputs.forEach((inp, i) => {
                    inp.value = pasteData[i] || "";
                });
                inputs[inputs.length - 1].focus();
            }
        });
    });
});
