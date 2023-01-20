<template>
    <td>
        <v-chip-group
            v-if="items != null"
            column>
                <v-chip
                    v-for="(item) in elementsList" 
                    :key="items.indexOf(item)"
                    small
                    flex
                    outlined
                    :href="edamBrowserLink(item.uri)" 
                    target="_blank"
                    >
                   {{ item.label }}
                </v-chip>
            
            <span v-if="dots">...</span>                      
          </v-chip-group>        
    </td>
</template>

<script>
export default {
    name: 'EnumCol',
    props : ['items', 'arrowsUp', 'selected', 'idx'],
    data(){
        return {
        }
    },
    computed: {
        elementsList() {
            return this.trimListIfNotSelected(this.items, this.idx)
        },
        dots() {
            if(this.items.length > 5){
                if(this.arrowsUp == false){
                        return  true
                    }
                }
            return false   
        }
    },
    methods: {
        edamBrowserLink(uri){
            var id = uri.split('/').pop()
            var URL = 'https://edamontology.github.io/edam-browser/#' + id
            return URL
        },
        trimListIfNotSelected(list, idx){
            if(this.selected === idx){
                return(list)
            }else{
                var short_list = list.slice(0,5)
                return(short_list)
            }
        }
    }
}
</script>

<style scoped>


.v-chip {
  height: auto !important;
  min-width: 0;
  box-sizing: border-box;
}

.v-chip >>> .v-chip__content {
    white-space: normal;
    height: auto !important;
    flex-shrink: 3 !important;
    text-align: center;
}


</style>