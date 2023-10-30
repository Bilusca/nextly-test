'use strict'

//I use a TWO POINTER technic to iterate around the word, and check if is palindrome.

function isPalindrome(word) {
  let start = 0;
  let end = word.length - 1;
  let iterator = 0;

  while (iterator < word.length) {
    if (word[start].toLowerCase() !== word[end].toLowerCase()) {
      return false;
    }

    iterator++;
    start++
    end--;
  }

  return true
}

console.log('HANNAH', isPalindrome('HANNAH'))
console.log('GAGA', isPalindrome('GAGA'))