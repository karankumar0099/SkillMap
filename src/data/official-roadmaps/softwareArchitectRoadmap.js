export const softwareArchitectRoadmap = {
    id: 'software-architect',
    title: 'Software Architect',
    description: 'Step by step guide to becoming a Software Architect in 2024.',
    nodes: [
        {
            id: 'basics',
            title: 'Understand the Basics',
            description: 'What is Software Architecture?',
            whyImportant: 'Architecture captures the design structures of a system. It is about making high-level design choices.',
            website: 'https://martinfowler.com/architecture/',
            nextStepId: 'responsibilities',
            subtopics: ['Application Architecture', 'Solution Architecture', 'Enterprise Architecture']
        },
        {
            id: 'responsibilities',
            title: 'Responsibilities',
            description: 'What does an Architect do?',
            whyImportant: 'You are responsible for tech decisions, standards, and bridging the gap between business and tech.',
            website: 'https://www.infoq.com/articles/what-software-architects-do/',
            nextStepId: 'principles',
            subtopics: ['Technical Leadership', 'Decision Making', 'Code Standards', 'Mentoring']
        },
        {
            id: 'principles',
            title: 'Design Principles & Patterns',
            description: 'Writing maintainable systems.',
            whyImportant: 'Mastering SOLID, DRY, and specialized patterns is non-negotiable.',
            website: 'https://refactoring.guru/design-patterns',
            nextStepId: 'architectural-styles',
            subtopics: ['SOLID', 'DRY', 'KISS', 'Domain Driven Design (DDD)', 'TDD']
        },
        {
            id: 'architectural-styles',
            title: 'Architectural Patterns',
            description: 'System-level structures.',
            whyImportant: 'Choose the right structure for the problem: Monolith, Microservices, or Serverless.',
            website: 'https://microservices.io/patterns/index.html',
            nextStepId: 'distributed-systems',
            subtopics: ['Monolithic', 'Microservices', 'Event-Driven', 'Serverless', 'Layered Architecture']
        },
        {
            id: 'distributed-systems',
            title: 'Distributed Systems',
            description: 'Scaling horizontally.',
            whyImportant: 'Modern apps run on multiple machines. You must handle consistency and availability.',
            website: 'https://aws.amazon.com/builders-library/challenges-with-distributed-systems/',
            nextStepId: 'data-management',
            subtopics: ['CAP Theorem', 'Eventual Consistency', 'Load Balancing', 'Caching Strategies']
        },
        {
            id: 'data-management',
            title: 'Data Management',
            description: 'Storing and processing data.',
            whyImportant: 'Data is the most critical asset. Choose the right DB for the job.',
            website: 'https://martinfowler.com/articles/2020-08-24-microservice-data-patterns.html',
            nextStepId: 'security',
            subtopics: ['SQL vs NoSQL', 'Polyglot Persistence', 'Data Partitioning/Sharding', 'ETL pipelines']
        },
        {
            id: 'security',
            title: 'Security',
            description: 'Secure by Design.',
            whyImportant: 'Security cannot be an afterthought. It must be baked into the architecture.',
            website: 'https://owasp.org/www-project-top-ten/',
            nextStepId: 'ops',
            subtopics: ['OAuth2 / OIDC', 'OWASP Top 10', 'Encryption', 'Zero Trust']
        },
        {
            id: 'ops',
            title: 'Operations & Cloud',
            description: 'Infrastructure as Code.',
            whyImportant: 'Architects need to know how their systems run in production.',
            website: 'https://12factor.net/',
            nextStepId: null,
            subtopics: ['CI/CD', 'Containers (Docker/K8s)', 'Cloud Providers (AWS/Azure)', 'Observability']
        }
    ]
};
