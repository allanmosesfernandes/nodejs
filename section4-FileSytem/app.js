// import chalk from 'chalk';
const chalk = require('chalk');
const yargs = require('yargs');
const log = console.log;

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
        console.log("Adding note title", argv.title); 
        console.log("Body", argv.body); 
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