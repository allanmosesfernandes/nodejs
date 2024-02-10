// import chalk from 'chalk';
const chalk = require('chalk');
const yargs = require('yargs');
const log = console.log;
const fs = require('fs');
// const message = 'Allan moses Fernandes 1997';
// console.log(process.argv);

// const input = process.argv[2];

// input === 'add' ? log(chalk.green('Adding note!')) : log(chalk.red('Please enter a valid command'));


// console.log(chalk.blue(process.argv));


//Create add command 

// console.log(chalk.blue(process.argv));
// console.log(chalk.green(JSON.stringify(yargs.argv)));

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        fs.appendFileSync('./notes.txt', 'Title: ' + argv.title + ' Body: ' + argv.body + '\n');
        const fileContent = fs.readFileSync('./notes.txt', 'utf8');
        console.log(fileContent);
    }
})

yargs.command({
    command: 'sub',
    describe: 'Removing a note',
    handler: function () {
        console.log('Removing new note') 
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler: function () {
        console.log('Listing all notes.') 
    }
})

yargs.command({
    command: 'read',
    describe: 'Reading a notes',
    handler: function () {
        console.log('Reading a notes.') 
    }
})

yargs.parse();