// write a program to splice an array without mutating the original array
let a = [1,2,3,4,5,6,7];
console.log(a)
// let b = a.splice(0,3);
// console.log(a);
// console.log(b);
let copy = a.slice(0);
console.log(copy)
let b = copy.splice(0,3);
console.log(a);
console.log(b);