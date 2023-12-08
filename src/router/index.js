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
      path: '/formulirpengajuan/:id',
      name: 'formulir_pengajuan',
      component: () => import('../views/formulir_pengajuan.vue')
    },
    {
      path: '/akun',
      name: 'akun',
      component: () => import('../views/akun.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/barang_user.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('../views/logout.vue')
    },
    {
      path: '/pengajuan/:id',
      name: 'pengajuan_deskripsi',
      component: () => import('../views/pengajuan_deskripsi.vue')
    },
    {
      path: '/pengajuan_barang/:id',
      name: 'pengajuan_deskripsi',
      component: () => import('../views/pengajuan_deskripsi.vue')
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
