<template>
    <v-container fluid>
        <v-row>
            <AutocompleteBar @add-item="addNewItem"/>
        </v-row>
        <v-row>
            <v-row>
                <v-col 
                    cols="12"
                    sm="10"
                    md="8"
                    lg="7"
                    xl="7">
                    <TextArea :inputTerms="inputTerms" @edit-input-item="editItem" @remove-input-item="removeItem" />
                </v-col>
                <v-col 
                    class="d-flex flex-wrap align-content-end pb-10 pl-0"
                    v-if="!buttonsLateral"
                    cols="10"
                    sm="2"
                    md="1"
                    lg="1"
                    xl="1">
                    <v-btn
                        color="grey"
                        :id="$vuetify.breakpoint.xs ? 'clear-small' : 'clear-large'"
                        dark
                        @click="clearTerms"
                        >
                        <small> CLEAR <br>TERMS</small>
                        <v-icon v-if="$vuetify.breakpoint.mdAndUp">mdi-delete</v-icon>
                    </v-btn>
                    <v-btn
                        color="success"
                        :id="$vuetify.breakpoint.xs ? 'run-search-small' : 'run-search-large'"
                        dark
                        @click="runDiscoverer"
                        >
                        <small> RUN <br> SEARCH</small>
                        <v-icon v-if="$vuetify.breakpoint.mdAndUp">mdi-rocket-launch</v-icon>
                    </v-btn> 
                </v-col>
                <v-col 
                    cols="12"
                    sm="10"
                    md="4"
                    lg="4"
                    xl="4">
                    <ExampleKeywords @load-keywords='sampleInput'/>
                </v-col>
                <v-col 
                    class="d-flex flex-wrap align-content-end pb-10 pl-0"
                    v-if="buttonsLateral"
                    cols="10"
                    sm="2"
                    md="10">
                    <v-btn
                        color="grey"
                        :id="buttonsLateral ? 'clear-small' : 'clear-large'"
                        dark
                        @click="clearTerms"
                        >
                        <small> CLEAR <br>TERMS</small>
                        <v-icon v-if="$vuetify.breakpoint.mdAndUp">mdi-delete</v-icon>
                    </v-btn>
                    <v-btn
                        color="success"
                        :id="buttonsLateral ? 'run-search-small' : 'run-search-large'"
                        dark
                        @click="runDiscoverer"
                        >
                        <small> RUN <br> SEARCH</small>
                        <v-icon v-if="$vuetify.breakpoint.mdAndUp">mdi-rocket-launch</v-icon>
                    </v-btn> 
                </v-col>
            </v-row>
        </v-row>
    </v-container>
</template>
<style>

#clear-small {
    margin-top: 0 !important;
    margin-left: 1em !important;
}

#clear-large {
    margin-top: 0em !important;
    margin-left: 0 !important;
}

#run-search-small {
    margin-top: 0 !important;
    margin-left: 1em !important;
}

#run-search-large {
    margin-top: 1em !important;
    margin-left: 0 !important;
}



</style>
<script>
import AutocompleteBar from './input/AutocompleteBar.vue'
import TextArea from './input/TextArea.vue'
import ExampleKeywords from './input/ExampleKeywords.vue'


export default {
    name: 'InputArea',
    components: {
        ExampleKeywords,
        AutocompleteBar,
        TextArea
        },
    props: [],
    data () {
        return {
          inputTerms: [],
        }
      },
    computed: {
        buttonsLateral(){
            switch (this.$vuetify.breakpoint.name) {
            case 'xs': return false
            case 'sm': return false
            case 'md': return true
            case 'lg': return true
            case 'xl': return true
            }
        },
    },
    methods: {
        // Add new item to the list - called from AutocompleteBar
        addNewItem(payload){
            var item = {
                'label':payload.Label, 
                'ClassId':payload.ClassId,
                'weight':'1.00', 
                'isEditing': false
                }
            this.inputTerms.push(item)
        },
        // Edit item in the list - called from TextArea
        editItem(payload){
            this.inputTerms[payload.index].label = payload.item.label;
            this.inputTerms[payload.index].weight = payload.item.weight;
            // ⚒️ console.log('Terms were edited: ',this.inputTerms.map(x => x.label))
        },
        // Remove item from the list - called from TextArea
        removeItem(index){
            this.inputTerms.splice(index, 1)
            // ⚒️ console.log('Terms: ',this.inputTerms.map(x => x.label))
        },
        // Add sample input items - called from ExamplesKeywords
        sampleInput (keywords) {
            this.inputTerms = []
            for(let i=0; i<keywords.length;i++){
                let newItem = {
                    'label':keywords[i]['label'], 
                    'weight':keywords[i]['weight'],
                    'ClassId':keywords[i]['ClassId'],
                    'isEditing':false
                }
                this.inputTerms.push(newItem)
            }
        },
        runDiscoverer(){
            // Trigger run discoverer in parent component (discover.vue page) 
            // Called by Run Search button
            // ⚒️ console.log('Run discorer with terms: ', this.inputTerms)
            this.$emit("click", this.inputTerms)
        },
        clearTerms(){
            this.inputTerms = []
        }
    }
}
</script>
  