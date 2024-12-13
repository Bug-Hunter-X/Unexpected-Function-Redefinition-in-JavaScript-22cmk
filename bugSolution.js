function foo(a, b) {
  return a + b;
}

let x = foo(2, 3);
console.log(x); // Output: 5

// Instead of redefining, create separate functions or use objects:
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

x = add(2, 3);
console.log(x); // Output: 5
x = subtract(2, 3);
console.log(x); // Output: -1

// Using an object for different operations:
const mathOps = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};
x = mathOps.add(2,3);
console.log(x); // Output: 5
x = mathOps.subtract(2,3);
console.log(x); // Output: -1