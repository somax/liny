#!/usr/bin/env node
const rl = require('./lib/readline');
const filterName = process.argv[2];

if (!filterName){
    console.log('未指定过滤器，请查看 README.md');
    process.exit(1);
};


let filter;
try {
    filter = require(`./filters/${filterName}`);
} catch (error) {
    console.log(`过滤器 "${filterName}" 未能成功加载`);
    process.exit(1);
}

console.log(filter.toString());

rl(filter);

