
<script setup lang="js">
import Navbar from '../components/Navbar.vue'
import foot from  '../components/foot.vue'
</script>  
   <template>
    <Navbar /> 
            <h1 class="mt-5" style="text-align:center;"><b>QR Code</b></h1>
        <div class="d-grid gap-2 col-6 mx-auto mt-5">
            <img :src="data_kelas" class="mx-auto mb-5" alt="...">
            <RouterLink :to="{path: '/deskripsi/'+id}" class="btn btn-primary rounded-pill">Lihat Hasi QR</RouterLink>  
        </div>
    <foot/>
    </template>
<script lang="js">
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
export default {
  name: 'data_kelas',
  data() {
    return {
      data_kelas: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=http://localhost:5173/deskripsi/${id}`
    };
  }
}
</script>