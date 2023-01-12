<template>
    <td class="text-caption">
        {{ formatNumber(score) }} 
    </td>
</template>

<script>
export default {
    name: 'ScoreCol',
    props: ['score'],
    methods: {
        formatNumber (num) {
            return parseFloat(num).toFixed(2)
        }
    }

}
</script>

<style>

</style>