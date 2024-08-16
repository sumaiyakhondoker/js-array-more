/*Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']
*/

/*----------- with reverse() method----------
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const rev_colors = colors.reverse();
console.log(rev_colors)
*/


// --------- with reverse() method ---------
// for loop diye---------
/*
const rev_array = [];
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
for(let c = 0; c < colors.length; c++){
    // console.log(colors[c])
    rev_array.unshift(colors[c]);
}
console.log(rev_array);



while loop diye-----------
const rev_colors = [];
let i = 0;
while(i < colors.length){
    const color = colors[i];
    rev_colors.unshift(color);
    i++;
}
console.log(rev_colors)

*/


// decremental for loop diye-----------

/*const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const rev_colors = [];
for(let i = colors.length - 1; i >= 0; i--){
    const color = colors[i];
    rev_colors.push(color);
}
console.log(rev_colors)
*/


// decremental while loop --------
const rev_colors = [];
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let i = colors.length - 1;
while(i >= 0){
    const color = colors[i];
    rev_colors.push(color);
    i--;
}
console.log(rev_colors);
