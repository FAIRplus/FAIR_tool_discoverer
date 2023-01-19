<template>
    <v-container>
        <v-row class="mt-8">
            <v-icon color="#3949AB">
                mdi-help-circle
            </v-icon>
            <h4 class="text-h5 title ml-2">
                How does the FAIRification Tool Discoverer work?
            </h4>
        </v-row>
        <v-row>
            <v-col cols="8" class="text-body-2 text-justify">
                The <b>FAIRification Tool Discoverer</b> identifies tools from public archives for given 
                FAIRification capacities. 
                The tools are collected from 
                <a href="https://bio.tools/" target="_blank">Elixir Bio.tools<sup class="link-icon"><i class="fas fa-external-link-alt"></i></sup></a>, 
                <a href="https://openebench.bsc.es/" target="_blank">OpenEBench<sup class="link-icon"><i class="fas fa-external-link-alt"></i></sup></a>, 
                <a href="https://www.bioconductor.org/" target="_blank">Bioconductor<sup class="link-icon"><i class="fas fa-external-link-alt"></i></sup></a>, 
                <a href="https://usegalaxy.eu/" target="_blank">Galaxy EU<sup class="link-icon"><i class="fas fa-external-link-alt"></i></sup></a>,
                <a href="galaxy toolshed" target="_blank">Galaxy Toolshed<sup class="link-icon"><i class="fas fa-external-link-alt"></i></sup></a>, 
                <a href="https://github.com/" target="_blank">Github<sup class="link-icon"><i class="fas fa-external-link-alt"></i></sup></a>, 
                <a href="https://bitbucket.org/" target="_blank">Bitbucket<sup class="link-icon"><i class="fas fa-external-link-alt"></i></sup></a>
                and <a href="https://sourceforge.net/" target="_blank">Sourceforge<sup class="link-icon"><i class="fas fa-external-link-alt"></i></sup></a>. 
                <br>
                The FAIRification capacities are selected from <a href="https://fairplus-project.eu/" target="_blank">FAIRplus<sup class="link-icon"><i class="fas fa-external-link-alt"></i></sup></a>
                FAIRification experience and annotated using the <a href="https://edamontology.org/page" target="_blank">EDAM</a> ontology. 
                The tool list is ranked by confidence and relevance.
            </v-col>
        </v-row>
        <v-row class="mt-8"> 
            <v-icon color="#3949AB">
                mdi-help-circle
            </v-icon>
            <h4 class="text-h5 title ml-2">
                Input format
            </h4>
        </v-row>
        <v-row>
            <v-col cols="8" class="text-body-2 text-justify">
                Introduce a term in the input bar and click "Add term to search" to include it into the kywords list to search. While typing, similar EDAM terms will be dispalyed as a dropdown. 
                The list of keywords to search is displayed under the input bar as the terms are added to it.
                The grey label on the right indicates the type os EDAM term, either 'operation' or 'topic'. Once a term is added to the list, you can modify its weight by clicking the 'Edit' bottom on the right.
                <v-card elevation=0 class="mt-7 mb-7 text-center">
                    <v-img  
                        :src="screenshot"
                        max-width=600 
                        class="mx-auto elevation-1"
                        
                        >
                    </v-img>
                    <div class="text-caption mt-2">
                        See example keyword lists next to input box.
                    </div>
                </v-card>
                Weights are recommended to be in the range (0,1).
            </v-col>
        </v-row>
        <v-row class="mt-8"> 
            <v-icon color="#3949AB">
                mdi-help-circle
            </v-icon>
            <h4 class="text-h5 title ml-2">
                Troubleshooting
            </h4>
        </v-row>
        <v-row class="mb-5">
            <v-col  cols="8" class="text-body-2 text-justify">
                Empty lines and extra spaces are the main cause of input parsing errors. 
                If no tools match the query, a specific message will be displayed.
            </v-col>
        </v-row>
    </v-container>
</template>
<style scoped>

.title{
    color: #3949AB !important;
}

.link-icon{
    color:#300761;
    font-size: .5em;
    margin: 0%;
    padding: 0%;
    }
.link-icon >>> i{
    margin-left: 0.25em;
    margin-right: 0.25em
    }
.v-container >>> a{
    color:#300761 !important;
    text-decoration: none
    }

</style>

<script>
import screenshot from '../static/img/help_screenshot.png'

export default {
    name: 'Help',
    data() {
        return {
            screenshot: screenshot
        }
    }
}
</script>
