const request = require('request');
let breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
    return;
  }
  const data = JSON.parse(body);
  console.log('data: ', typeof data);
  if (data.length === 0) {
    console.log(`Breed ${breed} not found`);
    return;
  }
  console.log('first entry of data:', data[0].description);
});

//can use JSON.parse to convert the JSON string into an actual object^.

