const readline = require('readline');
const fs = require('fs');
const AutoDetectDecoderStream = require('autodetect-decoder-stream');
const iconv = require('iconv-lite');

const rl = readline.createInterface({
    input: process.stdin.pipe(new AutoDetectDecoderStream()),
    output: process.stdout,
    terminal: false
})

module.exports = function (filter) {
    rl.on('line', filter);
}