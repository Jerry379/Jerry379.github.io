import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/components/Blog'
import Docs from '@/components/Docs'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'blog',
      component: Blog
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
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
