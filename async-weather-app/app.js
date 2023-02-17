const request = require('request');
const chalk = require('chalk');

/* 
In this program, weather and geocoding show results 
*/

const url = 'http://api.weatherstack.com/current?access_key=7650fc25b1c149afc6286a3ac8b8f830&query=Manila';
const geo_url = 'http://api.positionstack.com/v1/forward?access_key=4f4cd5522521351c3a6442cdeea22ed2&query=Manila,Philippines';

// request({ url: url }, (error, response) => {
//     const data = JSON.parse(response.body);
//     console.log(data.current);
//     // console.log(error);
// });

request({ url: url, json: true }, (error, response) => {
    if(error){
        console.log(chalk.red.inverse('Unable to connect to Weather service'));
    }else if(response.body.error){
        console.log(chalk.bgRed("Weather service error:" + response.body.error.info));
    }else{
        const weather = response.body;
    
        console.log(chalk.inverse("  " + weather.current.weather_descriptions[0] + " in " + weather.request.query));
        console.log("It is currently " + weather.current.temperature + " degrees out but it feels like " + weather.current.feelslike + " degrees.\n" );    
    }
});

request({ url: geo_url, json: true }, (error, response) => {
    if(error){
        console.log(chalk.red.inverse('Unable to connect to Geocoding service'));
    }else if(response.body.error){
        console.log(chalk.bgRed("Geocoding service error: " + response.body.error.context.query.message));
    }else{

        const geocoding = response.body.data;
    
        geocoding.forEach((data) => {
            console.log(chalk.magenta.inverse("  " + data.label + "  ") + " " + data.latitude + "," + data.longitude);
        });

        console.log('');
    }
});