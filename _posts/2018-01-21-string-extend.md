---
layout: articleDetail
title:  "字符串扩展"
categories: ["ECMAScript6"]
---

字符串的Unicode表示法

1. 字符串的Unicode表示法
2. codePonitAt()
3. String.formCodePoint()
4. 字符串的遍历器接口
5. at()
6. normalize()
7. includes(),startsWith(),endsWith()
8. repeat()
9. padStart(),padEnd()
10. 模板字符串
11. 实例：模板编译
12. 标签模板
13. String.raw()
14. 模板字符串的限制


#### 字符串的Unicode表示法
- JavaScript 允许采用\uxxxx形式表示一个字符，其中xxxx表示字符的 Unicode 码点。
- 这种表示法只限于码点在\u0000~\uFFFF之间的字符。超出范围需用两个双字节的形式表示。
- \u20BB7），JavaScript 会理解成\u20BB+7。由于\u20BB是一个不可打印字符，所以只会显示一个空格，后面跟着一个7。
- ES6 对这一点做出了改进，只要将码点放入大括号，就能正确解读该字符。

```
"\u0061"
// "a"

"\uD842\uDFB7"
// "𠮷"
```
- ES6 对这一点做出了改进，只要将码点放入大括号，就能正确解读该字符。
- 大括号表示法与四字节的 UTF-16 编码是等价的。

```
"\u{20BB7}"
// "𠮷"

"\u{41}\u{42}\u{43}"
// "ABC"

let hello = 123;
hell\u{6F} // 123

'\u{1F680}' === '\uD83D\uDE80'
// true

'\z' === 'z'  // true
'\172' === 'z' // true
'\x7A' === 'z' // true
'\u007A' === 'z' // true
'\u{7A}' === 'z' // true
```
#### codePointAt()
JavaScript 内部，字符以 UTF-16 的格式储存，每个字符固定为2个字节。对于那些需要4个字节储存的字符（Unicode 码点大于0xFFFF的字符），JavaScript 会认为它们是两个字符。

ES6 提供了codePointAt方法，能够正确处理4个字节储存的字符，返回一个字符的码点。

```
var s = "𠮷";

s.length // 2
s.charAt(0) // ''
s.charAt(1) // ''
s.charCodeAt(0) // 55362
s.charCodeAt(1) // 57271

let s = '𠮷a';
s.codePointAt(0) // 134071
s.codePointAt(1) // 57271
s.codePointAt(2) // 97
```


#### 字符串的遍历接口
- 字符串可以被for...of循环遍历
```
for(let condePoint of "foo"){
    console.log(codePoint);
}

```
#### at()
ES5 对字符串对象提供charAt方法，返回字符串给定位置的字符。该方法不能识别码点大于0xFFFF的字符。

```
'abc'.charAt(0) // "a"
'𠮷'.charAt(0) // "\uD842"
```
目前，有一个提案，提出字符串实例的at方法，可以识别 Unicode 编号大于0xFFFF的字符，返回正确的字符。

```
'abc'.at(0) // "a"
'𠮷'.at(0) // "𠮷"
```
#### normalize()
ES6 提供字符串实例的normalize()方法，用来将字符的不同表示方法统一为同样的形式，这称为 Unicode 正规化。

#### includes(),startsWith(),endsWith()
- includes():返回布尔值，表示是否找到了参数字符串
- startsWith():返回布尔值，表示参数字符串是否在原字符串的头部
- endsWith():返回布尔值，表示参数字符串是否在原字符串的尾部
这三个方法都支持第二个参数，表示开始搜索的位置。

```
let s = 'Hello world!';
s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true

let s = 'Hello world!';
s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false
```
#### repeat()
- repeat方法返回一个新字符串，表示将原字符串重复n次。
- 参数如果是小数，会被取整。
- 如果repeat的参数是负数或者Infinity，会报错。如果参数是 0 到-1 之间的小数，则等同于 0，这是因为会先进行取整运算。0 到-1 之间的小数，取整以后等于-0，repeat视同为 0。
- 参数NaN等同于 0。
- 如果repeat的参数是字符串，则会先转换成数字。

```
'x'.repeat(3) // "xxx"
'hello'.repeat(2) // "hellohello"
'na'.repeat(0) // ""
'na'.repeat(2.9) // "nana"
'na'.repeat(Infinity)
// RangeError
'na'.repeat(-1)
// RangeError
'na'.repeat(-0.9) // ""
'na'.repeat(NaN) // ""
'na'.repeat('na') // ""
'na'.repeat('3') // "nanana"
```
#### padStart(),padEnd()
ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。padStart和padEnd一共接受两个参数，第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串。

```
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'
'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'
'xxx'.padStart(2, 'ab') // 'xxx'
'xxx'.padEnd(2, 'ab') // 'xxx'
'abc'.padStart(10, '0123456789')
// '0123456abc'
'x'.padStart(4) // '   x'
'x'.padEnd(4) // 'x   '
'12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
'09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"
```
- 如果原字符串的长度，等于或大于指定的最小长度，则返回原字符串。
- 如果用来补全的字符串与原字符串，两者的长度之和超过了指定的最小长度，则会截去超出位数的补全字符串。
- 如果省略第二个参数，默认使用空格补全长度。
- padStart的常见用途是为数值补全指定位数。下面代码生成 10 位的数值字符串。
- 另一个用途是提示字符串格式。

### 模板字符串
传统的 JavaScript 语言，输出模板通常是这样写的。

```
$('#result').append(
  'There are <b>' + basket.count + '</b> ' +
  'items in your basket, ' +
  '<em>' + basket.onSale +
  '</em> are on sale!'
);
```
ES6 引入了模板字符串解决这个问题。
- 用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
- 如果在模板字符串中需要使用反引号，则前面要用反斜杠转义。
- 如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中。如果你不想要这个换行，可以使用trim方法消除它。
- 模板字符串中嵌入变量，需要将变量名写在${}之中。
- 大括号内部可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性。
- 模板字符串之中还能调用函数。
```
$('#result').append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);

let greeting = `\`Yo\` World!`;

$('#list').html(`
<ul>
  <li>first</li>
  <li>second</li>
</ul>
`);

$('#list').html(`
<ul>
  <li>first</li>
  <li>second</li>
</ul>
`.trim());

let x = 1;
let y = 2;

`${x} + ${y} = ${x + y}`
// "1 + 2 = 3"

`${x} + ${y * 2} = ${x + y * 2}`
// "1 + 4 = 5"

let obj = {x: 1, y: 2};
`${obj.x + obj.y}`
// "3"

function fn() {
  return "Hello World";
}

`foo ${fn()} bar`
// foo Hello World bar
```
### 实例：模板编译

### 标签模板

```
alert`123`
// 等同于
alert(123)
```

```
let a = 5;
let b = 10;

tag`Hello ${ a + b } world ${ a * b }`;
// 等同于
tag(['Hello ', ' world ', ''], 15, 50);
```
上面代码中，模板字符串前面有一个标识名tag，它是一个函数。整个表达式的返回值，就是tag函数处理模板字符串后的返回值。

函数tag依次会接收到多个参数。

```
function tag(stringArr, value1, value2){
  // ...
}

// 等同于

function tag(stringArr, ...values){
  // ...
}
```
