'use strict';

// 1. isHometown

// function hometown (town){
//     // let town = '';
//     if (town === 'San Francisco'){
//     return true;
//     }
// }

// console.log(hometown("San Francisco"))
// console.log(hometown("London"))

// 2. getFullName

// const getFullName = (firstName, lastName) => {
//    return `${firstName} ${lastName}`
// }

// console.log(getFullName('Johnny', 'Appleseed'))
// Define your function here

// 3. calculateTotal

function calculateTotal(basePrice, state, tax=0.05){
    let subtotal = basePrice * (1 + tax);
    let fee = 0;
    if (state === "CA"){
        fee = 0.03 * subtotal;
    } else if (state === "PA"){
        fee = 2;
    } else if (state === "MA"){
        if (basePrice <= 100){
            fee = 1;
        }
        else fee = 3;
    }return subtotal + fee
}

console.log(calculateTotal(2, "CA")) //expect 