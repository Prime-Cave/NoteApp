const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Customize yargz version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Body ',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
       notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note!',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//Create Read command 
yargs.command({
    command: 'read',
    describe: 'Read a note!',
    builder: {
        title:{
            describe: 'Read Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

//Create List command 
yargs.command({
    command: 'list',
    describe: 'List a note!',
    handler() {
        notes.listNotes();
    }
})

yargs.parse()