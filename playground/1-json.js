const fs = require('fs');

// const book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday"
// }

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.author);

// fs.writeFileSync('1-json.json', bookJSON);

//get the data from JSON
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON =  dataBuffer.toString();
const data = JSON.parse(dataJSON);

//edit the json file
data.name = "Dan";
data.age = 23;
const dataString = JSON.stringify(data);
fs.writeFileSync('1-json.json', dataString);

