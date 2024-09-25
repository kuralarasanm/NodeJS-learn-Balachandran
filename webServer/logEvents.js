// npm i nodemon -g
// nodemon -v  
// nodemon 

// console.log("testing");
// console.log("hello nodejs server");
// ----------------------------------------------------
// npm init - package.json files download


const { format } = require('date-fns')
const { v4: uuid } = require('uuid')

console.log(format(new Date(), 'yyyy-MM-dd\tHH:mm:ss'));
console.log(uuid());

const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

const logEvents = async (message) => {
    const time = format(new Date(), 'yyyy-MM-dd\tHH:mm:ss')
    const logItem = `${time}\t${uuid()}\t${message}\n`
    console.log(logItem)
    try {
        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'event.txt'), logItem)
    } catch (err) {
        console.error(err)
    }
}

module.exports = logEvents
