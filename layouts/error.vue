<template>
  <v-container
    class="fill-height"
    fluid
    >
    <v-row align="center" class="justify-center">
      <v-col cols="12" class="text-center">
        <h1 class="text-h5 text-center title">
          Something went wrong
        </h1>
      </v-col>
      <v-col cols="12">
        <h4 class="text-overline text-center" v-if="error.statusCode === 404">
          {{ pageNotFound }}
        </h4>
        <h4 class="text-overline text-center" v-else-if="error.statusCode === 503">
          {{ serverError }}
        </h4>
        <h4 class="text-overline text-center" v-else>
          {{ otherError }}
        </h4>
      </v-col>
      <v-col cols="12" align-self="center" class="text-center mt-3">
        <v-btn
          color="#3949AB"
          rounded
          to="/"      
          outlined>
          Go to Home
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: 'Page Not Found',
      otherError: 'An error occurred',
      serverError: 'Server Error'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
.title {
  color: #3949AB !important;
}

#main-div{
  margin: auto;
}
</style>
