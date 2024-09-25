
// const http = require('http');
// const PORT = 3000;

// const server = http.createServer((req, res) => {
//     res.write('hello world');
//     res.end();
// })

// server.listen(PORT,(error)=>{
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(`server is running on port + ${PORT}`);
//     }
// })

// ------------------------------------------------------------------

const http = require('http');
const PORT = 3000;
const fs = require('fs')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    fs.readFile('index.html', (error, data) => {
        if (error) {
            console.log(error);
            res.writeHead(404);
            res.write('page not found');
        } else {
            res.write(data);
        }
    })
    // res.write('hello world');
    res.end();
})

server.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`server is running on port + ${PORT}`);
    }
})