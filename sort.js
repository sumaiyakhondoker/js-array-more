const persons = ["rakib", "nakib", "shimul","Zakib", "akib", "dakib"];
const sortedPersons = persons.sort();
console.log(sortedPersons)

// console.log(sortedNumbs.reverse())
// console.log(persons);
const numbers = [45,2,1,3,7,36,4];
const asc_numbs = [...numbers].sort(function(a,b){return a-b});
const dsc_numbs = [...numbers].sort(function(a,b){return b-a})

// console.log( numbers.sort());
// console.log(asc_numbs)
// console.log(dsc_numbs