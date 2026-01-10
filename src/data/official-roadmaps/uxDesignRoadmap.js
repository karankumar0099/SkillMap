export const uxDesignRoadmap = {
    id: 'ux-design',
    title: 'UX Design',
    description: 'Step by step guide to becoming a UX Designer in 2024.',
    nodes: [
        {
            id: 'fundamentals',
            title: 'UX Fundamentals',
            description: 'What is User Experience?',
            whyImportant: 'Understand the difference between UI and UX. Focus on user needs.',
            website: 'https://www.nngroup.com/articles/definition-user-experience/',
            nextStepId: 'user-research',
            subtopics: ['Human Centered Design', 'Design Thinking', 'Accessibility (a11y)', 'Heuristics']
        },
        {
            id: 'user-research',
            title: 'User Research',
            description: 'Knowing your audience.',
            whyImportant: 'Design based on data, not assumptions.',
            website: 'https://www.usability.gov/what-and-why/user-research.html',
            nextStepId: 'info-arch',
            subtopics: ['User Interviews', 'Surveys', 'Personas', 'Journey Mapping']
        },
        {
            id: 'info-arch',
            title: 'Information Architecture',
            description: 'Structuring content.',
            whyImportant: 'Help users find what they need effortlessly.',
            website: 'https://www.usability.gov/what-and-why/information-architecture.html',
            nextStepId: 'wireframing',
            subtopics: ['Sitemaps', 'User Flows', 'Card Sorting', 'Navigation Design']
        },
        {
            id: 'wireframing',
            title: 'Wireframing & Prototyping',
            description: 'Low vs High Fidelity.',
            whyImportant: 'Iterate quickly before committing to code or final visuals.',
            website: 'https://www.figma.com/resource-library/what-is-wireframing/',
            nextStepId: 'tools',
            subtopics: ['Sketches', 'Wireframes', 'Interactive Prototypes', 'Mockups']
        },
        {
            id: 'tools',
            title: 'Design Tools',
            description: 'Industry standards.',
            whyImportant: 'Master the tools used by professionals.',
            website: 'https://www.figma.com/',
            nextStepId: 'visual-design',
            subtopics: ['Figma', 'Adobe XD', 'Sketch', 'Miro']
        },
        {
            id: 'visual-design',
            title: 'Visual Design (UI)',
            description: 'Making it look good.',
            whyImportant: 'Aesthetics impact usability (Aesthetic-Usability Effect).',
            website: 'https://m3.material.io/',
            nextStepId: 'behavioral-design',
            subtopics: ['Typography', 'Color Theory', 'Grid Systems', 'Design Systems']
        },
        {
            id: 'behavioral-design',
            title: 'Behavioral Design',
            description: 'Psychology in design.',
            whyImportant: 'Understand how users think and make decisions.',
            website: 'https://lawsofux.com/',
            nextStepId: 'usability-testing',
            subtopics: ['Fogg Behavior Model', 'Nudge Theory', 'Cognitive Bias', 'Gamification']
        },
        {
            id: 'usability-testing',
            title: 'Usability Testing',
            description: 'Validating designs.',
            whyImportant: 'Test with real users to find friction points.',
            website: 'https://www.nngroup.com/articles/usability-testing-101/',
            nextStepId: null,
            subtopics: ['A/B Testing', 'Heatmaps', 'Five Second Test', 'Accessibility Testing']
        }
    ]
};
