//1 inch = 2.54 centimetres.
//2.2046 pounds in a kilo
let height = window.prompt("What is your height?");

let weight = window.prompt("What is your weight?")
console.log(weight, height);
let bmi = weight/(height/100*height/100);
console.log(bmi);
