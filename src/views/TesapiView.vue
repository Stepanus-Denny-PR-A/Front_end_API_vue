<template>
    <main>
      <h1 class="h6">{{ coba }}</h1>
    </main>
  </template>

<script lang="js">
import axios from 'axios'
export default{
    name: 'coba',
    data(){
        return {
           coba: []
        }
    },
    mounted(){
        this.getData();
    },
    methods: {
        getData(){
            axios.get('http://127.0.0.1:8000/api/barang').then(res =>{
              console.log(res)
              this.coba = res.data.Barang
            })
        }
    }
}
</script>