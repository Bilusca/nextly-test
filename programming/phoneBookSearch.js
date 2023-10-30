'use strict'
const fakeData = require('./fakeData.json')

// For ordered lists one of the ways to find a value fast is using BINARY SEARCH

function search(phoneList, name) {
  let start = 0;
  let end = phoneList.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (phoneList[mid].name.toLowerCase() === name.toLowerCase()) {
      return `Phone: ${phoneList[mid].phone}`
    } else if (phoneList[mid].name.toLowerCase() < name.toLowerCase()) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return 'Contact not found'
}

console.log(search(fakeData, 'Lucas'))
