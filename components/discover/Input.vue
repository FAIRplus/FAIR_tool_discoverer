<template>
    <v-container fluid>
        <v-row>
            <AutocompleteBar @add-item="addNewItem"/>
            <v-row>
                <v-col cols="7">
                    <TextArea :inputTerms="inputTerms" @edit-input-item="editItem" @remove-input-item="removeItem" />
                </v-col>
                <v-col cols="1" class="d-flex flex-wrap align-content-end pb-10 pl-0">
                    <v-btn
                        color="grey"
                        dark
                        @click="clearTerms"
                        class=""
                        >
                        <small> CLEAR <br>SEARCH</small><v-icon>mdi-delete</v-icon>
                    </v-btn>
                    <v-btn
                        color="success"
                        dark
                        class="mt-3"
                        @click="runDiscoverer(terms)"
                        >
                        <small> RUN <br> SEARCH</small><v-icon>mdi-rocket-launch</v-icon>
                    </v-btn> 
                </v-col>
                <v-col cols="4">
                    <ExamplesKeywords @click='sampleInput'/>
                </v-col>
            </v-row>
        </v-row>
    </v-container>
</template>
<script>
import AutocompleteBar from './input/AutocompleteBar.vue'
import TextArea from './input/TextArea.vue'
import EditBtn from './input/EditBtn.vue'
import DeleteBtn from './input/DeleteBtn.vue'
import ExamplesKeywords from './ExamplesKeywords.vue'


export default {
    name: 'InputArea',
    components: { 
        EditBtn,
        DeleteBtn,
        ExamplesKeywords,
        AutocompleteBar,
        TextArea
        },
    props: [],
    data () {
        return {
          inputTerms: [],
          termsNames:[],
          hover:[],
          btns: {
                'edit':{
                    'icon':'mdi-pencil', 
                    'text':'Edit'
                    },
                'delete':{
                    'icon':'mdi-trash-can-outline', 
                    'text':'Remove'
                    }
                },
        }
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
            this.terms = []
            for(let i=0; i<keywords.length;i++){
                let newItem = {
                    'label':keywords[i]['label'], 
                    'weight':keywords[i]['weight'],
                    'ClassId':keywords[i]['ClassId'],
                    'isEditing':false
                }
                this.inputTerms.push(item)
            }
        },
        runDiscoverer(){
            // Trigger run discoverer in parent component (discover.vue page) 
            // Called by Run Search button
            // ⚒️ console.log('Run discorer with terms: ', this.inputTerms)
            this.$emit("click", this.inputTerms)
        },
        clearTerms(){
            this.terms = []
        }
    }
}
</script>
  