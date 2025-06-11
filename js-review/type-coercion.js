function getPercentage(firstNum, secondNum) {
  return ((100 * firstNum) / secondNum).toFixed(0);
}

const percentage = getPercentage(60, 80);

// what is the type of this variable? we assume a number right?

console.log(typeof percentage, percentage);

// logs string 75
// .toFixed() method automatically casts a number to a string to to turn it back into a number we have to convert
// many ways to do this

const percentageNum = Number(getPercentage(60, 80));

console.log(typeof percentageNum, percentageNum);

// logs number 75
const percentageParseInt = parseInt(getPercentage(60, 80));

console.log(typeof percentageParseInt, percentageParseInt);

// logs number 75

const percentageBitwise = ~~getPercentage(60, 80);

console.log(typeof percentageBitwise, percentageBitwise);

// logs number 75 using double bitwise operator

// find more ways here https://attacomsian.com/blog/convert-string-to-number-in-javascript
