<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/tes">
        <img src="https://belajar.usd.ac.id/pluginfile.php/1/theme_moove/logo/1693193463/logo_usd.png"
          class="img-fluid img-thumbnail" style="width: 10rem" alt="Logo">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-4">
          <li class="nav-item">
            <router-link to="/Dashboard" class="nav-link" aria-current="page">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Lab" class="nav-link" aria-current="page">Lab</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/RuangKelas" class="nav-link" aria-current="page">Kelas</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link" aria-current="page">Logout</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
  <footer>
    <div class="card bg-dark fixed-bottom">
      <div class="card-body text-light text-center">
        Mencintai kebenaran, memperjuangkan keadilan, menghargai keberagaman, dan menjunjung tinggi keluhuran martabat
        manusia
      </div>
    </div>
  </footer>
</template>