// const rev_array = [];
// const friends = ["Elon", "Mark", "Bill","Waren"];
// for(const friend of friends){
//     // console.log(friend)
// rev_array.unshift(friend);
// }
// console.log(rev_array);

// const rev_array = [];
// const friends = ["Elon", "Mark", "Bill","Waren"];

// for(let i = 0; i< friends.length; i++){
//     const friend = friends[i];
//     rev_array.unshift(friend);
// }
// console.log(rev_array)

const rev_array = [];
const friends = ["Elon", "Mark", "Bill","Waren"];
for(let i = friends.length -1; i >= 0; i--){
    const friend = friends[i];
    rev_array.push(friend)
}
console.log(rev_array)