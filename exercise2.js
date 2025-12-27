//QUESTION SIX

let score = 75;
if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

//QUESTION SEVEN

let a = 12;
let b = 15;

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else if (a < b) {
  console.log(`${a} is less than ${b}`);
} else {
  console.log("Both numbers are the same hence equal");
}

//QUESTION EIGHT

let age = 16;

if (age >= 18) {
  console.log("Can vote");
} else {
  console.log("Cannot vote");
}

//QUESTION NINE

let isWeekend = true;
if (isWeekend) {
  console.log("No work today");
} else {
  console.log("Time to work");
}

//QUESTION TEN

let num = 24;
let numCheck = num % 2;
console.log(numCheck);
if (numCheck == 0) {
  console.log(`The number ${num} that was chosen is an even number`);
} else {
  console.log(`The number ${num} that was chosen is an odd number `);
}
