// write a program to split an array into chunks in javascript
let chunk = 4;
let  a = [1,2,3,4,5,6,7,8];
let b = a.slice(0,chunk);
console.log(b);
let c = a.slice(chunk, chunk + a.length);
console.log(c)