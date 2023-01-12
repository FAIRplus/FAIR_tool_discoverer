<template>
    <div>
        <v-expansion-panels 
            v-model="panelTools"
            flat 
            hover
            >
            <v-expansion-panel
                expand
                >
                <v-expansion-panel-header>
                    <v-row class="ml-5">
                        <v-icon color="#3949AB">
                            mdi-dots-grid
                        </v-icon>
                        <h4 class="text-h5 title ml-2">
                        Results
                        </h4>
                    </v-row>
                    
                    <template v-slot:actions>
                        <v-icon color>
                            mdi-arrow-down-drop-circle-outline
                        </v-icon>
                    </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <ToolsTable :tools="tools"/>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>

        <v-expansion-panels
            v-model="panelInputTerms"
            flat 
            hover
            >
            <v-expansion-panel>
                <v-expansion-panel-header>
                    <v-row class="ml-5">
                        <v-icon 
                            color="#3949AB"
                            small
                            >
                            mdi-file-move-outline
                        </v-icon>
                        <h4 class="text-subtitle-1 title ml-2">
                        Searched terms
                        </h4>
                    </v-row>
                    <template v-slot:actions>
                        <v-icon>
                        mdi-arrow-down-drop-circle-outline
                        </v-icon>
                    </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <InputTermsTable :inputParameters="inputParameters"/>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>

        
        <v-row class="ml-10 mt-2">
            <v-icon 
                color="#3949AB"
                small
                >
                mdi-link-variant
            </v-icon>
            <span class="text-subtitle-1 title ml-2">URL: </span>
            <span>
                <a :href="resultsURL" target='_blank' class="ml-2 text-body-2">{{ resultsURL }}</a>
            </span>
        </v-row>
    </div>
</template>
<style scoped>
.title{
    color: #3949AB !important;
    }

a {
    color: black !important;
}
</style>


<script>
import ResultsURL from './ResultsURL.vue'
import ToolsTable from './ToolsTable.vue'
import InputTermsTable from './InputTermsTable.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'Results',
    props: ['tools', 'inputParameters', 'run_id'],
    components: {
        ResultsURL,
        ToolsTable,
        InputTermsTable
        },
    computed: {
        ...mapGetters({
            resultsURL: 'getResultsURL',
        })
    },
    data () {
        return {
            activeResults: true,
            search: '',
            selected: null,
            isHovering: false,
            longResults:[],
            panelTools: 0,
            panelInputTerms: 0
        }
    },
    methods:{
        build_url(id){
        if(this.tools.length===0){
            return('')
        }else{
            var url = 'https://fair-tool-discoverer.bsc.es/run/' + id
            return(url)
        }
        }
    }
}
</script>