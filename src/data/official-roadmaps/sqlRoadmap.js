export const sqlRoadmap = {
    id: 'sql',
    title: 'SQL Roadmap',
    description: 'Comprehensive guide to mastering SQL: From basics to advanced optimization.',
    nodes: [
        {
            id: 'intro',
            title: 'Introduction to Databases',
            description: 'Understand the core concepts of relational databases and how SQL fits in.',
            whyImportant: 'Before writing queries, you must understand how data is stored, related, and managed in an RDBMS (Relational Database Management System).',
            subtopics: [
                'What is RDBMS?',
                'RDBMS Benefits & Limitations',
                'SQL vs NoSQL',
                'Database Normalization (1NF, 2NF, 3NF)'
            ],
            website: 'https://www.w3schools.com/sql/sql_intro.asp',
            nextStepId: 'basics'
        },
        {
            id: 'basics',
            title: 'SQL Basics & Syntax',
            description: 'Learn the fundamental rules of writing SQL queries, types of data you can store, and operators.',
            whyImportant: 'Mastering the syntax and data types is essential for writing correct and efficient queries.',
            subtopics: [
                'SQL Syntax Rules',
                'SQL Comments',
                'Data Types (INT, VARCHAR, DATE, etc.)',
                'Operators (Arithmetic, Comparison, Logical)'
            ],
            website: 'https://www.w3schools.com/sql/sql_syntax.asp',
            nextStepId: 'ddl'
        },
        {
            id: 'ddl',
            title: 'Data Definition Language (DDL)',
            description: 'Commands to define, modify, and manage the structure of your database tables.',
            whyImportant: 'You need to be able to create and structure your tables before you can store any data.',
            subtopics: [
                'CREATE TABLE',
                'ALTER TABLE (Add/Drop Column)',
                'DROP TABLE',
                'TRUNCATE TABLE'
            ],
            website: 'https://www.postgresql.org/docs/current/ddl.html',
            nextStepId: 'dml'
        },
        {
            id: 'dml',
            title: 'Data Manipulation Language (DML)',
            description: 'Commands to insert, update, and delete data within your tables.',
            whyImportant: 'These are the commands you will use most frequently to manage the lifecycle of data records.',
            subtopics: [
                'INSERT INTO',
                'UPDATE',
                'DELETE FROM',
                'SELECT INTO / INSERT INTO SELECT'
            ],
            website: 'https://www.w3schools.com/sql/sql_insert.asp',
            nextStepId: 'dql'
        },
        {
            id: 'dql',
            title: 'Data Query Language (DQL)',
            description: 'Retrieving data from the database using SELECT and its clauses.',
            whyImportant: 'Retrieving data is the primary purpose of SQL. You need to know how to target exactly the data you need.',
            subtopics: [
                'SELECT Statement',
                'SELECT DISTINCT',
                'FROM Clause',
                'Aliases (AS)'
            ],
            website: 'https://www.w3schools.com/sql/sql_select.asp',
            nextStepId: 'filtering'
        },
        {
            id: 'filtering',
            title: 'Filtering and Sorting',
            description: 'Refining your results to find specific records and organizing the output.',
            whyImportant: 'Real-world data is vast. You rarely need "all" records; you need specific ones, sorted in a useful way.',
            subtopics: [
                'WHERE Clause',
                'AND, OR, NOT',
                'ORDER BY (ASC/DESC)',
                'LIMIT / TOP',
                'BETWEEN, IN, LIKE (Wildcards)',
                'IS NULL / IS NOT NULL'
            ],
            website: 'https://www.w3schools.com/sql/sql_where.asp',
            nextStepId: 'constraints'
        },
        {
            id: 'constraints',
            title: 'Constraints',
            description: 'Rules applied to columns to ensure data integrity and reliability.',
            whyImportant: 'Constraints prevent invalid data from entering your system, maintaining the quality and consistency of your database.',
            subtopics: [
                'PRIMARY KEY',
                'FOREIGN KEY',
                'UNIQUE',
                'NOT NULL',
                'CHECK',
                'DEFAULT'
            ],
            website: 'https://www.w3schools.com/sql/sql_constraints.asp',
            nextStepId: 'aggregates'
        },
        {
            id: 'aggregates',
            title: 'Aggregate Functions',
            description: 'Performing calculations on a set of values to return a single scalar value.',
            whyImportant: 'Crucial for business intelligence and reporting (e.g., "What is the total sales amount?", "How many users signed up?").',
            subtopics: [
                'COUNT()',
                'SUM()',
                'AVG()',
                'MIN()',
                'MAX()',
                'GROUP BY',
                'HAVING Clause'
            ],
            website: 'https://www.w3schools.com/sql/sql_groupby.asp',
            nextStepId: 'joins'
        },
        {
            id: 'joins',
            title: 'Joins',
            description: 'Combining rows from two or more tables based on a related column.',
            whyImportant: 'In relational databases, data is split across tables. Joins are how you bring that data back together.',
            subtopics: [
                'INNER JOIN',
                'LEFT (OUTER) JOIN',
                'RIGHT (OUTER) JOIN',
                'FULL (OUTER) JOIN',
                'Self Join',
                'Cross Join',
                'Unions'
            ],
            website: 'https://www.w3schools.com/sql/sql_join.asp',
            nextStepId: 'advanced-functions'
        },
        {
            id: 'advanced-functions',
            title: 'Advanced Functions',
            description: 'Built-in functions for manipulating strings, dates, and numbers.',
            whyImportant: 'Allows you to format and transform data directly within the database before retrieving it.',
            subtopics: [
                'String Functions (CONCAT, SUBSTRING, LENGTH, REPLACE)',
                'Date/Time Functions (NOW, DATEADD, DATEDIFF)',
                'Numeric Functions (ROUND, CEILING, FLOOR)',
                'Case Statements (Conditional Logic)'
            ],
            website: 'https://www.w3schools.com/sql/sql_ref_sqlserver.asp',
            nextStepId: 'subqueries'
        },
        {
            id: 'subqueries',
            title: 'Subqueries',
            description: 'A query nested inside another query.',
            whyImportant: 'Solves complex problems where one query depends on the results of another dynamic calculation.',
            subtopics: [
                'Scalar Subqueries',
                'Correlated Subqueries',
                'Subqueries in WHERE/FROM/SELECT',
                'EXISTS Operator',
                'ANY / ALL Operators'
            ],
            website: 'https://www.w3schools.com/sql/sql_exists.asp',
            nextStepId: 'views'
        },
        {
            id: 'views',
            title: 'Views',
            description: 'Virtual tables based on the result-set of an SQL statement.',
            whyImportant: 'Simplifies complex queries, enhances security by hiding columns, and presents specific data perspectives to users.',
            subtopics: [
                'CREATE VIEW',
                'Updating Views',
                'DROPPING Views',
                'Materialized Views (Advanced Concept)'
            ],
            website: 'https://www.w3schools.com/sql/sql_view.asp',
            nextStepId: 'indexes'
        },
        {
            id: 'indexes',
            title: 'Indexes',
            description: 'Data structures that improve the speed of data retrieval operations.',
            whyImportant: 'Without indexes, large databases become incredibly slow. Essential for performance optimization.',
            subtopics: [
                'CREATE INDEX',
                'Unique Indexes',
                'Clustered vs Non-Clustered Indexes',
                'When to use (and when NOT to use) Indexes'
            ],
            website: 'https://use-the-index-luke.com/',
            nextStepId: 'transactions'
        },
        {
            id: 'transactions',
            title: 'Transactions (TCL)',
            description: 'Managing changes to database data as a single unit or "transaction".',
            whyImportant: 'Ensures data validity and integrity, specifically handling crashes or concurrent access.',
            subtopics: [
                'ACID Properties (Atomicity, Consistency, Isolation, Durability)',
                'BEGIN TRANSACTION',
                'COMMIT',
                'ROLLBACK',
                'SAVEPOINT',
                'Isolation Levels'
            ],
            website: 'https://www.geeksforgeeks.org/sql-transactions/',
            nextStepId: 'procedures'
        },
        {
            id: 'procedures',
            title: 'Stored Procedures & Triggers',
            description: 'Code derived from SQL statements stored within the database.',
            whyImportant: 'Encapsulates business logic in the DB, reduces network traffic, and ensures consistent logic execution.',
            subtopics: [
                'Stored Procedures (CREATE PROCEDURE)',
                'User Defined Functions (UDFs)',
                'Triggers (Events: BEFORE/AFTER INSERT/UPDATE)',
                'Parameters'
            ],
            website: 'https://www.w3schools.com/sql/sql_stored_procedures.asp',
            nextStepId: 'advanced-sql'
        },
        {
            id: 'advanced-sql',
            title: 'Advanced SQL',
            description: 'Modern SQL features for complex data analysis.',
            whyImportant: 'Required for advanced data analytics, reporting, and solving complex sequence problems efficiently.',
            subtopics: [
                'Window Functions (ROW_NUMBER, RANK, LEAD, LAG)',
                'Common Table Expressions (CTEs)',
                'Recursive CTEs',
                'Pivot / Unpivot Operations'
            ],
            website: 'https://mode.com/sql-tutorial/sql-window-functions/',
            nextStepId: 'optimization'
        },
        {
            id: 'optimization',
            title: 'Performance Optimization',
            description: 'Techniques to speed up query execution.',
            whyImportant: 'As data grows, inefficient queries can crash systems. Optimization is a key skill for senior roles.',
            subtopics: [
                'Query Profiling & EXPLAIN',
                'Index Optimization',
                'Avoiding N+1 Problems',
                'Selective Projections (Avoid SELECT *)'
            ],
            website: 'https://www.sisense.com/blog/8-ways-to-fine-tune-your-sql-queries-for-production-databases/',
            nextStepId: null
        }
    ]
};
