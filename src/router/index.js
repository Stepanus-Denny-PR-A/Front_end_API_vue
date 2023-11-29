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
      path: '/Barang',
      name: 'Barang',
      component: () => import('../views/Barang.vue')
    },
    {
      path: '/tes',
      name: 'tes',
      component: () => import('../views/TesapiView.vue')
    },   
     {
      path: '/tes2',
      name: 'tes2',
      component: () => import('../views/testing.vue')
    }
    
  ]
})



export default router
