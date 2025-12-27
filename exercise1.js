//QUESTION ONE
let firstName = "John";
let lastName = "Doe";
let age = 25;

console.log(`My name is ${firstName} ${lastName} and I am ${age} years old`);

//QUESTION TWO
let num1 = 15;
let num2 = 8;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log(`The sum of the two numbers is ${sum} `);
console.log(`The difference of the two numbers is ${difference}`);
console.log(`The product of the two numbers is ${product}`);
console.log(`The quotient of the two numbers is ${quotient}`);

//QUESTION THREE

let temperature = 22;

if (temperature < 20) {
  console.log("It's cold");
} else {
  console.log("It's warm.");
}

//QUESTION FOUR

let price = 50;
let discount = 10;

//Since the actual price is 50 and the discount is 10, the final price after discount would be the difference between the actual price and the discount

const FINALPRICE = price - discount; //I used the keyword const becuase the value of the final price would always be the difference between the price and the discounr regardless their value

console.log(`The final price after discount is ${FINALPRICE}`);

//QUESTION FIVE

let number = -128;

if (number > 0) {
  console.log(`The number ${number} you inputed is positive`);
} else if (number == 0) {
  console.log(`The number ${number} you inputed is zero`);
} else {
  console.log(`The number ${number} you inputed is negative`);
}
