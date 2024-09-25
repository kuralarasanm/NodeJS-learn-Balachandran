// const fs = require('fs');
// const path = require('path');


// fs.readFile(path.join(__dirname, 'files', 'start.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//     // console.log(data.toString());

// });
// fs.writeFile(path.join(__dirname, 'files', 'subscribe.txt'), 'hello world', (err,) => {
//     if (err) throw err;
//     console.log('write file successfully');
//     fs.appendFile(path.join(__dirname, 'files', 'subscribe.txt'), '\n\n hello world node js', (err,) => {
//         if (err) throw err;
//         console.log('append file successfully');
//         fs.rename(path.join(__dirname, 'files', 'subscribe.txt'), path.join(__dirname, 'files', 'hello.txt'), (err,) => {
//             if (err) throw err;
//             console.log('rename file successfully');

//         });
//     });
// });


// console.log("hi node js server log ");


//exit on uncaught errors

// process.on('uncaughtException', (err) => {
//     console.error(`there was an uncaught error: ${err}`);
//     process.exit(1);
// });

// ----------------------------------------------------------------------------------------------------------------

const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'read.txt'), 'utf8');
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname, 'files', 'write.txt'), 'hello world')
        console.log('write file successfully');
        await fsPromises.appendFile(path.join(__dirname, 'files', 'write.txt'), '\n\n hello world node js')
        console.log('append file successfully create or update file');
        await fsPromises.rename(path.join(__dirname, 'files', 'write.txt'), path.join(__dirname, 'files', 'rename.txt'))
        console.log('rename file successfully');
        await fsPromises.writeFile(path.join(__dirname, 'files', 'write1.txt'), 'hello world1')
        console.log('write file successfully');
        await fsPromises.unlink(path.join(__dirname, 'files', 'write1.txt'))
        console.log('delete file successfully');
    } catch (err) {
        console.error(err);

    }
}

fileOps();

// exit on uncaught errors

process.on('uncaughtException', (err) => {
    console.error(`there was an uncaught error: ${err}`);
    process.exit(1);
});