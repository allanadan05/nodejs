// =====================
// HTTP request without a library
// =====================

//Use the core modules below (see nodejs docs for HTTP and HTTPS):
// const https = require('https');
const http = require('http'); //we'll use this for now as the api subscription only allow for http

const url = 'http://api.weatherstack.com/current?access_key=7650fc25b1c149afc6286a3ac8b8f830&query=Manila';

const request = http.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });

    response.on('end', () => {  
        const body = JSON.parse(data);
        console.log(body);
    });

});

request.on('error', (error) => {
    console.log('Sorry an error occurred');
});

request.end();