<template>
  <div class="nav">
    <div class="header">
      <img src="" alt="">
    </div>
    <ul class="router">
      <li v-for="router in routers" :key="router.router" :class="{active: router.isActive}" @click="activeROuter(router)">
        <router-link :class="{active: router.isActive}" :to="router.router">{{router.name}}</router-link>
      </li>
    </ul>
    <div class="cover"></div>
  </div>
</template>

<script>
export default {
  name: 'nav-left',
  data () {
    return {
      routers: [
        {name: '博客', isActive: true, router: '/blog'},
        {name: '文档', isActive: false, router: '/docs'},
        {name: '关于', isActive: false, router: '/about'}
      ]
    }
  },
  methods: {
    activeROuter: function (data) {
      this.$data.routers.forEach(function (ele, i) {
        ele.isActive = false
      })
      data.isActive = true
    }
  }
}
</script>

<style scoped>
  .nav{
    position: relative;
    width: 15%;
    height: 100%;
    z-index: 1;
    background: url("../../static/background-cover.jpg") top left no-repeat #666666;
    background-size: cover;
    color: #999;
    moz-user-select: -moz-none;
    -moz-user-select: none;
    -o-user-select:none;
    -khtml-user-select:none;
    -webkit-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }
  .header{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #999;
    overflow: hidden;
    margin: 70px auto 38px;
  }
  .router{
    height: 50px;
  }
  .router li{
    box-sizing: border-box;
    border-right: 4px solid transparent;
  }
  .router li.active{
    border-right-color: #32D3C3;
  }
  .router a{
    display: block;
    color: #999;
    line-height: 50px;
    text-align: center;
  }
  .router a.active{
    color: #32D3C3;
  }
  .cover{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: rgba(68, 68, 68, 0.6);
    background-image: -webkit-linear-gradient(-410deg, rgba(68, 68, 68, 0.6) 20%, rgba(0, 0, 0, 0.9));
    background-image: linear-gradient(140deg,rgba(68, 68, 68, 0.6) 20%, rgba(0, 0, 0, 0.9));
  }
</style>
