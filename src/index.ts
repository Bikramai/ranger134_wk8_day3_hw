import {v4 as uuid} from "uuid"

// OOP Solution

// Define types of properties
class Item {
  id: string;
  name: string;
  price: number;
  description: string;

  constructor(name: string, price: number, description: string) {
  // Assigning the properties 
    this.id = uuid();
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

class User {
  id: string;
  name: string;
  age: number;
  cart: Item[];

  constructor(name: string, age: number) {
    this.id = uuid();
    this.name = name;
    this.age = age;
    this.cart = [];
  }

  // Methods addtocart, removetocart, removequantityfromcart, cartotal, printcart
  addToCart(item: Item): void {
    this.cart.push(item);
  }

  removeFromCart(item: Item): void {
    this.cart = this.cart.filter((cartItem) => cartItem.id !== item.id);
  }

  removeQuantityFromCart(item: Item, quantity: number): void {
    this.cart = this.cart.filter((cartItem) => {
      if (cartItem.id === item.id) {
        quantity--;
        return quantity >= 0;
      }
      return true;
    });
  }

  cartTotal(): number {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }

  printCart(): void {
    console.log('User Cart:');
    this.cart.forEach((item) => {
      console.log(`- ${item.name}: $${item.price}`);
    });
  }
}

// Create Driver Code
const user = new User('Bikram P', 25);

const coding = new Item('Coding', 59.99, 'Bootcamp Coding Book');
const python = new Item('python', 49.99, 'Advanced Python coding');
const typescript = new Item('Typescrip', 29.99, 'Basic Typescript');


user.addToCart(coding);
user.printCart();

console.log(`Total: $${user.cartTotal()}`);

user.removeFromCart(coding);
user.printCart();

user.addToCart(coding);
user.addToCart(python);
user.addToCart(typescript);
user.printCart();

user.removeQuantityFromCart(coding, 1);
user.printCart();

console.log(`Total: $${user.cartTotal()}`);





// // Type to describe an Item
// type Item = {
//     id: string;
//     name: string;
//     price: number;
//     description: string;
//   };
  
//   // Type to describe a User
//   type User = {
//     id: string;
//     name: string;
//     age: number;
//     cart: Item[];
//   };
  
//   // Step 3: Create some functions
  
//   function createUser(name: string, age: number): User {
//     return {
//       id: uuid(),
//       name,
//       age,
//       cart: [],
//     };
//   }
  
//   function createItem(name: string, price: number, description: string): Item {
//     return {
//       id: uuid(),
//       name,
//       price,
//       description,
//     };
//   }
  
//   function addToCart(item: Item, user: User): void {
//     user.cart.push(item);
//   }
  
//   function removeFromCart(item: Item, user: User): void {
//     user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id);
//   }
  
//   function removeQuantityFromCart(item: Item, user: User, quantity: number): void {
//     user.cart = user.cart.filter((cartItem) => {
//       if (cartItem.id === item.id) {
//         quantity--;
//         return quantity >= 0;
//       }
//       return true;
//     });
//   }
  
//   function cartTotal(user: User): number {
//     return user.cart.reduce((total, item) => total + item.price, 0);
//   }
  
//   function printCart(user: User): void {
//     console.log('User Cart:');
//     user.cart.forEach((item) => {
//       console.log(`- ${item.name}: $${item.price}`);
//     });
//   }
  
//   // Step 4: Create Driver Code
  
//   const user = createUser('Bikram P', 25);
  
//   const itemA = createItem('Item A', 10, 'Coding Book');
//   const itemB = createItem('Item B', 15, 'Python coding');
//   const itemC = createItem('Item C', 20, 'Typescript');
  
//   addToCart(itemA, user);
//   printCart(user);
  
//   console.log(`Total: $${cartTotal(user)}`);
  
//   removeFromCart(itemA, user);
//   printCart(user);
  
//   addToCart(itemA, user);
//   addToCart(itemB, user);
//   addToCart(itemC, user);
//   printCart(user);
  
//   removeQuantityFromCart(itemA, user, 2);
//   printCart(user);
  
//   console.log(`Total: $${cartTotal(user)}`);



function testMe(name:string):void {
    console.log(name)
}

testMe('Bikram Subba')













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



let myUuid = uuid()
console.log(myUuid)