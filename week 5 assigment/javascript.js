
let userName = "Godwin";
let age = 20;

if (age >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

function changeText() {
  document.getElementById("description").textContent =
    "The text has been changed using JavaScript!";
}

function calculateSum(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

function listNumbers() {
  let output = "";
  for (let i = 1; i <= 5; i++) {
    output += i + " ";
  }
  document.getElementById("output").textContent = "Numbers: " + output;
}

function countdown() {
  let output = "";
  let i = 5;
  while (i > 0) {
    output += i + " ";
    i--;
  }
  document.getElementById("output").textContent = "Countdown: " + output;
}

document.getElementById("changeTextBtn").addEventListener("click", changeText);

document.getElementById("listNumbersBtn").addEventListener("click", listNumbers);

document.getElementById("calculateBtn").addEventListener("click", function () {
  let nums = [2, 4, 6, 8, 10];
  let result = calculateSum(nums);
  document.getElementById("output").textContent =
    "Sum of [2, 4, 6, 8, 10] is: " + result;
});

document.getElementById("countdownBtn").addEventListener("click", countdown);
