<template>
    <v-row>
        <v-col 
            cols="10"
            sm="8"
            md="6">
            <!-- `item-text` is used for the search -->
            <!-- `item-value` is assigned to `v-model` (`input` variable) -->
            <v-autocomplete
                v-model="input"
                :items="EDAM_items"
                :search-input.sync="cachedterms"
                :debounce-search="0"
                item-text="PreferredLabel"
                :item-value="getValue"
                placeholder="Start typing to search EDAM terms"
                background-color="#ECEFF1"
                cache-items
                hide-no-data
                hide-selected
                small-chips
                chips
                solo
                >
                <template v-slot:selection="data">
                    <v-chip
                        class="ma-2 text-caption"
                        :color=getColor(data.item)
                        text-color="white"
                        small
                        label
                        >
                        {{ getLabel(data.item) }}
                    </v-chip>
                    {{data.item.PreferredLabel}}
                </template>
                <template v-slot:item="data">
                    <template>
                        <v-chip
                            class="ma-2 text-caption"
                            :color=getColor(data.item)
                            text-color="white"
                            small
                            label
                            >
                            {{ getLabel(data.item) }}
                        </v-chip>
                        <v-list-item-content>
                            <v-list-item-title v-html="data.item.PreferredLabel"></v-list-item-title>
                        </v-list-item-content>
                    </template>
                </template>
            </v-autocomplete>
        </v-col>
        <v-col 
            cols="1"
            class="mt-2">
            <v-btn
                color="#3949AB"
                class="button"
                dark
                @click="addThisItem"
                >
                <small
                    v-if="$vuetify.breakpoint.smAndUp"
                    >
                    ADD TERM <br>TO SEARCH
                </small>
                <v-icon>mdi-plus</v-icon>
            </v-btn>

        </v-col>
    </v-row>
</template>
<script>
import EDAM from "./EDAM_1.25.json";

export default {
    name: 'AutocompleteBar',
    data() {
        return {
            input: null,
            cachedterms: "",
            EDAM_items: EDAM,
        }
    },
    methods: {
        addThisItem() {
            // if input is undefined, then the user has not selected an item from the autocomplete list
            if(this.input==null){
                var Label = this.cachedterms
                var ClassId = null
                // clear cachedterms field
                this.cachedterms = null
            }
            // if input is not undefined, then the user has selected an item from the autocomplete list
            else{
                var Label = this.input.PreferredLabel
                var ClassId = this.input.ClassId
                // clear input field
                this.input = null
            }

            const payload = {
                'Label': Label,
                'ClassId': ClassId
            }

            // ⚒️ console.log('Payload to emit to parent: ', payload)

            // add the term to the terms array (in parent component)
            this.$emit('add-item', payload)
        },
        // Returns the whole item. This is the item-value property of the autocomplete component
        // Needed so the whole item is assigned to the input variable
        getValue(item){
            return(item)
        },
        // Returns the category of the item. 
        // This is displayed in the chips inside the autocomplete component
        getLabel(item){
            if(item.ClassId.includes('operation')===true){
                return('Operation')
            }else if(item.ClassId.includes('format')===true){
                return('Data Type')
            }else if(item.ClassId.includes('topic')===true){
                return('Topic')
            }else{
                return('Other')
            }
        },
        // Returns the color used in the chips inside the autocomplete component.
        // The color depends on the category of the item.
        getColor(item){
            if(item.ClassId.includes('operation')===true){
                return('teal')
            }else if(item.ClassId.includes('format')===true){
                return('grey')
            }else if(item.ClassId.includes('topic')===true){
                return('blue')
            }else{
                return('grey')
            }
        }
    }
}
</script>
