const path = require('path');

const express = require('express');
const hbs = require('hbs');

const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');


// console.log(__dirname);
// console.log(path.join(__dirname, '../public'));
// console.log(__filename);

const app = express();

//Define paths for Express config
const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views'); //if you want to customize your views directory
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handebars engine and views location
app.set('view engine', 'hbs'); // use mustache templating
app.set('views', viewsPath); //if you want to customize your views directory
hbs.registerPartials(partialsPath);

//setup static directory to server
app.use(express.static(publicPath)); // serve up static from public directory

app.get('', (req, res) => {
    // res.send();
    res.render('index', {
        title: 'Weather',
        name: 'Dan'
    });
});

app.get('/help', (req, res) => {
    // res.send({
    //     name: 'Dan',
    //     age: 27
    // });
    res.render('help', {
        title: "Help Page",
        name: 'Dan',
        message: "Message from Dan",
    });
});

app.get('/about', (req, res) => {
    // res.send('<h1>About</h1>');
    res.render('about', {
        title: "About Page",
        name: 'Dan',
        desc: "Caption here",
    });
});

//HTTP JSON Endpoint
app.get('/weather', (req, res) => {
    const address = req.query.address;

    if(!address){
        return res.send({
            error: 'You must provide an address!'
        });
    }

    geocode(address, (error, {latitude, longitude, location} = {}) => {
        if (error){
           return res.send({ error });
        } 
    
        forecast(latitude + "," + longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error });
            }

            res.send({
                forecast: forecastData,
                location,
                address
            });
        })
    }); 

});

app.get('/products', (req, res) => {
    // console.log(req.query);
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term.'
        });
    }

    res.send({
        products: []
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 404,
        name: 'Dan',
        error: 'Help article not found'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: 404,
        name: 'Dan',
        error: 'Page not found'
    });
});


app.listen(3000, () => {
    console.log('Server is up on port 3000');
});