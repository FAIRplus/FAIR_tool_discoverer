<template>
    <div>
        <v-row
            justify="start"
            class="d-flex align-end">
            <div
                column
                class="ml-2 mt-6 d-flex mb-4"
                >
                <v-sheet
                    v-for="source in avatars_present"
                    :key="source.label"
                    class="chip white--text text-caption pa-0 d-flex justify-center align-center mr-1"
                    rounded="xl"
                    >
                    <a :href="itemSources[source.label]">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-img :src="build_img_src(source)" max-width="22px" class="pa-0" contain v-on="on"></v-img>
                            </template>
                            <span>{{ source.content }}</span>
                        </v-tooltip>
                    </a> 
                    
                </v-sheet>
            </div>
        </v-row>
    </div>
       
</template>


<script>

export default {
    name: 'Sources',
    props: ['itemSources'],
    computed: {
        avatars_present(){
            const filtered = Object.keys(this.itemSources)
                .reduce((obj, key) => ({ ...obj, [key]: this.avatars[key] }), {});
            return filtered            
        }
    },
    data(){
        return {
            avatars: {
                biotools: {
                    src:'elixir-logo-indigo.svg',
                    color:'#FFA500',
                    content:'bio.tools',
                    url:'bio.tools',
                    label: 'biotools',
                },
                bioconda: {
                    src:'bioconda-logo-indigo.svg',
                    color:'#005500',
                    content:'bioconda',
                    url:'',
                    label:'bioconda'
                },
                github: {
                    src:'github-logo-indigo.svg',
                    color:'#000000',
                    content:'GitHub',
                    url:'github.org',
                    label:'github'
                },
                bioconductor: {
                    src:'bioconductor-logo-indigo.svg',
                    color:'#2f93ba',
                    content:'Bioconductor',
                    url:'',
                    label:'bioconductor'
                },
                galaxy: {
                    src: 'galaxy-logo-indigo.svg',
                    color: '#134798',
                    content: 'Galaxy Eu',
                    url:'',
                    label: 'galaxy'
                },
                toolshed: {
                    src: 'galaxy-logo-indigo.svg',
                    color: '#134798',
                    content: 'Galaxy Toolshed',
                    url:'',
                    label: 'galaxy'
                },
                sourceforge: {
                    src: 'sourceforge-logo-indigo.svg',
                    color: '#ff6602',
                    content: 'SourceForge',
                    url:'',
                    label: 'sourceforge'
                },
                bitbucket: {
                    src: 'bitbucket-logo-indigo.svg',
                    color: '#005ed9',
                    content: 'Bitbucket',
                    url:'',
                    label: 'bitbucket'
                },
                other: {
                    src: 'other-logo-indigo.svg',
                    color: '#535682',
                    content: 'Homepage',
                    url:'',
                    label: 'other'
                }
            }
        }
    },
    methods:{
        // build img require
        build_img_src(source){
            var img_src = require('../../../static/img/' + source.src)
            console.log(this.avatars_present)
            return img_src
        },
        // make HEX color transparent
        transparent(color){
            var transparent_color = color + '40'
            return transparent_color
        }
        
    }
}
</script>
<style scoped>
.chip {
  height: 25px !important;
  width: 25px !important;
  background-color: #E8EAF6 !important;

}

</style>

