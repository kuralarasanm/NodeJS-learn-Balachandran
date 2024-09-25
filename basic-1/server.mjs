
import { readFile } from 'node:fs';
import process from 'node:process';
readFile('./files/start.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    // console.log(data.toString());

});


//exit on uncaught errors

process.on('uncaughtException', (err) => {
    console.error(`there was an uncaught error: ${err}`);
    process.exit(1);
});