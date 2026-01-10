export const postgresqlRoadmap = {
    id: 'postgresql-dba',
    title: 'PostgreSQL DBA',
    description: 'Step by step guide to becoming a modern PostgreSQL DB Administrator.',
    nodes: [
        {
            id: 'intro',
            title: 'Introduction to RDBMS',
            description: 'Core concepts of Relational Databases.',
            whyImportant: 'Understand ACID properties and how relational databases differ from NoSQL.',
            website: 'https://www.postgresql.org/about/',
            nextStepId: 'installation',
            subtopics: ['ACID', 'MVCC', 'Transactions', 'WAL (Write-Ahead Log)']
        },
        {
            id: 'installation',
            title: 'Installation & Configuration',
            description: 'Setting up Postgres.',
            whyImportant: 'Learn to install on Linux, configure `postgresql.conf`, and manage services.',
            website: 'https://www.postgresql.org/docs/current/tutorial-start.html',
            nextStepId: 'sql',
            subtopics: ['Source vs Package', 'pg_hba.conf', 'postgresql.conf', 'Systemd']
        },
        {
            id: 'sql',
            title: 'Learn SQL',
            description: 'DDL, DML, and Advanced Queries.',
            whyImportant: 'You cannot administer a database without speaking its language.',
            website: 'https://www.postgresqltutorial.com/',
            nextStepId: 'architecture',
            subtopics: ['Joins', 'Indexes', 'Views', 'Stored Procedures', 'Triggers']
        },
        {
            id: 'architecture',
            title: 'Internal Architecture',
            description: 'How Postgres works under the hood.',
            whyImportant: 'Understand Shared Buffers, WAL, Vacuum, and the Background Writer for performance tuning.',
            website: 'https://www.interdb.jp/pg/',
            nextStepId: 'security',
            subtopics: ['Process Architecture', 'Memory Architecture', 'Page Layout', 'HOT Updates']
        },
        {
            id: 'security',
            title: 'Security & User Management',
            description: 'Authentication and Authorization.',
            whyImportant: 'Secure your data. Manage roles, privileges, and SSL connections.',
            website: 'https://www.postgresql.org/docs/current/security.html',
            nextStepId: 'backup',
            subtopics: ['Roles & Users', 'Grant/Revoke', 'Row Level Security', 'SSL/TLS']
        },
        {
            id: 'backup',
            title: 'Backup & Recovery',
            description: 'Disaster Recovery strategies.',
            whyImportant: 'Data loss is unacceptable. Master Logical (pg_dump) and Physical (WAL) backups.',
            website: 'https://www.postgresql.org/docs/current/backup.html',
            nextStepId: 'replication',
            subtopics: ['pg_dump/pg_restore', 'PITR (Point-In-Time Recovery)', 'pg_basebackup', 'Barman/pgBackRest']
        },
        {
            id: 'replication',
            title: 'High Availability & Replication',
            description: 'Scaling and Fault Tolerance.',
            whyImportant: 'Ensure zero downtime. Set up Streaming Replication and understand Failover.',
            website: 'https://www.postgresql.org/docs/current/high-availability.html',
            nextStepId: 'tuning',
            subtopics: ['Streaming Replication', 'Logical Replication', 'Patroni', 'PgBouncer']
        },
        {
            id: 'tuning',
            title: 'Performance Tuning',
            description: 'Optimizing Queries and Config.',
            whyImportant: 'Make it fast. Analyze query plans using EXPLAIN ANALYZE and tune indexes.',
            website: 'https://severalnines.com/blog/postgresql-performance-tuning-guide',
            nextStepId: 'monitoring',
            subtopics: ['EXPLAIN ANALYZE', 'Index Tuning', 'Vacuum Tuning', 'Work Mem']
        },
        {
            id: 'monitoring',
            title: 'Monitoring & Logging',
            description: 'Observability.',
            whyImportant: 'Detect issues before they become outages.',
            website: 'https://wiki.postgresql.org/wiki/Monitoring',
            nextStepId: null,
            subtopics: ['pg_stat_statements', 'Prometheus/Grafana', 'Log Analysis', 'PMM']
        }
    ]
};
