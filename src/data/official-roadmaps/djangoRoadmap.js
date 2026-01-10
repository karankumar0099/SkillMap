export const djangoRoadmap = {
    id: 'django',
    title: 'Django',
    description: 'The Web Framework for Perfectionists with Deadlines.',
    nodes: [
        {
            id: 'django-basics',
            title: 'Django Basics',
            description: 'MVT Architecture, Project Setup, and Apps.',
            whyImportant: 'Understand the specific architecture Django uses.',
            subtopics: ['Virtual Environment', 'startproject vs startapp', 'settings.py', 'URLs'],
            website: 'https://docs.djangoproject.com/en/stable/intro/tutorial01/',
            nextStepId: 'django-models'
        },
        {
            id: 'django-models',
            title: 'Models & ORM',
            description: 'Defining your database schema.',
            whyImportant: 'Django\'s ORM abstracts SQL queries into Python code.',
            subtopics: ['Model Fields', 'Migrations', 'QuerySets', 'Relationships'],
            website: 'https://docs.djangoproject.com/en/stable/topics/db/models/',
            nextStepId: 'django-views'
        },
        {
            id: 'django-views',
            title: 'Views & Templates',
            description: 'Handling logic and displaying HTML.',
            whyImportant: 'Connects your data to the user interface.',
            subtopics: ['Function Based Views', 'Class Based Views', 'DTL (Django Template Language)', 'Context'],
            website: 'https://docs.djangoproject.com/en/stable/topics/http/views/',
            nextStepId: 'django-rest'
        },
        {
            id: 'django-rest',
            title: 'Django REST Framework',
            description: 'Building APIs with Django.',
            whyImportant: 'Essential for separating backend from frontend (React/Vue).',
            subtopics: ['Serializers', 'ViewSets', 'Authentication', 'Routers'],
            website: 'https://www.django-rest-framework.org/',
            nextStepId: null
        }
    ]
};
