<template>
<div class="container w-75">
    <ul class="list-group">
        <li class="list-group-item">
            <a class="btn btn-primary rounded-pill" href="@yield('arah')" role="button">
                <h6 v-if="data_kelas.jenis_ruangan === 'Lab'">
                    {{ data_kelas.nama_ruangan }}
                </h6>
            </a>
        </li>
    </ul>
</div>

</template>
<script>
new Vue({
    el: '#app',
    data: {
        dataDariDatabase: null // Inisialisasi data dari database sebagai null
    },
    created() {
        // Ambil data dari database (misalnya melalui API)
        // Simulasi pengambilan data dari database
        // Anda dapat menggantinya dengan kode yang sesuai untuk mengambil data dari server
        setTimeout(() => {
            // Misalnya, di sini Anda mengambil data dari database dan menyimpannya dalam variabel dataDariDatabase
            this.dataDariDatabase = "Ini adalah data dari database";
        }, 2000); // Contoh penundaan pengaturan data dari database selama 2 detik
    }
});
</script>