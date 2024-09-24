const fs = require('fs');  
const http = require('http');
//file
// blocking sync way
// const textIn = fs.readFileSync('./1-node-farm/starter/txt/input.txt', 'utf8');
// console.log(textIn);
// const textOut = `This is what we know about the avocado : ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./1-node-farm/starter/txt/output.txt', textOut);
// console.log('File written');

//non-blocking ascy way
// fs.readFile('./1-node-farm/starter/txt/start.txt', 'utf-8', (err, data1) => {
//     fs.readFile(`./1-node-farm/starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile('./1-node-farm/starter/txt/append.txt', 'utf-8', (err, data3) => {
//             console.log(data3);
//             fs.writeFile('./1-node-farm/starter/txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log('Your text is written to output 😇');
//             })
//         });
//     });
// });
// console.log('Will read this first');

/////server
const server = http.createServer((req, res) => {
    console.log(req);
    res.end('Hello from the server!');
});
server.listen(8000, '127.0.0.1', () => {
    console.log('listening from the server!');
})
