import FilterBtn from './FilterBtn';


export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Basic Components/FilterBtn',
  component: FilterBtn,
};


  const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { FilterBtn },
    template: '<FilterBtn :label="label" :icon="icon"/>'
  });
  
  //👇 Each story then reuses that template
  export const Icon = Template.bind({});
  
  Icon.args = {
    icon: true,
    label: 'galaxy',
  };

  export const NoIcon = Template.bind({});
  
  NoIcon.args = {
    icon: false,
    label: 'galaxy',
  };