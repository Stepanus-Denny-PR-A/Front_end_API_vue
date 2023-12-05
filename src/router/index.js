import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: HomeView
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/deskripsi/:id',
      name: 'deskripsi',
      component: () => import('../views/Deskripsi_barang.vue')
    },
    {
      path: '/barcode',
      name: 'barcode',
      component: () => import('../views/Barcode.vue')
    },
    {
      path: '/pengajuan',
      name: 'pengajuan',
      component: () => import('../views/Pengajuan.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('../views/Edit.vue')
    },
    {
      path: '/Barang',
      name: 'Barang',
      component: () => import('../views/Barang.vue')
    },
    {
      path: '/tambah_barang',
      name: 'tambah_barang',
      component: () => import('../views/Tambah_Barang.vue')
    },  
    {
      path: '/tes',
      name: 'tes',
      component: () => import('../views/TesapiView.vue')
    }
   
    
    
  ]
})



export default router
