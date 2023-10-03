const axios = require('axios');
const config = require('./config');

const city = process.argv[2];

if (!city) {
  console.error('Пожалуйста, укажите название города.');
  process.exit(1);
}

const apiUrl = `http://api.weatherstack.com/current?access_key=${config.WEATHERSTACK_API_KEY}&query=${city}`;

axios
  .get(apiUrl)
  .then((response) => {
    const weatherData = response.data;

    if (weatherData.current) {
      console.log(`Погода в ${city} сейчас: ${weatherData.current.temperature} градусов Цельсия.`);
    } else {
      console.error('Не удалось получить данные о погоде.');
    }
  })
  .catch((error) => {
    console.error('Ошибка при запросе данных о погоде:', error.message);
  });
