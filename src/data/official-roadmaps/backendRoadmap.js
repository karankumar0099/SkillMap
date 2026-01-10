export const backendRoadmap = {
    id: 'backend',
    title: 'Backend Developer',
    description: 'Step by step guide to becoming a modern Backend Developer in 2024.',
    nodes: [
        {
            id: 'internet',
            title: 'Internet',
            description: 'How the web works.',
            whyImportant: 'The foundation of backend engineering. You must understand how data travels across networks.',
            website: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work',
            nextStepId: 'frontend-basics',
            subtopics: ['DNS', 'HTTP/HTTPS', 'Hosting', 'Browsers']
        },
        {
            id: 'frontend-basics',
            title: 'Frontend Knowledge',
            description: 'Basic understanding of HTML, CSS, and JS.',
            whyImportant: 'You need to know who you are building for. Understanding the client-side helps in designing better APIs.',
            website: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web',
            nextStepId: 'os',
            subtopics: ['HTML', 'CSS', 'JavaScript']
        },
        {
            id: 'os',
            title: 'OS & Terminal',
            description: 'Operating Systems and Command Line Interface.',
            whyImportant: 'Backend code runs on servers (mostly Linux). You need to be comfortable with the terminal, process management, and basic bash scripting.',
            website: 'https://ubuntu.com/tutorials/command-line-for-beginners',
            nextStepId: 'language',
            subtopics: ['Terminal Usage', 'Process Management', 'Threads & Concurrency', 'Memory Management']
        },
        {
            id: 'language',
            title: 'Pick a Language',
            description: 'Java, Python, Node.js, Go, Rust, PHP, or C#.',
            whyImportant: 'This is your primary tool. Master one language deeply before moving to others.',
            website: 'https://www.python.org/about/gettingstarted/',
            nextStepId: 'vcs',
            subtopics: ['Python', 'JavaScript (Node.js)', 'Java', 'Go', 'Rust']
        },
        {
            id: 'vcs',
            title: 'Version Control',
            description: 'Git & GitHub/GitLab.',
            whyImportant: 'Essential for collaboration and code management. Learn how to handle merge conflicts and use branches effectively.',
            website: 'https://git-scm.com/doc',
            nextStepId: 'relational-db',
            subtopics: ['Git Basics', 'Branching', 'Commit Conventions', 'Pull Requests']
        },
        {
            id: 'relational-db',
            title: 'Relational Databases',
            description: 'PostgreSQL, MySQL, MariaDB.',
            whyImportant: 'Most data is structured. Learning SQL, schema design, and normalization is non-negotiable for backend devs.',
            website: 'https://www.postgresql.org/docs/',
            nextStepId: 'nosql-db',
            subtopics: ['SQL', 'PostgreSQL', 'MySQL', 'Normalization', 'ACID Transactions']
        },
        {
            id: 'nosql-db',
            title: 'NoSQL Databases',
            description: 'MongoDB, Redis, Cassandra, DynamoDB.',
            whyImportant: 'Not all data fits in tables. Learn when to use document stores, key-value pairs, or graph databases.',
            website: 'https://www.mongodb.com/basics',
            nextStepId: 'apis',
            subtopics: ['MongoDB', 'Redis', 'Cassandra', 'Document vs Key-Value']
        },
        {
            id: 'apis',
            title: 'APIs',
            description: 'REST, GraphQL, gRPC.',
            whyImportant: 'APIs are the interface of your backend. Learn standard practices for designing scalable and secure APIs.',
            website: 'https://restfulapi.net/',
            nextStepId: 'caching',
            subtopics: ['REST', 'JSON APIs', 'GraphQL', 'Authentication (JWT/OAuth)']
        },
        {
            id: 'caching',
            title: 'Caching',
            description: 'Redis, Memcached, CDN.',
            whyImportant: 'Caching is critical for performance. It reduces load on your database and speeds up response times.',
            website: 'https://redis.io/docs/manual/client-side-caching/',
            nextStepId: 'security',
            subtopics: ['Client-side Caching', 'Server-side Caching', 'CDN', 'Redis']
        },
        {
            id: 'security',
            title: 'Web Security',
            description: 'Hashing, HTTPS, CORS, OWASP.',
            whyImportant: 'You are responsible for user data. You must know how to prevent attacks like SQL Injection, XSS, and CSRF.',
            website: 'https://owasp.org/www-project-top-ten/',
            nextStepId: 'testing',
            subtopics: ['OWASP Top 10', 'Hashing (Bcrypt)', 'HTTPS/SSL', 'CORS']
        },
        {
            id: 'testing',
            title: 'Testing',
            description: 'Unit, Integration, and Functional Tests.',
            whyImportant: 'Tests give you confidence to refactor and deploy. Code without tests is technical debt.',
            website: 'https://martinfowler.com/articles/practical-test-pyramid.html',
            nextStepId: 'ci-cd',
            subtopics: ['Unit Testing', 'Integration Testing', 'TDD', 'Mocking']
        },
        {
            id: 'ci-cd',
            title: 'CI/CD',
            description: 'Continuous Integration & Deployment.',
            whyImportant: 'Automate your build, test, and deployment pipelines. Deliver code faster and safely.',
            website: 'https://docs.github.com/en/actions',
            nextStepId: 'containerization',
            subtopics: ['GitHub Actions', 'GitLab CI', 'Jenkins']
        },
        {
            id: 'containerization',
            title: 'Containerization',
            description: 'Docker & Kubernetes.',
            whyImportant: 'Solves "it works on my machine". Containers package your app with all dependencies for consistent deployment.',
            website: 'https://www.docker.com/get-started/',
            nextStepId: null,
            subtopics: ['Docker', 'Kubernetes', 'Container Registry']
        }
    ]
};
