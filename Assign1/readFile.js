const fs = require('fs');

fs.readFile('crypto.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error to read the file:', err);
        return;
    }
    console.log('Content:\n', data);
});
