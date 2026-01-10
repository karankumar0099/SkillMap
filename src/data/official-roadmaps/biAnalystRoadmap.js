export const biAnalystRoadmap = {
    id: 'bi-analyst',
    title: 'BI Analyst',
    description: 'Transforming data into actionable business insights.',
    nodes: [
        {
            id: 'bi-basics',
            title: 'Business Intelligence Basics',
            description: 'Understanding data-driven decision making.',
            whyImportant: 'Bridge the gap between raw data and business strategy.',
            subtopics: ['KPIs & Metrics', 'Data Literacy', 'Stakeholder Management'],
            website: 'https://www.coursera.org/articles/business-intelligence-analyst',
            nextStepId: 'sql-bi'
        },
        {
            id: 'sql-bi',
            title: 'SQL for Analysis',
            description: 'Querying data warehouses.',
            whyImportant: 'You need to fetch and manipulate your own data.',
            subtopics: ['Joins', 'Aggregations', 'Window Functions', 'CTEs'],
            website: 'https://mode.com/sql-tutorial/',
            nextStepId: 'visualization'
        },
        {
            id: 'visualization',
            title: 'Data Visualization tools',
            description: 'Presenting stories with data.',
            whyImportant: 'A dashboard is worth a thousand queries.',
            subtopics: ['PowerBI', 'Tableau', 'Looker', 'DAX/M Language'],
            website: 'https://www.tableau.com/learn/articles/data-visualization',
            nextStepId: 'data-modeling'
        },
        {
            id: 'data-modeling',
            title: 'Data Modeling',
            description: 'Star and Snowflake schemas.',
            whyImportant: 'Efficient data structures enable fast reporting.',
            subtopics: ['Dimensional Modeling', 'Fact Tables', 'Normalization'],
            website: 'https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/',
            nextStepId: null
        }
    ]
};
