<template>
    <td>
        <h6 class="text-subtitle-1"> {{ name }} </h6>
        <Type :type="type" />
        <Sources :itemSources="sources" />
    </td>
</template>

<script>
import Sources from './Sources.vue'
import Type from './Type.vue'

export default {
    name: 'NameCol',
    props: ['name', 'type', 'sources'],
    components : {
        Sources,
        Type
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