<template>
      
  </template>


<script>
export default {
  name: 'SourceAvatar',
  props: ['avatarProps', 'sources_labels'],
  data() {
    return {
      hover: false,
      lab: [],
      link:false
    }
  },
  mounted() {
    this.link = this.build_link()
  },
  methods: {
    build_link(){
      var source = this.avatarProps.label
      return(this.sources_labels[source])
    }
  }
}
</script>
