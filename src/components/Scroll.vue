<template>
    
    <div v-dragscroll.x="true" class="drag">
        <p class="drag2">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare velit in justo ornare, finibus faucibus sapien porta. Curabitur turpis diam, feugiat ut libero eget, posuere volutpat tellus. Mauris rutrum, erat a facilisis posuere, tortor est bibendum mi, sit amet consectetur mauris purus a libero. Vestibulum nisl lacus, hendrerit vitae risus vel, ultrices interdum quam. Nullam ultrices, libero et accumsan sodales, arcu arcu commodo purus, eu consequat erat massa vel elit. Cras nec risus lorem. Donec eget tincidunt sapien, sed porttitor dui. Fusce a justo in turpis faucibus aliquet et ut arcu. In tempor id nisi dictum egestas. Donec sit amet varius est, in venenatis dolor. Fusce sit amet ultricies nisl. Aenean nibh eros, tincidunt sit amet mi in, eleifend interdum est. Curabitur consequat vestibulum tellus, imperdiet venenatis sapien iaculis quis. Fusce eu ultricies sapien.

Nam et mauris neque. Donec dignissim suscipit nulla ultricies auctor. Sed consequat lacus vulputate laoreet auctor. Integer efficitur ultrices mi, in laoreet nisi eleifend fringilla. Donec sodales, turpis quis maximus consectetur, eros ex pharetra nibh, ut placerat neque augue eu odio. Fusce auctor luctus augue, in posuere lectus gravida ac. Ut sem tellus, suscipit ut posuere a, volutpat id sapien.

Vivamus luctus erat laoreet lacus imperdiet varius. Etiam quam arcu, accumsan id dui eu, mollis aliquet risus. Pellentesque egestas tellus id dictum rutrum. Donec eu tincidunt risus. Proin vel finibus nunc. In ipsum odio, pulvinar nec scelerisque eget, malesuada ac orci. Fusce varius augue elit, non posuere lorem porttitor porta. In hac habitasse platea dictumst. Sed dignissim nisl turpis, tristique elementum dui fermentum eget. Nam lacus metus, hendrerit id felis sodales, interdum auctor augue. Phasellus condimentum congue velit id placerat. Curabitur a erat tellus. In non lorem sem. Quisque a sapien risus. Duis semper sapien quis faucibus ultricies. In diam augue, mollis nec viverra et, pulvinar nec magna.

Mauris sit amet pulvinar quam. Proin sit amet posuere sapien, sed vehicula sapien. Nullam congue aliquam euismod. Nulla eu malesuada neque, eu accumsan orci. Proin malesuada mauris nec rhoncus efficitur. Fusce aliquet ipsum vel pretium dignissim. Praesent semper ante molestie eros aliquet, imperdiet condimentum neque dignissim. Integer laoreet venenatis luctus. Sed semper nec sapien eget condimentum. Vestibulum suscipit a enim ac mattis. Integer ut sollicitudin lacus, a tincidunt nulla. Praesent pretium, ex a pellentesque placerat, nisi turpis aliquam dui, a euismod metus nunc ut sem.

Ut tempus, mi vitae vestibulum blandit, orci velit placerat sapien, ac ultricies nunc velit a lorem. Morbi tincidunt, elit vel dapibus tempor, mauris mi scelerisque leo, vitae scelerisque urna felis et nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum imperdiet ut metus nec gravida. Vivamus et rhoncus arcu, pretium hendrerit dolor. Donec molestie tincidunt velit, quis vestibulum nisl bibendum in. Vestibulum ullamcorper in nibh ut volutpat. Maecenas fringilla nisl odio, ac pulvinar est gravida non. Integer lectus massa, tincidunt sit amet urna at, feugiat congue mauris. Pellentesque in nunc nec ex accumsan commodo. Nam aliquet bibendum condimentum. Proin id velit arcu. Nullam pharetra sodales eros. 
        </p>
        <v-card
            v-for="(item) in items" :key="items.indexOf(item)"
            class="mb-2 ml-3 mr-3"
        >
        <v-card-title>
            <v-card-title-text>
                <span class="headline">
                    {{ item }}
                </span>
                </v-card-title-text>
            </v-card-title>
        </v-card>
               
    </div>
</template>
<style>
.drag {
    overflow: auto;
    height: 25em;
    width: 50%;
}

.drag2 {
    width: 62em;
}

</style>
<script>
export default {
    name: 'Scroll',
    props: ['items'],
    data(){
        return {
        }
    },
    computed: {
    },
    methods: {
    }
}
</script>