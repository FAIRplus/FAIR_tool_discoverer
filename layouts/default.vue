<template>
  <v-app>
    <main-header />
    <v-main> 
      <Nuxt />
      <Footer />
    </v-main>
  </v-app>
</template>
<style>



</style>
<script>
import HeaderMenu from '../components/Header/HeaderMenu.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'DefaultLayout',
  components: {
		'main-header': HeaderMenu,
    Footer
	},
  data() {
    return {

    }
  },
}
</script>
