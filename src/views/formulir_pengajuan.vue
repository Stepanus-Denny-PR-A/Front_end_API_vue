<template>
    <nav class="navbar bg-black navbar-dark">
  <div class="container-fluid">
    <img src="https://upload.wikimedia.org/wikipedia/id/thumb/7/7a/USD_LOGO.svg/1200px-USD_LOGO.svg.png" class="img-thumbnail mx-auto d-block" width="100" height="100" alt="">
  </div>
</nav>
<div class="container mt-5">
      
        <fieldset>
          <h3 class="text-center mb-4">Formulir Pengajuan</h3>
          <div class="mb-3">
            <label for="Nama" class="form-label">Nama Lengkap</label>
            <input class="form-control" v-model="username" type="text" placeholder="Write here..." aria-label="Write here..." />
          </div>
          <div class="mb-3">
            <label for="Pesan" class="form-label">Pesan</label>
            <input class="form-control" v-model="pesan" type="text" placeholder="Write here..." aria-label="Write here..." />
          </div>
          <button type="submit" @click="save" class="btn btn-primary">Submit</button>
        </fieldset>
      
    </div>
    <foot />
</template>

<script setup lang="js">
import foot from  '../components/foot.vue'
</script>

<script lang="js">
import axios from 'axios';
export default {
  data() {
    return {
      username: '',
      pesan: '',
      dashboardLink: '/Dashboard' 
    }
  },
  mounted(){
    console.log(Date())
  },
  methods: {
    save() {
  const currentDate = new Date().toISOString().slice(0, 10);
  const id = this.$route.params.id;

  axios.post('http://127.0.0.1:8000/api/pengajuan', {
      nama: this.username,
      isi_pengajuan: this.pesan,
      tanggal_pengajuan: currentDate,
      id_barang: id
    })
    .then(res => {
        alert("Pengajuan telah di tambahkan")
      this.$router.push('/user');
    })
    .catch(error => {
      console.error('Error saat menyimpan data pengajuan:', error);
    });
}

  }
}
</script>