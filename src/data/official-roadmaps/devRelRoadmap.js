export const devRelRoadmap = {
    id: 'devrel',
    title: 'Developer Relations (DevRel)',
    description: 'Bridge between product and community.',
    nodes: [
        {
            id: 'devrel-basics',
            title: 'What is DevRel?',
            description: 'Advocacy, Community, and Content.',
            whyImportant: 'Building trust with the developer community.',
            subtopics: ['Developer Advocacy', 'Community Management', 'Technical Writing'],
            website: 'https://www.swyx.io/part-1-what-is-devrel',
            nextStepId: 'content-creation'
        },
        {
            id: 'content-creation',
            title: 'Content Creation',
            description: 'Blogs, Videos, and Talks.',
            whyImportant: 'Educating and inspiring developers.',
            subtopics: ['Public Speaking', 'Blogging', 'Tutorials', 'Social Media'],
            website: 'https://dev.to/',
            nextStepId: 'community-building'
        },
        {
            id: 'community-building',
            title: 'Community Building',
            description: 'Fostering a sense of belonging.',
            whyImportant: 'A strong community is a product\'s best asset.',
            subtopics: ['Discord/Slack Management', 'Events & Hackathons', 'Ambassador Programs'],
            website: 'https://orbit.love/blog/gravity',
            nextStepId: 'metrics'
        },
        {
            id: 'metrics',
            title: 'Measuring Success',
            description: 'KPIs for DevRel.',
            whyImportant: 'Proving value to the business.',
            subtopics: ['Reach', 'Engagement', 'Product Feedback Loop'],
            website: 'https://www.lennysnewsletter.com/p/devrel',
            nextStepId: null
        }
    ]
};
