const first100Price=100;
const second100Price=90;
const aboveSecond100Price=70;

function discountedPrice(quantity){
    let total =0 ;
    if(quantity<=100){
        total=first100Price*quantity;
        return total;
    }else if(quantity<=200){
        total=second100Price*quantity;
        return total;
    }else{
        total=aboveSecond100Price*quantity;
        return total;
    }
}
const total=discountedPrice(600);
console.log(total);