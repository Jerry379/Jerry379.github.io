<template>
<div>
  <ul class="blogList">
    <router-link tag="li" to="/blog" class="blog-item" v-for="blog in blogListData" :key="blog.id">
      <h2 class="blog-item-header">{{blog.title}}</h2>
      <div class="blog-item-content">{{blog.content}}</div>
      <div class="blog-item-time">{{blog.time}}</div>
    </router-link>
  </ul>
</div>
</template>

<script>
export default {
  name: 'blog-list',
  data () {
    return {
      blogListData: [
        {
          id: 1,
          title: 'Safari 书签显示自定义图片',
          content: '使用safari浏览器时想要快速进入一个常用网站的话就要添加书签，Safari内置的书签例如：微博，百度都有公司默认的logo,如果让用户添加书签时显示的是自己网站的LOGO的话，是不是逼格很高啊。下面就来介绍如何给自己的网站的书签添加自定义logo的方法。方法：添加方法其实很简单，就是讲下面的代码放在html页面的head标签中，其中/custom.png就是你logo图片的名字',
          time: '2019-03-21'
        }
      ]
    }
  }
}
</script>

<style scoped>
.blogList{
  width: 70%;
  padding: 50px 20px;
  background: #fff;
  margin: 2rem auto;
  min-height: 70%;
  box-shadow: #d0d0d0 0 0 9px;
}
.blog-item{
  box-shadow: 4px 4px 4px #efefef, -4px -4px 4px #efefef, 4px -4px 4px #efefef, -4px 4px 4px #efefef;
  padding-bottom: 10px;
  margin-bottom: 26px;
}
.blog-item:hover{
  box-shadow: 4px 4px 4px #c9e1f6, -4px -4px 4px #c9e1f6, 4px -4px 4px #c9e1f6, -4px 4px 4px #c9e1f6;
}
.blog-item-header{
  margin:5px 0;
  color: #537791;
  font-weight: 200;
  font-size: 1.4em;
  padding-left: 5px;
}
.blog-item-content{
  font-size: 1em;
  padding-left: 10px;
  border-left: 2px solid #32D3C3;
}
.blog-item-time{
  color: #a7a7a7;
  font-size: 0.6em;
  padding-left: 10px;
  margin-top: 5px;
}
</style>
