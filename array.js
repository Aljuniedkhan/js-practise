// problem 1
const fruit =['mango','guava','carrot','papaya','lichi'];
console.log(fruit[3]);
fruit[2]=('jambura');
console.log(fruit);



// problem 2
let tour=['coxsbazar','kaptai','rangamati'];
let res=tour.push('dhaka');
console.log(tour);
let res2=tour.push('kagrachori','sajek');
console.log(tour);
let res3=tour.pop();
console.log(tour);

// problem 3
let books=['math','biology','physics','javascript'];
console.log(books.includes('javascript'));
if((books.includes('javascript'))){
    console.log('Mama pawa geceh')
}else{
console.log('Mama ny');
}

// problem 4
let fruits=['mango','papaya','guava','apple'];
let money=(10,20,30);
console.log(Array.isArray(fruits));
console.log(Array.isArray(money));
if(Array.isArray(fruits)){
    console.log('mama paiciiiiiiiii');
}else{
    console.log('mama hethi naiiiiiii');
}
if(Array.isArray(money)){
    console.log('mama paiciii')
}else{
    console.log('mama heti re kuija pai nai');
}

// problem 5

let array1=['Hard','work','and practise'];
let array2=['makes','a man','perfect'];
let FinalArray=array1.concat(array2);
console.log(FinalArray);
