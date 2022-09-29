import Scroll from './Scroll.vue';

export default {
    title: 'Dummy/Scroll',
    component: Scroll,
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Scroll },
    template: '<Scroll :items="items"/>'
  });

export const Default = Template.bind({});

Default.args = {
    items: [
        "Sandhill Studios",
        "age Perfect",
        "Golden Graphics",
        "My Pattern Studio",
        "Vegas Brain",
        "Graphicsmith",
        "Luxe Logo",
        "Junior Coggins",
        "Perfect Presences",
        "Skillrex Technologies",
        "Work on Your Site",
        "Big Drop Studio",
        "Junction Creative",
       "Core Con Webdesign",
        "All City Graphix",
        "Creative Team",
        "Develop My Plots",
        "Bird Marketing Limited",
        "Connected Dots",
        "Clear Interactive",
        "Unified Infotech"
    ]
}


  