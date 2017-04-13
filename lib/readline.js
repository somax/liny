var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false  //这个参数很重要
});


module.exports = function (filter){
    rl.on('line', filter);
}