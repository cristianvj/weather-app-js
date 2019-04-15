const {Weather} = require('./Weather');
const {UI} = require('./UI')

const weather = new Weather('London','uk');
const ui = new UI();

require ('./index.css');

async function fetchWeather(){
     const data = await weather.getWeather();
     ui.render(data)
}

document.addEventListener('DOMContentLoader', fetchWeather())