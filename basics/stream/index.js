const fs = require('fs');
const path = require('path');

const readableStream = fs.createReadStream(path.join(__dirname, 'input.txt'), {
    highWaterMark: 15
});

const writableStream = fs.createWriteStream(path.join(__dirname, 'output.txt'));

readableStream.on('readable', () => {
    try {
        writableStream.write(`${readableStream.read()}\n`);
    } catch (error) {
        console.log(error);
    }
});


readableStream.on('end', () => {
    writableStream.end();
    console.log('Done');
});