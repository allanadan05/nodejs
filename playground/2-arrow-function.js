//ES6 syntax
// ================= //
// Arrow Function
// ================ //

// JS previous version
// const square = function (x) {
//     return x * x;
// }

//use LONG FORM arrow function instead of above
// const square = (x) => {
//     return x * x;
// }

//use SHORT-HAND FORM of arrow function instead of above, when you only have 1 statement
// const square = (x) => x * x;

// console.log(square(4));


// =============== //
//  Method Function as Property
// ============== //

const event = {
    name: 'Birthday Party',
    guestList: ['Dan', 'Leo', 'Don'],
    printGuestList() {
        console.log('Guest list for ' + this.name);

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name);
        });
    }
};

event.printGuestList();

