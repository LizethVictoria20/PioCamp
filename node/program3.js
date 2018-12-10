var fs = require('fs');
var read = fs.readdir(process.argv[2], 'utf8', callback)

function callback(error, file){
  if (error){
    console.log(error);
    return
  }


}