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
    salePrice: undefined,
    // sale: 0 
}

// const {label, stock, price:originalPrice, rating, sale = 1 } = product;

// console.log(label);
// console.log(stock);
// console.log(originalPrice); //price was renamed to originalPrices
// console.log(rating); //undefined, as this is not present in the objects
// console.log(sale); //has default value should there be no property 'sale'
// console.log('\n');

const transaction = (type, { label, stock }) => { //destructured object as param
    console.log(type, label, stock);
};

transaction('order', product);


