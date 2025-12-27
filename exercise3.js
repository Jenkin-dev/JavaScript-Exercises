//QUESTION ELEVEN

let marks = 85;
if (marks >= 90) {
  console.log("This candidate got an A grade");
} else if (marks >= 80) {
  console.log("This candidate got a B grade");
} else if (marks >= 70) {
  console.log("This candidate got a C grade");
} else if (marks >= 60) {
  console.log("This candidate got a D grade");
} else {
  console.log("This candidate got a WOEFUL F grade");
}

//QUESTION TWELVE

let length = 5;
let width = 10;

const AREA = length * width;
const PERIMETER = 2 * (length + width);
console.log(`The area of the said rectangle is ${AREA}`);
console.log(`The perimeter of the said rectangle is ${PERIMETER}`);

//QUESTION THIRTEEN

let year = 2024;
if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
  console.log(
    "The input year is a leap year since it is divisible by 4, 100, and 400"
  );
} else if (year % 4 == 0 && !(year % 100 == 0)) {
  console.log("It is a leap year since it is divisible by 4 but not by 100");
}
// else if (year % 4 == 0 && year % 100 == 0 && !(year % 400 == 0)) {
//   console.log(
//     "It is not a leap year since it is divisible by 100 but not by 400"
//   );
// }
//THIS COMMENTED BLOCK OF CODE IS LOGICALLY CORRECT BUT NOT NECESSARY BECAUSE (IT WAS INTENDED TO CATCH YEARS LIKE 1900 THAT ARE DIVISIBLE BY 4 BUT NOT A LEAP YEAR) WHICH WOULD HAVE FAILED BOTH THE FIRST AND SECOND CONDITION ALREADY.

//IT WOULD HAVE FAILED THE FIRST CONDITION BECAUSE IT IS NOT DIVISIBLE BY 400
//AND THE SECOND BECAUSE NO NUMBER CAN BE DIVISIBLE BY 400 IF IT CANNOT BE DIVISIBLE BY 100
else console.log("It is definitely not a leap year");

//QUESTION FOURTEEN

let number = 47;
if (number % 3 == 0 && number % 5 == 0) {
  console.log("The inputed number is divisible by both 3 and 5");
} else if (number % 3 == 0 && !(number % 5 == 0)) {
  console.log("The inputed number is divisible by 3 but not 5");
} else if (!(number % 3 == 0) && number % 5 == 0) {
  console.log("The inputed number is divisible by 5 but not 3");
} else {
  console.log("The inputed number is neither divisible by 3 nor 5 ");
}

//QUESTION FIFTEEN

let subject1 = 78;
let subject2 = 85;
let subject3 = 92;

let average = (subject1 + subject2 + subject3) / 3;
if (average >= 90) {
  console.log("Excellent");
} else if (average >= 75) {
  console.log("Good");
} else if (average >= 60) {
  console.log("Average");
} else {
  console.log("Needs Improvement");
}
