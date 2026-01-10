export const mlopsRoadmap = {
    id: 'mlops',
    title: 'MLOps',
    description: 'DevOps for Machine Learning.',
    nodes: [
        {
            id: 'mlops-basics',
            title: 'MLOps Principles',
            description: 'Reproducibility, Automation, and Monitoring.',
            whyImportant: 'Taking ML from research notebook to production.',
            subtopics: ['Model Lifecycle', 'Versioning (Data/Model)', 'CI/CD for ML'],
            website: 'https://ml-ops.org/',
            nextStepId: 'tracking'
        },
        {
            id: 'tracking',
            title: 'Experiment Tracking',
            description: 'Logging params and metrics.',
            whyImportant: 'Remember what worked and what didn\'t.',
            subtopics: ['MLflow', 'Weights & Biases', 'TensorBoard'],
            website: 'https://mlflow.org/docs/latest/tracking.html',
            nextStepId: 'serving'
        },
        {
            id: 'serving',
            title: 'Model Serving',
            description: 'Deploying models as APIs.',
            whyImportant: 'Making your model accessible to end users.',
            subtopics: ['TorchServe', 'TensorFlow Serving', 'FastAPI', 'Ray Serve'],
            website: 'https://www.kubeflow.org/docs/external-add-ons/serving/kfserving/',
            nextStepId: 'monitoring'
        },
        {
            id: 'monitoring',
            title: 'Monitoring & Observability',
            description: 'Detecting drift.',
            whyImportant: 'Models degrade over time as data changes.',
            subtopics: ['Data Drift', 'Concept Drift', 'Grafana/Prometheus for ML'],
            website: 'https://christophergs.com/machine%20learning/2020/03/14/how-to-monitor-machine-learning-models/',
            nextStepId: null
        }
    ]
};
