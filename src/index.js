require('module-alias/register');
const { createServer } = require('node:http');
const events = require('events');

// Alias config
const sum = require('@utils/sum');

const eventEmitter = new events.EventEmitter();
eventEmitter.on('clicked', function () {
    console.log('Something is clicked!');
});

eventEmitter.on('error', (error) => {
    console.log('Error: ' + error);
});

eventEmitter.addListener('clicked', function () {
    console.log('Something is clicked!');
});

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    eventEmitter.emit('clicked');
    eventEmitter.emit('error', new Error('Error'));
    const s = sum(1, 2);
    console.log(s);
    res.end('Hello World!\n');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});
