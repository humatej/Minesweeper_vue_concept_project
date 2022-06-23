<template>
  <div>
    <HeaderMain/>
      <router-view></router-view>
    <FooterMain/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderMain from "./components/HeaderMain.vue"
import FooterMain from "./components/FooterMain.vue"


export default defineComponent({
  components: {
    HeaderMain,
    FooterMain,
  }
});
</script>

<style>

</style>
