<template>
    <Navbar />
    <h1 class="text-center mt-5">List Maintenance</h1>
      <div class="container-fluid">
      <div class="container-fluid mt-4">
        <div class="mt-5 col-2">
          <a href="/Tambah_maintenance" type="button" class="col btn btn-primary">Tambah Maintenance</a>   
        </div>
          <table class="table table-bordered mt-4">
          <thead class="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Jenis Maintenance</th>
              <th scope="col">Maintenance</th>
              <th scope="col">Tanggal Maintenance</th>
              <th scope="col">ID Barang</th>
              <th scope="col">ID user</th>
              <th scope="col">ID Pekerja</th>
              <th scope="col">Tool</th>
            </tr>
          </thead>
          <tbody >
            <tr v-for="(data_kelas, index) in data_kelas" :key="index">
             <th scope="row">{{ data_kelas.id }}</th>
              <td>{{ data_kelas.jenis_maintenance}}</td>
              <td>{{ data_kelas.maintenance}}</td>
              <td>{{ data_kelas.tanggal_maintenance}}</td>
              <td>{{ data_kelas.id_barang }}</td>
              <td>{{ data_kelas.id_user }}</td>
              <td>{{ data_kelas.id_pekerja }}</td>
              <td><button class="btn btn-sm btn-info" @click="hapus(data_kelas.id)">Hapus</button></td>

            </tr>
          </tbody>
        </table>
          </div>
          <div class="form-group row mb-5">
          <label for="inputPJ" class="col-sm-2 col-form-label"></label>
          <div class="col-sm-5">
          </div>
        </div>
      </div>
      <foot />
  </template>
  <script setup lang="js">
  import Navbar from '../components/Navbar.vue'
  import foot from  '../components/foot.vue'
  </script>
  
  <script lang="js">
  import axios from 'axios';
  
  export default {
    name: 'data_kelas',
    data() {
      return {
        data_kelas: [],
      };
    },
    mounted() {
      this.getData();
    },
    methods: {
      getData() {
        axios.get('http://127.0.0.1:8000/api/maintenance').then(res => {
          console.log(res);
          this.data_kelas = res.data;
        });
      },
    hapus(id){
    axios.delete('http://127.0.0.1:8000/api/maintenance/'+id).then(res =>{
    console.log(res);
    window.location.reload();
  }).catch(error=>{
    alert("Tidak bisa di hapus. \n\n Penyebap: data Digunakan di Pengajuan")
  });
  
  }
  }
  }
  </script>
  