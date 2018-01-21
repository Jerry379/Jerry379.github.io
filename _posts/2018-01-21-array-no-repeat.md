---
layout: articleList
title:  "js数组去重的方法"
categories: ["js"]
---

#### 字符串的Unicode表示法
- JavaScript 允许采用\uxxxx形式表示一个字符，其中xxxx表示字符的 Unicode 码点。
- 这种表示法只限于码点在\u0000~\uFFFF之间的字符。超出范围需用两个双字节的形式表示。
- \u20BB7），JavaScript 会理解成\u20BB+7。由于\u20BB是一个不可打印字符，所以只会显示一个空格，后面跟着一个7。
- ES6 对这一点做出了改进，只要将码点放入大括号，就能正确解读该字符。