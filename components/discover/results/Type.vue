<template>
    <div class="text-body-1 grey--text text--darken-1">
      {{ dictGet(type).hover }}
    </div>
  
</template>

<script>
export default {
    name: 'TypeCol',
    props: ['type'],
    data() {
        return {
            typesAbb: {
                'cmd' : {
                    'text': 'CMD',
                    'hover': 'Command-line'
                },
                'web': {
                    'text': 'Web',
                    'hover': 'Web Application'
                },
                'db' : {
                'text': 'DB',
                'hover': 'Database'
                },
                'lib' : {
                    'text': 'Lib',
                    'hover': 'Library'
                },
                'suite' : {
                    'text': 'Suite',
                    'hover': 'Suite'
                },
                'unknown': {
                    'text': 'Unknown',
                    'hover': 'Unknown'
                }
            }
        }
    },
    methods: {
        dictGet(key) {
            var result = this.typesAbb[key] || {'text':key, "hover":key}
            return(result)
        },
    }
}
</script>

<style scoped>

.text-body-1 {
    font-size: 0.7rem !important;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 0.07633em !important;
};


</style>