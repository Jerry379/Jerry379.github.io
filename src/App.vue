<template>
  <div id="app">
    <Nav-left></Nav-left>
    <router-view class="content"/>
  </div>
</template>

<script>
import 'normalize.css'
import '../static/style.css'
import About from './components/About'
import Blog from './components/Blog'
import Docs from './components/Docs'
import NavLeft from './components/NavLeft'
export default {
  name: 'App',
  components: {About, Blog, Docs, NavLeft}
}
</script>

<style>
#app {
  display: flex;
}
  .content{
    flex: 1;
    background: #F4F4F4;
    color: #666;
  }
</style>
