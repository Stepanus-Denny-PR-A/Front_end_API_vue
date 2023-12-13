<script setup lang="js">
import Navbar from '../components/Navbar.vue'
import foot from  '../components/foot.vue'
</script>
<template>
    <Navbar />
  <div class="container">
    <h1 class="mt-4">Edit Barang</h1>
      <div class="form-group row mb-4">
        <label for="inputNamaBarang"  class="col-sm-2 col-form-label">Nama Barang</label>
        <div class="col-sm-5">
          <input type="text" class="form-control" v-model="model.isi.nama_barang" id="inputNamaBarang">
        </div>
      </div>

      <div class="form-group row mb-4">
        <label for="inputMerk" class="col-sm-2 col-form-label">Merk-Type</label>
        <div class="col-sm-5">
          <input type="text" class="form-control" v-model="model.isi.merk_type" id="inputMerk">
        </div>
      </div>

       <div class="form-group row mb-4">
        <label for="inputKategori" class="col-sm-2 col-form-label">Kategori Barang</label>
        <div class="col-sm-5">
          <input type="text" class="form-control" v-model="model.isi.kategori" id="inputKategori">
        </div>
      </div>

      <div class="form-group row mb-4">
        <label for="inputStatus" class="col-sm-2 col-form-label">Status</label>
        <div class="col-sm-5">
          <input type="text" class="form-control" v-model="model.isi.status" id="inputStatus">
        </div>
      </div>

      <div class="form-group row mb-4">
        <label for="inputHargaBeli" class="col-sm-2 col-form-label">Harga Beli</label>
        <div class="col-sm-5">
          <input type="text" class="form-control" v-model="model.isi.harga_beli" id="inputHargaBeli">
        </div>
      </div>

      <div class="form-group row mb-4">
      <label for="inputTanggalBeli" class="col-sm-2 col-form-label">Tanggal Beli</label>
      <div class="col-sm-5">
        <input type="text" placeholder="YYYY-MM-DD" class="form-control" v-model="model.isi.tanggal_pembelian" id="inputTanggalBeli" >
      </div>
    </div>

    <div class="form-group row mb-4">
      <label for="inputTanggalRegis" class="col-sm-2 col-form-label">Tanggal Registrasi</label>
      <div class="col-sm-5">
        <input type="text" placeholder="YYYY-MM-DD" class="form-control" v-model="model.isi.tanggal_registrasi" id="inputTanggalRegis">
      </div>
    </div>


      <div class="form-group row mb-4">
        <label for="inputRuang" class="col-sm-2 col-form-label">Ruangan</label>
        <div class="col-sm-5">
          <input type="text" class="form-control" v-model="model.isi.ruangan" id="inputRuang">
        </div>
      </div>

      <div class="form-group row mb-4">
        <label for="inputPJ" class="col-sm-2 col-form-label">Penanggung Jawab</label>
        <div class="col-sm-5">
          <input type="text" class="form-control" v-model="model.isi.penanggung_jawab" id="inputPJ">
        </div>
      </div>

      <!-- button submit -->
      <div class="form-group row mb-4">
        <div class="col-sm-6">
          <button type="submit" @click="save_barang" class="btn btn-success btn-block">Edit Barang</button>
        </div>
      </div>
      <div class="form-group row mb-5">
        <label for="inputPJ" class="col-sm-2 col-form-label"></label>
        <div class="col-sm-5">
        </div>
      </div>
  </div>
  <foot />
</template>

<script lang="js">
import axios from 'axios';
export default {
   name:'insert_barang',
   data(){
       return{
           model: {
            isi: {
               nama_barang: '',
               merk_type: '',
               kategori: '',
               status: '',
               harga_beli: '',
               tanggal_pembelian: '',
               tanggal_registrasi: '',
               ruangan: '',
               penanggung_jawab: ''
            }
           }
       }
   },
   mounted(){
    const id = this.$route.params.id;
    axios.get('http://127.0.0.1:8000/api/barang/'+id).then(res=>{
      console.log(res.data)
      this.model.isi=res.data
    })
   },
   methods: {
  save_barang() {
    if (
      !this.isValidDateFormat(this.model.isi.tanggal_pembelian) ||
      !this.isValidDateFormat(this.model.isi.tanggal_registrasi)
    ) {
      alert('Harap masukkan tanggal dengan format YYYY-MM-DD Serta isi semua kolom');
      return; 
    }
    const id = this.$route.params.id;
    // Lanjutkan dengan pengiriman data jika format sudah benar
    axios.patch('http://127.0.0.1:8000/api/barang/'+id, this.model.isi)
      .then(res => {
        alert(res.data.message);
        this.model.isi = {
          nama_barang: '',
          merk_type: '',
          kategori: '',
          status: '',
          harga_beli: '',
          tanggal_pembelian: '',
          tanggal_registrasi: '',
          ruangan: '',
          penanggung_jawab: ''
        };
        this.$router.push('/Barang')
      })
      .catch(error => {
        // Tangani kesalahan jika terjadi pada pengiriman data
        console.error('Error:', error);
        // Lakukan sesuatu untuk menangani kesalahan, misalnya, menampilkan pesan kesalahan kepada pengguna
        alert('Terjadi kesalahan saat menyimpan data barang.');
      });
  },
  isValidDateFormat(date) {
    const dateFormat = /^\d{4}-\d{2}-\d{2}$/; // Regex untuk format YYYY-MM-DD
    return dateFormat.test(date);
  }
}

}


</script> 
