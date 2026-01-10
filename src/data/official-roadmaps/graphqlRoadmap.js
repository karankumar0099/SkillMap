export const graphqlRoadmap = {
    id: 'graphql',
    title: 'GraphQL Developer',
    description: 'Step by step guide to mastering GraphQL in 2025.',
    nodes: [
        {
            id: 'intro',
            title: 'Introduction to GraphQL',
            description: 'Understanding the query language for APIs.',
            whyImportant: 'GraphQL solves over-fetching and under-fetching issues of REST.',
            subtopics: [
                'What is GraphQL?',
                'GraphQL vs REST',
                'Schema Definition Language (SDL)',
                'Thinking in Graphs'
            ],
            website: 'https://graphql.org/learn/',
            nextStepId: 'queries'
        },
        {
            id: 'queries',
            title: 'Queries',
            description: 'Fetching data from the server.',
            whyImportant: 'The core operation of GraphQL is asking for exactly what you need.',
            subtopics: [
                'Fields & Arguments',
                'Aliases',
                'Fragments (Reusable units)',
                'Variables',
                'Directives (@include, @skip)'
            ],
            website: 'https://graphql.org/learn/queries/',
            nextStepId: 'schema'
        },
        {
            id: 'schema',
            title: 'Schema & Types',
            description: 'Defining the data model.',
            whyImportant: 'The schema is the contract between client and server.',
            subtopics: [
                'Object Types & Fields',
                'Scalars (Int, Float, String, Boolean, ID)',
                'Enums',
                'Lists & Non-Null (!)',
                'Interfaces & Unions'
            ],
            website: 'https://graphql.org/learn/schema/',
            nextStepId: 'mutations'
        },
        {
            id: 'mutations',
            title: 'Mutations',
            description: 'Modifying server-side data.',
            whyImportant: 'Equivalent to POST/PUT/DELETE in REST.',
            subtopics: [
                'Defining Mutations',
                'Input Types',
                'Returning modified data'
            ],
            website: 'https://graphql.org/learn/queries/#mutations',
            nextStepId: 'execution'
        },
        {
            id: 'execution',
            title: 'Execution & Resolvers',
            description: 'How the server processes queries.',
            whyImportant: 'Resolvers connect the schema to your database or other services.',
            subtopics: [
                'Root Fields',
                'Resolver Functions (parent, args, context, info)',
                'Asynchronous Resolvers',
                'Trivial Resolvers'
            ],
            website: 'https://graphql.org/learn/execution/',
            nextStepId: 'subscriptions'
        },
        {
            id: 'subscriptions',
            title: 'Subscriptions',
            description: 'Real-time updates.',
            whyImportant: 'Pushing data to clients when events happen.',
            subtopics: [
                'Pub/Sub Model',
                'WebSockets',
                'Live Queries vs Subscriptions'
            ],
            website: 'https://www.apollographql.com/docs/react/data/subscriptions/',
            nextStepId: 'clients'
        },
        {
            id: 'clients',
            title: 'Client-Side Tools',
            description: 'Consuming GraphQL APIs.',
            whyImportant: 'Libraries simplify caching, state management, and networking.',
            subtopics: [
                'Apollo Client',
                'Relay (Facebook)',
                'Urql',
                'TanStack Query (with GraphQL)',
                'GraphiQL / Playground'
            ],
            website: 'https://www.apollographql.com/docs/react/',
            nextStepId: 'server'
        },
        {
            id: 'server',
            title: 'Server-Side Tools',
            description: 'Building GraphQL servers.',
            whyImportant: 'You need a runtime to serve the API.',
            subtopics: [
                'Apollo Server',
                'GraphQL Yoga',
                'Express-GraphQL',
                'Hasura (Instant GraphQL)',
                'Federation (Microservices)'
            ],
            website: 'https://www.apollographql.com/docs/apollo-server/',
            nextStepId: 'security'
        },
        {
            id: 'security',
            title: 'Security & Performance',
            description: 'Production best practices.',
            whyImportant: 'Protecting against nested queries and abuse.',
            subtopics: [
                'Query Depth Limiting',
                'Complexity Analysis',
                'Rate Limiting',
                'N+1 Problem (DataLoader)',
                'Authorization'
            ],
            website: 'https://jasonformat.com/graphql-security/',
            nextStepId: null
        }
    ]
};
