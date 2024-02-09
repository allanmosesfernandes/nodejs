import chalk from 'chalk';

// const getNotes = require('./notes.js')
import validator from 'validator';

const log = console.log;
// const print = getNotes();
const checkEmail = (email) => {
    return validator.isEmail(email);
};    

const message = 'Allan moses Fernandes 1997';
log(chalk.red(message));
// const fs = require('fs')
// 
// fs.writeFileSync('hello.text', 'This file was edited by Node.js!')
// 
// // Challenge
// fs.appendFileSync('hello.text', '\nThis text will be appended on a new line!');
// 
// // 1.Use appendFileSync to append to the file 