// Write a program to Mearge two arrays and remove duplicate items in javascript
// Using Speared operater
let a = [1,2,3,4,5];
let b = [1,2,3,4,6,7,8,9];
// let c = [...a, ...b]; //Meargeing Technic 1
// console.log(c);
// let removeDuplicates = [...new Set(c)];
// console.log(removeDuplicates);
// using concat
let c = a .concat(b);
console.log(c);
let removeDuplicates = [...new Set(c)];
console.log(removeDuplicates);