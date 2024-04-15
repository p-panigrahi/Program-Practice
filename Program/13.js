// Find Armstrong Number
const number = prompt("Enter any number")
const length = number.length;
let sum = 0;
let temp = number;
while (temp > 0) {
  let rem = temp % 10;
  sum += rem ** length;
  temp = parseInt(temp / 10);
}
if (sum == number) {
  console.log(`The ${number} is armstrong number`);
} else {
  console.log(`The ${number} is not armstrong number`);
}
