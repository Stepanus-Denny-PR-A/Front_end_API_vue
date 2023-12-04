<template>
<form @submit.prevent="handelsumit">
    <div style="background-color: #508bfc;">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card shadow-2-strong" style="border-radius: 1rem;">
              <div class="card-body p-5 text-center">
                <h3 class="mb-5">Sign in</h3>
                <div class="form-outline mb-4">
                  <input type="name" id="typeEmailX-2" class="form-control form-control-lg" v-model="username" />
                  <label class="form-label" for="typeEmailX-2">Username</label>
                </div>
                <div class="form-outline mb-4">
                  <input type="password" id="typePasswordX-2" class="form-control form-control-lg" v-model="password" />
                  <label class="form-label" for="typePasswordX-2">Password</label>
                </div>
                <a :href="dashboardLink"><button class="btn btn-primary btn-lg btn-block">Login Admin</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</form>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        username: '',
        password: '',
        dashboardLink: '/Dashboard' // Ganti dengan link yang sesuai
      }
    },
    methods:{
        async handelsumit(){
            const response = await axios.post('http://127.0.0.1:8000/api/login',{
                username: this.username,
                password:this.password
            });
            console.log(response.data.user);
            this.$route.push('/login')
            localStorage.setItem('user',response.data.user)
            console.log(localStorage.getItem('user'));
        }
    }
  }
  </script>
  