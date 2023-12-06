<script setup>
import Navbar from '../components/Navbar.vue'
import foot from  '../components/foot.vue'
</script>
<script>
console.log(localStorage.getItem('user'));
</script>
<template>
  <Navbar />
<div class="album py-5 bg-body-tertiary ">
    <h1 class="h1 text-center mt-5 mb-5">DASHBOARD</h1>
    <div class="container d-flex justify-content-center mb-5">
      <div class="row gap-2 row-card-5">
          <div class="card" style="width: 20rem;">
            <img src="https://cdn.icon-icons.com/icons2/1091/PNG/512/announcement_78371.png" class="card-img-top" alt="Gambar png">
            <div class="card-body">
              <h5 class="card-title">Pemberitahuan</h5>
              <p class="card-text">Berisi tentag pengajuan barang</p>
              <a href="/pengajuan" class="btn btn-primary">Lihat</a>
            </div>
          </div>
          <div class="card" style="width: 20rem;">
            <img src="https://cdn-icons-png.flaticon.com/512/2982/2982674.png" class="card-img-top" alt="Foto barang">
            <div class="card-body">
              <h5 class="card-title">Barang</h5>
              <p class="card-text">Berisi data semua barang yang ada</p>
              <a href="/Barang" class="btn btn-primary">Lihat</a>
            </div>
          </div>
      </div>
    </div>
  </div>
<foot />
</template>
