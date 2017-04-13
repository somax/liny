var iconv = require('iconv-lite');
module.exports = function(line){
        if(/^[0-9]+,/.test(line)){
            console.log(line); 
        }
    }