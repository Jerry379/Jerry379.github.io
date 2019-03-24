import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/components/Blog'
import BlogList from '@/components/BlogList'
import Docs from '@/components/Docs'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'blog',
      component: BlogList
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/bloglist',
      name: 'BlogList',
      component: BlogList
    },
    {
      path: '/docs',
      name: 'Docs',
      component: Docs
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
