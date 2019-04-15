export class Weather{
    constructor(city, countryCode){
        this.apikey = 'e17bb2aa01d4425d4b44bc1e61fd001f';
        this.city = city;
        this.countryCode = countryCode;
    }
    async getWeather(){
        const URI = `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}`
        const data = await fetch(URI)
        return data 
    }
}