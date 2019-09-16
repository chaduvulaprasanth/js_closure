// Challenge 1. Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

// Your code here.
arrays.reduce((acc, val) => acc.concat(val), []);
// → [1, 2, 3, 4, 5, 6]

// Challenge 2. Your own loop
// Your code here.

function loop(start, test, update, body) {
  for (let n = start; test(n); n = update(n)) {
    body(n);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// Challenge 3. Everything
// Your code here.
// one version using method
function every(array, test) {
  return array.every(test)
}

// second version using loop
function every(array, test) {
  for (let key in array) {
    if(test(array[key])) {
      return true;
    }

    }
  }

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// Challenge 4. Dominant writing direction
function dominantDirection(text) {
  // Your code here.
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
