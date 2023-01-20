<template>
    <v-container :id="smallViewPort">
        <SectionTitle
            title="Contact"
            icon="mdi-message-processing-outline"
            />
       
        <v-row>
            <v-col 
                cols="12"
                sm="10"
                md="8"
                lg="6"
                xl="6"
                class="text-body-2 text-justify ma-auto"
                >
                Please get in touch with us by creating a ticket in the <a href="https://github.com/FAIRplus/WP3_FAIR_tooling/tree/app" target="_blank">GitHub repository<sup class="link-icon"><i class="fas fa-external-link-alt"></i></sup></a>. 
                We welcome feedback regarding:
                <ul>
                <li>Errors in the outcome</li>
                <li>Recommending tools or implementation examples.</li>
                <li>FAIRification use cases</li>
                <li>Others</li>
                </ul>
            </v-col>
        </v-row>


        <sectionTitle
            title="Acknowledgements"
            icon="mdi-account-group-outline"
            />
        <v-row>
            <v-col
                cols="12"
                sm="10"
                md="8"
                lg="6"
                xl="6"
                class="text-body-2 text-justify ma-auto"
                >
                This software is developed by 
                <a href="https://bsc.es" target="_blank">BSC-CNS<sup class="link-icon"><i class="fas fa-external-link-alt"></i></sup></a>
                and
                <a href="https://ebi.ac.uk" target="_blank">EMBL-EBI<sup class="link-icon"><i class="fas fa-external-link-alt"></i></sup></a>
                , and funded by the 
                <a href="https://fairplus-project.eu/" target="_blank">IMI FAIRplus project<sup class="link-icon"><i class="fas fa-external-link-alt"></i></sup></a>.
            </v-col>
        </v-row>
        <SectionTitle
            title="Licensing"
            icon="mdi-script-text-outline"
            />
        <v-row>
            <v-col
                cols="12"
                sm="10"
                md="8"
                lg="6"
                xl="6"
                class="text-body-2 text-justify ma-auto"
                >
                The software is deployed under the <a href="https://github.com/FAIRplus/WP3_FAIR_tooling/blob/main/LICENSE" target="_blanck">Apache 2.0 license</a>.
            </v-col>
        </v-row>
    </v-container>
</template>
<style scoped>

#large-view-port {
    margin-bottom: 3% !important;
    width: 90% !important;
    }

#small-view-port {
    font-size: smaller !important;
    margin-left: auto !important;
    width: 95% !important;
    }
.title{
    color: #3949AB !important;
    font-size: larger !important;
}

</style>
<script>
import SectionTitle from '../components/sectionTitle.vue';
import sectionTitle from '../components/sectionTitle.vue';

export default {
    name: "about",
    comments: {
        sectionTitle
    },
    computed: {
        smallViewPort() {
            if (this.$vuetify.breakpoint.xs) {
                return "small-view-port";
            }
            else {
                return "large-view-port";
            }
        }
    },
    components: { SectionTitle }
}
</script>