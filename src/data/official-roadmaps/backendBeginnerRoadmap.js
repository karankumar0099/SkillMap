export const backendBeginnerRoadmap = {
    id: 'backend-beginner',
    title: 'Backend Development (Absolute Beginners)',
    description: 'A simplified path for starting your journey in Backend Development.',
    nodes: [
        {
            id: 'internet-backend',
            title: 'How the Web Works',
            description: 'Request-Response cycle, HTTP Methods, and Status Codes.',
            whyImportant: 'Backend is all about handling requests and sending responses.',
            subtopics: ['HTTP Methods (GET, POST)', 'Status Codes (200, 404, 500)', 'DNS'],
            website: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview',
            nextStepId: 'os-basics'
        },
        {
            id: 'os-basics',
            title: 'OS & Terminal Basics',
            description: 'Understanding the Command Line Interface (CLI).',
            whyImportant: 'Backend developers spend a lot of time in the terminal interacting with servers.',
            subtopics: ['Basic Commands', 'File Manipulation', 'Process Management'],
            website: 'https://ubuntu.com/tutorials/command-line-for-beginners',
            nextStepId: 'programming-language'
        },
        {
            id: 'programming-language',
            title: 'Pick a Language',
            description: 'Choose a server-side language like JavaScript (Node.js) or Python.',
            whyImportant: 'You need a language to write the logic for your server.',
            subtopics: ['Syntax', 'Functions', 'Async Programming', 'Modules'],
            website: 'https://nodejs.org/en/docs/',
            nextStepId: 'database-basics'
        },
        {
            id: 'database-basics',
            title: 'Databases (SQL vs NoSQL)',
            description: 'Storing and retrieving data persistently.',
            whyImportant: 'Applications need to save user data, inputs, and state.',
            subtopics: ['Relational (SQL)', 'Non-Relational (NoSQL)', 'CRUD Operations'],
            website: 'https://www.oracle.com/database/what-is-database/',
            nextStepId: 'api-basics'
        },
        {
            id: 'api-basics',
            title: 'API Basics',
            description: 'Building interfaces for different software to talk to each other.',
            whyImportant: 'APIs are how your backend communicates with the frontend.',
            subtopics: ['REST', 'JSON', 'Authentication Basics'],
            website: 'https://restfulapi.net/',
            nextStepId: null
        }
    ]
};
