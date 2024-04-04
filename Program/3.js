// write a program to Sort array of object by strating property value in javaScript;
const object = [
  {name :'Rabui' , age :30},
  {name :'Aman' , age :34},
  {name :'prtem' , age :35},
  {name :'jugu' , age :38},
  {name :'moti' , age :78},
];
let result = object.sort((a,b)=>{
  return a.name.localeCompare(b.name);
});
console.log(result);