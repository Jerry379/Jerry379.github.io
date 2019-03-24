# file对象、Data url和Blob对象之间的相互转换

最近要实现一个图片压缩上传的功能，由于后台接收文件是以二进制的形式接收的，而前端压缩后的图片是`base64`格式的`DataURL`形式，所以就要解决这两种形式之间的相互转换。

`file`对象主要来源于以下几种方式
- `input`元素选择文件返回的`filelist`对象
- 拖放操作生成的`DataTransfer`对象
- `canvas`元素的`mozGetAsFile()` 方法



### file对象 => Data URL
这样的转换需要借助`fileReader`对象，它可以异步的读取用户计算机中的文件，接收`file`对象或`Blob`对象
```
<input type="file" name="file" id="file" value="" />
<script type="text/javascript">
document.getElementById('file').addEventListener('change',function(e){
	var reader  = new FileReader();
	if(this.files[0]){
		reader.readAsDataURL(this.files[0]);//将文件读取为data:URL格式的字符串
//		reader.readAsArrayBuffer(this.files[0]);//将文件读取为ArrayBuffer数据对象
//		reader.readAsBinaryString(this.files[0]);//将文件读取为原始的二进制数据
//		reader.readAsText(this.files[0]);//将文件读取为一个字符串来表示文件的内容
		reader.onload = function(e){
	        console.log(e.target.result);//target.result 该属性表示目标对象的DataURL
	    }
	}
},false)
</script>
```
### file对象 => Blob对象
由于`File`对象继承了`Blob`对象,所以`file`对象本身就是`Blob`对象
```
file instanceof Blob //true
```
如果一定要将`file`对象转化为`blob`对象的话,根据`Blob`的构造函数
```
var aBlob = new Blob( array[, options]);
```
- `array`是由`ArrayBuffer`, `ArrayBufferView`, `Blob`, `DOMString` 等对象构成的数组
- `options`包含两个属性：`type`默认为‘’,指的是内容的`MIME`类型，`endings`，默认为`"transparent"`代表会保持`blob`中保存的结束符不变，也可以为`"native"`代表行结束符会被更改为适合宿主操作系统文件系统的换行符
### Data url => file对象
```
let base64 = e.target.result;
let arr = base64.split(',')
let data = window.atob(arr[1])
let mime = arr[0].match(/:(.*?);/)[1]
let ia = new Uint8Array(data.length)
for (var i = 0; i < data.length; i++) {
  ia[i] = data.charCodeAt(i)
}
let blob = new Blob([ia], {type: mime});
```
### Data url => Blob对象
```
/**
 * 将以base64的图片url数据转换为Blob
 * @param urlData
 *        用url方式表示的base64图片数据
 */
function convertBase64UrlToBlob(urlData){
    var arr = urlData.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
}
```
### Blob对象 => file对象
根据`file`对象的构造函数
```
var myFile = new File(bits, name[, options]);
```
其中：
- `bits` 是一个数组，其中的元素可以为`ArrayBuffer`,`ArrayBufferView`,`Blob`或者`DOMString`中的一种或者几种
- `name` 表示文件名称或者文件路径
- `options` 包含文件的可选属性，可用的选项有`type`(文件类型)和`lastModified`(文件最后修改时间)所以，我们可以这样来实现上面的转换方式：
```
let file = new File([blob], file.name, {type: file.type})；
```
### Blob对象 => Data Url
同样适用`FileReader`对象来实现：
```
let reader = new FileReader();
reader.addEventListener("loadend", function(e) {
   let blobToDataURL = e.target.result;//blob转为DataURL
});
reader.readAsDataURL(blob);
```

### 参考链接
[File][1]
[Data URLs][2]
[Base64 encoding and decoding][3]


  [1]: https://developer.mozilla.org/zh-CN/docs/Web/API/File
  [2]: https://developer.mozilla.org/zh-CN/docs/Web/HTTP/data_URIs
  [3]: https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding