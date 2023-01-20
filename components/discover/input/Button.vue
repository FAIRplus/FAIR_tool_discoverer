<template>
    <v-btn
        :color="color"
        dark
        class="button"
        @click="clickFunction"
        >
        <small v-html="text">  </small><v-icon>{{ icon }}</v-icon>
    </v-btn>
</template>

<style scoped>
 .button{
    width: 8em;
    padding-left:1.5em;
    padding-top: 8%;
    padding-bottom: 8%;
    height: 3em;
    margin-top: .2em;
  }
</style>

<script>
export default {
    name: 'Button',
    props: [ 'color', 'text', 'icon', 'clickFunction']
}
</script>