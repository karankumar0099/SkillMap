export const machineLearningRoadmap = {
    id: 'machine-learning',
    title: 'Machine Learning',
    description: 'Step by step guide to becoming a Machine Learning Engineer in 2024.',
    nodes: [
        {
            id: 'intro',
            title: 'Introduction',
            description: 'What is ML?',
            whyImportant: 'Understand the difference between AI, ML, and Deep Learning.',
            website: 'https://developers.google.com/machine-learning/crash-course',
            nextStepId: 'mathematics',
            subtopics: ['Supervised vs Unsupervised', 'Regression vs Classification', 'ML Ecosystem']
        },
        {
            id: 'mathematics',
            title: 'Mathematics',
            description: 'Linear Algebra & Calculus.',
            whyImportant: 'ML models are mathematical functions. You need to understand vectors, matrices, and derivatives.',
            website: 'https://www.khanacademy.org/math/linear-algebra',
            nextStepId: 'statistics',
            subtopics: ['Vectors & Matrices', 'Eigenvalues', 'Calculus (Derivatives)', 'Optimization']
        },
        {
            id: 'statistics',
            title: 'Statistics & Probability',
            description: 'The logic of uncertainty.',
            whyImportant: 'Models make predictions based on probabilities. You need to understand distributions and hypothesis testing.',
            website: 'https://see.stanford.edu/Course/CS229',
            nextStepId: 'programming',
            subtopics: ['Probability Distributions', 'Bayes Theorem', 'Hypothesis Testing', 'Bias & Variance']
        },
        {
            id: 'programming',
            title: 'Programming (Python)',
            description: 'Python ecosystem.',
            whyImportant: 'Python is the language of ML. Master NumPy, Pandas, and Matplotlib.',
            website: 'https://numpy.org/doc/stable/user/absolute_beginners.html',
            nextStepId: 'algorithms',
            subtopics: ['NumPy (Matrix Math)', 'Pandas (Data manipulation)', 'Matplotlib (Plotting)', 'Scikit-learn']
        },
        {
            id: 'algorithms',
            title: 'ML Algorithms',
            description: 'Classic Algorithms.',
            whyImportant: 'Before jumping to deep learning, master the fundamentals.',
            website: 'https://scikit-learn.org/stable/supervised_learning.html',
            nextStepId: 'deep-learning',
            subtopics: ['Linear Regression', 'Logistic Regression', 'Decision Trees', 'SVM', 'K-Means']
        },
        {
            id: 'deep-learning',
            title: 'Deep Learning',
            description: 'Neural Networks.',
            whyImportant: 'For complex unstructured data (images, text, audio).',
            website: 'https://course.fast.ai/',
            nextStepId: 'frameworks',
            subtopics: ['Neural Networks', 'Backpropagation', 'CNN (Vision)', 'RNN/LSTM (Sequences)']
        },
        {
            id: 'frameworks',
            title: 'Deep Learning Frameworks',
            description: 'PyTorch & TensorFlow.',
            whyImportant: 'Tools to build and train neural networks using GPUs.',
            website: 'https://pytorch.org/tutorials/',
            nextStepId: 'nlp',
            subtopics: ['PyTorch', 'TensorFlow', 'Keras', 'Hugging Face']
        },
        {
            id: 'nlp',
            title: 'NLP & LLMs',
            description: 'Natural Language Processing.',
            whyImportant: 'Understanding text is the hottest field in AI right now.',
            website: 'https://huggingface.co/learn/nlp-course',
            nextStepId: 'mlops',
            subtopics: ['Tokenization', 'Transformers', 'BERT', 'GPT']
        },
        {
            id: 'mlops',
            title: 'MLOps',
            description: 'Deployment & Monitoring.',
            whyImportant: 'Deploying models to production and monitoring for drift.',
            website: 'https://madewithml.com/',
            nextStepId: null,
            subtopics: ['Model Serving', 'Model Monitoring', 'Feature Stores', 'Docker']
        }
    ]
};
