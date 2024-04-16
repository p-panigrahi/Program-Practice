// write a program to find the factorial of any number using recorsion
function factorial(num){
  if(num === 0){
    return 1;
  }else{
    return num * factorial(num-1);
  }
}
console.log(factorial(6));