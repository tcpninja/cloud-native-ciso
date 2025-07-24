export interface Stat {
    value: number;
    label: string;
    prefix?: string;
    suffix?: string;
}

export interface StatsList {
    id: string;
    stats: Stat[];
    content?: {
        title: string;
        description: string;
        button?: {
            text: string;
            link: string;
            variant?: 'primary' | 'secondary' | 'ghostLight' | 'ghostDark';
        };
    };
}

export const statsLists: Record<string, StatsList> = {
    main: {
        id: 'main',
        stats: [
            {
                value: 2,
                label: 'Security Playbooks Shared',
            },
            {
                value: 1,
                label: 'Cloud Native Tools Reviewed',
            },
            {
                value: 100,
                label: 'Hours of Real-World Testing',
                prefix: '+'
            },
            {
                value: 3,
                label: 'Incident Postmortems Published',
            }
        ]
    },
    withContent: {
        id: 'withContent',
        stats: [
            {
                value: 1,
                label: 'Early-Stage Startup Patterns',
            },
            {
                value: 5,
                label: 'Threat Models Created',
            },
            {
                value: 3,
                label: 'Security Playbooks Shared',
            },
            {
                value: 100,
                label: 'Hours of Real-World Testing',
                prefix: '+'
            }
        ]
    }
};
