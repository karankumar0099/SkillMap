export const engineeringManagerRoadmap = {
    id: 'engineering-manager',
    title: 'Engineering Manager',
    description: 'Leading technical teams and delivering software.',
    nodes: [
        {
            id: 'em-basics',
            title: 'Role of an EM',
            description: 'People, Process, and Technology.',
            whyImportant: 'Understanding the shift from maker to manager.',
            subtopics: ['1:1s', 'Performance Reviews', 'Hiring'],
            website: 'https://www.rubick.com/engineering-manager-vs-tech-lead/',
            nextStepId: 'team-health'
        },
        {
            id: 'team-health',
            title: 'Team Health & Culture',
            description: 'Building psychological safety.',
            whyImportant: 'Happy teams ship better code.',
            subtopics: ['Conflict Resolution', 'Motivation', 'DEI (Diversity, Equity, Inclusion)'],
            website: 'https://rework.withgoogle.com/guides/understanding-team-effectiveness/steps/introduction/',
            nextStepId: 'delivery'
        },
        {
            id: 'delivery',
            title: 'Execution & Delivery',
            description: 'Shipping value to customers.',
            whyImportant: 'Balancing speed and quality.',
            subtopics: ['Agile/Scrum/Kanban', 'Roadmapping', 'Tech Debt Management'],
            website: 'https://www.atlassian.com/agile',
            nextStepId: 'career-growth'
        },
        {
            id: 'career-growth',
            title: 'Growing Your Team',
            description: 'Coaching and mentorship.',
            whyImportant: 'Your success is your team\'s success.',
            subtopics: ['Career Ladders', 'Sponsorship', 'Feedback Loops'],
            website: 'https://staffeng.com/guides/staff-archetypes/',
            nextStepId: null
        }
    ]
};
