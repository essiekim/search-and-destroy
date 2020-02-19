'use strict'

//Complete this algo
const isLoop = linkedlist => {
  let head = linkedlist.head
  let first = head.next
  let second = head.next.next

  while (first !== second) {
    if (second.next === null) {
      return false
    } else {
      first = first.next
      second = second.next.next
    }
  }

  if (first === second) {
    return true
  }
}

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
