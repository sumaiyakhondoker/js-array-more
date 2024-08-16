/*
Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'




*/


/*
// --- --------- for loop diye ---------
let string;
var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
for(let i =0; i < numbers.length; i++){
    let num1 = numbers[0];
    let num2 = numbers[1];
    let num3 = numbers[2];
    let num4 = numbers[3];
    string = num1 + num2 + num3 + num4;
}
console.log(string);

*/

// for of loop diye------------
let numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let string = "";
for(const number of numbers){
    string += number;
}
console.log(string);

