const validator = require('validator')
// const addthings = require('./utils.js')
// const firstname = require('./utils.js')
const takeNotes = require('./notes.js')
const chalk = require('chalk')

// const name = 'Arjun'
// const sum = addthings(2,4)
const note = takeNotes()

console.log(note)
console.log(validator.isURL('monkey'))

msg = chalk.bold.green('Success!')

console.log(msg)