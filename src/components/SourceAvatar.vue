<template>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <a :href="link" target='_blank'>     
            <v-avatar
                :color="avatarProps.color"
                size="22"
                class="ma-0 pa-0"
                v-bind="attrs"
                v-on="on"
                >
                <v-img :src="require(`@/assets/img/${avatarProps.src}`)"></v-img>
            </v-avatar>
        </a>
        </template>
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
