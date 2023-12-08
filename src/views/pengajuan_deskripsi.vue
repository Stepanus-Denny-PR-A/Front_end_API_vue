<template>
    <Navbar />
      <div class="container mb-5">
          <h2 class="text-center my-4">Data Barang</h2>
          <div class="row justify-content-center">
              <div class="col-md-8">
                  <table class="table custom-table">
                      <tbody>
                          <tr>
                              <th>ID pengajuan</th>
                              <td>{{ data_pengajuan.id }}</td>
                          </tr>
                          <tr>
                              <th>Nama penaju</th>
                              <td>{{ data_pengajuan.nama }}</td>
                          </tr>
                          <tr>
                              <th>Isi pengajuan</th>
                              <td>{{ data_pengajuan.isi_pengajuan }}</td>
                          </tr>
                          <tr>
                              <th>Status</th>
                              <td>{{ data_pengajuan.status }} </td>
                          </tr>
                          <tr>
                              <th>Tanggal Pengajuan</th>
                              <td>{{ data_pengajuan.tanggal_pengajuan }}</td>
                          </tr>
                          <tr>
                              <th>ID Barang</th>
                              <td>{{ data_pengajuan.id_barang }}</td>
                          </tr>
                      </tbody>
                  </table>

                  
              </div>
              <div class="container">
        <h2 class="text-center my-4">Data Barang</h2>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <table class="table custom-table">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <td>{{ data_barang.id }}</td>
                        </tr>
                        <tr>
                            <th>Nama Barang</th>
                            <td>{{ data_barang.nama_barang }}</td>
                        </tr>
                        <tr>
                            <th>Kategori</th>
                            <td>{{ data_barang.kategori }}</td>
                        </tr>
                        <tr>
                            <th>Merek / Tipe</th>
                            <td>{{ data_barang.merk_type }}</td>
                        </tr>
                        <tr>
                            <th>Status</th>
                            <td>{{ data_barang.status }} </td>
                        </tr>
                        <tr>
                            <th>Harga Beli</th>
                            <td>{{ data_barang.harga_beli }}</td>
                        </tr>
                        <tr>
                            <th>Tanggal Pembelian</th>
                            <td>{{ data_barang.tanggal_pembelian }}</td>
                        </tr>
                        <tr>
                            <th>Tanggal Registrasi</th>
                            <td>{{ data_barang.tanggal_registrasi }}</td>
                        </tr>
                        <tr>
                            <th>Ruangan</th>
                            <td>{{ data_barang.ruangan }}</td>
                        </tr>
                        <tr>
                            <th>Penanggung Jawab</th>
                            <td>{{ data_barang.penanggung_jawab }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
          </div>
          <div class="container text-center mt-5">
                <div class="row align-items-start">
                    <div class="col ">
                        <button type="button" @click="konfirmasi(data_pengajuan.id)" class="btn btn-primary col-4">Konfirmasi</button>
                    </div>
                    <div class="col">
                        <button class="btn btn-primary col-4" @click="hapus(data_pengajuan.id)">Hapus</button>
                    </div>
                </div>
                </div>
      </div>
      <div class="mt-5"> tes</div>
      
  <foot />
    </template>
    <script setup lang="js">
  import Navbar from '../components/Navbar.vue'
  import foot from  '../components/foot.vue'
  </script>
  
  <script lang="js">
  import axios from 'axios';
  
  export default {
    name: 'data_barang',
    data() {
      return {
        data_pengajuan: [],
        data_barang: []
      };
    },
    mounted() {
      this.getData();
      console.log( this.$route.params.id)
    },
    methods: {
      getData() {
        const id = this.$route.params.id;
        axios.get('http://127.0.0.1:8000/api/pengajuan/'+id).then(res => {
          console.log(res.data);
          this.data_pengajuan= res.data;
            axios.get('http://127.0.0.1:8000/api/barang/'+res.data.id_barang).then(res => {
            console.log(res.data);
            this.data_barang = res.data;
      });
        });
      },
      hapus(id){
        axios.delete('http://127.0.0.1:8000/api/pengajuan/'+id).then(res =>{
        console.log(res);
        this.$router.push('/Pengajuan')
      });
      },
      konfirmasi(id){
        axios.patch('http://127.0.0.1:8000/api/konfirmasi/'+id).then(res=>{
            this.$router.push('/Pengajuan')
        })
      }
    }
  }
  </script>
  
    <style>
          /* Custom CSS untuk tabel */
          .custom-table th,
          .custom-table td {
              padding: 10px;
              vertical-align: middle;
          }
  
          .custom-table th {
              font-weight: bold;
              background-color: #f8f9fa;
              text-align: left;
              width: 30%;
          }
  
          .custom-table td {
              width: 70%;
          }
  
          .status-badge {
              padding: 6px 10px;
              font-size: 14px;
          }
  
          /* Menampilkan status yang berbeda */
          .status-available {
              background-color: #28a745;
              color: white;
          }
  
          .status-unavailable {
              background-color: #dc3545;
              color: white;
          }
    </style>
    
    