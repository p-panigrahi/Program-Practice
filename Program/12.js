// write a program count accurences of all items in an array in javascript?
let a = [2,3,4,5,6,6,6,5,5,3,3,2];
const count = {}
a.forEach(item=>{
  if(count[item]){
    console.log(count[item]);
    count[item] += 1;
  }else{
    count[item] =1;
  }
});
console.log(count);