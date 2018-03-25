//create and delete folder in a A-Sync method

var fs = require('fs');

fs.mkdir('stuff', function () {
    fs.readFile('readMe.txt', 'utf8', function (err, data) {
        fs.writeFile('./stuff/writeMe.txt', data);
    });
});

//now to delete the folder and the file in it
fs.unlink('./stuff/writeMe.txt', function()
{
    fs.rmdir('stuff');
})
