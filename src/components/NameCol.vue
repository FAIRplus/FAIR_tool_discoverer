<template>
    <td>
        <h6 class="text-subtitle-1"> {{ name }} </h6>
        <TypeCol :type="type" />
        <SourcesCol :itemSources="sources" />
    </td>
</template>

<script>
import SourcesCol from './SourcesCol.vue'
import TypeCol from './TypeCol.vue'

export default {
    name: 'NameCol',
    props: ['name', 'type', 'sources'],
    components : {
        SourcesCol,
        TypeCol
    },
}

</script>

<style scoped>

.text-subtitle-1 {
    font-size: .8rem;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0075em;
};

</style>