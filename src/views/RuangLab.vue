<template>
    <div class="container ">
            <div class="row align-items-center mt-5">
                <div class="col">
                <h1 > Ruang Lab</h1>
                </div>
                <div class="col">
                    <form class="d-flex " role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
    <div class="container w-75 mt-5">
        <div class="row row-cols-auto row-cols-lg-5 g-4 ">
             <div v-for="(data_kelas, index) in data_kelas" :key="index" :class="data_kelas.jenis_ruangan === 'Lab' ? 'col-3' : 'col-0'">
                <button v-if="data_kelas.jenis_ruangan === 'Lab'" class="btn btn-primary">
                    {{ data_kelas.nama_ruangan }}
                </button>
            </div>
        </div>
    </div>

    </div>
</template>
<script lang="js">
import axios from 'axios'
export default{
    name: 'data_kelas',
    data(){
        return {
           data_kelas: []
        }
    },
    mounted(){
        this.getData();
    },
    methods: {
        getData(){
            axios.get('http://127.0.0.1:8000/api/barang').then(res =>{
              console.log(res.data.Barang)
              this.data_kelas = res.data.Ruangans
            })
        }
    }
}
</script>