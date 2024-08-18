const products = [
    { name: 'shirt', price: 550, quantity: 2 },
    { name: 'pant', price: 550, quantity: 1 },
    { name: 'shoe', price: 550, quantity: 2 },
    { name: 'perfume', price: 550, quantity: 1 },
]

function totalCost() {
    let total = 0;
    for (const product of products) {
        totalProductCost = (product.price * product.quantity);
        total=total + totalProductCost;
    }

return total;
}
const total = totalCost();
console.log(total);