const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      return callback('That cat does not exist', null);
    }
    if (data[0].description) {
      return callback(null, data[0].description);
    }
  });
};


// original code below
// const request = require('request');
// let breed = process.argv[2];

// request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
//   if (error) {
//     console.log('error:', error); // Print the error if one occurred
//     return;
//   }
//   const data = JSON.parse(body);
//   if (data.length === 0) {
//     console.log(`Breed ${breed} not found`);
//     return;
//   }
//   console.log('first entry of data:', data[0].description);
// });

// can use JSON.parse to convert the JSON string into an actual object^.

module.exports = { fetchBreedDescription }; 