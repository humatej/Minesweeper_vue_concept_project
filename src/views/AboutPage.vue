<template>
    <div id="about" class="rounded bg-dark mt-5 text-light mx-auto">
        <h1 class="p-2 text-center">About</h1>
        <img class="rounded" src="../assets/rsz_husla.jpg" width="200" alt="image of autor">
        <p class="p-4">I am math, sience and tech enthusiast. This game was created
          as learning project in Vue js, with help of Typescript, Sass 
          and Bootstrap 5. In this project I learnt some stuff and it's my 
          first "bigger" project
        </p>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    
})
</script>
<style lang="scss" scoped>
    #about{
        width:400px
    }
    img{
        position: relative;
        left: 25%;
    }
    p{
        text-align: justify
    }
</style>