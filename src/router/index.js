import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: HomeView
    },
    {
      path: '/RuangKelas',
      name: 'RuangKelas',
      component: () => import('../views/RuangKelas.vue')
    },
    {
      path: '/tes',
      name: 'tes',
      component: () => import('../views/TesapiView.vue')
    }
    
  ]
})



export default router
