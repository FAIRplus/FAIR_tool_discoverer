<template>
     <v-container>
        <v-row class="mt-8">
            <v-icon color="#3949AB">
                mdi-tools
            </v-icon>
            <h4 class="text-h5 title ml-2">
                What tools to use for FAIRification tasks?
            </h4>
        </v-row>
        <v-row>
            <v-col cols="8" class="text-body-2 text-justify">
                The <b>FAIRification Tool Discoverer</b> suggests tools for common FAIRification tasks. <br>
                The tools are collected from public archives and curated for FAIRification capabilities 
                (see details in <a href="/Help">About</a>).
                <br>
                For detailed information about using such tools, or how to perform FAIRification, 
                please check the <a href="https://fairplus.github.io/the-fair-cookbook/content/home.html">FAIR Cookbook</a>.
                <br><br>
                Some manually curated tool lists are shown below:

                <v-expansion-panels class="mt-5">
                    <v-expansion-panel
                        v-for="(item) in keyw_lists"
                        :key="item"
                        >
                        <v-expansion-panel-header class="text-subtitle-2">
                            {{item.label}}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content class="text-caption ml-3">
                            <div v-for="(keyword) in item.terms" :key="keyword">
                                {{keyword}}
                            </div>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            
                <br><br>
                For detailed information about using such tools, or how to perform <i>FAIRification</i>, 
                please check the <a href="https://fairplus.github.io/the-fair-cookbook/content/home.html">FAIR Cookbook<sup class="link-icon"><i class="fas fa-external-link-alt"></i></sup></a>.
        </v-col>
        </v-row>
     </v-container>
</template>
<style scoped>
.title{
    color: #3949AB !important;
}
.lists{
    margin-bottom: 1em
    }

.v-container >>> a{
    color:#300761 !important;
    text-decoration: none
    }
.link-icon{
    color:#300761;
    font-size: .6em;
    margin: 0%;
    padding: 0%
    }
.link-icon >>> i{
    margin-left: 0.25em;
    margin-right: 0.25em
    }
.v-container {
    font-size: .2rem;
    margin-bottom: 3%;
    width: 90%;
    }

</style>
<script>
export default {
name: 'FAIRification',
data () {
    return {
    keyw_lists : [
        {'label':'Data vocabulary/ontology','terms': ['Ontology annotation','Semantic annotation','Text mining',
'Text annotation','Entity tagging','Entity recognition','Named-entity and concept recognition',
'Ontology and terminology','Query expansion','Free text mapping','Text Annotation','Annotation','NLP']},
        {'label':'ETL process','terms': ['Data integration and warehousing','Data governance',
        'Data identity and mapping','Database management','Data quality management','Query and retrieval',
        'Information extraction','Format validation']}
    ]
    }
}
}
</script>