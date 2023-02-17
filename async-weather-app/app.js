const request = require('request');
const chalk = require('chalk');

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

/* 
In this program, weather and geocoding api is used 
*/

// const url = 'http://api.weatherstack.com/current?access_key=7650fc25b1c149afc6286a3ac8b8f830&query=Manila';
// const geo_url = 'http://api.positionstack.com/v1/forward?access_key=4f4cd5522521351c3a6442cdeea22ed2&query=Manila,Philippines';

// request({ url: url }, (error, response) => {
//     const data = JSON.parse(response.body);
//     console.log(data.current);
//     // console.log(error);
// });

// request({ url: url, json: true }, (error, response) => {
//     if(error){
//         console.log(chalk.red.inverse('Unable to connect to Weather service'));
//     }else if(response.body.error){
//         console.log(chalk.bgRed("Weather service error:" + response.body.error.info));
//     }else if(response.body.current){
//         const weather = response.body;
    
//         console.log(chalk.inverse("  " + weather.current.weather_descriptions[0] + " in " + weather.request.query));
//         console.log("It is currently " + weather.current.temperature + " degrees out but it feels like " + weather.current.feelslike + " degrees.\n" );    
//     }else{
//         console.log(chalk.bgRed("Weather service blocked or unreachable."));
//     }
// });

// request({ url: geo_url, json: true }, (error, response) => {
//     if(error){
//         console.log(chalk.red.inverse('Unable to connect to Geocoding service'));
//     }else if(response.body.error){
//         console.log(chalk.bgRed("Geocoding service error: " + response.body.error.context.query.message));
//     }else if(response.body.data){

//         const geocoding = response.body.data;
    
//         geocoding.forEach((data) => {
//             console.log(chalk.magenta.inverse("  " + data.label + "  ") + " " + data.latitude + "," + data.longitude);
//         });

//         console.log('');
//     }else{
//         console.log(chalk.bgRed("Location service blocked or unreachable."));
//     }
// });

//=========================
// Callback Abstraction
// =======================

// geocode('Manila, Philippines', (error, data) => {
//     console.log(chalk.bgMagenta('Location Service'));
//     console.log('Error ', error);
//     console.log('Data ', data, '\n');
// });

// // forecast('Taguig', (error, data) => {
// forecast('14.593819,120.992302', (error, data) => {
//     console.log(chalk.bgMagenta('Weather Service'));
//     console.log('Error', error)
//     console.log('Data', data, '\n')
// })



//=========================
// Callback Chaining
// ========================
const address = process.argv[2]; //get User Input

if (address){
    geocode(address, (error, {latitude, longitude, location} = {}) => {
        if (error){
           return console.log('Error ', error);
        } 
    
        forecast(latitude + "," + longitude, (error, forecastData) => {
            if (error) {
                return console.log('Error', error)
            }
            console.log(chalk.bgGreen("  " + location + "  "))
            console.log(forecastData, '\n')
        })
    });    
} else {
    console.log("Please provide a location to check the weather for.");
}
