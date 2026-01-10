export const nodejsRoadmap = {
    id: 'nodejs',
    title: 'Node.js Developer',
    description: 'Step by step guide to becoming a modern Node.js developer in 2025.',
    nodes: [
        {
            id: 'intro',
            title: 'Introduction to Node.js',
            description: 'Understanding the runtime environment.',
            whyImportant: 'Node.js allows you to run JavaScript on the server, outside the browser.',
            subtopics: [
                'What is Node.js?',
                'V8 Engine',
                'Node.js vs Browser JS',
                'REPL (Read-Eval-Print Loop)',
                'Global Objects (process, __dirname)'
            ],
            website: 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs',
            nextStepId: 'npm'
        },
        {
            id: 'npm',
            title: 'NPM (Node Package Manager)',
            description: 'Managing dependencies and scripts.',
            whyImportant: 'The ecosystem of libraries is Node.js\'s biggest strength.',
            subtopics: [
                'package.json',
                'npm install (local vs global)',
                'scripts (start, dev, test)',
                'Semantic Versioning (semver)',
                'lock files (package-lock.json)'
            ],
            website: 'https://docs.npmjs.com/about-npm',
            nextStepId: 'async'
        },
        {
            id: 'async',
            title: 'Asynchronous Programming',
            description: 'Non-blocking I/O operations.',
            whyImportant: 'Node.js is single-threaded; mastering async is crucial prevents blocking the server.',
            subtopics: [
                'The Event Loop',
                'Callbacks & Callback Hell',
                'Promises',
                'async / await',
                'Event Emitter Pattern'
            ],
            website: 'https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick',
            nextStepId: 'modules'
        },
        {
            id: 'modules',
            title: 'Modules System',
            description: 'Organizing code into reusable files.',
            whyImportant: 'Manage complexity by splitting code across files.',
            subtopics: [
                'CommonJS (require/module.exports)',
                'EcmaScript Modules (import/export)',
                'Built-in Modules (fs, path, os, http)'
            ],
            website: 'https://nodejs.org/api/modules.html',
            nextStepId: 'filesystem'
        },
        {
            id: 'filesystem',
            title: 'Working with Files (fs)',
            description: 'Reading and writing files on the server.',
            whyImportant: 'Server-side apps often need to interact with the file system.',
            subtopics: [
                'Reading/Writing Files (Sync vs Async)',
                'Streams & Buffers',
                'Path Module',
                'File Permissions'
            ],
            website: 'https://nodejs.org/api/fs.html',
            nextStepId: 'web-frameworks'
        },
        {
            id: 'web-frameworks',
            title: 'Web Frameworks',
            description: 'Building servers and APIs.',
            whyImportant: 'Raw HTTP module is verbose; frameworks simplify routing and middleware.',
            subtopics: [
                'Express.js (Industry Standard)',
                'Fastify (High Performance)',
                'NestJS (Enterprise / Angular-like)',
                'Koa'
            ],
            website: 'https://expressjs.com/en/starter/hello-world.html',
            nextStepId: 'databases'
        },
        {
            id: 'databases',
            title: 'Databases & ORMs',
            description: 'Persisting application data.',
            whyImportant: 'Applications need to store data usually in a database.',
            subtopics: [
                'SQL (PostgreSQL, MySQL)',
                'NoSQL (MongoDB)',
                'ODMs (Mongoose)',
                'ORMs (Prisma, TypeORM, Sequelize)'
            ],
            website: 'https://www.prisma.io/docs/getting-started',
            nextStepId: 'api-development'
        },
        {
            id: 'api-development',
            title: 'API Development',
            description: 'Designing and building interfaces for clients.',
            whyImportant: 'The main job of a backend developer is often building APIs.',
            subtopics: [
                'RESTful APIs',
                'GraphQL',
                'Authentication (JWT, OAuth)',
                'Validation (Zod, Joi)'
            ],
            website: 'https://restfulapi.net/',
            nextStepId: 'testing'
        },
        {
            id: 'testing',
            title: 'Testing',
            description: 'Ensuring code reliability.',
            whyImportant: 'Automated tests prevent regressions.',
            subtopics: [
                'Unit Testing (Jest, Mocha)',
                'supertest (API testing)',
                'Mocking dependencies'
            ],
            website: 'https://jestjs.io/docs/getting-started',
            nextStepId: 'deployment'
        },
        {
            id: 'deployment',
            title: 'Deployment & CI/CD',
            description: 'Getting your app to production.',
            whyImportant: 'Your code provides no value if it runs only on your machine.',
            subtopics: [
                'Process Management (PM2)',
                'Docker & Containers',
                'Basic CI/CD (GitHub Actions)',
                'Hosting (Vercel, Railway, AWS)'
            ],
            website: 'https://pm2.keymetrics.io/docs/usage/quick-start/',
            nextStepId: null
        }
    ]
};
