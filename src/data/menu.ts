// src/data/menu.ts

export const headerMenu = [
    // { name: 'Theme Info', link: '/theme-info' },
    { name: 'Playbooks', link: '/playbook' },
    { name: 'Blog', link: '/blog' },
    { name: 'Personas', link: '/personas', showArrow: false,
        children: [
            { name: 'Lunafreya', link: '/example' },
            { name: 'Cid', link: '/example' },
        ]
    },
    { name: 'About', link: '/about' },
    // { name: 'Style-Guide', link: '/style-guide', showArrow: false,
    //     children: [
    //         { name: 'Typography', link: '/style-guide#typography' },
    //         { name: 'Colors', link: '/style-guide#colors' },
    //         { name: 'Links', link: '/style-guide#links' },
    //         { name: 'Buttons', link: '/style-guide#buttons' },
    //         { name: 'Forms', link: '/style-guide#forms' },
    //         { name: 'Lists', link: '/style-guide#lists' },
    //     ]
    // }
];

export const footerMenu = [
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
    { name: 'Newsletter', link: '/rss.xml' } // REVIEW: update this to include link to newslettter
];

export const legalMenu = [
    { name: 'Privacy Policy', link: '/legal/privacy-policy' },
    { name: 'Terms of Service', link: '/legal/terms-of-service' }
];

