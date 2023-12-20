<template>
    <v-container fluid class="main-container">
            <iframe
            width="100%" 
            height="110%" 
            frameborder="0"
            src="https://fair-tool-discoverer.bsc.es/api/docs"
            scrolling="yes"
            ></iframe>

    </v-container>
</template>
<script>

export default {
    name: 'api',
    layout: 'embedIframeFullWidth'
}
</script>

<style scoped>


.main-container{
    height: 100vh;
    width: 100vw;
    padding: 0;
    margin: 0;
}


</style>

