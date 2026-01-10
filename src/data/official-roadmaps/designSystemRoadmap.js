export const designSystemRoadmap = {
    id: 'design-system',
    title: 'Design System',
    description: 'Step by step guide to creating and maintaining a design system.',
    nodes: [
        {
            id: 'basics',
            title: 'Understand the Basics',
            description: 'What constitutes a design system.',
            whyImportant: 'A design system is more than just a UI kit; it is a product serving products.',
            subtopics: [
                'What is a Design System?',
                'Design System vs Component Library',
                'Atomic Design Methodology',
                'Stakeholders Involved'
            ],
            website: 'https://designsystemsrepo.com/design-systems/',
            nextStepId: 'foundations'
        },
        {
            id: 'foundations',
            title: 'Design Foundations',
            description: 'The visual core of your system.',
            whyImportant: 'These primitives form the basis of every component.',
            subtopics: [
                'Colors (Palettes, Semantic Naming)',
                'Typography (Type Scale, Fonts)',
                'Spacing & Layout (Grids, 8pt Grid)',
                'Iconography'
            ],
            website: 'https://m3.material.io/foundations',
            nextStepId: 'tokens'
        },
        {
            id: 'tokens',
            title: 'Design Tokens',
            description: 'Storing style values as data.',
            whyImportant: 'Tokens allow you to scale design decisions across platforms (Web, iOS, Android).',
            subtopics: [
                'What are Design Tokens?',
                'Naming Conventions',
                'Global vs Alias vs Component Tokens',
                'Theming (Dark Mode)'
            ],
            website: 'https://design-tokens.github.io/community-group/format/',
            nextStepId: 'components'
        },
        {
            id: 'components',
            title: 'Core Components',
            description: 'Building the reusable blocks.',
            whyImportant: 'Standardized components ensure consistency and speed up development.',
            subtopics: [
                'Buttons & Inputs',
                'Cards & Modals',
                'Navigation Elements',
                'Data Display (Tables, Lists)',
                'Feedback (Alerts, Toasts)'
            ],
            website: 'https://component.gallery/',
            nextStepId: 'patterns'
        },
        {
            id: 'patterns',
            title: 'Patterns & Guidelines',
            description: 'How to use the components.',
            whyImportant: 'Components need rules on how they are used together to solve user problems.',
            subtopics: [
                'Form Patterns',
                'Navigation Patterns',
                'Accessibility Guidelines (WCAG)',
                'Content Guidelines (Voice & Tone)'
            ],
            website: 'https://www.nngroup.com/articles/design-pattern-guidelines/',
            nextStepId: 'tooling'
        },
        {
            id: 'tooling',
            title: 'Tooling & Documentation',
            description: 'Making the system consumable.',
            whyImportant: 'If it is not documented, it does not exist.',
            subtopics: [
                'Figma (Variables, Auto Layout)',
                'Storybook (Component Documentation)',
                'Zeroheight / Supernova',
                'Version Control for Design'
            ],
            website: 'https://storybook.js.org/',
            nextStepId: 'governance'
        },
        {
            id: 'governance',
            title: 'Governance & Adoption',
            description: 'Managing the system over time.',
            whyImportant: 'A design system is a living product that needs maintenance and contribution models.',
            subtopics: [
                'Contribution Model',
                'Versioning (SemVer)',
                'Measuring Success (Analytics)',
                'Design System Team Structure'
            ],
            website: 'https://medium.com/eightshapes-llc/team-models-for-scaling-a-design-system-2cf9d03be6a0',
            nextStepId: null
        }
    ]
};
