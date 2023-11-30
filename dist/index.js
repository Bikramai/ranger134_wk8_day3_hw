"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
// Step 3: Create some functions
function createUser(name, age) {
    return {
        id: (0, uuid_1.v4)(),
        name,
        age,
        cart: [],
    };
}
function createItem(name, price, description) {
    return {
        id: (0, uuid_1.v4)(),
        name,
        price,
        description,
    };
}
function addToCart(item, user) {
    user.cart.push(item);
}
function removeFromCart(item, user) {
    user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id);
}
function removeQuantityFromCart(item, user, quantity) {
    user.cart = user.cart.filter((cartItem) => {
        if (cartItem.id === item.id) {
            quantity--;
            return quantity >= 0;
        }
        return true;
    });
}
function cartTotal(user) {
    return user.cart.reduce((total, item) => total + item.price, 0);
}
function printCart(user) {
    console.log('User Cart:');
    user.cart.forEach((item) => {
        console.log(`- ${item.name}: $${item.price}`);
    });
}
// Step 4: Create Driver Code
const user = createUser('Bikram P', 25);
const itemA = createItem('Item A', 10, 'Coding Book');
const itemB = createItem('Item B', 15, 'Python coding');
const itemC = createItem('Item C', 20, 'Typescript');
addToCart(itemA, user);
printCart(user);
console.log(`Total: $${cartTotal(user)}`);
removeFromCart(itemA, user);
printCart(user);
addToCart(itemA, user);
addToCart(itemB, user);
addToCart(itemC, user);
printCart(user);
removeQuantityFromCart(itemA, user, 2);
printCart(user);
console.log(`Total: $${cartTotal(user)}`);
function testMe(name) {
    console.log(name);
}
testMe('Bikram Subba');
// noImplicitAny
// set to true
// function implicitAny(id):number {
//     return id
// }
// noImplicitReturns
// set to true
// make sure functions with return types actually return something
// function noImplicitReturns(name:string):string{
//     console.log(name)
// }
// noUnusedLocals
// set to true
// function unusedLocals(): void {
//     let unused = 5
//     console.log("yolo")
// }
//noUnusedParameters
//set to true
// function unusedParameters():void {
//     console.log("you're a goofy goober")
// }
//strictNullChecks
// set to true
// function strictNullChecks(id: number): void {
//     console.log(id)
// }
// strictNullChecks(null)
// allowUnreachableCode
// set to false
// function unreachable(id: number):number{
//     while(typeof id === "number"){
//         // break
//     }
//     return id
// }
// noImplicitOverrides
// set to true
// class Father {
//     constructor(public age: number){}
//     playSmash():string{
//         return "get rekt my son"
//     }
// }
// class Son extends Father {
//     override playSmash():string {
//         return "one day i shall defeat you, father. and regain my honor"
//     }
// }
let myUuid = (0, uuid_1.v4)();
console.log(myUuid);
