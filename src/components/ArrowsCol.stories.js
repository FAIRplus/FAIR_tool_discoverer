import ArrowsCol from './ArrowsCol.vue';

export default {
    title: 'Table Components/Columns/Arrows',
    component: ArrowsCol,
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { ArrowsCol },
    template: '<ArrowsCol :up="up" :down="down"/>'
  });

  export const Up = Template.bind({});
  
  Up.args = {
    up: true,
    down: false
  };

  export const Down = Template.bind({});

  Down.args = {
    up: false,
    down: true
  };

