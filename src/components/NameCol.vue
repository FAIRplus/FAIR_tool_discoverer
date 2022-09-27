<template>
    <td>
        <b><big>{{ name }}</big></b>
        <SourcesCol :itemSources="sources" />
    </td>
</template>

<script>
import SourcesCol from './SourcesCol.vue'

export default {
    name: 'NameCol',
    props: ['name', 'sources'],
    components : {
        SourcesCol
    },
}

</script>

<style>

</style>