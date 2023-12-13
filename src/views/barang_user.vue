<template>
  <nav class="navbar bg-black navbar-dark">
  <div class="container-fluid">
    <img src="https://upload.wikimedia.org/wikipedia/id/thumb/7/7a/USD_LOGO.svg/1200px-USD_LOGO.svg.png" class="img-thumbnail mx-auto d-block" width="100" height="100" alt="">
  </div>
</nav>
    <h1 class="text-center mt-5">List Barang</h1>
      <div class="container-fluid">
      <div class="container-fluid mt-4">
      <table class="table table-bordered mt-4 mb-5">
          <thead class="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nama Barang</th>
              <th scope="col">Kategori</th>
              <th scope="col">Merek / Tipe</th>
              <th scope="col">Status</th>
              <th scope="col">harga beli</th>
              <th scope="col">Tanggal Pembelian</th>
              <th scope="col">Tanggal Regrestrasi</th>
              <th scope="col">Ruangan</th>
              <th scope="col">Penanggung Jawab</th>
              <th scope="col">Opsi</th>
            </tr>
          </thead>
          <tbody >
            <tr v-for="(data_kelas, index) in data_kelas">
             <th scope="row">{{ data_kelas.id }}</th>
              <td>{{ data_kelas.nama_barang }}</td>
              <td>{{ data_kelas.kategori}}</td>
              <td>{{ data_kelas.merk_type }}</td>
              <td>{{ data_kelas.status }}</td>
              <td>{{ data_kelas.harga_beli }}</td>
              <td>{{ data_kelas.tanggal_pembelian}}</td>
              <td>{{ data_kelas.tanggal_registrasi}}</td>
              <td>{{ data_kelas.ruangan }}</td>
              <td>{{ data_kelas.penanggung_jawab }}</td>
              <td><a :href="'/barcode?id=' + data_kelas.id" class="btn btn-sm btn-info">QR Code</a></td>
            </tr>
          </tbody>
        </table>
          </div>
      </div>
      <div class="form-group row mb-5">
        <label for="inputPJ" class="col-sm-2 col-form-label"></label>
        <div class="col-sm-5">
        </div>
      </div>
      <foot />
  </template>
  <script setup lang="js">
  import foot from  '../components/foot.vue'
  </script>
  
  <script lang="js">
  import axios from 'axios';
  
  export default {
    name: 'data_kelas',
    data() {
      return {
        data_kelas: []
      };
    },
    mounted() {
      this.getData();
    },
    methods: {
      getData() {
        axios.get('http://127.0.0.1:8000/api/barang').then(res => {
          console.log(res);
          this.data_kelas = res.data;
        });
      }
    }
  }
  </script>
  