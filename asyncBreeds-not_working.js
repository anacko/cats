// asyncBreeds.js
console.log("1. before req. fs");
const fs = require('fs');

console.log("2. after req. fs and before def. breed details")

const breedDetailsFromFile = function(breed) {
  console.log('4 breedDetailsFromFile: Calling readFile...');
  console.log("4 inside def. breed details, before read file")
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log(" 6 In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) console.log(" 7 data?"); return data;
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

// we try to get the return value
console.log('3 Before bombay def.')
const bombay = breedDetailsFromFile('Bombay');
console.log('5 Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!