// console.log(numbers);
// const reversed = numbers.reverse();
// console.log(reversed);
// console.log(numbers);
// const rev_numbers = [];
// for(const number of numbers){
    
    //     // console.log(number);
    //     rev_numbers.push(number)
    
    // }
    // console.log(rev_numbers)
    // const numbers = [1,2,3,4,5,6,7];
    // const rev_numbers = [];
    // for(const num of numbers){
    //     rev_numbers.unshift(num);
    // }
    // console.log(rev_numbers)

    const numbers = [5,6,7,8,9,10];
    // const reversed_numbers = [];
    // for(let i = 0; i < numbers.length; i++){
    //     const num = numbers[i]
    //     reversed_numbers.unshift(num);
    // }
    // console.log(reversed_numbers);

const rev_numbers = [];
    for(let i = numbers.length - 1; i >= 0; i--){
        const num = numbers[i];
        rev_numbers.push(num);
        
    }
    console.log(rev_numbers)