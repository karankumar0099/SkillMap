export const redisRoadmap = {
    id: 'redis',
    title: 'Redis',
    description: 'The open source, in-memory data store.',
    nodes: [
        {
            id: 'redis-basics',
            title: 'Redis Basics',
            description: 'Key-Value store concepts.',
            whyImportant: 'Understand how in-memory storage differs from traditional databases.',
            subtopics: ['Key-Value Pairs', 'Data Types (Strings, Lists, Sets, Hashes)', 'TTL (Time To Live)'],
            website: 'https://redis.io/docs/getting-started/',
            nextStepId: 'caching'
        },
        {
            id: 'caching',
            title: 'Caching Strategies',
            description: 'Using Redis as a cache.',
            whyImportant: 'Improve application performance by reducing database load.',
            subtopics: ['Cache-Aside', 'Write-Through', 'Eviction Policies (LRU, LFU)'],
            website: 'https://aws.amazon.com/caching/strategies/',
            nextStepId: 'advanced-redis'
        },
        {
            id: 'advanced-redis',
            title: 'Advanced Features',
            description: 'Pub/Sub, Streams, and Persistence.',
            whyImportant: 'Redis is more than just a simple cache.',
            subtopics: ['Pub/Sub Messaging', 'Redis Streams', 'Persistence (RDB vs AOF)', 'Transactions'],
            website: 'https://redis.io/docs/manual/pubsub/',
            nextStepId: null
        }
    ]
};
