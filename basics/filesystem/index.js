const fs = require("fs");
const path = require('path');

fs.readFile(path.join(__dirname, 'text.txt'), 'UTF-8', (error, data) => {
    if (error) {
        console.log(error);
        console.log("Gagal mengakses data!");
        return;
    }

    console.log(data);
});