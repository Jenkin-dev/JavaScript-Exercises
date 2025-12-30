//QUESTION SIXTEEN

let character = "A";
if (character === character.toUpperCase()) {
  console.log("The input is an uppercase");
} else if (character === character.toLowerCase()) {
  console.log("The input is a lowercase");
} else {
  console.log("The input is neither uppercase or lowercase.");
}

//QUESTION SEVENTEEN

let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("This person is legally permitted to drive freely");
} else {
  console.log("This person is not permitted to drive under any circumstances");
}

//QUESTION EIGHTEEN

let totalAmount = 1000;
let isMember = true;

let finalAmount;

console.log(finalAmount); //This will be undefined since i Have not yet initialized it

if (isMember) {
  finalAmount = totalAmount * 0.8; //If there is a 20% discount, then the person would be paying 80% of the total amount
} else {
  finalAmount = totalAmount * 0.95; //If there is a 5% discount, then the person would be paying 95% of the total amount
}

console.log(finalAmount);

//QUESTION NINETEEN

let number = 15;
let i;
for (i = 1; i <= number; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
} //I used a loop since the iteration goes all the way from 1 and continously through to 15

//QUESTION TWENTY

let hour = 14;
if (hour >= 5 && hour <= 11) {
  console.log("Good Morning");
} else if (hour >= 12 && hour <= 17) {
  console.log("Good Afternoon");
} else if (hour >= 18 && hour <= 21) {
  console.log("Good Evening");
} else {
  console.log("Good Night");
}
