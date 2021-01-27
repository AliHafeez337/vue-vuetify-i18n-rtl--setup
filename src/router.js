import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home/Home.vue'
import HomeHeader from './views/Home/HomeHeader.vue'
import HomeFooter from './views/Home/HomeFooter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      header: HomeHeader,
      default: Home,
      footer: HomeFooter
    }
    // component: Home
  },
  {
    path: '/about',
    name: 'About',
    components: {
      header: () => import(/* webpackChunkName: "about" */ './views/About/AboutHeader.vue'),
      default: () => import(/* webpackChunkName: "about" */ './views/About/About.vue'),
      footer: () => import(/* webpackChunkName: "about" */ './views/About/AboutFooter.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
