// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


// MY SOLUTION
function reverseInt(n) {

    if(n === 0) return 0

    const isNegative = n < 0 ? true : false;
    const arr = n.toString().split('');
    
    if(isNegative) {
        arr.shift();
    }

    const reversedStr = arr.reduce((acc, value) =>  acc = value + acc, '');
    const reversedInt = isNegative ? parseInt('-' + reversedStr) : parseInt(reversedStr);

    return reversedInt;
}


// SOLUTION
// function reverseInt(n) {
//     const reversed = n.toString().split('').reverse().join('');
//     return parseInt(reversed) * Math.sign(n);
// }

// function reverseInt(n) {
// }

module.exports = reverseInt;
