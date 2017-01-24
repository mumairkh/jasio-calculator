/* jshint undef: true, unused: false, evil: true */
/* globals document, window */
var input = document.getElementById('input');
var result = document.getElementById('result');
var buttons = document.querySelectorAll('button');
var decimal = false;
var operators = ['÷', '×', '-', '+'];
var value = "";
buttons.forEach(function (el) {
    el.onclick = function () {
        var lastOperator = value.charAt(value.length - 2);
        var firstOperator = value.charAt(1);
        var lastChar = value.charAt(value.length - 1);
        var lastCharInt = parseInt(value.charAt(value.length - 1));
        if (this.value === "clr") {
            value = "";
            input.innerHTML = "0";
            result.innerHTML = "0";
            decimal = false;
        }
        else if (this.value === "erase") {
            if (operators.includes(lastOperator)) {
                value = value.slice(0, -3);
            }
            else {
                value = value.slice(0, -1);
            }
            decimal = false;
            input.innerHTML = value;
        }
        else if (this.value === ".") {
            if (isNaN(lastCharInt)) {
                value = value + "0";
            }
            if (!decimal) {
                if (lastChar === ".") {
                    value = value.slice(0, -1) + this.value;
                }
                else {
                    value += this.value;
                }
            }
            decimal = true;
            input.innerHTML = value;
        }
        else if (this.value === "=") {
            if (operators.includes(lastOperator)) {
                value = value.slice(0, -3);
            }
            if (operators.includes(firstOperator) && firstOperator !== "-") {
                value = value.slice(3);
                console.log(value);
            }
            value = value.replace(/×/g, '*').replace(/÷/g, '/');
            var evaluated = parseFloat(eval(value).toFixed(12)).toString();
            if (evaluated.length > 9) {
                result.innerHTML = parseFloat(evaluated).toExponential(7);
            }
            else {
                result.innerHTML = parseFloat(evaluated);
            }
            value = evaluated;
        }
        else if (operators.includes(this.value)) {
            if (lastChar === ".") {
                value = value.slice(0, -1) + " " + this.value + " ";
            }
            else if (operators.includes(lastOperator)) {
                value = value.slice(0, -3) + " " + this.value + " ";
            }
            else {
                value = value + " " + this.value + " ";
            }
            decimal = false;
            input.innerHTML = value;
        }
        else {
            value += this.value;
            input.innerHTML = value;
        }
    };
});
window.onkeydown = function (event) {
    var x = event.which;
    switch (x) {
    case 97:
        btnPressed("1");
        break;
    case 98:
        btnPressed("2");
        break;
    case 99:
        btnPressed("3");
        break;
    case 100:
        btnPressed("4");
        break;
    case 101:
        btnPressed("5");
        break;
    case 102:
        btnPressed("6");
        break;
    case 103:
        btnPressed("7");
        break;
    case 104:
        btnPressed("8");
        break;
    case 105:
        btnPressed("9");
        break;
    case 96:
        btnPressed("0");
        break;
    case 110:
        btnPressed(".");
        break;
    case 107:
        btnPressed("+");
        break;
    case 109:
        btnPressed("-");
        break;
    case 106:
        btnPressed("*");
        break;
    case 111:
        btnPressed("/");
        break;
    case 13:
        btnPressed("=");
        break;
    case 8:
        btnPressed("erase");
        break;
    case 46:
        btnPressed("clr");
        break;
    }
};
window.onkeyup = function (event) {
    var x = event.which;
    switch (x) {
    case 97:
        btnReleased("1");
        break;
    case 98:
        btnReleased("2");
        break;
    case 99:
        btnReleased("3");
        break;
    case 100:
        btnReleased("4");
        break;
    case 101:
        btnReleased("5");
        break;
    case 102:
        btnReleased("6");
        break;
    case 103:
        btnReleased("7");
        break;
    case 104:
        btnReleased("8");
        break;
    case 105:
        btnReleased("9");
        break;
    case 96:
        btnReleased("0");
        break;
    case 110:
        btnReleased(".");
        break;
    case 107:
        btnReleased("+");
        break;
    case 109:
        btnReleased("-");
        break;
    case 106:
        btnReleased("*");
        break;
    case 111:
        btnReleased("/");
        break;
    case 13:
        btnReleased("=");
        break;
    case 8:
        btnReleased("erase");
        break;
    case 46:
        btnReleased("clr");
        break;
    }
};

function btnPressed(button) {
    var btn = document.getElementById(button);
    btn.click();
    btn.classList.add('active');
}

function btnReleased(button) {
    var btn = document.getElementById(button);
    btn.classList.remove('active');
}
