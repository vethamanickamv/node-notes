// const fs = require('fs');

// fs.writeFileSync('notes.txt', 'This file is created as part of nodejs cource');
// fs.appendFileSync('notes.txt', 'This is from append sync file api')
// fs.writeFile('notes-async.txt', 'This file is created as part of node js cource and using async', (err) => {
//     if(!err) {
//         return;
//     }
//     console.log(err);
// });

// const validator = require('validator');
// const chalk = require('chalk');
// const utils = require('./utils.js');
// const getNotes = require('./notes.js');

// //console.log(getNotes());
// console.log(validator.isEmail('vethamanickam@live.com'))
// console.log(validator.isEmail('vethamanickam@live'))
// console.log(validator.isURL('https://google.com'))
// console.log(validator.isURL('https//google.com'))

// console.log(chalk.green('Success'));

// console.log(process.argv);

const chalk = require('chalk');
const yargs = require('yargs');
const note = require('./notes.js');


//Add command
yargs.command({
    command:'add',
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
    handler(argv) {
        console.log(`Title: ${argv.title}, Description: ${argv.desc}`);
        console.log('Body: ', argv.body);
        note.add(argv.title, argv.body);
    }
});

//Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log('Calling Remove note..');
        note.remove(argv.title);
    }
});

//List command
yargs.command({
    command:'list',
    describe: 'List all the notes',
    handler() {
        console.log('Listing all the notes...');
        note.list();
    }
});

//Read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        console.log('Reading a note...');
        note.read(argv.title);
    }
})
yargs.parse();
// console.log(yargs.argv);