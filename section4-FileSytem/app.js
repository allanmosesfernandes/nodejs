// import chalk from 'chalk';
const chalk = require('chalk');
const yargs = require('yargs');
const log = console.log;
const fs = require('fs');
const notes = require('./notes.js');

//=== Add Note ===//
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
    handler (argv) {
        notes.addNote(argv.title, argv.body);
    }
})

//=== Remove Note ===//
yargs.command({
    command: 'delete',
    describe: 'Deleting a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
      notes.removeNote(argv.title);
    }
})

//=== List Note ===//
yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler () {
        console.log('Listing all notes.') 
    }
})

//=== Read Note ===//
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})

//=== Clear Note ===//
yargs.command({
    command: 'clear',
    describe: 'Clearing all notes',
    handler () {
        notes.clearNotes();
        log(chalk.blue('Clearing all notes.')); 
    }
})

yargs.parse();