<template>
    <v-container 
        :fluid="$vuetify.breakpoint.smAndDown"
        :id="$vuetify.breakpoint.xl ? 'discoverer-large' : ''"
        >
        
        
        <h4 class="text-h5 text-center mt-10 title">Welcome to the FAIRification Tool Discoverer</h4>
      <div class="text-body-2 mt-5 mb-10 text-center">
        Discovering tools for your FAIRification tasks
      </div>

      <v-row 
        justify='center'
        >
        <v-col
          cols="10"
          sm="8"
          md="4"
          lg="4"
          xl="4"
          v-for="item in cards">
          <IndexCard :item="item" />
          </v-col>
      </v-row>
      
  </v-container>
</template>
<style scoped>
.title {
	color: #3949AB !important;
}

#discoverer-large {
  width: 70%;
}


</style>

<script>
import IndexCard from '~/components/IndexCard.vue'


export default {
    name: "index",
    components: {
        IndexCard,
    },
    data(){
        return {
            
            cards : [
              { // Run Discoverer
                icon: 'mdi-cogs', 
                title: 'Discover Tools', 
                text:'Discover tools using a custom list of weighted keywords.',
                to: '/discover',
                color:'#3949AB'
              },
              { // Explore FAIRification tools
                icon: 'mdi-search-web',
                title: 'Explore FAIRification tools',
                text: 'Explore FAIRification tools in the FAIRification Tool Registry.',
                to: '/explore',
                color: '#3949AB'
              },
              { // Know more
                icon: 'mdi-help',
                title: 'Know more',
                text: 'Learn more about the FAIRification Tool Discoverer',
                to: '/help',
                color: '#3949AB'
              },
              {// API Documentation
                icon: 'mdi-book-open-page-variant',
                title: 'API Documentation',
                text: 'Learn how to use the FAIRification Tool Discoverer API.',
                to: '/api',
                color: '#3949AB'
              }
            ]  
        } 
    }
}
</script>
