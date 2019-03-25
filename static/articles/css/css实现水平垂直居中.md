# css 实现水平垂直居中

### [方法 1](https://www.zhangxinxu.com/study/200911/image-center-new-method-test.html)

css 代码

```
.zxx_ul_image{overflow:hidden; zoom:1;}
.zxx_ul_image li{float:left; width:150px; height:150px; text-align:center; line-height:150px; *font-size:125px;}
.zxx_ul_image li:after{content:' '; vertical-align:middle;}
.zxx_ul_image li img{vertical-align:middle;}
```

HTML 代码

```
<ul class="zxx_ul_image">
  <li><img src="//image.zhangxinxu.com/image/study/s/s128/mm1.jpg" /></li>
  <li><img src="//image.zhangxinxu.com/image/study/s/s128/mm2.jpg" /></li>
  <li><img src="//image.zhangxinxu.com/image/study/s/s128/mm3.jpg" /></li>
  <li><img src="//image.zhangxinxu.com/image/study/s/s128/mm4.jpg" /></li>
  <li><img src="//image.zhangxinxu.com/image/study/s/s128/mm5.jpg" /></li>
  <li><img src="//image.zhangxinxu.com/image/study/s/s128/mm6.jpg" /></li>
</ul>
```
