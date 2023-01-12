<template>
    <div class="text-overline">
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

.text-overline {
    font-size: 0.25rem;
    font-weight: 500;
    line-height: 2;
    letter-spacing: 0.07633em !important;
    text-transform: uppercase;
};


</style>