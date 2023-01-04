<template>
    <v-container>
      <h4 class="text-h5 text-center mt-10 title">Welcome to the FAIRification Tool Discoverer</h4>
      <div class="text-body-2 mt-5 mb-10 text-center">
        Discovering tools for your FAIRification tasks
      </div>

      <v-row 
        justify="space-around">
        <v-col
          md="3"
          v-for="item in cards">
          <v-card
            class="mx-auto pt-3"
            max-width="344"
            
            >
            <v-card-title class="justify-center">
              <v-icon class="display-2" >{{item.icon}}</v-icon>
            </v-card-title>
            <v-card-subtitle class="text-center  pt-3">
              <h6 class="card-subtitle text-h5">{{item.title}}</h6>
            </v-card-subtitle>
            <v-card-text class="text-center">
              {{item.text}}
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn
                :color="item.color"
                rounded
                outlined
                :to="item.to"
                >
                Go
              </v-btn>
            </v-card-actions>
          </v-card>
          </v-col>
      
      </v-row>

  </v-container>
</template>
<style scoped>
.title {
	color: #3949AB !important;
}

.v-card{
  height: 280px;
  width: 300px;
  margin: 10px;
}

.card-subtitle  {
  color: black !important;
  font-weight: 400 !important;
  font-size: 1.2rem !important;
}

</style>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "index",
    computed: {
        ...mapGetters({
            
          })
        },
    created() {
        
    },
    data(){
        return {
            cards : [
              {
                icon: 'mdi-cogs', 
                title: 'Discover Tools', 
                text:'Discover tools using a custom list of weighted keywords.',
                to: '/discover',
                color:'#3949AB'
              },
              {
                icon: 'mdi-search-web',
                title: 'Explore FAIRification tools',
                text: 'Explore FAIRification tools in the FAIRification Tool Registry.',
                to: '/explore',
                color: '#3949AB'
              },
              {
                icon: 'mdi-help',
                title: 'Know more',
                text: 'Learn more about the FAIRification Tool Discoverer',
                to: '/help',
                color: '#3949AB'
              }
            ]  
        } 
    }
}
</script>
