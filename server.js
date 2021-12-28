const fs = require('fs');

const writeAppend = function () {
    console.log('Writing and appending to file');
    fs.writeFileSync('notepad.txt', 'I am a Full-stack JS developer.');
    fs.appendFileSync('notepad.txt', ' I am also a trainer');
}

module.exports = writeAppend