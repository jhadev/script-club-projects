// FOR REFERENCE - THE POWER OF .reduce()

// here is another powerful example using reduce

// declare a variable that holds a long string
var insanelyLongString =
  'sadiovjsdnfewrusiojfsd[[psddzmxnc,wieieprwp[ocnn#($)_)@#)$*$jfh2340-23=4=lpfksdifjsjdfjbcbhbsxsdhbdskfhhfowo4iopqer';

// reassign that variable to create an array of all the letters with .split()
insanelyLongString = insanelyLongString.split('');

console.log(insanelyLongString);

// here we are using .reduce on the array to create an object with each key being assigned to a letter in the array and each value being the number of times that letter is present in the array.
var characterCount = insanelyLongString.reduce(function(obj, letter) {
  // here we using bracket notation instead of dot notation because our key is a variable.
  // at every iteration a letter is being assigned a value. if a key in our object does not have a value yet it is set to 1, if it does then 1 is added to the value of the existing letter in the object.
  obj[letter] = (obj[letter] || 0) + 1;
  return obj;
}, {});

console.log(characterCount);

// now lets find the character that appears the most in the string using .reduce

// Object.keys turns our object we created above back into an array of only the keys of the object
var mostFreqCharacter = Object.keys(characterCount);

// here we use reduce on that array of letters to find the one letter that appears the most in the array. Remember, reduce does exactly what it says, it reduces our array into whatever we specify in the callback function.

mostFreqCharacter = mostFreqCharacter.reduce(function(a, b) {
  // a, b as parameters are shorthand in this case. you will see it alot.

  // we need to reference the character count we created above because its values hold the answer to this problem.
  // again we use bracket notation to access the value of a key in our object because we are passing variable data to reference it.
  if (characterCount[a] > characterCount[b]) {
    return a;
  } else {
    return b;
  }
});

// 's' appeared 10 times in our string and our reduce function returns 's'.
console.log(mostFreqCharacter);

/* 

================================================================================
================================================================================

*/

var anotherLongString = `wolf farm-to-table banh mi pug leggings scenester bitters tofu 3 wolf moon letterpress Vice locavore Odd Future paleo mustache DIY aesthetic chillwave photo booth hashtag cliche Williamsburg irony XOXO Schlitz PBR cornhole craft beer semiotics fixie Austin gentrify Blue Bottle pop-up normcore pork belly blog viral deep v vegan biodiesel typewriter Pitchfork four loko Echo Park Helvetica meh ethical quinoa keffiyeh before they sold out kogi bespoke synth authentic VHS sustainable wayfarers raw denim fanny pack whatever YOLO fingerstache plaid brunch chambray gastropub asymmetrical gluten-free freegan umami McSweeney's fashion axe salvia ennui 90's readymade art party Portland cardigan cray tousled stumptown tote bag selfies crucifix skateboard small batch PBR&B tattooed Marfa heirloom sartorial direct trade  Shoreditch`;

// now let's make this into a function that can be reused on any string.

function findMostFreqChar(string) {
  // make sure all letters are lowercase so we get a true count. if we wanted this function to be case insensitive we can leave this out.
  string = string.toLowerCase();

  // turn string into an array of every letter
  var arrayOfAllCharacters = string.split('');

  var charCounter = arrayOfAllCharacters.reduce(function(obj, letter) {
    // ignore spaces in the count

    if (letter !== ' ') {
      obj[letter] = (obj[letter] || 0) + 1;
    }

    return obj;
  }, {});

  /* 
  see the empty object brackets above:
  from Mozilla web docs -
   
  initialValue Optional
  A value to use as the first argument to the first call of the callback. 
  If no initialValue is supplied, the first element in the array will be used and skipped.
  Calling reduce() on an empty array without an initialValue will throw a TypeError.

  Here we set that initial value to an empty object
  */

  console.log(charCounter);

  var mostFreqCharacter = Object.keys(charCounter).reduce(function(a, b) {
    if (charCounter[a] > charCounter[b]) {
      return a;
    } else {
      return b;
    }
  });

  return mostFreqCharacter;
}

// 'e' appears 78 times in the string above and our function returns 'e'
console.log(findMostFreqChar(anotherLongString));

/* 

================================================================================
================================================================================

*/

// most freq character no reduce

function charCounterAsObj(string) {
  // here we can chain methods together
  string = string.toLowerCase().split('');
  // declare an empty object for the count
  var countObj = {};

  for (var i = 0; i < string.length; i++) {
    var currentCharacter = string[i];
    // ignore spaces
    if (currentCharacter !== ' ') {
      // same thing we used in the .reduce function.
      countObj[currentCharacter] = (countObj[currentCharacter] || 0) + 1;
    }
  }

  // return our filled count object so we can access it somewhere else.
  return countObj;
}

function findMostFreqCharNoReduce(str) {
  /*
  the beautiful thing about JavaScript and programming in general is there are many ways
  to arrive at the same result. 
  some people hate this... but it allows you to problem solve in your own way.
  */
  var countObj = charCounterAsObj(str);
  console.log(countObj);
  // one way to come to the same result as above is to sort the object by the object values.
  var letters = Object.keys(countObj);
  var sortedLetters = letters.sort(function(a, b) {
    return countObj[a] - countObj[b];
  });

  // in this case our most frequent character will always be the last element in the array.
  var mostFreqCharacter = sortedLetters[sortedLetters.length - 1];

  // return the character that appears the most in the string.
  return mostFreqCharacter;
}

// using the same string as above we get the same exact result! 'e' is the most freq char and it appears 78 times in the string.
console.log(findMostFreqCharNoReduce(anotherLongString));

/* 

================================================================================
================================================================================

*/

// merge an array of arrays into one array

var nestedArrays = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20]
];

// we can use reduce to merge this array of nested arrays into one array

var mergedArray = nestedArrays.reduce(function(a, b) {
  // here we use .concat() to merge each array at every iteration of the loop.
  return a.concat(b);
}, []);

console.log(mergedArray);
