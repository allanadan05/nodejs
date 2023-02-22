const request = require('request');

//=========================
// Callback Abstraction
// =======================

const geocode = (address, callback) => {
    const geo_url = 'http://api.positionstack.com/v1/forward?access_key=4f4cd5522521351c3a6442cdeea22ed2&query='+ encodeURIComponent(address) ;

    request({ url: geo_url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined);
        } else if (body.error) {
            callback("Unable to find location. " + body.error.context.query.message, undefined);
        }else if(body.data.length >= 1){
            callback(undefined, {
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude,
                location: body.data[0].label
            }); 
        }else if(body.data.length === 0){
            callback('Unable to find location. Try another search.', undefined);
        }else{
            callback('Location service blocked or unreachable.', undefined);
        }
    });
}

module.exports = geocode;