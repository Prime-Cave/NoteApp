const fs = require('fs')
const chalk = require('chalk')

//Add Note Function
const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title)

    if(!duplicateNote){
            notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New Note Added!'))
    } else {
        console.log(chalk.red.inverse('Note Title Taken!'))
    }
    
}

//Save Note Function
const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

//Load note function
const loadNotes = () =>{
    try{
       const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
}

//Remove Note Function

const removeNote = (title) =>{
    const notes = loadNotes()
    const notesToKeep = notes.filter(note => note.title !== title)
    
    if (notesToKeep.length === notes.length){
        console.log(chalk.red.inverse('No Note Removed!'))
    } else {
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Note Removed!'))
    }
}

// Listing Function

const listNotes = () =>{
    console.log(chalk.blue('Your Notes....'));
    const notes = loadNotes();
    notes.forEach(note => console.log(note.title) );
}

// Read Note Function
 const readNote = (title) => {
    const notes = loadNotes();
    const Finder = notes.find(note => note.title === title)
    
    if(!Finder){
        console.log(chalk.red.inverse('Note Not Found'));
    } else {
        console.log(chalk.green.bold.inverse(Finder.title));
        console.log(Finder.body)
    }
 }


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}