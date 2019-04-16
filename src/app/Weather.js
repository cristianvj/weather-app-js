export class Weather{
    constructor(city, countryCode){
        this.apikey = 'e17bb2aa01d4425d4b44bc1e61fd001f';
        this.city = city;
        this.countryCode = countryCode;
    }
    async getWeather(){
        const URI = `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`
        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }

    changeLocation(city, countryCode){
        this.city = city;
        this.countryCode = countryCode;
    }
}