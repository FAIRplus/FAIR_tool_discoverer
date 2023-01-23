<template>
    <v-container
        :fluid = "$vuetify.breakpoint.lgAndDown" 
        >
        <v-container
            :id="contianerId"
            :fluid = "$vuetify.breakpoint.mdAndDown" 
            >
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
            </v-row>
            <v-row v-if="querying" class="pt-10">
                <v-progress-linear
                    style="min-height: 4px;"
                    indeterminate
                    v-model="value"
                    :active="querying"
                    :query="querying"
                ></v-progress-linear>
            </v-row>
        </v-container>
        <v-container fluid>
            <v-row v-if="queryDone">
                <div v-if="results" class="pt-5 mx-auto resultsPanel">
                    <Results :tools="results.tools" :inputParameters="results.input_parameters" :run_id="results.runId" />
                </div>
            
                <v-alert
                    v-if="resultsNotFound"
                    text
                    type="info"
                    icon="mdi-alert-circle"
                    width="90%"
                    class="mt-5 text-center mx-auto text-body-2"
                    >
                    No tools were found for the given search terms
                </v-alert>
                <v-alert
                    v-if="resultsError"
                    text
                    type="error"
                    icon="mdi-alert"
                    width="90%"
                    class="mt-5 text-center mx-auto text-body-2"
                    >
                    Something went wrong while fetching results
                </v-alert>
            </v-row>
        </v-container>
    </v-container>
</template>
<script>
import Input from '../components/discover/Input.vue'
import Results from '../components/discover/results/Results.vue'
import { mapGetters } from 'vuex'
  
export default {
    name: 'discover',
    components: {
        Input,
        Results
    },
    created() {
        // check if id queried in the route to fetch results data
        this.checkIdInParameters()
        //this.$watch(
        //    () => this.$route.params,
        //    () => {
                /// Fetch the results from the API and store them in the results variable
        //        if(this.$route.params.id){
        //            this.$store.dispatch('fetchResultsById', this.$route.params.id)
        //            }
        //        },
            // fetch the data when the view is created and the data is
            // already being observed
        //    { immediate: false }
        //)
    },
    computed: {
        contianerId(){
            if(this.$vuetify.breakpoint.xl){
                return 'input-discoverer-large'
                }
            else if(this.$vuetify.breakpoint.mdAndDown){
                return 'discoverer-md-and-down'
            }
            else{
                return ''
                }
            },
        ...mapGetters({
            queryDone: 'getQuery',
            querying: 'getQuerying',
            results: 'getResults',
            resultsNotFound: 'getResultsNotFound',
            resultsError: 'getResultsError',
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
        async checkIdInParameters(){
            // Check if id is queried
            // If it is, fetch the results from the API
            console.log('Checking parameters: ', this.$route)

            if(this.$route.query.id!=undefined){
                console.log('Fetching results by id: ', this.$route.query.id)
                this.$store.dispatch('fetchResultsById', this.$route.query.id)
                }
            },
        // Run the discoverer with the terms in textArea 
        // Called when the button is clicked
        async runDiscoverer (terms) {
            // ⚒️ console.log('Terms: ", terms)
            this.$store.dispatch('fetchResultsByQuery', terms)
            },
        }
    }
</script>
<style scoped>
#discoverer-md-and-down{
    width: 95% !important;
    margin: auto !important;
    }

#input-discoverer-large{
    width: 65%;
}
.resultsPanel{
    width: 100%;
    }
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

</style>
