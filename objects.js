'use strict';

// 1. countWords
function countWords(phrase) {
  let wordCount = {};
  for (const word of phrase.split(" ")) {
    if (!wordCount[word]) {
      wordCount[word] = 1;
    }
    else wordCount[word] += 1;
  }
  return wordCount
}

console.log(countWords('hello world it me me me'))

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code
}
