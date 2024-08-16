/*Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:

[12, 98, 76, 46]*/

const new_array = [];
const numbers = [12, 98, 5, 41, 23, 78, 46];
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    if(number % 2 === 0){
       new_array.push(number);
    }
    
}
console.log(new_array);