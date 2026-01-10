export const dataAnalystRoadmap = {
    id: 'data-analyst',
    title: 'Data Analyst',
    description: 'Step by step guide to becoming a Data Analyst in 2024.',
    nodes: [
        {
            id: 'intro',
            title: 'Introduction to Data Analytics',
            description: 'Understanding what data analysis is and its types.',
            whyImportant: 'Before diving into tools, understand the "why" and "how" of solving problems with data.',
            website: 'https://www.ibm.com/topics/data-analytics',
            nextStepId: 'excel',
            subtopics: ['Descriptive Analytics', 'Diagnostic Analytics', 'Predictive Analytics', 'Prescriptive Analytics']
        },
        {
            id: 'excel',
            title: 'Excel & Spreadsheets',
            description: 'The universal tool for data.',
            whyImportant: 'Excel is still the most widely used tool for quick analysis and reporting.',
            website: 'https://support.microsoft.com/en-us/excel',
            nextStepId: 'programming',
            subtopics: ['VLOOKUP/XLOOKUP', 'Pivot Tables', 'Data Cleaning', 'Charts & Graphs']
        },
        {
            id: 'programming',
            title: 'Programming Language',
            description: 'Python or R.',
            whyImportant: 'For handling large datasets and advanced analysis that Excel cannot handle.',
            website: 'https://www.python.org/about/gettingstarted/',
            nextStepId: 'sql',
            subtopics: ['Python Basics', 'Pandas', 'NumPy', 'R Basics']
        },
        {
            id: 'sql',
            title: 'SQL & Databases',
            description: 'Structured Query Language.',
            whyImportant: 'Data lives in databases. You must know how to extract and manipulate it.',
            website: 'https://mode.com/sql-tutorial/',
            nextStepId: 'data-collection',
            subtopics: ['SELECT', 'JOINS', 'Aggregations', 'Subqueries', 'Window Functions']
        },
        {
            id: 'data-collection',
            title: 'Data Collection & Wrangling',
            description: 'Gathering and Cleaning Data.',
            whyImportant: 'Real-world data is messy. You spend 80% of your time cleaning data.',
            website: 'https://pandas.pydata.org/docs/user_guide/10min.html',
            nextStepId: 'statistics',
            subtopics: ['APIs', 'Web Scraping', 'Handling Missing Values', 'Data Transformation']
        },
        {
            id: 'statistics',
            title: 'Statistics & Math',
            description: 'The science of data.',
            whyImportant: 'To make inferences and predictions, you need a solid grasp of probability and statistics.',
            website: 'https://www.khanacademy.org/math/statistics-probability',
            nextStepId: 'visualization',
            subtopics: ['Mean/Median/Mode', 'Standard Deviation', 'Hypothesis Testing', 'Correlation']
        },
        {
            id: 'visualization',
            title: 'Data Visualization',
            description: 'Storytelling with Data.',
            whyImportant: 'Insights are useless if stakeholders cannot understand them.',
            website: 'https://www.tableau.com/learn/articles/data-visualization',
            nextStepId: 'bi-tools',
            subtopics: ['Matplotlib/Seaborn', 'Bar/Line/Pie Charts', 'Heatmaps', 'Distributions']
        },
        {
            id: 'bi-tools',
            title: 'BI Tools',
            description: 'Tableau or Power BI.',
            whyImportant: 'For building interactive dashboards and automated reports for business users.',
            website: 'https://powerbi.microsoft.com/en-us/learning/',
            nextStepId: 'machine-learning',
            subtopics: ['Power BI', 'Tableau', 'Looker', 'Dashboard Design']
        },
        {
            id: 'machine-learning',
            title: 'Machine Learning (Basics)',
            description: 'Predictive Modeling.',
            whyImportant: 'Move from "what happened" to "what will happen".',
            website: 'https://scikit-learn.org/stable/getting_started.html',
            nextStepId: null,
            subtopics: ['Supervised Learning', 'Unsupervised Learning', 'Regression', 'Classification']
        }
    ]
};
