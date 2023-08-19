<template>
  <Navbar />
  <router-view />
  <FooterComp />
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooterComp from '@/components/FooterComp.vue';

export default {
  NavBar,
  FooterComp
}
</script>

<style>

</style>
