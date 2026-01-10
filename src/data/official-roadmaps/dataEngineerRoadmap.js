export const dataEngineerRoadmap = {
    id: 'data-engineer',
    title: 'Data Engineer',
    description: 'Step by step guide to becoming a Data Engineer in 2024.',
    nodes: [
        {
            id: 'intro',
            title: 'Introduction to Data Engineering',
            description: 'What is Data Engineering?',
            whyImportant: 'Understand the lifecycle of data: Generation, Storage, Ingestion, and Serving.',
            website: 'https://github.com/datastacktv/data-engineer-roadmap',
            nextStepId: 'programming',
            subtopics: ['ETL/ELT', 'Data Pipelines', 'Data Warehouse vs Data Lake']
        },
        {
            id: 'programming',
            title: 'Programming Language',
            description: 'Python, Java, or Scala.',
            whyImportant: 'Python is the king of data. Scala is used for Spark. SQL is mandatory.',
            website: 'https://www.python.org/',
            nextStepId: 'os',
            subtopics: ['Python', 'SQL', 'Scala', 'Bash Scripting']
        },
        {
            id: 'os',
            title: 'Operating System',
            description: 'Linux & Terminal.',
            whyImportant: 'Most big data tools (Hadoop, Spark, Kafka) run on Linux.',
            website: 'https://linuxcommand.org/',
            nextStepId: 'db',
            subtopics: ['Shell Scripting', 'Cron Jobs', 'SSH', 'File Permissions']
        },
        {
            id: 'db',
            title: 'Databases (SQL & NoSQL)',
            description: 'Storing Data.',
            whyImportant: 'You must master querying and schema design for OLTP and OLAP systems.',
            website: 'https://www.postgresql.org/',
            nextStepId: 'warehouse',
            subtopics: ['PostgreSQL', 'MySQL', 'MongoDB', 'Cassandra', 'Redis']
        },
        {
            id: 'warehouse',
            title: 'Data Warehousing',
            description: 'BigQuery, Snowflake, Redshift.',
            whyImportant: 'Analytical databases designed for querying massive datasets efficiently.',
            website: 'https://cloud.google.com/bigquery',
            nextStepId: 'ingestion',
            subtopics: ['Snowflake', 'BigQuery', 'Dimensional Modeling', 'Star Schema']
        },
        {
            id: 'ingestion',
            title: 'Data Ingestion & Pipelines',
            description: 'Moving Data.',
            whyImportant: 'Build reliable pipelines to move data from source to destination (ETL).',
            website: 'https://airflow.apache.org/',
            nextStepId: 'big-data',
            subtopics: ['Apache Airflow', 'Kafka', 'CDC (Change Data Capture)', 'Batch vs Streaming']
        },
        {
            id: 'big-data',
            title: 'Big Data Frameworks',
            description: 'Processing massive scale.',
            whyImportant: 'When data exceeds single-server capacity, use distributed computing.',
            website: 'https://spark.apache.org/',
            nextStepId: 'cloud',
            subtopics: ['Apache Spark', 'Hadoop/HDFS', 'Databricks', 'MapReduce']
        },
        {
            id: 'cloud',
            title: 'Cloud Data Engineering',
            description: 'AWS, Azure, GCP.',
            whyImportant: 'Modern data platform infrastructure lives on the cloud.',
            website: 'https://aws.amazon.com/big-data/datalakes-and-analytics/',
            nextStepId: 'containerization',
            subtopics: ['AWS Glue', 'S3', 'Azure Data Factory', 'GCP Dataflow']
        },
        {
            id: 'containerization',
            title: 'Containerization',
            description: 'Docker & Kubernetes.',
            whyImportant: 'Deploy and manage your data pipelines reproducibly.',
            website: 'https://www.docker.com/',
            nextStepId: null,
            subtopics: ['Docker', 'Kubernetes', 'Helm']
        }
    ]
};
