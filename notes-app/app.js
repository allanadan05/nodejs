//npm packages
// const validator = require('validator'); 
const chalk = require('chalk'); 
const yargs = require('yargs'); 

//local modules
const notes = require('./notes.js');

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true, //required
            type: 'string' //accepts string
        },
        body:{
            describe: 'Note body',
            demandOption: true, //required
            type: 'string' //accepts string
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true, //required
            type: 'string' //accepts string
        }
    }, 
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

//create list command
yargs.command({
    command: 'list',
    describe: 'Show all notes',
    handler() {
        notes.listNotes();
    }
});

//create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});

yargs.parse() //parses all arguments