<template>
    <v-row>
        <v-col cols="12" class="pa-0">
            <v-card elevation="0">
                <h5 :id="idSmall" class="text-body-1 mb-2">Example keyword lists</h5>
                <v-btn 
                    v-for="item in keywordSets" 
                    :key="item.PreferredLabel"
                    max-width="13.5em"
                    min-width="4em"
                    min-height="4.5em"
                    :color="item.color"
                    dark
                    outlined
                    small
                    @click="sampleInput(item.keywords)"
                    >
                    {{ item.label }}
                </v-btn>
            </v-card>
        </v-col>
    </v-row>
</template>
<style scoped>

#small{
  font-size: small !important;
  font-weight: 300 !important;
  margin-bottom: .2em !important;
}
.v-card{
  text-align: center;
  margin-top: 0;
  margin-left: 4%;
  margin-right: 1%;
  border-width: 1px;
}

.v-btn{
  text-transform: unset !important;
  margin: .4em;
  font-size: .7rem;
  white-space: normal;
  display: inline-block;
}

</style>

<script>
import ETL from './keywords/ETL.json'
import OntoAnno from './keywords/OntoAnno.json'
import IDminting from './keywords/IDminting.json'
import OntoEng from './keywords/OntoEng.json'
import OntoMag from './keywords/OntoMag.json'
import IdMap from './keywords/IdMap.json'


export default {
  name: 'ExampleKeywords',
  props: [],
  data() {
    return {
      keywordSets: [{'label':'Ontology Annotation','color': '#3949AB', 'keywords': OntoAnno},
      {'label':'Ontology Management','color': '#5C6BC0', 'keywords': OntoMag},
      {'label':'Ontology Engineering', 'color': '#283593', 'keywords': OntoEng},
      {'label':'Identifier Minting', 'color': '#3949AB', 'keywords': IDminting},
      {'label':'Identifier Mapping', 'color': '#5C6BC0', 'keywords': IdMap},
      {'label':'Extract, Transform, Load', 'color': '#283593','keywords': ETL}],
    }
  },
  computed: {
    idSmall(){
      if(this.$vuetify.breakpoint.smAndDown){
        return 'small'
      }
    }

  },
  methods: {
    // This method is called when a keywords button is clicked
    // Emits the keywords associates to that button to the parent component
    sampleInput(keywords){
      this.$emit("load-keywords", keywords)
    }
  }
}
</script>
