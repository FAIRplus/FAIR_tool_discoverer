<template>
    <v-container 
        :fluid="$vuetify.breakpoint.mdAndDown"
        :id="$vuetify.breakpoint.xl ? 'discoverer-large' : ''">
        <h4 class="text-h5 text-center mt-10 title">Welcome to the FAIRification Tool Discoverer</h4>
      <div class="text-body-2 mt-5 mb-10 text-center">
        Discovering tools for your FAIRification tasks
      </div>

      <v-row 
        justify='space-around'
        >
        <v-col
          cols="10"
          sm="8"
          md="4"
          lg="4"
          xl="4"
          v-for="item in cards">
          <v-card
            class="mx-auto pt-3 pl-2 pr-2"
            :max-width="cardMaxWidth"
            :min-height="cardMinHeight"
            >
            <v-card-title class="justify-space-around">
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

#discoverer-large {
  width: 70%;
}
.v-card{
  height: 280px;
  margin: 10px;
}

.card-subtitle  {
  color: black !important;
  font-weight: 400 !important;
  font-size: 1.2rem !important;
}

</style>

<script>

export default {
    name: "index",
    computed: {
        cardMaxWidth() {
            switch (this.$vuetify.breakpoint.name) {
            case 'xs': return 400
            case 'sm': return 400
            case 'md': return 300
            case 'lg': return 350
            case 'xl': return 350
            }
        },
        cardMinHeight() {
            switch (this.$vuetify.breakpoint.name) {
            case 'xs': return 220
            case 'sm': return 300
            case 'md': return 250
            case 'lg': return 250
            case 'xl': return 250
            }
        }
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
