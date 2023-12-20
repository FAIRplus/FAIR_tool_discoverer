<template>
    <td>
        <v-chip
            v-for="(item) in curation" :key="curation.indexOf(item)"
            color="primary"
            class="mb-1 mt-1"
            small
            outlined
        >
            {{ item }}
        </v-chip>
    </td>
</template>
<script>
export default {
    name: 'CurationCol',
    props : ['curation'],
    data(){
        return {
        }
    },
    computed: {
    },
    methods: {
    }
}
</script>
<style scoped>
v-chip{
    max-width: 80%;
}
</style>