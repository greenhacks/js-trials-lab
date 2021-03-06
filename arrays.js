'use strict';

// 1. printIndices

function printIndices(items) {
  
  for (const i in items) {
    console.log(items[i], i)
  }
}
printIndices(['apple', 'berry', 'cherry'])

// 2. everyOtherItem
function everyOtherItem(items) {
  let result = [];
  for (const i in items) {

    if (i % 2 === 0){

      result.push(items[i])
    }
  }
  console.log(result);
}
everyOtherItem(["hello", "howdy", "hi", "hey"])


// 3. smallestNItems
function smallestNItems(items, n) {
  let sortedItems = items.sort((a, b) => a - b); //comparison by subtracting one from the other
  let sortedNItems = sortedItems.slice(0, n);
  console.log(sortedNItems);
  sortedNItems.reverse();
  console.log(sortedNItems);
}

smallestNItems([200, 300, 400, 78, 9, 5, 10], 2) //expect: [10, 9, 5]
