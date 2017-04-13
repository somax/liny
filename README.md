# Liny

使用自定义过滤器，对文本按行进行处理的工具，支持自动编码转换成 `UTF-8` 输出。

## Install

```bash
npm i -g liny
```

## Usage

### demo

```bash
echo 'line1\nline2' | liny filter-demo
```

## Custom filter

新建自定义过滤器： `./my-filter.js`

```js
module.exports = function (line) {
    if (/^[0-9]+,/.test(line)) {
        console.log(line);
    }
}
```

```bash
liny ./my-filter  < in.csv > out.csv
```