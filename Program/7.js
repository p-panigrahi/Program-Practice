// write a program to create an Array using intersection of two array in javascript
let a = [1,2,3,4,5];
let b = [1,2,3,4,5,6,7,8,9];

const result = (a,b) =>{
  let newArray = [];
  for(let i = 0; i < a.length; i++){
    for(let j = 0; j < b.length; j++){
      if(a[i] === b[j]){
        newArray.push(a[i]);
      }
    }
  }
  return newArray;
}
console.log(result(a,b));