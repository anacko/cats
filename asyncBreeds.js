// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) callback(data);
  });
};

// we try to get the return value
const printCatBreed = breed => {
  console.log('Return Value: ', breed);
}

breedDetailsFromFile('Bombay', printCatBreed);