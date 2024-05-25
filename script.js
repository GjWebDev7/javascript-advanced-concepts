'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Destructuring is a unique technique that allows you to neatly extract an array/object value into new variables.
const arr = [1, 2, 3, 4, 5];
const [one, two] = arr;
console.log(one, two);

let [primary, , secondary] = restaurant.categories;
console.log(primary, secondary);

// Switching variables
let temp = primary;
primary = secondary;
secondary = temp;
console.log(primary, secondary);

// Array Destructuring to Swap Variables Values
[primary, secondary] = [secondary, primary];
console.log(primary, secondary);

// Nested array destructuring
const nested = [1, 2, [3, 4]];
const [first, , [third, fourth]] = nested;
console.log(first, third, fourth);

// set default value as 1
const defaultValue = [8];
const [i = 1, j = 1, k = 1] = defaultValue;
console.log(i, j, k);

// Object destructuring
const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);

// changing variable name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// set default value
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
console.log(a, b);
({ a, b } = obj); //**
console.log(a, b);

// Nested object destructuring
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// spread operator(...)
// It allows you to expand an iterable (like an array or a string) or an object into individual elements.
const ar = [7, 8, 9];
const newAr = [1, 2, ...ar]; // Adding some new elements in the beginning
console.log(newAr);
console.log(...newAr); // Logging individual elements

const newMenu = ['Coffee', ...restaurant.mainMenu, 'Burger'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arrays
const joinMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(joinMenu);

// Iterables : arrays, strings, sets, maps. NOT objects
const str = 'Gaurav';
const newStr = [...str, ...'jaiswal'];
console.log(newStr);

// spread operator works on object too
const newRestaurant = { founder: 'Gaurav', ...restaurant, foundedIn: 1998 };
console.log(newRestaurant);

// copy object
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Akkad bakkad';
console.log(restaurant.name);
console.log(restaurantCopy.name);

// Spreading in Function Arguments
// You can use the spread operator to pass elements of an array as arguments to a function:
const numbers = [1, 2, 3];
function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(...numbers)); // Output: 6

// Rest
// rest operator is used to collect multiple elements into a single array or object. It is denoted by ... and is often used in function parameters to handle an indefinite number of arguments.
const restArr = [1, 2, 3, 4, 5];
const [l, m, ...rest] = restArr; // using both destructuring and rest
console.log(l, m, rest);

// Rest in Object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// Rest in Function
const add = function (...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
};
add(1, 2, 3);
add(1, 2, 3, 4, 5);
const x = [1, 2, 3, 4, 5, 6];
add(...x);

// Short circuiting
// The logical OR operator (||) returns the first truthy value it encounters or the last value if none are truthy.
console.log(false || 'Gaurav' || true);
console.log(0 || null);
// The logical AND operator (&&) returns the first falsy value it encounters or the last value if none are falsy.
console.log(true && 7 && 'Gaurav');
console.log(true && false);

// Nullish coalescing operator(??) - It works with the idea of nullish values and nullish values are null and undefined. For nullsih coalescing operator only null and undefined are falsy values but 0, "", false are truthy values.

const num = 0;
console.log(num || 20); // it should return 0 not 20

// solution for above
console.log(num ?? 20); // now it returns 0 by using(??)

/*
// Logical assignment operator
// Logical assignment operators are a combination of logical operators (&&, ||, ??) and assignment (=).
// 1. Logical AND Assignment (&&=)
let a = true;
let b = false;
a &&= b; // a = a && b
console.log(a); // Output: false

let c = 5;
let d = 10;
c &&= d; // c = c && d
console.log(c); // Output: 10

// 2. Logical OR Assignment (||=)
let a = false;
let b = true;
a ||= b; // a = a || b
console.log(a); // Output: true

let c = 0;
let d = 5;
c ||= d; // c = c || d
console.log(c); // Output: 5

// 3. Logical Nullish Assignment (??=)
let a = null;
let b = 'default';
a ??= b; // a = a ?? b
console.log(a); // Output: 'default'

let c = undefined;
let d = 'fallback';
c ??= d; // c = c ?? d
console.log(c); // Output: 'fallback'

let e = 0;
let f = 10;
e ??= f; // e = e ?? f
console.log(e); // Output: 0 (since e is neither null nor undefined)
*/

// Optional chaining is a feature in JavaScript that allows you to safely access deeply nested properties of an object without having to explicitly check if each level of the object exists. If any part of the chain is null or undefined, the entire expression short-circuits and evaluates to undefined without throwing an error.
// The syntax for optional chaining uses the ?. operator:
const user = {
  name: 'Alice',
  address: {
    city: 'Wonderland',
    zip: '12345',
  },
};

console.log(user?.address?.city); // Output: 'Wonderland'
console.log(user?.contact?.phone); // Output: undefined (no error thrown)

// Optional chaining can be used to access array elements safely.
const users = [{ name: 'Alice' }, { name: 'Bob' }];

console.log(users?.[0]?.name); // Output: 'Alice'
console.log(users?.[2]?.name); // Output: undefined (no error thrown)

//The For Of Loop
const loopMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(loopMenu);

for (const item of loopMenu) {
  console.log(item);
}
// using entries() to get current index with current element
for (const [i, el] of loopMenu.entries()) {
  console.log(i + 1, el);
}
console.log();

// Looping objects: object keys, values, and entries
const gaurav = {
  name: 'Gaurav',
  age: 24,
  city: 'Noida',
};

for (const key of Object.keys(gaurav)) {
  console.log(key);
}

for (const value of Object.values(gaurav)) {
  console.log(value);
}

for (const [key, value] of Object.entries(gaurav)) {
  console.log(`${key}: ${value}`);
}
