import SourcesCol from './SourcesCol.vue';


export default {
  title: 'Table Components/Columns/Sources',
  component: SourcesCol,
};


  const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { SourcesCol },
    template: '<SourcesCol :itemSources="itemSources"/>'
  });
  
  //👇 Each story then reuses that template
  export const BiotoolsAndGitHub = Template.bind({});

  BiotoolsAndGitHub.args = {
    itemSources: {'biotools':"https:bio.tools",
                  'github': "https:github.com"},
  };

  export const GalaxyAndGitHub = Template.bind({});

  GalaxyAndGitHub.args = {
    itemSources: {'galaxy':"https:toolshed.g2.bx.psu.edu",
                  'github': "https:github.com"},
  };

  export const Other = Template.bind({});

  Other.args = {
    itemSources: {'other':"https:other.com"},
  };

  export const All = Template.bind({});

  All.args = {
    itemSources: {'biotools':"https:bio.tools",
                  'galaxy': "https:toolshed.g2.bx.psu.edu",
                  'github': "https:github.com",
                  'other': "https:other.com",
                  'sourceforge': "https:sourceforge.net",
                  'bioconductor': "https:bioconductor.org",
                  'bioconda': "https:bioconda.org",
                  'bitbucket': "https:bitbucket.org"
                },
  };

