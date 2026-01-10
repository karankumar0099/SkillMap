export const elasticsearchRoadmap = {
    id: 'elasticsearch',
    title: 'Elasticsearch',
    description: 'A distributed, RESTful search and analytics engine.',
    nodes: [
        {
            id: 'es-basics',
            title: 'Basics Concepts',
            description: 'Clusters, Nodes, Indices, and Documents.',
            whyImportant: 'Understand the distributed nature of Elasticsearch.',
            subtopics: ['Inverted Index', 'Shards and Replicas', 'Mapping', 'Analyzers'],
            website: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/elasticsearch-intro.html',
            nextStepId: 'querying'
        },
        {
            id: 'querying',
            title: 'Query DSL',
            description: 'Searching your data.',
            whyImportant: 'The core power of ES lies in its flexible query language.',
            subtopics: ['Match Query', 'Term Query', 'Bool Query', 'Filters vs Queries'],
            website: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html',
            nextStepId: 'aggregations'
        },
        {
            id: 'aggregations',
            title: 'Aggregations',
            description: 'Analytics and statistics.',
            whyImportant: 'Extract insights from your data.',
            subtopics: ['Metric Aggregations', 'Bucket Aggregations', 'Pipeline Aggregations'],
            website: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations.html',
            nextStepId: 'elk-stack'
        },
        {
            id: 'elk-stack',
            title: 'The ELK Stack',
            description: 'Logstash and Kibana integration.',
            whyImportant: ' visualize data and manage pipelines.',
            subtopics: ['Kibana Dashboards', 'Logstash Pipelines', 'Beats'],
            website: 'https://www.elastic.co/what-is/elk-stack',
            nextStepId: null
        }
    ]
};
