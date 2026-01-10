export const fullstackRoadmap = {
    id: 'fullstack',
    title: 'Full Stack Developer',
    description: 'Step by step guide to becoming a modern Full Stack Developer in 2024.',
    nodes: [
        {
            id: 'frontend-basics',
            title: 'Frontend Basics',
            description: 'The visual foundation of the web.',
            whyImportant: 'You must master HTML, CSS, and JavaScript to build interactive user interfaces.',
            website: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web',
            nextStepId: 'npm',
            subtopics: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation']
        },
        {
            id: 'npm',
            title: 'Package Manager',
            description: 'Managing dependencies.',
            whyImportant: 'Standard way to share and consume code in the JavaScript ecosystem.',
            website: 'https://docs.npmjs.com/about-npm',
            nextStepId: 'git',
            subtopics: ['npm', 'yarn', 'pnpm', 'scripts']
        },
        {
            id: 'git',
            title: 'Version Control',
            description: 'Git & GitHub.',
            whyImportant: 'Collaborate with teams and track changes in your code.',
            website: 'https://git-scm.com/doc',
            nextStepId: 'react',
            subtopics: ['Git', 'GitHub', 'Branches', 'Pull Requests']
        },
        {
            id: 'react',
            title: 'Frontend Framework',
            description: 'React & Tailwind CSS.',
            whyImportant: 'Build scalable and reactive UIs. Tailwind speeds up styling.',
            website: 'https://react.dev/learn',
            nextStepId: 'nodejs',
            subtopics: ['React', 'Hooks', 'Tailwind CSS', 'Redux/Context']
        },
        {
            id: 'nodejs',
            title: 'Backend (Node.js)',
            description: 'Server-side JavaScript.',
            whyImportant: 'Use the same language (JS) for backend. Build APIs and handle server logic.',
            website: 'https://nodejs.org/en/docs/guides/getting-started-guide',
            nextStepId: 'postgres',
            subtopics: ['Node.js', 'Express', 'Event Loop', 'File System']
        },
        {
            id: 'postgres',
            title: 'Relational Database',
            description: 'PostgreSQL.',
            whyImportant: 'Store structured data reliably. SQL is a must-have skill.',
            website: 'https://www.postgresql.org/docs/',
            nextStepId: 'apis',
            subtopics: ['SQL', 'PostgreSQL', 'Table Design', 'Indexing']
        },
        {
            id: 'apis',
            title: 'API Design & Auth',
            description: 'RESTful APIs & Security.',
            whyImportant: 'Connect frontend to backend securely using JWT and standard API practices.',
            website: 'https://restfulapi.net/',
            nextStepId: 'redis',
            subtopics: ['REST', 'JWT Authentication', 'OAuth', 'JSON']
        },
        {
            id: 'redis',
            title: 'Caching',
            description: 'Redis.',
            whyImportant: 'Speed up your application by caching frequently accessed data.',
            website: 'https://redis.io/',
            nextStepId: 'linux',
            subtopics: ['Caching Strategies', 'Redis', 'In-memory data']
        },
        {
            id: 'linux',
            title: 'DevOps Basics',
            description: 'Linux & Terminal.',
            whyImportant: 'Understand the environment where your code runs.',
            website: 'https://ubuntu.com/tutorials/command-line-for-beginners',
            nextStepId: 'aws',
            subtopics: ['Linux Commands', 'SSH', 'Permissions', 'Bash Scripting']
        },
        {
            id: 'aws',
            title: 'Cloud Infrastructure',
            description: 'AWS Basics.',
            whyImportant: 'Deploy your application to the cloud. Learn EC2, S3, and networking.',
            website: 'https://aws.amazon.com/getting-started/',
            nextStepId: 'cicd',
            subtopics: ['EC2', 'S3', 'Route53', 'VPC']
        },
        {
            id: 'cicd',
            title: 'CI/CD & Automation',
            description: 'GitHub Actions & Deployment.',
            whyImportant: 'Automate testing and deployment to ship code faster and safer.',
            website: 'https://docs.github.com/en/actions',
            nextStepId: null,
            subtopics: ['GitHub Actions', 'Docker', 'Terraform', 'Monitoring']
        }
    ]
};
