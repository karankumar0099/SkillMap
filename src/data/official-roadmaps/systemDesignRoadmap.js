export const systemDesignRoadmap = {
    id: 'system-design',
    title: 'System Design Roadmap',
    description: 'Learn how to design large-scale distributed systems.',
    nodes: [
        {
            id: 'fundamentals',
            title: 'Fundamentals',
            description: 'Core concepts of distributed systems.',
            whyImportant: 'You cannot design a system without understanding the tradeoffs.',
            subtopics: [
                'Horizontal vs Vertical Scaling',
                'Latency vs Throughput',
                'CAP Theorem',
                'PACELC Theorem',
                'Consistent Hashing'
            ],
            website: 'https://github.com/donnemartin/system-design-primer#performance-vs-scalability',
            nextStepId: 'networking'
        },
        {
            id: 'networking',
            title: 'Networking & Communication',
            description: 'How services talk to each other.',
            whyImportant: 'Data flow is central to design.',
            subtopics: [
                'HTTP / HTTPS',
                'TCP / UDP',
                'DNS',
                'GraphQL / REST / gRPC',
                'WebSockets / Server-Sent Events'
            ],
            website: 'https://www.cloudflare.com/learning/network-layer/what-is-networking/',
            nextStepId: 'databases'
        },
        {
            id: 'databases',
            title: 'Databases & Storage',
            description: 'Storing data at scale.',
            whyImportant: 'Data persistence and retrieval speed are bottlenecks.',
            subtopics: [
                'Relational (ACID properties)',
                'NoSQL (Key-Value, Document, Wide-Column, Graph)',
                'Replication (Master-Slave, Multi-Master)',
                'Sharding (Database Partitioning)',
                'Quorum'
            ],
            website: 'https://aws.amazon.com/nosql/',
            nextStepId: 'caching'
        },
        {
            id: 'caching',
            title: 'Caching',
            description: 'Temporary high-speed data storage.',
            whyImportant: 'Significantly improves read performance.',
            subtopics: [
                'Client vs Server vs Database Caching',
                'CDN (Content Delivery Network)',
                'Eviction Policies (LRU, LFU)',
                'Cache Invalidation Strategies (Write-through, Write-back)'
            ],
            website: 'https://aws.amazon.com/caching/',
            nextStepId: 'proxies'
        },
        {
            id: 'proxies',
            title: 'Proxies & Load Balancers',
            description: 'Distributing traffic.',
            whyImportant: 'Ensures reliability and availability by preventing overload.',
            subtopics: [
                'Forward Proxy vs Reverse Proxy',
                'Layer 4 vs Layer 7 Load Balancing',
                'Algorithms (Round Robin, Least Connections)'
            ],
            website: 'https://www.nginx.com/resources/glossary/load-balancing/',
            nextStepId: 'async'
        },
        {
            id: 'async',
            title: 'Message Queues & Async',
            description: 'Decoupling services.',
            whyImportant: 'Prevents cascading failures and allows asynchronous processing.',
            subtopics: [
                'Message Queues (RabbitMQ, Kafka)',
                'Pub-Sub Model',
                'Task Queues',
                'Event Driven Architecture'
            ],
            website: 'https://kafka.apache.org/intro',
            nextStepId: 'design-patterns'
        },
        {
            id: 'design-patterns',
            title: 'High Availability Patterns',
            description: 'Keeping systems up and running.',
            whyImportant: 'Reliability is a key metric.',
            subtopics: [
                'Failover (Active-Passive, Active-Active)',
                'Heartbeat',
                'Circuit Breaker',
                'Rate Limiting & Throttling',
                'Bulkhead Pattern'
            ],
            website: 'https://martinfowler.com/articles/patterns-of-distributed-systems/',
            nextStepId: 'monitoring'
        },
        {
            id: 'monitoring',
            title: 'Monitoring & Logging',
            description: 'Observability of the system.',
            whyImportant: 'You need to know when and why things break.',
            subtopics: [
                'Logging',
                'Metrics (Prometheus)',
                'Alerting',
                'Distributed Tracing'
            ],
            website: 'https://www.datadoghq.com/blog/monitoring-101-collection/',
            nextStepId: null
        }
    ]
};
