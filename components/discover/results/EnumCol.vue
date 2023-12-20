<template>
    <td class="pt-2 pb-2">
        <div
            v-if="items != null"
            v-for="(item) in elementsList"
            :key="items.indexOf(item)"
            >
                <v-chip
                    small
                    outlined
                    :href="edamBrowserLink(item.uri)" 
                    target="_blank"
                    class="custom-chip mt-1 "
                    >
                   {{ item.label }}
                </v-chip>                
            </div>
          <span v-if="items != null && dots"><a class="text-caption">more</a></span>  
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
            if(this.items){
                return this.trimListIfNotSelected(this.items, this.idx)
            }else{
                return []
            }
        },
        dots() {
            if(this.items.length > 10){
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
                var short_list = list.slice(0,10)
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
  max-width: 95%;
  box-sizing: border-box;
}

.custom-chip {
  max-width: 100%; /* Set the desired width for the chips */
}

.v-chip >>> .v-chip__content {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis !important;
    height: auto !important;
    text-align: center;
}


</style>