<template>
    <Navbar />
    <h1 class="text-center mt-5">Pengajuan</h1>
      <div class="container-fluid mb-5">
      <div class="container mt-4">
      <table class="table table-bordered mt-4">
          <thead class="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Isi Pengajuan</th>
              <th scope="col">Status</th>
              <th scope="col">Tanggal Pengejuan</th>
              <th scope="col">ID Barang</th>
              <th scope="col">Tool</th>
            </tr>
          </thead>
          <tbody >
            <tr v-for="(data_pengajuan, index) in data_pengajuan">
             <th scope="row">{{ data_pengajuan.id }}</th>
              <td>{{ data_pengajuan.isi_pengajuan }}</td>
              <td>{{ data_pengajuan.status}}</td>
              <td>{{ data_pengajuan.tanggal_pengajuan }}</td>
              <td>{{ data_pengajuan.id_barang }}</td>

              <td><RouterLink :to="{path: '/deskripsi/'+data_pengajuan.id_barang}" class="btn btn-info btn-sm items-center ">Lihat Barang</RouterLink> ||
                  <a :href="'/barcode?id=' + data_pengajuan.id" class="btn btn-sm btn-info">Lihat Pengajuan</a></td>
            </tr>
          </tbody>
        </table>
          </div>
      </div>
      <foot />
  </template>
  <script setup lang="js">
  import { RouterLink } from 'vue-router';
  import Navbar from '../components/Navbar.vue'
  import foot from  '../components/foot.vue'
  </script>
  
  <script lang="js">
  import axios from 'axios';
  
  export default {
    name: 'data_kelas',
    data() {
      return {
        data_pengajuan: []
      };
    },
    mounted() {
      this.getData();
    },
    methods: {
      getData() {
        axios.get('http://127.0.0.1:8000/api/pengajuan').then(res => {
          console.log(res);
          this.data_pengajuan = res.data;
        });
      }
    }
  }
  </script>
  