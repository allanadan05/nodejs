const request = require('request');

//=========================
// Callback Abstraction
// =======================

const geocode = (address, callback) => {
    const geo_url = 'http://api.positionstack.com/v1/forward?access_key=4f4cd5522521351c3a6442cdeea22ed2&query='+ encodeURIComponent(address) ;

    request({ url: geo_url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined);
        } else if (response.body.error) {
            callback("Unable to find location. " + response.body.error.context.query.message, undefined);
        }else if(response.body.data.length >= 1){
            callback(undefined, {
                latitude: response.body.data[0].latitude,
                longitude: response.body.data[0].longitude,
                location: response.body.data[0].label
            }); 
        }else if(response.body.data.length === 0){
            callback('Unable to find location. Try another search.', undefined);
        }else{
            callback('Location service blocked or unreachable.', undefined);
        }
    });
}

module.exports = geocode;