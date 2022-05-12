const request = require('request');
const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`,(error, response, body) => {

  if (error) {
    console.log(error);
  } else {

    if (body === "[]") {
      return console.log("Sorry Breed isnt Found!");
    } else {
      const data = JSON.parse(body);
      console.log(data[0]["description"]);
    }

  }
});