// src/data/menu.ts

export const headerMenu = [
    { name: 'Playbooks', link: '/playbook' , showArrow: false,
        children: [
            { name: 'Lunafreya', link: '/example' },
            { name: 'Cid', link: '/example' },
        ]
    },
    { name: 'Blog', link: '/blog' },
    { name: 'About', link: '/about' },
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

