### css 实现文字包围图片的效果

```
//css部分
    #content{
        width:400px;
        clear:both;
    }
    #content p{
        text-indent:2em;
    }
    #content  img{
        width:100px;
        float:right;
        clear: both;
    }
//页面部分
<div id="content">
     <img src="22.jpg">
     <p>前端前端前端前端前端前端前端</p><p>端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前</p>
</div>
```
