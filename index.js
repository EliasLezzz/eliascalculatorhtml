var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultiply = document.getElementById("buttonMultiply");
var buttonDevide = document.getElementById("buttonDevide");

function getNumber1() {
    return Number(document.getElementById("number1").value);
}
function getNumber2() {
    return Number(document.getElementById("number2").value);
}

function onButtonPlusClick() {
    window.alert(getNumber1() + getNumber2());
}
function onButtonMinusClick() {
    window.alert(getNumber1() - getNumber2());
}
function onButtonMultiplyClick() {
    window.alert(getNumber1() * getNumber2());
}
function onButtonDevideClick() {
    window.alert(getNumber1() / getNumber2());
}

buttonPlus.addEventListener("click", onButtonPlusClick);
buttonMinus.addEventListener("click", onButtonMinusClick);
buttonMultiply.addEventListener("click", onButtonMultiplyClick);
buttonDevide.addEventListener("click", onButtonDevideClick);