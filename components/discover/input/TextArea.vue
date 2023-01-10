<template>
    <v-card
        elevation="1"
        class="mr-5 pb-4 mb-2"
        >
        <v-card-text>
            <v-row v-for="(item, index) in inputTerms" :key="index">
                <v-col cols="7">
                <v-text-field 
                    v-model="item['label']"
                    :disabled="!item['isEditing']"
                    class="mt-0 pt-0"
                    color="#3949AB"
                    background-color='white'
                    hide-details="auto"
                    single-line
                    filled
                    dense
                    >
                    </v-text-field>
                </v-col>
                <v-col cols="2">
                    <v-text-field 
                        v-model="item['weight']"
                        :disabled="!item['isEditing']"
                        class="mt-0 pt-0"
                        hide-details="auto"
                        color="#3949AB"
                        background-color='white'
                        single-line
                        filled
                        dense
                        >
                        </v-text-field>
                </v-col>
                <v-col cols="2">
                    <EditBtn @click='editThisItem(index, item)' />
                    <DeleteBtn @click="removeThisItem(index)"/>
                </v-col>
            </v-row>     
        </v-card-text>
    </v-card>
</template>
<style scoped>
.v-card{
    margin-top: 0%;
    padding: auto;
    overflow: wrap;
    border-color: #edebeb;
    border-style: solid;
    border-width: 1;
    min-height: 22em;
    min-width: 90%;
  }
  .v-card >>> .v-text-field{
    font-size: .9rem;
  }
  .v-card >>> .v-row{
    margin-top: 0%;
    padding-top: 0%;
    margin-bottom: 0%;
    padding-bottom: 0%;
    font-size: small
  }
  .v-card >>> .v-col{
    margin-top: 0%;
    padding-top: 0%;
    margin-bottom: 0%;
    padding-bottom: 0%;
  }
</style>
<script>
import EditBtn from './EditBtn.vue'
import DeleteBtn from './DeleteBtn.vue'

export default {
    name: 'TextArea',
    components: {
        EditBtn,
        DeleteBtn
    },
    props: [ 'inputTerms' ],
    methods: {
        // This method is called when the edit button is clicked
        editThisItem(index, item) {
            const payload = {
                'index': index,
                'value': !item.isEditing,
                'item': item
            }
            // If the item is not in edit mode:
            // Edition mode is activated
            if(payload.isEditing === true){
                item.isEditing = !item.isEditing;
                console.log('edit mode activated')
            }else{
            // If the item is in edit mode (was edited):
            // Edition mode is deactivated and the new value is emitted
                this.$emit('edit-input-item', payload)
                item.isEditing = !item.isEditing;           }
        },
        // This method is called when the delete button is clicked
        removeThisItem(index) {
            this.$emit('remove-input-item', index)
        }
    }
}
</script>