
// TASK 4
for (let i = 0; i < 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(j);
    }
 }  

 for (let a = 100; a <= 200; a++) {
    console.log(`a = ${a}`);
  }

  let now = new Date(); 
let day = now.getDay();
switch (day) {
  case 0:
    console.log(`It's Sunday`);
    break;
  case 6:
    console.log(`It's Saturday`);
    break;
  case 1:
    console.log(`It's Monday`);
  case 2:
  case 3:
  case 4:
  case 5:
    console.log(`It's a weekday`);
    break;
  default:
    console.log(`Excuse me?`);
    break;



    /* TASK 5
     let strictA = true;
let strictB = 1;
console.log(strictA == strictB);
console.log(strictA === strictB);


console.log(strictA != strictB);
console.log(strictA !== strictB);
Solution
The strictly inequality operator works by checking the negation of the type and value of variables
console.log(strictA != strictB); // false
console.log(strictA !== strictB); // true
/** */

let age = 10;

if (age >= 18 && age <= 65) {
  console.log("Age is in range");
} else if (age < 18) {
  console.log("Underage");
} else {
  console.log("Catch all else");

let age = 100;
let result = age >= 50 ? "50 or over" : "Under 50";
console.log(result);

//TASK 6
let darthVader = {
  allegiance: "Empire",
  weapon: "lightsaber",
  sith: true
};

console.log(darthVader);

// TASK 7
function subCalc(num1, num2) {
  return num1 - num2;
}

console.log(subCalc(50,5000));

const welcome = function(name,age,gender){
  return console.log(`My name is ${name}, i am ${age} years old and of gender ${gender}`);
  }
 
  welcome("Felix Cited",20,"Male");

  powerUp = (n1,n2) => Math.pow(n1,n2);

  console.log(powerUp(3,3));
}



}