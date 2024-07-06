// Task 1
let BurgerPrice = 600;
if(BurgerPrice>500){
    console.log('Take a free coke');
}else{
    console.log('Give 30 tk for coke');
}

// Task 2

let weight = 800;
let height = 3;
let BMI= weight/(height*2);
if(BMI<18.5){
    console.log('You are underweight');
}else if
    (BMI>= 18.5 && BMI <=24.9){
        console.log('You are normal');
}else if(BMI >=25 && BMI <= 29.9){
    console.log('You are overweight');
}else{
    console.log('You are obese');
}

// Task 3
let number = 95.5;
if(number>=90 && number<=100){
    console.log('A');
}else if(number>=80 && number<=89){
    console.log('B');
}else if(number>=70 && number<=79){
    console.log('C');
}else if(number>=60 && number<=69){
    console.log('D');
}else if(number>=0 && number<=59){
    console.log('F');
}

// Task 4
let myScore = 96;
let friendScore = 87;
if(myScore > 80){
    if(friendScore>80){
        console.log("Go for lunch");
    }else if(friendScore<80 && friendScore>=60){
        console.log('good Luck next time');
    }else if(friendScore<60 && friendScore>=40){
        console.log('Message Unseen');
    }else if(friendScore<40){
        console.log('Block Friend');
    }
}
if(myScore<80){
    console.log('Go to home and sleep and act sad')
}

// Task 5
let num1 = 11;
let num2 = 10;
if(num1>num2){
    console.log(num1*num2);
}else{
    console.log(num1+num2);
}

// Task 5 in turnary
let number1 = 11;
let number2 = 10;
number1>number2 ? console.log(number1*number2):console.log(number1+number2);
// Task 6
let age = 80
let ticketPrice=800;
let isStudents = true;
if(age<10){
    console.log('Free Tickets');
}else if(isStudents==true&&age>10&&age<60){
    let discount = ticketPrice/2;
    console.log(discount );
}else if(age>=60){
    let discount = (ticketPrice*15)/100 ;
    let payamount = ticketPrice-discount;
    console.log(payamount);

}else{
    console.log("Give 800 TK");
}
// ALHAMDULILLAH I CAN