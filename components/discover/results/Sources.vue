<template>
    <div>
        <v-row
            justify="start">
            <v-chip-group
                column
                class="ml-2 mt-2"
                >
                <v-chip
                    v-for="source in avatars_present"
                    :key="source.label"
                    :color="transparent(source.color)"
                    small
                    class="white--text text-caption pr-1 pl-1"
                    > 
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-img :src="build_img_src(source)" max-width="25px" class="pa-0" contain v-on="on"></v-img>
                        </template>
                        <span>{{ source.content }}</span>
                    </v-tooltip>
                </v-chip>
            </v-chip-group>
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
                    src:'elixir-logo-black.svg',
                    color:'#FFA500',
                    content:'bio.tools',
                    url:'bio.tools',
                    label: 'biotools',
                },
                bioconda: {
                    src:'bioconda-logo-black.svg',
                    color:'#005500',
                    content:'bioconda',
                    url:'',
                    label:'bioconda'
                },
                github: {
                    src:'github-logo-black.svg',
                    color:'#000000',
                    content:'GitHub',
                    url:'github.org',
                    label:'github'
                },
                bioconductor: {
                    src:'bioconductor-logo-black.svg',
                    color:'#2f93ba',
                    content:'Bioconductor',
                    url:'',
                    label:'bioconductor'
                },
                galaxy: {
                    src: 'galaxy-logo-black.svg',
                    color: '#134798',
                    content: 'Galaxy Eu',
                    url:'',
                    label: 'galaxy'
                },
                toolshed: {
                    src: 'galaxy-logo-black.svg',
                    color: '#134798',
                    content: 'Galaxy Toolshed',
                    url:'',
                    label: 'galaxy'
                },
                sourceforge: {
                    src: 'sourceforge-logo-black.svg',
                    color: '#ff6602',
                    content: 'SourceForge',
                    url:'',
                    label: 'sourceforge'
                },
                bitbucket: {
                    src: 'bitbucket-logo-black.svg',
                    color: '#005ed9',
                    content: 'Bitbucket',
                    url:'',
                    label: 'bitbucket'
                },
                other: {
                    src: 'other-logo-black.svg',
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

