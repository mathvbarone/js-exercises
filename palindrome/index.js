// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// MY SOLUTION
function palindrome(str) {
    let length = str.length;
    
    for(let i = 0; i <= length + 1 / 2; i++) {
        if(str[i] !== str[length - i - 1]) {
            return false
        }
        return true
    }    
}

// SIMPLE SOLUTION
// function palindrome(str) {   
//     const reversed = str.split('').reverse().join('')
//     return str === reversed
// }

// ARRAY.EVERY()
// function palindrome(str) {   
//     return str.split('').every((char, i) => char === str[str.length - i - 1])
// }

// function palindrome(str) {   
// }

module.exports = palindrome;
