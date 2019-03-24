 
 HTTP请求结构

```
<method> <request-URL> <version>
<headers>

<entity-body>
```

post提交数据的方案包含了content-type和消息主体编码的两个部分

#### application/x-www-form-urlencoded
浏览器原生支持
```

```
#### multipart/form-data
生成boundary
在消息主体按照字段个数分为多个boundary

更详细的定义可以懒rfc1867
一般用来上传文件
浏览器原生支持


#### application/json
方便


#### text/xml
早期的方式