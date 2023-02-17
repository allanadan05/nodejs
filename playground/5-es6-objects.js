// Object property shorthand

const fname = 'Dan';
const age = 23;

// const user = {
//     fname: fname,
//     age: age,
//     location: 'Manila'
// }

// ================================
// Object property Shorthand Syntax
// ================================

console.log('Obj property shorthand');

const user = {
    fname,
    age,
    location: 'Manila'
}

console.log(user);
console.log('\n');


// ================================
// Object Destructuring
// ================================

console.log('Obj Destructuring');

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label;
// const stock = product.stock;
// const price = product.price;
// const salePrice = product.salePrice;

const {label, stock, price:originalPrice, rating} = product;

console.log(label);
console.log(stock);
console.log(originalPrice); //price was renamed to originalPrices
console.log(rating); //undefined, as this is not present in the objects
console.log('\n');


