---
layout: post
title: "设置contenteditable的非表单元素限制字数时设置光标位置"
date: 2018-03-13
description: "js"
tag: 博客
---


```
html:
<div contenteditable="true" class="gray" id="optionA">请输入选项内容</div>

js:
$("#optionA").on({	
	  input:function(e){
	    	 limited(e.target.id,30);
	    },
	    click:function(e){
	    	write($("#"+e.target.id));
	    }			
});
//字符串截取
function limited(obj,num){
	 var commentLength=$('#'+obj).text().length;
     if(commentLength>num){
        $('#'+obj).html($('#'+obj).text().substring(0,num)).attr('data-val',$('#'+obj).text().substring(0,num));
     }else{
    	 $('#'+obj).html($('#'+obj).text()).attr('data-val',$('#'+obj).text());   
     }
     set_focus(obj);
}
//光标置于文字末端
function set_focus(ele){
    var el=document.getElementById(ele);
    el.focus();
    if($.support.msie){
        var range = document.selection.createRange();
        this.last = range;
        range.moveToElementText(el);
        range.select();
        document.selection.empty(); //取消选中
    }else{
        var range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }
}
```