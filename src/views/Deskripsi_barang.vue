<template>
    <div class="container">
      <h2 class="text-center mb-4">Data Barang</h2>
      <div class="row">
        <div class="col-12">
          <div class="table-responsive">
            <table class="table table-striped table-hover">
              <thead class="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Nama Barang</th>
                  <th>Kategori</th>
                  <th>Merek / Tipe</th>
                  <th>Status</th>
                  <th>Harga Beli</th>
                  <th>Tanggal Pembelian</th>
                  <th>Tanggal Registrasi</th>
                  <th>Ruangan</th>
                  <th>Penanggung Jawab</th>
                </tr>
              </thead>
              <tbody>
                <tr class="item-highlight">
                  <th scope="row">1</th>
                  <td>Laptop</td>
                  <td>Elektronik</td>
                  <td>Asus ZenBook</td>
                  <td><i class="fas fa-check-circle text-success"></i> Available</td>
                  <td>$1200</td>
                  <td>2023-01-15</td>
                  <td>2023-01-16</td>
                  <td>Office Room</td>
                  <td>John Doe</td>
                </tr>
                <!-- Contoh data lainnya bisa ditambahkan di sini -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style>
    .item-highlight {
      background-color: #f5f5f5; /* Warna latar belakang yang membedakan */
      font-weight: bold; /* Membuat teks pada item ini lebih tebal */
    }
  
    .item-highlight:hover {
      background-color: #eaeaea; /* Efek hover pada item yang ditonjolkan */
    }
  </style>
  