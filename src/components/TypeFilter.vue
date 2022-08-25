<template>
    <v-col
      cols="12"
      class="py-2"
    >
    <p>
        Type of Software
    </p>
    <v-btn-toggle
          v-model="toggle_multiple"
          multiple
          dense
          group
        >
        <v-btn> 
            <span>CMD</span>
            </v-btn>
        <v-btn> 
            <span>WEB APP</span>
            </v-btn>
            <v-btn> 
            <span>library</span>
            </v-btn>
        <v-btn> 
            <span>DESKTOP APP</span>
            </v-btn>
        <v-btn>
            <span>suite</span>
             </v-btn>
        </v-btn-toggle>

    </v-col>
</template>
<script>

export default {
    name: 'TypeFilter',
    data() {
        return {
            toggle_multiple : [0,1,2,3,4]
        }
    }
}
</script>
