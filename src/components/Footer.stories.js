import Footer from './Footer.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Page Components/Footer',
  component: Footer,
};

export const Main = () => ({
    components: { Footer },
    template: '<Footer />',
  });