export const cssRoadmap = {
    id: 'css',
    title: 'CSS',
    description: 'Cascading Style Sheets - Styling the web.',
    nodes: [
        {
            id: 'css-basics',
            title: 'CSS Basics',
            description: 'Selectors, Colors, and Fonts.',
            whyImportant: 'Basic styling for HTML elements.',
            subtopics: ['Syntax', 'Selectors', 'Specificity', 'Inheritance'],
            website: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps',
            nextStepId: 'layout'
        },
        {
            id: 'layout',
            title: 'Layouts (Flexbox & Grid)',
            description: 'Positioning elements on the page.',
            whyImportant: 'Creating responsive and structured designs.',
            subtopics: ['Box Model', 'Flexbox', 'CSS Grid', 'Positioning'],
            website: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
            nextStepId: 'responsive'
        },
        {
            id: 'responsive',
            title: 'Responsive Design',
            description: 'Making sites work on all devices.',
            whyImportant: 'Mobile-first approach is essential today.',
            subtopics: ['Media Queries', 'Relative Units (rem, em, vh, vw)', 'Images'],
            website: 'https://web.dev/learn/design/',
            nextStepId: 'animations'
        },
        {
            id: 'animations',
            title: 'Animations & Transitions',
            description: 'Adding life to the UI.',
            whyImportant: 'improves user experience and engagement.',
            subtopics: ['Transitions', 'Keyframes', 'Transforms'],
            website: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations',
            nextStepId: null
        }
    ]
};
