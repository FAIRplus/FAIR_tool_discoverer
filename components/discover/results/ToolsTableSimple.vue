<template>
    <div class="mt-5">
    
        <!--Tools table START-->
        {{ tools.length }} tools
        <v-data-table
            :v-model="rowSelect"
            :headers="headers"
            :items="tools"
            :items-per-page="10"
            :sort-by="['score']"
            :sort-desc="[true]"
            :fixed_header="true"
            no-data-text="No tools found"
            multi-sort
            class="elevation-0 mt-10"
            >
            <template v-slot:[`body`]="{ items }">
                <tbody class="{'caption': $vuetify.breakpoint.mdAndDown}">
                    
                    <tr 
                        @click="rowSelect(key)" 
                        v-for="(item, key) in items" :key="item._id.toString()"
                    >
                    <!-- first column for arrow and type. Type is not displayed here, but is necessary for the filtering to work -->
                        <ArrowsCol 
                            :down="arrowsDownShow(key, item.name)" 
                            :up="arrowsUpShow(key, item.name)"
                            />

                        <NameCol 
                            :name="item.name" 
                            :sources="item.sources_labels" 
                            :type="item.type"
                            class="pb-2 pt-1 pr-1"
                            />

                        <DescriptionCol 
                            :description="item.description" 
                            :selected="selected" 
                            :idx="key" 
                            />

                        <CurationCol 
                            :curation="item.curation" 
                            />
                        
                        <EnumCol 
                            :items="item.edam_topics" 
                            :selected="selected" 
                            :arrowsUp="arrowsUpShow(key, item.name)"
                            :idx="key" />
                        
                        <EnumCol 
                            :items="item.edam_operations"
                            :selected="selected"
                            :arrowsUp="arrowsUpShow(key, item.name)"
                            :idx="key"/>
                        
                            <!-- Put following cells (input data types and output data types) as separate components-->
                        <EnumCol 
                            :items="item.input_format_labels"
                            :selected="selected"
                            :arrowsUp="arrowsUpShow(key, item.name)"
                            :idx="key"/>
                        
                        <EnumCol 
                            :items="item.output_format_labels"
                            :selected="selected"
                            :arrowsUp="arrowsUpShow(key, item.name)"
                            :idx="key"/>

                        <!--PublicationsCol 
                            :item="item" 
                            :idx="key"
                            class="pt-1 pb-1" 
                            /-->

                        <LicenseCol :licenses="item.license"  />
                    </tr>
                </tbody>
            </template>
        </v-data-table>
        <!--Tools table END-->
    </div>
</template>

<script>
import FilterBtn from './FilterBtn.vue'
import ArrowsCol from './ArrowsCol.vue'
import NameCol from './NameCol.vue'
import CurationCol from './CurationCol.vue'
import DescriptionCol from './DescriptionCol.vue'
import EnumCol from './EnumCol.vue'
import PublicationsCol from './PublicationsCol.vue'
import LicenseCol from './LicenseCol.vue'
import MockResult from './mocks/MockTools.json'

export default {
    name : 'ToolsTable',
    props: ["tools"],
    components : {
        FilterBtn,
        ArrowsCol,
        NameCol,
        CurationCol,
        DescriptionCol,
        EnumCol,
        PublicationsCol,
        LicenseCol,
    },
    data() {
        return {
            MockResult,
            inputValues: null,
            outputValues: null,
            curationValues: null,
            toggle_sources: [0,1,2,3,4,5,6],
            toggle_types: [0,1,2,3,4],
            activeResults: true,
            panel: 1,
            search: '',
            selected: null,
            isHovering: false,
            longResults:[],
            filtersMapping: {
                sources : ['biotools', 'github', 'bioconda','galaxy', 'sourceforge', 'bioconductor', 'bitbucket'],
                types : ['cmd', 'web', 'library', 'db', 'suite']
            }
        }
    }, 
    computed: {
        options () {
            return {
                duration: 3,
                offset: 2,
            }
        },
        headers () {
            return [
                {
                    text: '', 
                    align: 'start', 
                    sortable: false, 
                    value: 'type', 
                    width: '1%',
                },
                {
                    text: 'Tool Name', 
                    align: 'start', 
                    sortable: false, 
                    value: 'source', 
                    width: '2.5rem',
                },
                {text: 'Description', value: 'description', width: '18rem'},
                {
                    text: 'Curation', 
                    value: 'curation', 
                    width: '6rem',
                },
                {text: 'Related Topics', value: 'edam_topics', width: '8rem'},
                {text: 'Functionality', value: 'edam_operations', width: '8rem'},
                {
                    text: 'Input Format', 
                    value: 'input_formats', 
                    width: '9rem'
                },
                {
                    text: 'Output Format', 
                    value: 'output_formats', 
                    width: '9rem',
                },
                {text: 'Publications', value: 'publications', width: '15rem'},
                {text: 'License', value: 'license', width: '5rem'},
                ]
            },
    },
    mounted() {
        this.tools.forEach((item) => {
                if(item.description[0].length>320){
                    this.longResults.push(item.name)
                }
                if(item.edam_operations.length>5){
                    this.longResults.push(item.name)
                }
                if(item.edam_topics.length>5){
                    this.longResults.push(item.name)
                }
            }
        )
    },
    methods : {
        filterDataType(inputValues, value){
            if(inputValues === ''){
                return value
            }else{
                console.log('Input Values:')
                console.log(inputValues)
                console.log('Value:')
                console.log(value)
                
                const overlapArray = value.filter(item => item.toLowerCase().includes(inputValues.toLowerCase()))
                /* If overlap, show tool */
                console.log('Overlap:')
                console.log(overlapArray)

                if(overlapArray.length>0){
                    return value
                }else{
                    return false
                }   
            }
           

        },
        filter(toggleArray, mappingFunct, value){
            /* Convert filters index to sources labels*/
            var mapped_filters = toggleArray.map(mappingFunct)
            
            /* Overlap between tool sources and filters*/
            const overlapArray = mapped_filters.filter(item => value.includes(item))
            /* If overlap, show tool */
            // console.log(overlapArray)
            if(overlapArray.length>0){
                return value
            }else{
                return false
            }   
        },
        sourceMapping(x){
            return this.filtersMapping.sources[x]
        },
        typeMapping(x){
            return this.filtersMapping.types[x]
        },
        rowSelect(idx) {
            console.log('selected', idx)
            if(this.selected === idx){
                this.selected = null;
            } else {
                this.selected = idx;
            }
        },
        arrowsDownShow(idx, toolID){
            if(this.longResults.includes(toolID) && idx != this.selected){
                return(true)
            }else{
                return(false)
            }
        },
        arrowsUpShow(idx, toolID){
            if(this.longResults.includes(toolID) && idx === this.selected){
                return(true)
            }else{
                return(false)
            }
        },
        
        formats(formats){
            var string = ''
            for (let i = 0; i < formats.length; i++) {
                if(i>0){
                string= string + ', ' + formats[i]
                }else{
                string= string + ': ' + formats[i]
                }
        }
        return(string)
        },
        span(title, year){
            const span = `${title} (${year})`
            return(span)
        },
        
        formatNumber (num) {
            return parseFloat(num).toFixed(2)
        }
    }
}
</script>

<style scoped>


.chip-truncated{
    height: auto;
    white-space: normal;
}

.drag {
    overflow: hidden;
    display: block
}

.v-data-table.v-data-table.v-data-table >>> tr:hover  {
  background-color: white !important;
}

.v-data-table.v-data-table.v-data-table >>> td  {
  margin: 0px !important;
  padding-right: .2rem;
  padding-left: .2rem;
}
.v-text-field >>> label {
    font-size: 0.9em;
}

.v-text-field >>> input {
    font-size: 1em;
}

#url{
  width: 96%;
  text-align: left;
  margin-right: auto;
  margin-left: auto;
}

#url p{
  text-indent: .7rem;
}


</style>