export const laravelRoadmap = {
    id: 'laravel',
    title: 'Laravel Developer',
    description: 'The PHP Framework for Web Artisans.',
    nodes: [
        {
            id: 'laravel-basics',
            title: 'Laravel Basics',
            description: 'Installation, Directory Structure, and Routing.',
            whyImportant: 'Understand the MVC structure of Laravel.',
            subtopics: ['Installation (Composer)', 'Directory Structure', 'Routing', 'Blade Templates'],
            website: 'https://laravel.com/docs/installation',
            nextStepId: 'database-eloquent'
        },
        {
            id: 'database-eloquent',
            title: 'Database & Eloquent ORM',
            description: 'Working with databases using Laravel\'s powerful ORM.',
            whyImportant: 'Eloquent makes database interactions intuitive and enjoyable.',
            subtopics: ['Migrations', 'Models', 'Relationships', 'Factories & Seeders'],
            website: 'https://laravel.com/docs/eloquent',
            nextStepId: 'controllers-middleware'
        },
        {
            id: 'controllers-middleware',
            title: 'Controllers & Middleware',
            description: 'Handling logic and request filtering.',
            whyImportant: 'Organize your application logic and protect routes.',
            subtopics: ['Controllers', 'Middleware', 'Requests & Responses', 'Validation'],
            website: 'https://laravel.com/docs/controllers',
            nextStepId: 'advanced-features'
        },
        {
            id: 'advanced-features',
            title: 'Advanced Features',
            description: 'Authentication, API Resources, and Testing.',
            whyImportant: 'Build robust and secure applications.',
            subtopics: ['Authentication (Breeze/Jetstream)', 'API Resources', 'Testing (Pest/PHPUnit)', 'Queues'],
            website: 'https://laravel.com/docs/authentication',
            nextStepId: null
        }
    ]
};
