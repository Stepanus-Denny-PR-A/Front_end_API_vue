<template>
    <Navbar />
      <div class="container">
          <h2 class="text-center my-4">Data Akun</h2>
          <div class="row justify-content-center">
              <div class="col-md-8">
                  <table class="table custom-table">
                      <tbody>
                          <tr>
                              <th>ID</th>
                              <td>{{ user.id }}</td>
                          </tr>
                          <tr>
                              <th>Email</th>
                              <td>{{ user.email }}</td>
                          </tr>
                          <tr>
                              <th>Nomor telpon</th>
                              <td>{{ user.phone }}</td>
                          </tr>
                          <tr>
                              <th>Dibuat pada</th>
                              <td>{{ user.dibuat }}</td>
                          </tr>
                          <tr>
                              <th>Role</th>
                              <td>Admin</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  <foot />
    </template>
    <script lang="js">
    const user= JSON.parse(sessionStorage.getItem('user'))
    console.log(user)
    </script>
    
    <script setup lang="js">
  import Navbar from '../components/Navbar.vue'
  import foot from  '../components/foot.vue'
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