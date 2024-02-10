const fs = require('fs');
// 
// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }
// // This is a JSON object
// const bookJSON = JSON.stringify(book);
// const parsedData = JSON.parse(bookJSON);
// 
// // Write this to a file
// 
// // fs.writeFileSync('1-json.json', bookJSON);
// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// 
// 
// // const dataBuffer = fs.readFileSync('1-json.json', 'utf8');
// // const dataJSON = dataBuffer.toString();
// console.log(dataBuffer);


// Load the data from the file
const dataString = fs.readFileSync('test.json', 'utf8');

// Parse the data
const data = JSON.parse(dataString);

console.log(data.name);

