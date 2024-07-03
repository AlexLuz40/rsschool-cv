const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'html-files'); // Путь к директории с HTML файлами

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    files.forEach((file) => {
        const filePath = path.join(directoryPath, file);

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return console.log('Unable to read file: ' + err);
            }

            const result = data.replace(/<(\w+)\s*\/>/g, '<$1>');

            fs.writeFile(filePath, result, 'utf8', (err) => {
                if (err) return console.log('Unable to write file: ' + err);
            });
        });
    });
});
