<script setup lang="js">
import Navbar from '../components/Navbar.vue'
import foot from  '../components/foot.vue'
</script>
<template>
    <Navbar />
  <div class="container">
    <h1 class="mt-4">TAMBAH ADMIN</h1>
      <div class="form-group row mb-4">
        <label for="inputNamaBarang"  class="col-sm-2 col-form-label">Nama</label>
        <div class="col-sm-5">
          <input type="text" class="form-control" v-model="nama_user" id="inputNamaBarang">
        </div>
      </div>

      <div class="form-group row mb-4">
        <label for="inputMerk" class="col-sm-2 col-form-label">Username</label>
        <div class="col-sm-5">
          <input type="text" class="form-control" v-model="username" id="inputMerk">
        </div>
      </div>

       <div class="form-group row mb-4">
        <label for="inputKategori" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-5">
          <input type="text" class="form-control" v-model="password" id="inputKategori">
        </div>
      </div>

      <div class="form-group row mb-4">
        <label for="inputStatus" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-5">
          <input type="text" class="form-control" v-model="email" id="inputStatus">
        </div>
      </div>

      <div class="form-group row mb-4">
        <label for="inputHargaBeli" class="col-sm-2 col-form-label">telepon</label>
        <div class="col-sm-5">
          <input type="text" class="form-control" v-model="telepon" id="inputHargaBeli">
        </div>
      </div>
      <!-- button submit -->
      <div class="form-group row mb-4">
        <div class="col-sm-6">
          <button type="submit" @click="registerUser" class="btn btn-success btn-block">Tambah Admin</button>
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

<script lang="js">
import axios from 'axios';

export default {
    data() {
        return {
            nama_user: '',
            username: '',
            password: '',
            email: '',
            telepon: ''
        };
    },
    methods: {
        registerUser() {
            // Validasi input sebelum mengirimkan data
            if (
                this.validateUsername() &&
                this.validatePassword() &&
                this.validateEmail() &&
                this.validateTelepon()
            ) {
                const userData = {
                    nama_user: this.nama_user,
                    username: this.username,
                    password: this.password,
                    email: this.email,
                    telepon: this.telepon
                };

                axios.post('http://127.0.0.1:8000/api/register', userData)
                    .then(res => {
                        // Handle successful response if needed
                        alert('Admin berhasil ditambahkan', res.data);
                        this.$router.push('/Dashboard')
                    })
                    .catch(error => {
                        // Handle error if the registration fails
                        alert('Admin sudah ada', error);
                    });
            }
        },
        validateUsername() {
            if (this.username.length < 3 || this.username.length > 255) {
                alert('Username harus memiliki panjang 3-255 karakter');
                return false;
            }
            // Implementasi pengecekan uniqueness dari API jika diperlukan
            return true;
        },
        validatePassword() {
            if (this.password.length < 8) {
                alert('Password harus memiliki minimal 8 karakter');
                return false;
            }
            return true;
        },
        validateEmail() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.email)) {
                alert('Masukkan alamat email yang valid');
                return false;
            }
            // Implementasi pengecekan uniqueness dari API jika diperlukan
            return true;
        },
        validateTelepon() {
            if (this.telepon.length > 12||this.telepon.length==0) {
                alert('Nomor telepon maksimal 12 digit dan harus di isi');
                return false;
            }
            // Implementasi pengecekan uniqueness dari API jika diperlukan
            return true;
        }
    }
};

</script> 
