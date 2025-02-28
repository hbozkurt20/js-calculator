const display = document.querySelector(".calculator-input");
const keys = document.querySelector(".calculator-keys");

let displayValue = "0";

updateDisplay();


function updateDisplay() {
    console.log("merhaba");
    display.value = displayValue
}


keys.addEventListener("click", e => {
    const element = e.target;

    if (!element.matches("button")) return;

    if (element.classList.contains("equal-sign")) {
        calculate();
    }

    if (element.classList.contains("operator")) {
        // console.log("operatör", element.value);
        addOperator(element.value);
        updateDisplay();
        return;
    }

    if (element.classList.contains("decimal")) {
        //console.log("decimal", element.value);
        inputDecimal();
        updateDisplay();
        return;
    }

    if (element.classList.contains("clear")) {
        //console.log("clear", element.value);
        clear();
        updateDisplay();
        return;
    }



    console.log(element.value)

    if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(element.value)) {
        inputNumber(element.value);
        updateDisplay();
    }

})

function inputNumber(num) {
    if (!displayValue.includes("=")) {
        displayValue = displayValue === "0" ? num : displayValue + num;
    }

}

function addOperator(operator) {
    if (!["+", "-", "*", "/", "x"].includes(displayValue.slice(-1)) && operator != "=") {
        let degisken = operator.replaceAll("*", "x");
        displayValue += degisken;
        return displayValue;
    }
}

function inputDecimal() {
    if (!["+", "-", "*", "/", "x", "."].includes(displayValue.slice(-1))) {
        displayValue += "."
    }
}

function clear() {
    displayValue = "0"
}

function calculate() {
    console.log("hello");
    x = displayValue.replaceAll("x", "*")
    let result = eval(x)
    console.log(result);
    let metin = result.toString()
    displayValue = metin
}



