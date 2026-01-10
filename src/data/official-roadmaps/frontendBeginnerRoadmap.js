export const frontendBeginnerRoadmap = {
    id: 'frontend-beginner',
    title: 'Frontend Development (Absolute Beginners)',
    description: 'A simplified path for starting your journey in Frontend Development.',
    nodes: [
        {
            id: 'internet',
            title: 'How the Internet Works',
            description: 'Understand the basics of the web: HTTP, DNS, Domain Names, and Hosting.',
            whyImportant: 'Before building for the web, you need to understand the playground you are working in.',
            subtopics: ['HTTP/HTTPS', 'DNS', 'Domain Names', 'Browsers', 'Hosting'],
            website: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work',
            nextStepId: 'html-basics'
        },
        {
            id: 'html-basics',
            title: 'HTML Basics',
            description: 'HyperText Markup Language - the skeleton of every website.',
            whyImportant: 'Every web page is built using HTML. It defines the structure of your content.',
            subtopics: ['Tags & Attributes', 'Semantic HTML', 'Forms & Validations', 'SEO Basics'],
            website: 'https://developer.mozilla.org/en-US/docs/Learn/HTML',
            nextStepId: 'css-basics'
        },
        {
            id: 'css-basics',
            title: 'CSS Basics',
            description: 'Cascading Style Sheets - making your website look good.',
            whyImportant: 'CSS handles the visual presentation: layout, colors, and typography.',
            subtopics: ['Selectors', 'Box Model', 'Flexbox', 'Grid', 'Responsive Design'],
            website: 'https://developer.mozilla.org/en-US/docs/Learn/CSS',
            nextStepId: 'js-basics'
        },
        {
            id: 'js-basics',
            title: 'JavaScript Basics',
            description: 'The programming language of the web.',
            whyImportant: 'JavaScript adds interactivity and logic to your static HTML/CSS pages.',
            subtopics: ['Variables & Data Types', 'Functions', 'DOM Manipulation', 'Events', 'Fetch API'],
            website: 'https://javascript.info/',
            nextStepId: 'git-basics'
        },
        {
            id: 'git-basics',
            title: 'Version Control (Git)',
            description: 'Tracking changes and collaborating on code.',
            whyImportant: 'Essential for saving your work history and working in teams.',
            subtopics: ['Repo Setup', 'Commit', 'Push/Pull', 'Branches'],
            website: 'https://git-scm.com/doc',
            nextStepId: null
        }
    ]
};
