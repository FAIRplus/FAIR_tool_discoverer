<template>
    <v-tooltip bottom>
        <a v-bind:href=link target='_blank'>     
            <v-avatar
                v-on="on"
                v-bind:color="avatarProps.color"
                size="24"
                class="ma-0 pa-0"
                >
                <v-img :src="require(`@/assets/img/${avatarProps.src}`)"></v-img>
            </v-avatar>
        </a>
        <span>{{ avatarProps.content }}</span>
    </v-tooltip>
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
