export const productManagerRoadmap = {
    id: 'product-manager',
    title: 'Product Manager',
    description: 'Step by step guide to becoming a Product Manager in 2024.',
    nodes: [
        {
            id: 'fundamentals',
            title: 'PM Fundamentals',
            description: 'What is Product Management?',
            whyImportant: 'Understand the intersection of Tech, Business, and UX. You are not the CEO of the product, you are the navigator.',
            website: 'https://www.atlassian.com/agile/product-management/product-manager-roles-and-responsibilities',
            nextStepId: 'user-research',
            subtopics: ['Role Definition', 'Product vs Project', 'Agile Basics', 'Stakeholder Management']
        },
        {
            id: 'user-research',
            title: 'User Research & Empathy',
            description: 'Know your customer.',
            whyImportant: 'The best products solve real user problems. You must be the voice of the user.',
            website: 'https://www.nngroup.com/topic/user-research/',
            nextStepId: 'strategy',
            subtopics: ['User Interviews', 'Personas', 'Market Research', 'Competitor Analysis']
        },
        {
            id: 'strategy',
            title: 'Product Strategy & Vision',
            description: 'Where are we going?',
            whyImportant: 'Define the long-term direction and the "Why" behind the product.',
            website: 'https://www.productplan.com/glossary/product-strategy/',
            nextStepId: 'prioritization',
            subtopics: ['Vision Statements', 'Roadmapping', 'OKRs (Objectives & Key Results)', 'Business Model Canvas']
        },
        {
            id: 'prioritization',
            title: 'Prioritization Frameworks',
            description: 'Deciding what to build.',
            whyImportant: 'Resources are limited. You must ruthlessly prioritize valuable features.',
            website: 'https://foldingburritos.com/product-prioritization-frameworks/',
            nextStepId: 'execution',
            subtopics: ['RICE Score', 'MoSCoW Method', 'Kano Model', 'Cost of Delay']
        },
        {
            id: 'execution',
            title: 'Product Execution',
            description: 'Building the thing right.',
            whyImportant: 'Drive the development process from concept to launch. Write clear specs.',
            website: 'https://www.scrum.org/resources/what-is-scrum',
            nextStepId: 'metrics',
            subtopics: ['PRDs (Product Requirement Docs)', 'User Stories', 'Sprint Planning', 'MVP (Minimum Viable Product)']
        },
        {
            id: 'metrics',
            title: 'Data & Metrics',
            description: 'Measuring success.',
            whyImportant: 'You can\'t improve what you don\'t measure. Use data to make decisions.',
            website: 'https://amplitude.com/blog/product-metrics',
            nextStepId: 'growth',
            subtopics: ['KPIs', 'North Star Metric', 'A/B Testing', 'Retention & Churn']
        },
        {
            id: 'growth',
            title: 'Product Growth',
            description: 'Scaling the product.',
            whyImportant: 'Focus on acquisition, engagement, and retention loops.',
            website: 'https://www.reforge.com/blog/growth-loops',
            nextStepId: 'tech-literacy',
            subtopics: ['Growth Loops', 'Pricing Strategies', 'Go-to-Market (GTM)', 'PLG (Product-Led Growth)']
        },
        {
            id: 'tech-literacy',
            title: 'Technical Literacy',
            description: 'Speaking developer.',
            whyImportant: 'You don\'t need to code, but you must understand architectures and trade-offs to earn respect.',
            website: 'https://roadmap.sh/guides/technical-product-manager',
            nextStepId: null,
            subtopics: ['APIs', 'Databases', 'Cloud Basics', 'SDLC']
        }
    ]
};
