// =============================
// Essential
// =============================
// These are the most fundamental and frequently used array methods in JavaScript.
// Every JavaScript developer should know these by heart, as they are used in almost every project for data transformation, searching, and validation.

// Note: .map is only for arrays, not strings.
// 1. map
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// Creates a new array by applying a function to each element
const doubled = [1, 2, 3].map((num) => num * 2); // [2, 4, 6]

// Note: .forEach is only for arrays, not strings.
// 2. forEach
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// Executes a function for each array element (does not return a new array)
[1, 2, 3].forEach((item, index) => {
  console.log(item, index);
});

// Note: .filter is only for arrays, not strings.
// 3. filter
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// Creates a new array with elements that pass a test
const evens = [1, 2, 3, 4].filter((num) => num % 2 === 0); // [2, 4]

// Note: .reduce is only for arrays, not strings.
// 4. reduce
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// Reduces the array to a single value
const sum = [1, 2, 3, 4].reduce((acc, num) => acc + num, 0); // 10

// Note: .find is only for arrays, not strings.
// 5. find
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// Returns the first element that satisfies a provided testing function
const found = [{ id: 1 }, { id: 2 }, { id: 3 }].find((item) => item.id === 3); // {id: 3}

// Note: .some is only for arrays, not strings.
// 6. some
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// Returns true if at least one element passes the test
const hasEven = [1, 2, 3].some((num) => num % 2 === 0); // true

// Note: .every is only for arrays, not strings.
// 7. every
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// Returns true if all elements pass the test
const allPositive = [1, 2, 3].every((num) => num > 0); // true

// Note: .includes works on both arrays and strings.
// 8. includes
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// Checks if an array contains a certain value
const hasThree = [1, 2, 3].includes(3); // true

// =============================
// Widely Used
// =============================
// These methods are commonly used in many codebases and are important to know for manipulating arrays,
// such as adding/removing elements, copying, sorting, combining, and flattening arrays. They are not always needed in every project,
// but you will encounter them often in real-world JavaScript development.

// Note: .push and .pop are only for arrays, not strings.
// 9. push / pop
// MDN (push): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// MDN (pop): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
// Add (push) or remove (pop) elements at the end of the array
const arr1 = [1, 2, 3];
arr1.push(4); // [1, 2, 3, 4]
arr1.pop(); // [1, 2, 3]

// Note: .shift and .unshift are only for arrays, not strings.
// 10. shift / unshift
// MDN (shift): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
// MDN (unshift): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
// Remove (shift) or add (unshift) elements at the beginning of the array
const arr2 = [1, 2, 3];
arr2.unshift(0); // [0, 1, 2, 3]
arr2.shift(); // [1, 2, 3]

// Note: .slice works on both arrays and strings.
// 11. slice
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// Returns a shallow copy of a portion of an array
const part = [1, 2, 3, 4].slice(1, 3); // [2, 3]

// Note: .splice is only for arrays, not strings.
// 12. splice
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// Adds/removes elements at a specific index (modifies original array)
const arr3 = [1, 2, 3, 4];
arr3.splice(2, 1, "new"); // [1, 2, 'new', 4]

// Note: .sort is only for arrays, not strings.
// 13. sort
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// Sorts the elements of an array in place
const arr4 = [3, 1, 4, 2];
arr4.sort((a, b) => a - b); // [1, 2, 3, 4]

// Note: .concat works on both arrays and strings.
// 14. concat
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
// Merges two or more arrays (returns a new array)
const merged = [1, 2].concat([3, 4]); // [1, 2, 3, 4]

// Note: .join is only for arrays, not strings (but String has a split method for the reverse).
// 15. join
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// Joins all elements into a string, separated by a specified separator
const str = [1, 2, 3].join(", "); // '1, 2, 3'

// Note: .findIndex is only for arrays, not strings.
// 16. findIndex
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// Returns the index of the first element that satisfies a provided testing function
const index = [{ id: 1 }, { id: 2 }, { id: 3 }].findIndex(
  (item) => item.id === 3
); // 2

// Note: .flat is only for arrays, not strings.
// 17. flat
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
// Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
const nested = [1, 2, [3, 4, [5, 6]]];
const flatOnce = nested.flat(); // [1, 2, 3, 4, [5, 6]]
const flatTwice = nested.flat(2); // [1, 2, 3, 4, 5, 6]

// Note: .reverse is only for arrays, not strings.
// 18. reverse
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
// Reverses the elements of an array in place
const arr7 = [1, 2, 3];
arr7.reverse(); // [3, 2, 1]

// Note: .reduceRight is only for arrays, not strings.
// 19. reduceRight
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight
// Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value
// Compare with reduce (left-to-right):
const concatLeft = [1, 2, 3, 4].reduce((acc, num) => acc + num, ""); // '1234'
const concatRight = [1, 2, 3, 4].reduceRight((acc, num) => acc + num, ""); // '4321'

// =============================
// Used Sparingly
// =============================
// These methods are newer or less commonly used, but are worth being aware of as they may become more popular in the future.
// They are not yet as widely adopted, but can be very useful in certain situations.

// Note: .at works on both arrays and strings.
// 20. at
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at
// Returns the element at the given index (supports negative indices)
const arr5 = [10, 20, 30, 40];
const last = arr5.at(-1); // 40

// Note: .with is only for arrays, not strings.
// 21. with
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with
// Returns a new array with the element at the given index replaced with a new value (does not mutate original)
const arr6 = [1, 2, 3, 4];
const replaced = arr6.with(2, 99); // [1, 2, 99, 4]
