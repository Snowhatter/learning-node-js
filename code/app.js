const validator = require('validator')
// const addthings = require('./utils.js')
// const firstname = require('./utils.js')
const takeNotes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

// const name = 'Arjun'
// const sum = addthings(2,4)
const note = takeNotes()

console.log(note)
console.log(validator.isURL('monkey'))

msg = chalk.italic('Success!')

console.log(msg)

console.log(chalk.blue.bold('Hello world!'));

console.log(process.argv)

// command = process.argv[2]

// if (command === 'add'){
//     console.log('Adding note!')
// } else if (command == 'remove'){
//     console.log('Removing note!')
// }

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    handler:function(){
        console.log('Adding a new note')
    }
})

// Create a remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler:function(){
        console.log('Removing a note')
    }
})


// Create a read command
yargs.command({
    command:'read',
    describe:'Read a note',
    handler:function(){
        console.log('Read a note')
    }
})


// Create a list command
yargs.command({
    command:'list',
    describe:'List a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type:'string'
        }
    },
    handler:function(argv){
        console.log('Listing a note!', argv)
    }
})

yargs.parse()
//console.log(yargs.argv)