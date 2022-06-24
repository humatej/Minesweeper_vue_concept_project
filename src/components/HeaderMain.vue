<template>
    <nav id="main_nav" class="bg-dark navbar navbar-expand-sm navbar-light shadow-lg">
        <div class="container-fluid">
            <div class="collapse d-flex justify-content-center navbar-collapse text-center" id="navbarID">
                <div id="navbar" class="d-flex justify-content-center">
                    <HeaderLink v-for="link in links" :key="link" :link="link"/>
                </div>
            </div>
        </div>
    </nav>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import HeaderLink from './HeaderLink.vue'

export default defineComponent({
    setup(){
        const links = ref([
            {
                link: "Home",
                route: "/"
            },
            { 
                link: "About",
                route: "/about"
            }
        ])
        return {links}
    },
    components:{
        HeaderLink,
    }
})
</script>
<style lang="scss" scoped>
   #main_nav{
        background-image: linear-gradient(to right bottom, #03b365, #00b068, #00ad6b, #00aa6e, #00a770);

   }
</style>
