// Display in dots menu in header

const moreOptions = [
    {
        title: 'About',
        to: '/about',
        icon: 'mdi-information-outline',
        target: '_self',
        nuxt: true,
    },
    {
        title: 'Source Code',
        to: false,
        href: 'https://github.com',
        target: '_blank',
        icon: 'mdi-github',
        nuxt: false,
    }
];

export default moreOptions;