 const first100Price=10;
 const second100Price=7;
 const aboveSecond100Price=5;

 function discountedPrice(quantity){
    let total=0;
    if(quantity<101){
        total = first100Price*quantity;
        return total;
    }
    else if(quantity<201){
        const first100Total=100*first100Price;
        const remainingQuantity=quantity-100;
        const restPrice=remainingQuantity*7;
        const total=first100Total+restPrice;
        return total;
    }
    else if(quantity>200){
        const first100Total=100*first100Price;
        const second100Total=100*second100Price;
        const aboveSecond100Total=(quantity-200)*aboveSecond100Price;
        const total=first100Total+second100Total+aboveSecond100Total;
        return total;
    }

 }
 const total = discountedPrice(300);
 console.log(total);