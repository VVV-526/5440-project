import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/filter',
    name: 'FilterPage',
    component: () => import('../views/Filter.vue')
  },
  {
    path: '/favorite',
    name: 'FavoritePage',
    component: () => import('../views/Favorite.vue')
  },
  {
    path: '/recommendation',
    name: 'Recommendation',
    component: () => import('../views/Recommendation.vue')
  },
  {
    path: '/recipe1',
    name: 'Recipe1',
    component: () => import('../views/Recipe1.vue')
  },
  {
    path: '/recipe2',
    name: 'Recipe',
    component: () => import('../views/Recipe2.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
