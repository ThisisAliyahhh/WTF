let num1 = 40;
let num2 = 4;
const name = "Aliyah";
let total;

// Displays the num1 and num2 varibles
document.getElementById("num1").textContent = `The First Number is ${num1}`;
document.getElementById("num2").textContent = `The Second Number is ${num2}`;

// The Operations
total = num1 + num2;
console.log(`Addition: ${total}`);
document.getElementById("addition").textContent = `Addition: ${total}`;

total = num1 - num2;
console.log(`SUbtraction: ${total}`);
document.getElementById("subtraction").textContent = `Subtraction: ${total}`;

total = num1 * num2;
console.log(`Multiplication: ${total}`);
document.getElementById("multiplcation").textContent = `Multiplcation: ${total}`;

total = num1 / num2;
console.log(`Division: ${total}`);
document.getElementById("division").textContent = `Division: ${total}`;

// The message
console.log(`Hello ${name}, the result of num1 + num2 is ${num1 + num2}`)
document.getElementById("message").textContent = `Hello ${name}, the result of num1 + num2 is ${num1 + num2}`;

