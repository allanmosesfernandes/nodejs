// import chalk from 'chalk';
const chalk = require('chalk');
const fs = require('fs');

const log = console.log;
const getNotes = function () {
    console.log('Get notes ');
    return "Your notes..."
}

//=== Add Note ===//
const addNote = function (title, body) {
    if (title === '') {
        log(chalk.red('Title cannot be empty'));
        return;
    }
    
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => {
        return note.title.toLowerCase() === title.toLowerCase();
    });
    debugger;
    if (duplicateNotes.length > 0) {
        log(chalk.red('Note title already exists'));
        return;
    }else {
        notes.push({
            title: title,
            body: body
        });
        log(chalk.green('Note added successfully'));
    }

    saveNotes(notes);
}

//=== Remove Note ===//
const removeNote = function (title) {
    loadNotes();
    if (title === '') {
        log(chalk.red('Title cannot be empty'));
        return;
    }
    
    const notes = loadNotes();
    const updatedNotes = notes.filter((note) => {
        return note.title.toLowerCase() !== title.toLowerCase();
    });

    if (updatedNotes.length === notes.length) {
        log(chalk.red('Note title not found'));
        return;
    }else {
        saveNotes(updatedNotes);
        log(chalk.green(`Note ${title} removed successfully`));
    }
}

//=== Read Note ===//
const readNote = function (title) {
    if (title === '') {
        log(chalk.red('Title cannot be empty'));
        return;
    }

    const notes = loadNotes();
    const RetrieveNote = notes.find((note) => {
        return note.title.toLowerCase() === title.toLowerCase();
    });
    RetrieveNote === undefined ? log(chalk.red('Note not found')) : console.log('Note: ', RetrieveNote);
}

//== UTILITIES ==//
//=== Load Notes ===//
const loadNotes = () => {
    console.log('loading notes');
    try {
        // First read the file  and then parse it
        const notesStream = fs.readFileSync('./notes.json', 'utf8');
        const notesObj = JSON.parse(notesStream);
        console.log('Notes Object: ', notesObj);
        return notesObj;
    } catch (e) {
        log(chalk.red('Error: ', e.message));
        return [];
    }
}

//=== Save Note ===//
const saveNotes = (notes) => {
    const notesString = JSON.stringify(notes);
    fs.writeFileSync('./notes.json', notesString);
}   
//=== Clear Note ===//
const clearNotes = () => {
    fs.writeFileSync('./notes.json', JSON.stringify([]));
}

const listNotes = () => {
    const notes = loadNotes();
    console.log('Your notes');
    notes.forEach((note) => {
        console.log(note);
    });
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    loadNotes: loadNotes,
    clearNotes: clearNotes,
    removeNote: removeNote,
    readNote: readNote,
    listNotes: listNotes
}



// First create utility function to load notes
// Then create utility function to save notes
// Then create addNote function