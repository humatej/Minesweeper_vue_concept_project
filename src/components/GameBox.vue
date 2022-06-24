<template>
    <v-rect class="user-select-none d-flex justify-content-center align-items-center text-light" v-on:click.right="check"  @click="send" :style="w" :class="setBg">
        {{atr.num  > 0 && atr.vis && !atr.checked? atr.num: ''}}
        <i class="bi bi-flag-fill" v-show="atr.checked"></i>
        <i v-show="atr.vis && atr.mine && !atr.checked" class="bi bi-patch-exclamation-fill"></i>
    </v-rect>
</template>
<script lang="ts">
import { defineComponent, ref} from 'vue'

export default defineComponent({
    setup() {
        const checked = ref<boolean>(false)
        return {checked}
    },
    props: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        w : Object,
        atr : Object,
    },
    methods: {
        send(){
            this.$emit('loc', this.atr?.x, this.atr?.y)
        },
        check() {
            if(!this.atr?.vis){
                this.checked = !this.checked
                this.$emit('setcheck',this.atr?.x, this.atr?.y)
            }
            return this.checked
        },
        
    },
    computed:{
        setBg(){
            if(!this.atr?.mine && this.atr?.vis && this.atr?.checked){
                return 'bg-danger'
            }
            else if(this.atr?.mine && this.atr?.vis && this.atr?.checked){
                return 'bg-success'
            }
            else if(!this.atr?.vis || this.atr?.mine){
                return 'unchecked'
            }
            else{
                return ''
            }
        }
    }
    

})
</script>
<style lang="scss">
    $delay: 0.2s;
    .unchecked{
        position: relative;
        background-image: linear-gradient(to right bottom, #008a85, #008585, #007f85, #007a84, #007482)!important;
        transition: $delay;
        z-index: 1;
    }
    .unchecked::before{
        background-image: linear-gradient(to right bottom, #2f4858, #2f4258, #343b55, #3a3450, #412c48)!important;
        position: absolute;
        content: "";
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transition: $delay;
        z-index: -1;
        opacity: 0;
    }
    .unchecked:hover::before{
        opacity: 1;
    }
</style>