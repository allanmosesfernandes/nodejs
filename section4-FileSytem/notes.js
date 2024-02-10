// import chalk from 'chalk';
const chalk = require('chalk');
const fs = require('fs');

const log = console.log;
const getNotes = function () {
    console.log('Get notes ');
    return "Your notes..."
}

const addNote = function (title, body) {
    if (title === '') {
        log(chalk.red('Title cannot be empty'));
        return;
    }
    
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => {
        return note.title.toLowerCase() === title.toLowerCase();
    });

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

const saveNotes = (notes) => {
    const notesString = JSON.stringify(notes);
    fs.writeFileSync('./notes.json', notesString);
}   

const clearNotes = () => {
    fs.writeFileSync('./notes.json', JSON.stringify([]));
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    loadNotes: loadNotes,
    clearNotes: clearNotes,
    removeNote: removeNote,
    readNote: readNote
}



// First create utility function to load notes
// Then create utility function to save notes
// Then create addNote function