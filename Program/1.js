// write a program to get all unique values in a javaScript
let Arr = ["Mango","Apple","Grape","Mango"];
// let uniqueValue = []
// let count = 0;
// let start = false;
// for(let i = 0; i < Arr.length; i++){
//   for(let j = 0; j < uniqueValue.length; j++){
//     if(Arr[i] == uniqueValue[j]){
//       start = true;
//     }
//   }
//   count++
//   if(count == 1 && start == false){
//     uniqueValue.push(Arr[i]);
//   }
//   start = false;
//   count = 0
// }
// console.log(uniqueValue);

// using Set
let uniqueValue = [];
const unique = (Arr) =>{
  uniqueValue = Array.from(new Set(Arr));
  return uniqueValue;
}
console.log(unique(Arr));