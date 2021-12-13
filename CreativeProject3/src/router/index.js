import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/about.vue'
import Store from '../views/Store.vue'
import Cart from '../views/Cart.vue'
import Cards from '../views/Cards.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/cards',
    name: 'cards',
    component: Cards
  },

  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },

  {
    path: '/store',
    name: 'store',
    component: Store
  },

  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
