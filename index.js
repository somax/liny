const rl = require('./lib/readline');
const filterName = process.argv[2];
if (!filterName) throw Error('未指定过滤器，请查看 README.md');
const filter = require(`./filters/${filterName}`);

rl(filter);