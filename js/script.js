let n0 = document.getElementById("0");
let n1 = document.getElementById("1");
let n2 = document.getElementById("2");
let n3 = document.getElementById("3");
let n4 = document.getElementById("4");
let n5 = document.getElementById("5");
let n6 = document.getElementById("6");
let n7 = document.getElementById("7");
let n8 = document.getElementById("8");
let n9 = document.getElementById("9");
let result = document.querySelector("#result");
let reset = document.getElementById("reset");
let del = document.getElementById("del");
let addBtn = document.getElementById("+");
let restBtn = document.getElementById("-");
let divideBtn = document.getElementById("/");
let multiplyBtn = document.getElementById("x");
let operateBtn = document.getElementById("=");
let operator;
let number1;
let number2;
let flag = false;

n0.addEventListener("click", (e) => {
  e.preventDefault();
  validatorDrawing(n0.value);
});
n1.addEventListener("click", (e) => {
  e.preventDefault();
  validatorDrawing(n1.value);
});
n2.addEventListener("click", (e) => {
  e.preventDefault();
  validatorDrawing(n2.value);
});
n3.addEventListener("click", (e) => {
  e.preventDefault();
  validatorDrawing(n3.value);
});
n4.addEventListener("click", (e) => {
  e.preventDefault();
  validatorDrawing(n4.value);
});
n5.addEventListener("click", (e) => {
  e.preventDefault();
  validatorDrawing(n5.value);
});
n6.addEventListener("click", (e) => {
  e.preventDefault();
  validatorDrawing(n6.value);
});
n7.addEventListener("click", (e) => {
  e.preventDefault();
  validatorDrawing(n7.value);
});
n8.addEventListener("click", (e) => {
  e.preventDefault();
  validatorDrawing(n8.value);
});
n9.addEventListener("click", (e) => {
  e.preventDefault();
  validatorDrawing(n9.value);
});

reset.addEventListener("click", (e) => {
  e.preventDefault();
  cleanResult();
});

del.addEventListener("click", (e) => {
  e.preventDefault();
  delChar();
});

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  operator = "+";
  number1 = Number(result.innerHTML);
  console.log("h");
  cleanResult();

  // operation(addBtn.value, )
});

restBtn.addEventListener("click", (e) => {
  e.preventDefault();
  operator = "-";
  number1 = result.innerHTML;
  cleanResult();
});

multiplyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  operator = "*";
  number1 = result.innerHTML;
  cleanResult();
});

divideBtn.addEventListener("click", (e) => {
  e.preventDefault();
  operator = "/";
  number1 = result.innerHTML;
  cleanResult();
});

operateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!flag) {
    number2 = result.innerHTML;
    let optResult = operation(operator, number1, number2);
    number1 = 0;
    number2 = 0;
    if (!optResult[0]) {
      result.innerHTML = optResult[1];
    } else {
      alertPersonalized("Please, select an operator and two numbers to operate");
    }
  } else {
    cleanResult();
    alertPersonalized("Please, select an operator and two numbers to operate");
  }

  flag = true;
});

const validatorDrawing = (numBtn) => {
  if (flag) {
    result.innerHTML = "";
    flag = false;
    drawNumber(numBtn);
  } else {
    drawNumber(numBtn);
  }
};

const drawNumber = (draw) => {
  result.innerHTML += draw;
};

const cleanResult = () => {
  result.innerHTML = "";
};

const delChar = () => {
  result.innerHTML = result.innerHTML.slice(0, -1);
};

const operation = (operator, number1, number2) => {
  if ((number1 !== "" && number2 !== "") && operator !== undefined) {
    number1 = Number(number1);
    number2 = Number(number2);
    switch (operator) {
      case "+":
        return [false, number1 + number2];
      case "-":
        return [false, number1 - number2];
      case "*":
        return [false, number1 * number2];
      case "/":
        return [false, number1 / number2];
      default:
        break;
    }
  } else {
    return [true];
  }
};

const alertPersonalized = (message) => {
  swal.fire({
    title: "Auto close alert!",
    text: `${message}`,
    timer: 2000,
    showConfirmButton: false,
  });
};
