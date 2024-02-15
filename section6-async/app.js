const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/current.json',
  params: {q: '52.932670,-1.134330'},
  headers: {
    'X-RapidAPI-Key': '86700951d1mshab0b9b275a66ecep1adb18jsne0a652adef5c',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

const fetchWeather = async () => {
try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
};

fetchWeather();