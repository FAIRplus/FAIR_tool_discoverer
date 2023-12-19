<template>
    <v-app>
      <HeaderMenu />
      <v-main> 
        <Nuxt />
      </v-main>
    </v-app>
  </template>
  <script>
  import HeaderMenu from '../components/Header/HeaderMenu.vue'

  export default {
    name: 'embedIframeFullWidth',
    components: {
        HeaderMenu
    }
  }

</script>