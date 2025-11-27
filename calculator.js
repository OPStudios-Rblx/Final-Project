const operationBoxes = document.querySelectorAll(".box");
const calculateButton = document.querySelector(".calculate-button"); 
const answer = document.querySelector(".answer"); 

var operation = "";

function addClickListener(element, handler) {
    if (element) {
        element.addEventListener("click", handler);
    } else {
        console.error("Error: Element not found for click handler.");
    }
}

function selectOperation(event) {
    operationBoxes.forEach(box => {
        box.classList.remove("active");
    });
    event.target.classList.add("active");
    operation = event.target.innerHTML;
}

function handleCalculateClick() {
    const num1Input = document.querySelector(".num1");
    const num2Input = document.querySelector(".num2");

    const num1String = num1Input.value;
    const num2String = num2Input.value;
   
    const num1 = parseFloat(num1String);
    const num2 = parseFloat(num2String);
    var result = 0;   
 
    if (isNaN(num1)) {
        alert("Error: Please enter a valid first number (Num1).");
        return; 
    }

    const requiresTwoNumbers = (operation === "+" || operation === "-" || operation === "x" || operation === "÷");
    
    if (requiresTwoNumbers && isNaN(num2)) {
        alert("Error: Please enter a valid second number (Num2) for this operation.");
        return;
    }
    if (operation === "+") {
        result = num1 + num2;
    } else if (operation === "-") {
        result = num1 - num2;
    } else if (operation === "x") {
         result = num1 * num2;
    } else if (operation === "÷") {         
        if (num2 === 0) {
            alert("Error: Cannot divide by zero.");
            return; 
        }
        result = num1 / num2;
    } else if (operation === "!") {
        if (num1 < 0 || num1 % 1 !== 0) {
            alert("Error: Factorial is only defined for non-negative integers.");
            return;
        }
        result = 1;
        for (let i = 2; i <= num1; i++) {
            result *= i;
        }
    } else if (operation === "x²") {
        result = Math.pow(num1,2);

    }  else if (operation === "√") {
        result = Math.sqrt(num1);
    } else {
        alert("Error: No operation selected.");
        return;
    }
    
    answer.value = result;
    num1Input.value = result;
    
    if (!requiresTwoNumbers) {
         num2Input.value = '';
    }
}


operationBoxes.forEach(box => {
    addClickListener(box, selectOperation);
});

addClickListener(calculateButton, handleCalculateClick);
