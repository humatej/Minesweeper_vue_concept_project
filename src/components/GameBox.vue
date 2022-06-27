<template>
    <v-rect class="user-select-none d-flex justify-content-center align-items-center text-light" v-on:click.right="check" @click="send" :style="boxStyle" :class="setBackground">
        <span v-show="box.nearby_mine_counter  > 0 && box.visibility && !box.checked">{{box.nearby_mine_counter}}</span>
        <i class="bi bi-flag-fill" v-show="box.checked"></i>
        <i v-show="box.visibility && box.mine && !box.checked" class="bi bi-patch-exclamation-fill"></i>
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
        boxStyle : Object,
        box : Object,
    },
    methods: {
        send(){
            this.$emit('loc', this.box?.x, this.box?.y)
        },
        check() {
            if(!this.box?.visibility){
                this.checked = !this.checked
                this.$emit('setcheck',this.box?.x, this.box?.y)
            }
            return this.checked
        },
        
    },
    computed:{
        setBackground(){
            if(!this.box?.mine && this.box?.visibility && this.box?.checked){
                return 'bg-danger'
            }
            else if(this.box?.mine && this.box?.visibility && this.box?.checked){
                return 'bg-success'
            }
            else if(!this.box?.visibility || this.box?.mine){
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