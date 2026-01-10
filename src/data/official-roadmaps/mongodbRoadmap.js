export const mongodbRoadmap = {
    id: 'mongodb',
    title: 'MongoDB Developer',
    description: 'Step by step guide to mastering MongoDB in 2025.',
    nodes: [
        {
            id: 'basics',
            title: 'MongoDB Basics',
            description: 'Understanding NoSQL and Documents.',
            whyImportant: 'Thinking in documents is different from thinking in tables.',
            subtopics: [
                'SQL vs NoSQL',
                'BSON vs JSON',
                'Documents & Collections',
                'Atlas (Cloud Service)'
            ],
            website: 'https://www.mongodb.com/basics',
            nextStepId: 'crud'
        },
        {
            id: 'crud',
            title: 'CRUD Operations',
            description: 'Create, Read, Update, Delete.',
            whyImportant: 'The fundamental operations of any database.',
            subtopics: [
                'insertOne() / insertMany()',
                'find() & Cursors',
                'updateOne() / updateMany()',
                'deleteOne() / deleteMany()',
                'bulkWrite()'
            ],
            website: 'https://www.mongodb.com/docs/manual/crud/',
            nextStepId: 'query-operators'
        },
        {
            id: 'query-operators',
            title: 'Query Operators',
            description: 'Filtering data effectively.',
            whyImportant: 'Extracting exactly the data you need.',
            subtopics: [
                'Comparison ($eq, $gt, $lt, $in)',
                'Logical ($and, $or, $nor, $not)',
                'Element ($exists, $type)',
                'Array ($all, $elemMatch, $size)'
            ],
            website: 'https://www.mongodb.com/docs/manual/reference/operator/query/',
            nextStepId: 'data-modeling'
        },
        {
            id: 'data-modeling',
            title: 'Data Modeling',
            description: 'Designing schemas.',
            whyImportant: 'Schema design impacts performance and scalability.',
            subtopics: [
                'Embedded Data (Denormalization)',
                'References (Normalization)',
                'One-to-One / One-to-Many',
                'Schema Validation'
            ],
            website: 'https://www.mongodb.com/docs/manual/core/data-modeling-introduction/',
            nextStepId: 'indexing'
        },
        {
            id: 'indexing',
            title: 'Indexing',
            description: 'Optimizing query performance.',
            whyImportant: 'Preventing collection scans is critical for speed.',
            subtopics: [
                'Single Field vs Compound Indexes',
                'Multikey Indexes (Arrays)',
                'Text Indexes',
                'Geospatial Indexes',
                'TTL Indexes'
            ],
            website: 'https://www.mongodb.com/docs/manual/indexes/',
            nextStepId: 'aggregation'
        },
        {
            id: 'aggregation',
            title: 'Aggregation Framework',
            description: 'Advanced data processing.',
            whyImportant: 'Performing complex analytics and transformations like SQL GROUP BY/JOIN.',
            subtopics: [
                'Pipelines & Stages',
                '$match, $group, $sort',
                '$project, $unwind',
                '$lookup (Joins)',
                '$bucket'
            ],
            website: 'https://www.mongodb.com/docs/manual/aggregation/',
            nextStepId: 'transactions'
        },
        {
            id: 'transactions',
            title: 'Transactions',
            description: 'ACID properties.',
            whyImportant: 'Ensuring data integrity across multiple documents.',
            subtopics: [
                'Multi-Document ACID Transactions',
                'Start / Commit / Abort Transaction',
                'Read Concerns / Write Concerns'
            ],
            website: 'https://www.mongodb.com/docs/manual/core/transactions/',
            nextStepId: 'scaling'
        },
        {
            id: 'scaling',
            title: 'Replication & Sharding',
            description: 'High availability and scaling.',
            whyImportant: 'Keeping your database up and handling massive data.',
            subtopics: [
                'Replica Sets (Primary/Secondary)',
                'Oplog',
                'Sharding (Horizontal Scaling)',
                'Shard Keys'
            ],
            website: 'https://www.mongodb.com/docs/manual/sharding/',
            nextStepId: 'security'
        },
        {
            id: 'security',
            title: 'Security',
            description: 'Protecting your data.',
            whyImportant: 'Databases are prime targets for attacks.',
            subtopics: [
                'Authentication (SCRAM, x.509)',
                'Authorization (RBAC)',
                'Encryption at Rest / in Transit',
                'Auditing'
            ],
            website: 'https://www.mongodb.com/docs/manual/security/',
            nextStepId: null
        }
    ]
};
