<template>
    <v-btn
        class="pl-2 pr-1"
        > 
        <span class="filter">{{ label }}</span>
            <v-img
                v-if="icon"
                :src="require(`../../../static/img/${label}-logo-indigo.svg`)"
                max-width='20'
            ></v-img>
    </v-btn>
</template>
<script>

export default {
    name: 'FilterBtn',
    props: {
        label: String,
        icon: Boolean
        }
    }

</script>

<style>
.filter {
    font-size: .6rem;
}
</style>