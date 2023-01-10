<template>
    <v-container class="run_main">
      <v-row class="mt-8">
            <v-icon color="#3949AB">
                mdi-magnify-expand
            </v-icon>
            <h4 class="text-h5 title ml-2">
              Discover Tools
            </h4>
        </v-row>
        <v-row>
            <v-col cols="8" class="text-body-2 text-justify">
                Introduce search terms and respective weights (optionally).
            </v-col>
        </v-row>
        <v-row class="mt-8">
            <Input @click='runDiscoverer'/>
                <div class="main-results">
                    <div v-if=querying style="min-height: 4px;">

                        <!-- query progress bar, see eaxample https://github.com/vuetifyjs/vuetify/blob/master/packages/docs/src/examples/v-progress-linear/prop-query.vue -->
                        <v-progress-linear
                        v-model="value"
                        :active="show"
                        :indeterminate="query"
                        :query="true"
                        ></v-progress-linear>
                    </div>
            
            <!--div v-if="results"><Results :tools="results.result" :inputParameters="results.input_parameters" :run_id="results.run_id" /></div>
            <div v-if="results_not_found" class='center_img' id="not_foundm"><img src="@/assets/img/not_found.svg" width="50px"> No tools found for those keywords</div>
            <div v-if="error" class='center_img' id="errorm"><img src="@/assets/img/error.svg" width="50px"> Something went wrong while fetching results</div-->
                </div>
        </v-row>
    </v-container>
  </template>
  <script>
  import Input from '../components/discover/Input.vue'
  import { mapGetters } from 'vuex'
  
  export default {
    name: 'discover',
    components: {
      Input
    },
    created() {
      // watch the params of the route to fetch the data again
      this.$watch(
        () => this.$route.params,
        () => {
            /// Fetch the results from the API and store them in the results variable
            if(this.$route.params.run_id){
                this.$store.dispatch('fetchResultsById', this.$route.params.run_id)
            }
        },
        // fetch the data when the view is created and the data is
        // already being observed
        { immediate: true }
      )
    },
    computed: {
        ...mapGetters({
            query: 'getQuery',
            querying: 'getQuerying',
            results: 'getResults',
            results_not_found: 'getResultsNotFound',
            error: 'getError',
        })
    },
    data () {
      return {
        formatErrorVisible: false,
        value: 0,
        show: true,
        terms:[]
      }
    },
    methods: {

      // Run the discoverer with the terms in textArea 
      // ----> this is the function that is called when the button is clicked
      async runDiscoverer (terms) {
        console.log(terms)
        this.$store.dispatch('fetchResultsByQuery', terms)
        //--> DEAL WITH RESULTS NOT FOUND 👉
        console.log('done')
        },
      }
    }
</script>
<style scoped>
.title{
    color: #3949AB !important;
    }

#errorFormat{
    color: darkred;
    font-size: small;
    }
.input-run-btn{
    width: 3em;
    border: 1px solid green;
    background-color: green;
    color: white;
    font-weight: bold;
    margin: 1em;
    margin-left: 0;
    }
.input-aid-btn{
    border: 1px solid grey; 
    color: grey;
    background-color: white;
    padding: 2%;
    margin: 2px;
    width: 100%;
    margin-top: 1em;
    }
.input_label{
    font-size: smaller;
    font-weight: bold;
    }

.center_img img{
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1em;
  margin-top: 1em;
    }
.center_img{
    text-align: center;
    }

#errorm{
    color: #900048
    }

#not_foundm{
    color: #300761
    }

#inputdiv{
    margin-top: 0%;
    padding-top: 0%
    }
.main-results{
    margin-top: 3em
    }
</style>
