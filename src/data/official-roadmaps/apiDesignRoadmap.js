export const apiDesignRoadmap = {
    id: 'api-design',
    title: 'API Design Roadmap',
    description: 'Step by step guide to learn how to design and build robust APIs.',
    nodes: [
        {
            id: 'basics',
            title: 'Learn the Basics',
            description: 'Foundation of web communication.',
            whyImportant: 'Understanding HTTP is prerequisites for API design.',
            subtopics: [
                'What are APIs?',
                'Request / Response Pattern',
                'HTTP Methods (GET, POST, PUT, DELETE, PATCH)',
                'HTTP Status Codes (200, 404, 500)',
                'HTTP Headers & Cookies'
            ],
            website: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview',
            nextStepId: 'styles'
        },
        {
            id: 'styles',
            title: 'Architectural Styles',
            description: 'Different ways to structure APIs.',
            whyImportant: 'Choosing the right style depends on the problem (Mobile vs Server-to-Server).',
            subtopics: [
                'REST (Representational State Transfer)',
                'GraphQL (Query Language for APIs)',
                'gRPC (Remote Procedure Call)',
                'Webhooks (Event driven)',
                'SOAP (Legacy)'
            ],
            website: 'https://blog.postman.com/the-metamorphosis-of-the-api/',
            nextStepId: 'rest-design'
        },
        {
            id: 'rest-design',
            title: 'RESTful API Design',
            description: 'Best practices for REST APIs.',
            whyImportant: 'Standardization makes your API predictable and easy to use.',
            subtopics: [
                'Resource Naming (Nouns vs Verbs)',
                'URI Structure',
                'Versioning Strategies (URI vs Header)',
                'Content Negotiation (JSON/XML)',
                'HATEOAS (Hypermedia)'
            ],
            website: 'https://restfulapi.net/resource-naming/',
            nextStepId: 'security'
        },
        {
            id: 'security',
            title: 'Authentication & Security',
            description: 'Protecting your API.',
            whyImportant: 'APIs are the door to your data; keep them locked.',
            subtopics: [
                'Basic Auth',
                'API Keys',
                'JWT (JSON Web Tokens)',
                'OAuth 2.0 & OpenID Connect',
                'Rate Limiting & Throttling',
                'CORS'
            ],
            website: 'https://auth0.com/intro-to-iam/what-is-api-security/',
            nextStepId: 'performance'
        },
        {
            id: 'performance',
            title: 'Performance Optimization',
            description: 'Making APIs fast and scalable.',
            whyImportant: 'Slow APIs drive users away and increase costs.',
            subtopics: [
                'Caching Strategies (Client vs Server)',
                'ETags & Conditional Requests',
                'Pagination / Filtering / Sorting',
                'Compression (Gzip/Brotli)',
                'Connection Pooling'
            ],
            website: 'https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design#performance',
            nextStepId: 'documentation'
        },
        {
            id: 'documentation',
            title: 'Documentation',
            description: 'How developers learn to use your API.',
            whyImportant: 'An undocumented API is a useless API.',
            subtopics: [
                'OpenAPI Specification (Swagger)',
                'Postman Collections',
                'Scalar / Redoc',
                'Developer Portals'
            ],
            website: 'https://swagger.io/specification/',
            nextStepId: 'testing'
        },
        {
            id: 'testing',
            title: 'API Testing',
            description: 'Ensuring reliability.',
            whyImportant: 'APIs must be reliable contracts.',
            subtopics: [
                'Functional Testing',
                'Integration Testing',
                'Contract Testing (Pact)',
                'Mocking APIs',
                'Load Testing (k6, JMeter)'
            ],
            website: 'https://www.postman.com/api-platform/api-testing/',
            nextStepId: 'advanced'
        },
        {
            id: 'advanced',
            title: 'Advanced Concepts',
            description: 'Scaling and Real-time.',
            whyImportant: 'Handling complex enterprise requirements.',
            subtopics: [
                'API Gateways (Kong, Nginx)',
                'WebSockets (Real-time)',
                'Server-Sent Events (SSE)',
                'Microservices Communication',
                'Idempotency'
            ],
            website: 'https://microservices.io/patterns/apigateway.html',
            nextStepId: null
        }
    ]
};
