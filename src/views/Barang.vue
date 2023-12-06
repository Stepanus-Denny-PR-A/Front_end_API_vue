<template>
  <Navbar />
  <h1 class="text-center mt-5">List Barang</h1>
    <div class="container-fluid">
    <div class="container-fluid mt-4">
        <a href="/Tambah_Barang" type="button" class="btn btn-primary">Tambah Barang</a>
    <table class="table table-bordered mt-4">
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
            <td><RouterLink :to="{path: '/edit/'+data_kelas.id}" class="btn btn-info btn-sm items-center">Edit</RouterLink> ||
                <a :href="'/barcode?id=' + data_kelas.id" class="btn btn-sm btn-info">QR Code</a></td>
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
