export const htmlRoadmap = {
    id: 'html',
    title: 'HTML',
    description: 'HyperText Markup Language - The skeleton of the web.',
    nodes: [
        {
            id: 'html-basics',
            title: 'HTML Basics',
            description: 'Tags, Attributes, and Elements.',
            whyImportant: 'The fundamental building block of every website.',
            subtopics: ['Document Structure', 'Text Formatting', 'Lists', 'Links'],
            website: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML',
            nextStepId: 'html-forms'
        },
        {
            id: 'html-forms',
            title: 'Forms & Input',
            description: 'Collecting user data.',
            whyImportant: 'Interact with users through inputs, buttons, and submissions.',
            subtopics: ['<input>', '<form>', 'Validations', 'Labels'],
            website: 'https://developer.mozilla.org/en-US/docs/Learn/Forms',
            nextStepId: 'semantic-html'
        },
        {
            id: 'semantic-html',
            title: 'Semantic HTML',
            description: 'Meaningful markup for better accessibility and SEO.',
            whyImportant: 'Helps search engines and screen readers understand your content.',
            subtopics: ['<header>', '<nav>', '<main>', '<article>', '<footer>'],
            website: 'https://developer.mozilla.org/en-US/docs/Glossary/Semantics',
            nextStepId: 'seo-basics'
        },
        {
            id: 'seo-basics',
            title: 'SEO Basics',
            description: 'Structuring content for visibility.',
            whyImportant: 'Ranking higher in search results.',
            subtopics: ['Meta Tags', 'Open Graph', 'Heading Hierarchy'],
            website: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
            nextStepId: null
        }
    ]
};
