export const technicalWriterRoadmap = {
    id: 'technical-writer',
    title: 'Technical Writer',
    description: 'Step by step guide to becoming a Technical Writer in 2024.',
    nodes: [
        {
            id: 'intro',
            title: 'Introduction',
            description: 'What is Technical Writing?',
            whyImportant: 'Understand the role: Bridging the gap between complex technology and users.',
            website: 'https://developers.google.com/tech-writing/one',
            nextStepId: 'skills',
            subtopics: ['Role of Tech Writers', 'Forms of Writing', 'Audience Analysis']
        },
        {
            id: 'skills',
            title: 'Required Skills',
            description: 'Core competencies.',
            whyImportant: 'You need both technical understanding and language proficiency.',
            website: 'https://www.writethedocs.org/',
            nextStepId: 'tools',
            subtopics: ['Grammar & Style', 'Technical Expertise', 'Information Architecture', 'Simplify Complexity']
        },
        {
            id: 'tools',
            title: 'Tooling',
            description: 'The writer\'s stack.',
            whyImportant: 'Modern tech writing involves more than just a word processor. Learn Docs-as-Code.',
            website: 'https://docusaurus.io/',
            nextStepId: 'markdown',
            subtopics: ['Git / Version Control', 'VS Code', 'Static Site Generators (SSG)', 'CMS']
        },
        {
            id: 'markdown',
            title: 'Markdown & Markup',
            description: 'Writing purely.',
            whyImportant: 'Standard for technical documentation in software development.',
            website: 'https://www.markdownguide.org/',
            nextStepId: 'content-types',
            subtopics: ['Markdown Syntax', 'XML/DITA (Legacy)', 'JSON/YAML', 'Mermaid Diagrams']
        },
        {
            id: 'content-types',
            title: 'Types of Content',
            description: 'What you will write.',
            whyImportant: 'Different goals require different formats.',
            website: 'https://diataxis.fr/',
            nextStepId: 'api-docs',
            subtopics: ['How-to Guides', 'Tutorials', 'Reference Docs', 'Concept Guides', 'Release Notes']
        },
        {
            id: 'api-docs',
            title: 'API Documentation',
            description: 'Documenting code interfaces.',
            whyImportant: 'High demand skill. Learn to read and explain JSON requests/responses.',
            website: 'https://idratherbewriting.com/learnapidoc/',
            nextStepId: 'best-practices',
            subtopics: ['REST APIs', 'OpenAPI / Swagger', 'Authentication', 'Endpoints']
        },
        {
            id: 'best-practices',
            title: 'Best Practices',
            description: 'Quality standards.',
            whyImportant: 'Consistency and clarity are key.',
            website: 'https://developers.google.com/style',
            nextStepId: 'strategy',
            subtopics: ['Style Guides (Google/Microsoft)', 'Active Voice', 'Inclusivity', 'Content Structure']
        },
        {
            id: 'strategy',
            title: 'Content Strategy & SEO',
            description: 'Planning and execution.',
            whyImportant: 'Ensure your content is found and meets user needs.',
            website: 'https://moz.com/beginners-guide-to-seo',
            nextStepId: null,
            subtopics: ['Keyword Research', 'Content Audits', 'User Personas', 'Metrics (Views, Feedback)']
        }
    ]
};
