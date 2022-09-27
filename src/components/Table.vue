<template>
    <div>
        <v-card elevation="2" style="margin-bottom:4em; margin-top:2em">
            <v-form>
                <v-container>
                    <v-row>
                        <v-col cols="12" class="py-2">
                        <h5>
                            Filters
                        </h5>
                        </v-col>
                        
                        <v-col
                        cols="12"
                        sm="6"
                        md="3"
                        class="py-2"
                        >   
                            <span class="filterTitle">
                            Availability
                            </span>
                            <v-btn-toggle
                            v-model="toggle_sources"
                            multiple
                            dense
                            group
                            class="flex-wrap" 
                            >
                                <FilterBtn 
                                    v-for="label in filtersMapping.sources" 
                                    :key="filtersMapping.sources.indexOf(label)" 
                                    :label="label" 
                                    icon />
                            </v-btn-toggle>
                        </v-col>
                        <v-col
                        cols="12"
                        sm="6"
                        md="3"
                        class="py-2"
                        >    
                        <span class="filterTitle">
                            Type of Software
                        </span>
                            <v-btn-toggle
                                v-model="toggle_types"
                                multiple
                                dense
                                group
                                class="flex-wrap" 
                            >   
                                <FilterBtn  
                                    v-for="item in filtersMapping.types" 
                                    :key="filtersMapping.types.indexOf(item)" 
                                    :label="item" 
                                    />

                            </v-btn-toggle>
                        </v-col>

                        <v-col
                        cols="12"
                        sm="6"
                        md="2"
                        class="py-2"
                        >
                            <span class="filterTitle">
                                Input Data Format
                            </span>
                            <v-text-field
                                v-model="inputValues"
                                regular
                                dense
                                label="Type format here"
                                style="margin-top:.8em"
                            ></v-text-field>
                        </v-col>
                        <v-col
                        cols="12"
                        sm="6"
                        md="2"
                        class="py-2"
                        >
                            <span class="filterTitle">
                                Output Data Format
                            </span>
                            <v-text-field
                                v-model="outputValues"
                                regular
                                dense
                                label="Type format here"
                                style="margin-top:.8em"
                            ></v-text-field>
                        </v-col>
                        <v-col
                        cols="12"
                        sm="6"
                        md="2"
                        class="py-2"
                        >
                            <span class="filterTitle">
                                Curation
                            </span>
                            <v-text-field
                                v-model="curationValues"
                                regular
                                dense
                                label="Type FAIRification here"
                                style="margin-top:.8em"
                            ></v-text-field>
                        </v-col>

                    </v-row>
                </v-container>
            </v-form>
        </v-card >
    <div >
        <v-data-table
            v-model="rowSelect"
            :headers="headers"
            :items="tools"
            :items-per-page="8"
            :search="search"
            :sort-by="['score']"
            :sort-desc="[true]"
            :fixed_header="true"
            no-data-text="No tools found"
            multi-sort
            class="elevation-0"

            >
            <template v-slot:[`body`]="{ items }">
                <tbody class="{'caption': $vuetify.breakpoint.mdAndDown}">
                <tr 
                    @click="rowSelect(key)" 
                    v-for="(item, key) in items" :key="item._id.toString()"
                >
                    <ArrowsCol :down="arrowsDownShow(key, item.name)" :up="arrowsUpShow(key, item.name)"/>
                    <NameCol :name="item.name" :sources="item.sources_labels" :type="item.type" />
                    <td class="empty"></td> <!-- empty column for the type. Necessary for the filtering to work -->
                    <DescriptionCol :description="item.description" :selected="selected" :idx="key" />
                    <CurationCol :curation="item.curation" />
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

                    <PublicationsCol :item="item" :idx="key" />

                    <LicenseCol :licenses="item.license"  />
                    <ScoreCol :score="item.score" id="last"/>

                </tr>
                </tbody>
            </template>
            </v-data-table>
    </div>
    
    </div>
</template>

<script>
import FilterBtn from './FilterBtn.vue'
import ArrowsCol from './ArrowsCol.vue'
import NameCol from './NameCol.vue'
import TypeCol from './TypeCol.vue'
import CurationCol from './CurationCol.vue'
import DescriptionCol from './DescriptionCol.vue'
import EnumCol from './EnumCol.vue'
import InputCol from './InputCol.vue'
import PublicationsCol from './PublicationsCol.vue'
import LicenseCol from './LicenseCol.vue'
import ScoreCol from './ScoreCol.vue'


export default {
    name : 'Table',
    props: ["tools"],
    components : {
        FilterBtn,
        ArrowsCol,
        NameCol,
        TypeCol,
        CurationCol,
        DescriptionCol,
        EnumCol,
        InputCol,
        PublicationsCol,
        LicenseCol,
        ScoreCol
    },
    data() {
        return {
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
                {text: '', align: 'start', sortable: false, value: 'name', width: '0.6em'},
                {
                    text: 'Tool Name', 
                    align: 'start', 
                    sortable: false, 
                    value: 'source', 
                    width: '2.5rem',
                    filter: value => {
                        return this.filter(this.toggle_sources, this.sourceMapping, value)
                    }
                },
                {
                    text: '', 
                    value: 'type', 
                    width: '0px',
                    filter: value => {
                        return this.filter(this.toggle_types, this.typeMapping, value)
                    }
                },
                {text: 'Description', value: 'description', width: '15rem'},
                {
                    text: 'Curation', 
                    value: 'curation', 
                    width: '6rem',
                    filterable: true,
                    filter: value => {
                        if( value != undefined && this.curationValues != null ){
                            return this.filterDataType(this.curationValues, value)
                        }else{
                            return value
                        }
                    }
                },
                {text: 'Related Topics', value: 'edam_topics', width: '9rem'},
                {text: 'Functionality', value: 'edam_operations', width: '9rem'},
                {
                    text: 'Input Data Format', 
                    value: 'input_formats', 
                    width: '9rem',
                    filter: value => {
                        if( value != undefined && this.inputValues != null ){
                            return this.filterDataType(this.inputValues, value)
                        }else{
                            return value
                        }
                    }
                },
                {
                    text: 'Output Data Format', 
                    value: 'output_formats', 
                    width: '9rem',
                    filter: value => {
                        if( value != undefined && this.outputValues != null ){
                            return this.filterDataType(this.outputValues, value)
                        }else{
                            return value
                        }
                    }
                },
                {text: 'Publications', value: 'publications', width: '15rem'},
                {text: 'License', value: 'license', width: '5rem'},
                {text: 'Score', value: 'score', width: '3rem'}
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
    })},
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
            console.log(overlapArray)
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
        trimListIfNotSelected(list, idx){
        if(this.selected === idx){
            return(list)
        }else{
            var short_list = list.slice(0,5)
            return(short_list)
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
.v-data-table >>> th {
  font-size: smaller !important; 
}

.v-data-table.v-data-table.v-data-table >>> tr:hover  {
  background-color: white !important;
}

.v-data-table.v-data-table.v-data-table >>> td  {
  font-size: smaller !important;
  margin: 0px !important;
  padding-right: .5rem;
  padding-left: .5rem;
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

.empty {
    padding: 0 0 0 0 !important;
    margin: 0px;
    width: 2px !important;
}
</style>