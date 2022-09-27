<template>
    <td>
        <v-chip-group
            active-class="primary--text"
            column
            >
                <v-chip
                    v-for="(item) in elementsList" 
                    :key="items.indexOf(item)"
                    small
                    outlined
                    label
                    :href="edamBrowserLink(item.uri)" 
                    target="_blank"
                    class="chip-truncated">
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

.chip-truncated{
    height: auto;
    white-space: normal;
}

</style>