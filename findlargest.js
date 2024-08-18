// FindLargest number from an array
const numbers=[12,true,209,13,57,87,89];
// const numbers = 'i am rafi'

function FindLargest(numbers){
    if(!Array.isArray(numbers)){
        return 'please probide an array';
    }
    let largestNum=numbers[0];
    
for(const number of numbers){
    if(typeof number !=='number'){
        return `all value should be number`;
    }
    if(number>largestNum){
        largestNum=number;
}
}
return largestNum;
}
const result=FindLargest(numbers);
console.log(result);