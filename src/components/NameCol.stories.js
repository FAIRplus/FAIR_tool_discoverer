import NameCol from './NameCol.vue';

export default {
    title: 'Table Components/Columns/Name',
    component: NameCol,
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { NameCol },
    template: '<NameCol :name="name" :type="type" :sources="sources" />'
  });

  export const Blastp = Template.bind({});
  
  Blastp.args = {
    name: 'Blastp',
    type: 'cmd',
    sources: {'biotools':"https:bio.tools"},
  };
