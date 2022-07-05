'use strict';

// 
/* 

Translate the below Python code to JS: 

def words_in_common(words1, words2):
"""Return a list of unique words that appear in `words1` and `words2`

Arguments:
    words1 (list): A list of words
    words2 (list): Another list of words

Returns:
    list: A list of unique words
"""

words1_set = set(words1)
words2_set = set(words2)

result = set()

for word in words1_set:
    if word in words2_set:
        result.add(word)

return list(result)

*/

function wordsInCommon(words1, words2) {
  // Replace this with your code
  const words1Set = new Set(words1);
  const words2Set = new Set(words2);

  const result = new Set();

  for (const word of words1Set){
    if (words2Set.has(word)) {
      result.add(word);
    };
  }

  let arrayResult = [...result];
  
  return arrayResult;

};

const testList1 = ["Hello", "there", "world"];
const testList2 = ["Hello", "there", "Sam"]

console.log(wordsInCommon(testList1, testList2))
// function kidsGame(names) {
//   // Replace this with your code
// }
