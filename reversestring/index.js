// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// MY SOLUTION
function reverse(str) {
  let arr = str.split('')
  let reverseArr = [];
  for(let i = arr.length - 1; i >= 0; i-- ) {
    reverseArr.push(arr[i])
  }
  return reverseArr.join('')
}

module.exports = reverse;

// USING REDUCE

// function reverse(str) {
//     return str.split('').reduce((reversed, character) => {
//         return character + reversed
//     },'')
// }


// USING FOR OF

// function reverse(str) {
//     let reversed = ''

//     for(let ch of str) {
//         reversed = ch + reversed
//     }
//     return reversed
// }

// USING REVERSE()

// function reverse(str) {
//     return str.split('').reverse().join('')
// }



