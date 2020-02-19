'use strict'

// Complete this algo
const binarySearch = (array, target) => {
  const mid = Math.ceil(array.length / 2)
  if (array.length === 1) {
    if (array[0] === target) {
      return true
    } else {
      return false
    }
  } else {
    const root = array[mid]
    const frontHalf = array.slice(0, mid)
    const backHalf = array.slice(mid)

    if (target < root) {
      return binarySearch(frontHalf, target)
    }
    if (target >= root) {
      return binarySearch(backHalf, target)
    } else {
      return false
    }
  }
}

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
