const fs = require('fs')

if (!fs.existsSync('./new')) {
    fs.mkdir('./new', (err) => {
        if (err) throw err
        console.log('directory created successfully');

    })
}
if (fs.existsSync('./new')) {
    fs.rmdir('./new', (err) => {
        if (err) throw err
        console.log('directory removed successfully');

    })
}
if (!fs.existsSync('./new')) {
    fs.mkdir('./new', (err) => {
        if (err) throw err
        console.log('directory created successfully');

    })
}
// exit on uncaught errors

process.on('uncaughtException', (err) => {
    console.error(`there was an uncaught error: ${err}`);
    process.exit(1);
}); 