<template>
    <td class="pt-2 pl-2">
        <span v-html="descriptionHtml"></span>
    </td>
</template>

<script>
export default {
    name: 'DescriptionCol',
    props: ['selected', 'idx', 'description'],
    data(){
        return {
            select:null
        }
    },

    computed: {
        descriptionHtml() {
            return this.descriptionSpan(this.trimIfNotSelected(this.description[0], this.idx))
        }
    },

    methods: {
        trimIfNotSelected(value, idx){
            if(this.selected === idx){
                return(value)
            }else{
                if(value.length > 320){
                    var short = `${value.substring(0,380)} ...`
                }else{
                 return(value)
                }
            return(short)
            }
        },
        descriptionSpan(description){
            const html = `<p class="text-caption">${description}</p>`
            return(html)
        },
    }
}
</script>

<style scoped>
</style>