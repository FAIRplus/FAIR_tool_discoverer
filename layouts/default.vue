<template>
  <v-app>
    <main-header />
    <v-main> 
      <Nuxt />
    </v-main>
    <v-footer class="mt-10">
      <Footer />
    </v-footer>
  </v-app>
</template>
<style>
.v-footer {
    padding-top: 1%;
    width: 100%;
    position: static;
    bottom:0;
  }

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
