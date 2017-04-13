# Liny

使用自定义过滤器，对文本按行进行处理的工具，支自动编码转换。

## Usage

```bash
node . filter-demo  < data/demo.txt > output.txt
```

## Add filter

在 filters 目录中添加新的过滤器 `./filters/filter-new.js`

```js
module.exports = function (line) {
    if (/^[0-9]+,/.test(line)) {
        console.log(line);
    }
}
```

```bash
node . filter-new  < data/demo.txt > output.txt
```

## Test filter

```bash
echo '234,abcd\n345,efg\nhijk' | node . filter-demo
```