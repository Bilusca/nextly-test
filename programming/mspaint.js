'use strict'

//Use recursivity to implement a MS-PaintBucket.

function paintBucket(image, x, y, newColor) {
  let currentColor = image[x][y];
  if (currentColor === newColor) {
    return;
  }
  paintBucketHelper(image, x, y, currentColor, newColor);
}

function paintBucketHelper(image, x, y, currentColor, newColor) {
  if (x < 0 || x >= image.length || y < 0 || y >= image[0].length || image[x][y] !== currentColor) {
    return;
  }
  image[x][y] = newColor;
  paintBucketHelper(image, x + 1, y, currentColor, newColor);
  paintBucketHelper(image, x - 1, y, currentColor, newColor);
  paintBucketHelper(image, x, y + 1, currentColor, newColor);
  paintBucketHelper(image, x, y - 1, currentColor, newColor);
}

let image = [
  ['.', '#', '#', '#', '.', '.'],
  ['.', '#', '.', '.', '#', '.'],
  ['.', '#', '#', '#', '.', '.'],
  ['.', '#', '.', '.', '.', '.']
];

paintBucket(image, 0, 1, 'O');

for (let row of image) {
  console.log(row.join(''));
}
console.log('\n')

paintBucket(image, 1, 3, 'O');

for (let row of image) {
  console.log(row.join(''));
}
console.log('\n')

paintBucket(image, 1, 3, '#');

for (let row of image) {
  console.log(row.join(''));
}
console.log('\n')
