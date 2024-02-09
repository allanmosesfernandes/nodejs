
// const getNotes = require('./notes.js')
import validator from 'validator';

// const print = getNotes();
const checkEmail = (email) => {
    return validator.isEmail(email);
};    
console.log(checkEmail('allan.fernandes@responsiblelife.co.uk'))
// const fs = require('fs')
// 
// fs.writeFileSync('hello.text', 'This file was edited by Node.js!')
// 
// // Challenge
// fs.appendFileSync('hello.text', '\nThis text will be appended on a new line!');
// 
// // 1.Use appendFileSync to append to the file