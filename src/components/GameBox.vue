<template>
    <v-rect class="d-flex justify-content-center align-items-center text-light" v-on:click.right="check"  @click="send" :style="w" :class="setBg">
        {{atr.num  > 0 && atr.vis && !atr.checked? atr.num: ''}}
        <i class="bi bi-flag-fill text-dark" v-show="atr.checked"></i>
        <i v-show="atr.vis && atr.mine && !atr.checked" class="bi bi-patch-exclamation-fill text-dark"></i>
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
        background: white !important;
        transition: $delay;
    }
    .unchecked:hover{
        background: rgb(253, 206, 249) !important;
        transition: $delay;
    }
</style>