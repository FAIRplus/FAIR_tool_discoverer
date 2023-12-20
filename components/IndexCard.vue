<template>
    <v-card
        class="mx-auto pt-3 pl-2 pr-2"
        :max-width="cardMaxWidth"
        :min-height="cardMinHeight"
        >
        <v-card-title class="justify-space-around">
            <v-icon class="display-2" >{{item.icon}}</v-icon>
        </v-card-title>
        <v-card-subtitle class="text-center  pt-3">
            <h6 class="card-subtitle text-h5">{{item.title}}</h6>
        </v-card-subtitle>
        <v-card-text class="text-center">
            {{item.text}}
        </v-card-text>
        <v-card-actions class="justify-center">
            <v-btn
            :color="item.color"
            rounded
            outlined
            :to="item.to"
            >
            Go
            </v-btn>
        </v-card-actions>
        </v-card>
</template>
<script>

export default {
    name: "IndexCard",
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    computed: {
        cardMaxWidth() {
            switch (this.$vuetify.breakpoint.name) {
            case 'xs': return 400
            case 'sm': return 400
            case 'md': return 300
            case 'lg': return 350
            case 'xl': return 350
            }
        },
        cardMinHeight() {
            switch (this.$vuetify.breakpoint.name) {
            case 'xs': return 220
            case 'sm': return 300
            case 'md': return 250
            case 'lg': return 250
            case 'xl': return 250
            }
        }
    }
}

</script>


<style scoped>

.v-card{
  height: 280px;
  margin: 10px;
}

.card-subtitle  {
  color: black !important;
  font-weight: 400 !important;
  font-size: 1.2rem !important;
}


</style>