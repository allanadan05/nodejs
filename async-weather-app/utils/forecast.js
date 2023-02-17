const request = require('request');

//=========================
// Callback Abstraction
// =======================

const forecast = (query, callback) => {
    const forecast_url = 'http://api.weatherstack.com/current?access_key=7650fc25b1c149afc6286a3ac8b8f830&query='+ encodeURIComponent(query) ;

    request({ url: forecast_url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined);
        } else if (body.error) {
            callback("Unable to get the weather status. " + body.error.info, undefined);
        }else if(body.current){
            callback(undefined, body.current.weather_descriptions[0] + " in " + body.location.name + ", " + body.location.country + ". It is currently " + body.current.temperature + " degrees out but it feels like " + body.current.feelslike + " degrees."); 
        }else if(!body.current){
            callback('Unable to get the weather status. Try another search.', undefined);
        }else{
            callback('Weather service blocked or unreachable.', undefined);
        }
    });
}

module.exports = forecast;