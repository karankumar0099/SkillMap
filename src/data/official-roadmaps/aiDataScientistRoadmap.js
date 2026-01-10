export const aiDataScientistRoadmap = {
    id: 'ai-data-scientist',
    title: 'AI & Data Scientist',
    description: 'Step by step guide to becoming an AI & Data Scientist in 2024.',
    nodes: [
        {
            id: 'math',
            title: 'Mathematics',
            description: 'Foundation of AI.',
            whyImportant: 'You cannot understand Machine Learning without Linear Algebra and Calculus.',
            website: 'https://www.khanacademy.org/math/linear-algebra',
            nextStepId: 'statistics',
            subtopics: ['Linear Algebra', 'Calculus', 'Matrices', 'Vectors']
        },
        {
            id: 'statistics',
            title: 'Statistics',
            description: 'Understanding Data.',
            whyImportant: 'Probability and Statistics are the bedrock of Data Science.',
            website: 'https://www.coursera.org/browse/data-science/statistics',
            nextStepId: 'econometrics',
            subtopics: ['Probability', 'Hypothesis Testing', 'Distributions', 'Bayesian Inference']
        },
        {
            id: 'econometrics',
            title: 'Econometrics',
            description: 'Time Series & Forecasting.',
            whyImportant: 'Understand how variables affect each other over time.',
            website: 'https://www.econometrics-with-r.org/',
            nextStepId: 'coding',
            subtopics: ['Regression Analysis', 'Time Series', 'ARIMA Models', 'Forecasting']
        },
        {
            id: 'coding',
            title: 'Programming (Python)',
            description: 'The language of AI.',
            whyImportant: 'Python is the industry standard for Data Science and AI.',
            website: 'https://www.python.org/',
            nextStepId: 'eda',
            subtopics: ['Python Basics', 'Data Structures', 'Algorithms', 'SQL']
        },
        {
            id: 'eda',
            title: 'Exploratory Data Analysis',
            description: 'Data Visualization & Cleaning.',
            whyImportant: 'Understand your dataset before training models.',
            website: 'https://www.kaggle.com/learn/pandas',
            nextStepId: 'ml',
            subtopics: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Data Cleaning']
        },
        {
            id: 'ml',
            title: 'Machine Learning',
            description: 'Teaching computers to learn.',
            whyImportant: 'Predict outcomes without explicit programming.',
            website: 'https://scikit-learn.org/stable/',
            nextStepId: 'deep-learning',
            subtopics: ['Supervised Learning', 'Unsupervised Learning', 'Decision Trees', 'Random Forests']
        },
        {
            id: 'deep-learning',
            title: 'Deep Learning',
            description: 'Neural Networks.',
            whyImportant: 'Solve complex problems like image recognition and NLP.',
            website: 'https://www.deeplearning.ai/',
            nextStepId: 'mlops',
            subtopics: ['Neural Networks', 'CNNs', 'RNNs', 'Transformers', 'Backpropagation']
        },
        {
            id: 'mlops',
            title: 'MLOps',
            description: 'Deployment & CI/CD for ML.',
            whyImportant: 'Take your models from a notebook to production.',
            website: 'https://ml-ops.org/',
            nextStepId: null,
            subtopics: ['Model Deployment', 'Model Monitoring', 'CI/CD for ML', 'Feature Stores']
        }
    ]
};
