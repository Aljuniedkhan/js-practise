// calculator
function add(num1,num2){
    const result =num1+num2;
    return result;
}
function minus(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}

function calculator(num1,num2,operation){

    if(operation===add){
        const result=add(num1,num2);
        return result;
    }else if(operation===minus){
        const result=minus(num1,num2);
        return result;
    }else if(operation===multiply){
        return multiply(num1,num2);
    }else if (operation===divide){
        return (num1/num2);
    }

}
const answer= calculator(10,5,minus);
console.log(answer);