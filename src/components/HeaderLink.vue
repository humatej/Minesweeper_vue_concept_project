<template>
    <router-link :to="link.route" class="nav-link text-light p-3" aria-current="page">
        {{link.link}}
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:{
        link: Object
    }
})
</script>
<style scoped lang="scss">
    
</style>