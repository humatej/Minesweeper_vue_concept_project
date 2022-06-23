<template>
    <nav id="footer" class="navbar navbar-expand-sm navbar-dark mt-5">
      <div class="container-fluid d-flex flex-column justify-content-center text-light">
          <p class="p-1">This page was created by <a href="#">Matej Hušla</a></p>
          <p class="p-1">2022 ©</p>
      </div>
    </nav>
    
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
   
})
</script>
<style lang="scss" scoped>
    $color: rgba(54, 54, 54, 0.973);
    #footer{
        background-color: $color;
        position: absolute;
        top:100%;
        width:100%;
    }
    p{  
        font-size: 80%;
        margin-bottom: 0;
    }
</style>
