<template>
    <div class="ml-6">
        <span class="text-subtitle-1">URL: </span><a :href="resultsURL" target='_blank'>{{ resultsURL }}</a>

    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    name: 'ResultsURL',
    computed: {
        ...mapGetters({
            resultsURL: 'getResultsURL',
        })
    },
}
</script>