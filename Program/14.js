// find the given number is prime or not
const number = 97;
let isPrime = true;
if(number == 1){
  console.log("This number is nither prime nor composite")
} else if(number == 0){
  console.log("Enter Positive number");
}else if(number > 1){
  for(let i =2; i< number ; i++){
    if(number % i == 0){
      isPrime = false;
      break;
    }
  }
  if(isPrime){
    console.log(`This ${number} is prime`);
  }else{
    console.log(`This ${number} is not prime`);
  }
}
