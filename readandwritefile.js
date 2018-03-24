var fs = require('fs');//this module will allow us to read and write any txt file

fs.readFile('readMe.txt', 'utf8', function(err, data){
    fs.writeFile('writeMe.txt', data);
});

