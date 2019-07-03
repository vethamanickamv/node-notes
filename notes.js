// const fs = require('fs');
// const chalk = require('chalk');

// const getNotes = () => {
//     return 'Your notes...'
// }

// const loadNotes = () => {
//     try {
//         const dataBuffer = fs.readFileSync('notes.json');
//         const dataJSON = dataBuffer.toString();
//         return JSON.parse(dataJSON);
//     } catch(e) {
//         return [];
//     }
    
// }

// const saveNotes = (notes) => {
//     const dataJSON = JSON.stringify(notes);
//     fs.writeFileSync('notes.json' ,dataJSON);
// }

// const addNote = (title, body) => {
//     const notes = loadNotes();
//     const duplicateNotes = notes.filter(note => note.title === title);

//     if (duplicateNotes.length === 0){
//         notes.push({title: title, body: body});
//         saveNotes(notes);
//         console.log('New note is added');
//     } else {
//         console.log('Note title taken');
//     }
    
// }

// const removeNote = (title) => {
//     const notes = loadNotes();

//     const note = notes.find(n => n.title === title);
//     if(note) {
//         const filteredNotes = notes.filter(n => n.title !== title);
//         saveNotes(filteredNotes);
//         console.log(chalk.green.inverse('Removed note: ', note.title));
//     } else {
//         console.log(chalk.red.inverse('Title not found'));
//     }
    
    
// }
// module.exports = {getNotes: getNotes, add: addNote, remove: removeNote };

const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return 'Your notes...'
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e) {
        return [];
    }
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json' ,dataJSON);
}

const addNote = (title, body) => {
    debugger;
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title);
    if (!duplicateNote){
        notes.push({title: title, body: body});
        saveNotes(notes);
        console.log('New note is added');
    } else {
        console.log('Note title taken');
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes();

    const note = notes.find(n => n.title === title);
    if(note) {
        const filteredNotes = notes.filter(n => n.title !== title);
        saveNotes(filteredNotes);
        console.log(chalk.green.inverse('Removed note: ', note.title));
    } else {
        console.log(chalk.red.inverse('Title not found'));
    }
    
    
}

const listNotes = () => {
    const notes = loadNotes();
    console.log('Your notes...');
    notes.forEach(note => console.log(note.title));
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(n => n.title === title);
    if (note) {
        console.log(chalk.green(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse('Note not found'));
    }
}

module.exports = {
    getNotes: getNotes, 
    add: addNote, 
    remove: removeNote, 
    read: readNote,
    list: listNotes 
};