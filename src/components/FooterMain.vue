<template>
    <nav id="footer" class="navbar navbar-expand-sm navbar-dark">
      <div class="container-fluid d-flex flex-column justify-content-center text-light">
          <p class="p-1">This page was created by <a href="https://github.com/humatej" target="_blank">Matej Hušla</a></p>
          <p class="p-1">© 2022</p>
      </div>
    </nav>
    
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
   
})
</script>
<style lang="scss" scoped>
    #footer{
        background-image: linear-gradient(to right bottom, #003600, #003101, #012b01, #022601, #002100);
        position: absolute;
        top:100%;
        width:100%;
    }
    p{  
        font-size: 80%;
        margin-bottom: 0;
    }
</style>
