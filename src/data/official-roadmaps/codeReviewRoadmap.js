export const codeReviewRoadmap = {
    id: 'code-review',
    title: 'Code Review',
    description: 'Best practices for reviewing code.',
    nodes: [
        {
            id: 'review-basics',
            title: 'Why Code Review?',
            description: 'Quality assurance and knowledge sharing.',
            whyImportant: 'Catch bugs early and mentor team members.',
            subtopics: ['Bus Factor', 'Code Quality', 'Mentorship'],
            website: 'https://google.github.io/eng-practices/review/',
            nextStepId: 'what-to-look-for'
        },
        {
            id: 'what-to-look-for',
            title: 'What to Look For',
            description: 'Checklist for a good review.',
            whyImportant: 'Focus on what matters, not just style.',
            subtopics: ['Functionality', 'Complexity', 'Tests', 'Naming'],
            website: 'https://google.github.io/eng-practices/review/reviewer/looking-for.html',
            nextStepId: 'providing-feedback'
        },
        {
            id: 'providing-feedback',
            title: 'Providing Feedback',
            description: 'How to comment effectively.',
            whyImportant: 'Be constructive and respectful.',
            subtopics: ['Nitpicks', 'Blocking vs Non-blocking', 'Tone'],
            website: 'https://mtlynch.io/human-code-reviews-1/',
            nextStepId: 'receiving-feedback'
        },
        {
            id: 'receiving-feedback',
            title: 'Receiving Feedback',
            description: 'Handling critique gracefully.',
            whyImportant: 'Growth mindset is key.',
            subtopics: ['Don\'t take it personally', 'Clarify expectations', 'Action items'],
            website: 'https://github.blog/2015-01-21-how-to-write-the-perfect-pull-request/',
            nextStepId: null
        }
    ]
};
