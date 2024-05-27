import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import NotFound from './pages/NotFound.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path:'/:pathMatch(.*)*',
      name:'not-found',
      component: NotFound
    }
  ]
}) 