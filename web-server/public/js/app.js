console.log('Client side js file is loaded');

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data);
//     });
// });

// fetch('http://localhost:3000/weather?address=manila').then((response) => {
//     response.json().then(( {location, forecast, error=''} = {} ) => {
//         if(error){
//             return console.log('Error : ' + error);
//         }
//         console.log('Location : ' + location);
//         console.log('Forecast : ' + forecast);
//     });
// });

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value.trim();
    messageOne.textContent = "Loading...";
    messageTwo.textContent = '';

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then(( {location, forecast, error=''} = {} ) => {
            if(error){
                messageOne.textContent = error;
                return;
            }
            messageOne.textContent = 'Location: ' + location;
            messageTwo.textContent = 'Forecast: ' + forecast;
        });
    });
});