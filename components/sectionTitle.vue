<template>
    <v-row class="mt-8">
        <v-col
            cols="12"
            sm="10"
            md="8"
            lg="6"
            xl="6"
            class="text-body-2 text-justify ma-auto">
            <v-row>
                <v-icon :color=color>
                    {{ icon }}
                </v-icon>
                <h4 
                    class="text-h5 ml-2 title" 
                    :style="titleStyle"
                    >
                    {{ title }}    
                </h4>
            </v-row>
        </v-col>
    </v-row>
</template>
<style scoped>
.title{
    font-size: large !important;
}
</style>
<script>

export default {
    name: 'sectionTitle',
    props: {
        title: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: false
        },
        color: {
            type: String,
            required: false,
            default: '#3949AB'
        }
    },
    computed:{
        titleStyle(){
            return {
                color: this.color,
            }
        }
    }
}

</script>