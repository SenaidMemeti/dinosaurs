if ( process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}

var express = require('express');
var app = express();
const port = 3000;

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });

    const api_key = process.env.API_KEY;

  app.get('/dinoname', async(request, response) => {

   const fetchApi = await fetch( 
    'https://car-api2.p.rapidapi.com/api/years',
   {
   method: 'GET',
  headers: {
    'X-RapidAPI-Key': api_key,
		'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
  },
}
);

const dinoNameResponse = await fetchApi.json();
console.log(dinoNameResponse);
response.json(dinoNameResponse);
}


);

app.get('/dinoimage', async(request, response) => {

  const fetchApi = await fetch( 
    'https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=10',
  {
  method: 'GET',
 headers: {
  'X-RapidAPI-Key': 'e3e2d0e34dmshf0be41c4ff01b30p1ce02ejsn5d263bcbf519',
  'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
},
}
);

const dinoImageResponse = await fetchApi.json();
console.log(dinoImageResponse);
response.json(dinoImageResponse);
}


);

