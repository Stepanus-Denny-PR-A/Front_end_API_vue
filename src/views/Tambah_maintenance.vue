<template>
    <Navbar />
    <div class="container">
      <h1 class="mt-4">TAMBAH Maintenance</h1>
        <div class="form-group row mb-4">
          <label for="inputJenisMaintenance"  class="col-sm-2 col-form-label">jenis_maintenance</label>
          <div class="col-sm-5">
            <input type="text" class="form-control" v-model="model.isi.jenis_maintenance" id="inputJenisMaintenance">
          </div>
        </div>
  
        <div class="form-group row mb-4">
          <label for="inputMaintenance" class="col-sm-2 col-form-label">maintenance</label>
          <div class="col-sm-5">
            <input type="text" class="form-control" v-model="model.isi.maintenance" id="inputMaintenance">
          </div>
        </div>
  
         <div class="form-group row mb-4">
          <label for="inputIDBarang" class="col-sm-2 col-form-label">ID barang</label>
          <div class="col-sm-5">
            <input type="text" class="form-control" v-model="model.isi.id_barang" id="inputIDBarang">
          </div>
        </div>
  
        <div class="form-group row mb-4">
          <label for="inputIDAdmin" class="col-sm-2 col-form-label">ID admin</label>
          <div class="col-sm-5">
            <input type="text" class="form-control" v-model="model.isi.id_user" id="inputIDAdmin">
          </div>
        </div>
  
        <div class="form-group row mb-4">
          <label for="inputIDPekerja" class="col-sm-2 col-form-label">ID Pekerja</label>
          <div class="col-sm-5">
            <input type="text" class="form-control" v-model="model.isi.id_pekerja" id="inputIDPekerja">
          </div>
        </div>
  
        <div class="form-group row mb-4">
          <label for="inputTanggalMaintenance" class="col-sm-2 col-form-label">tanggal_maintenance</label>
          <div class="col-sm-5">
            <input type="text" placeholder="YYYY-MM-DD" class="form-control" v-model="model.isi.tanggal_maintenance" id="inputTanggalMaintenance">
          </div>
        </div>
        
        <!-- button submit -->
        <div class="form-group row mb-4">
          <div class="col-sm-6">
            <button type="submit" @click="save_maintenance" class="btn btn-success btn-block">Tambah Maintenance</button>
          </div>
        </div>
        <div class="form-group row mb-5">
          <label for="inputPJ" class="col-sm-2 col-form-label"></label>
          <div class="col-sm-5">
          </div>
        </div>
        <foot />
    </div>
    
  </template>
  <script setup lang="js">
  import Navbar from '../components/Navbar.vue'
  import foot from  '../components/foot.vue'
  </script>
  <script lang="js">
  import axios from 'axios';
  export default {
     name:'insert_maintenance',
     data(){
         return{
             model: {
              isi: {
                 jenis_maintenance: '',
                 maintenance: '',
                 id_barang: '',
                 id_user: '',
                 id_pekerja: '',
                 tanggal_maintenance: '',
              }
             }
         }
     },
     methods: {
       save_maintenance() {
        if (!this.isValidDateFormat(this.model.isi.tanggal_maintenance)) {
          alert('Harap masukkan tanggal dengan format YYYY-MM-DD Serta isi semua kolom');
          return; // Berhenti eksekusi jika format tidak sesuai
        }
  
        // Lanjutkan dengan pengiriman data jika format sudah benar
        axios.post('http://127.0.0.1:8000/api/maintenance', this.model.isi)
          .then(res => {
            alert(res.data.message);
            this.model.isi = {
              jenis_maintenance: '',
              maintenance: '',
              id_barang: '',
              id_user: '',
              id_pekerja: '',
              tanggal_maintenance: '',
            };
          })
          .catch(error => {
            // Tangani kesalahan jika terjadi pada pengiriman data
            console.error('Error:', error);
            // Lakukan sesuatu untuk menangani kesalahan, misalnya, menampilkan pesan kesalahan kepada pengguna
            alert('Terjadi kesalahan saat menyimpan data maintenance.');
          });
      },
      isValidDateFormat(date) {
        const dateFormat = /^\d{4}-\d{2}-\d{2}$/; // Regex untuk format YYYY-MM-DD
        return dateFormat.test(date);
      }
    }
  }
  </script>
  