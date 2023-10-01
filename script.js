const button = document.querySelector("button");

button.addEventListener("click", rollDice);

function randomNum() {
    return Math.floor(Math.random() * 6) + 1;
}

const one = document.querySelectorAll("header")[0];
const two = document.querySelectorAll("header")[1];
const all = document.querySelectorAll("header")[2];

function rollDice() {
    var num1 = randomNum();
    var num2 = randomNum();
    one.textContent = `Dice #1 value: ${num1}`;
    two.textContent = `Dice #2 value: ${num2}`;
    all.textContent = `Total value: ${num1 + num2}`;
}