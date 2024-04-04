// write a program to compaier two array in javascript
let a = [1,2,3,4]
let b = [1,2,3,4,5,6,7,8,9];
if(JSON.stringify(a) === JSON.stringify(b)){
  console.log('True');
}else{
  console.log("False");
}