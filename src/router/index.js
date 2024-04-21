import { createRouter, createWebHistory } from 'vue-router'


// 頁面
import HomeView from '../views/home.vue' //首頁

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    
  ]
})

export default router
