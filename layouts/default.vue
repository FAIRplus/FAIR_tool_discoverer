<template>
  <v-app>
    <head>
      <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">
    </head>
    <main-header />
    <v-main> 
      <Nuxt />
    </v-main>
  </v-app>
</template>
<style>



</style>
<script>
import HeaderMenu from '../components/Header/HeaderMenu.vue'

export default {
  name: 'DefaultLayout',
  components: {
		'main-header': HeaderMenu,
	},
  data() {
    return {

    }
  },
}
</script>
