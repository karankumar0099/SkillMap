export const aspnetRoadmap = {
    id: 'aspnet-core',
    title: 'ASP.NET Core Developer',
    description: 'A comprehensive guide to becoming an ASP.NET Core developer.',
    nodes: [
        {
            id: 'csharp-basics',
            title: 'Learn the Basics of C#',
            description: 'The primary language for .NET development.',
            whyImportant: 'You cannot build .NET apps without knowing C#.',
            subtopics: [
                '.NET CLI',
                'Variables & Data Types',
                'Object-Oriented Programming (OOP)',
                'LINQ (Language Integrated Query)',
                'Async / Await'
            ],
            website: 'https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/',
            nextStepId: 'general-skills'
        },
        {
            id: 'general-skills',
            title: 'General Development Skills',
            description: 'Skills every developer should know.',
            whyImportant: 'Foundational knowledge for any stack.',
            subtopics: [
                'Git - Version Control',
                'HTTP / HTTPS Protocol',
                'Data Structures & Algorithms',
                'Design Patterns (SOLID)'
            ],
            website: 'https://git-scm.com/doc',
            nextStepId: 'aspnet-basics'
        },
        {
            id: 'aspnet-basics',
            title: 'ASP.NET Core Basics',
            description: 'The framework fundamentals.',
            whyImportant: 'Understanding how the web framework operates.',
            subtopics: [
                'MVC vs Razor Pages vs Minimal APIs',
                'Middlewares',
                'Dependency Injection (Built-in)',
                'Configuration & Options Pattern',
                'App Settings (appsettings.json)'
            ],
            website: 'https://learn.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core',
            nextStepId: 'db-basics'
        },
        {
            id: 'db-basics',
            title: 'Database & ORM',
            description: 'Working with data.',
            whyImportant: 'Connecting your application to a database.',
            subtopics: [
                'SQL Server / PostgreSQL',
                'Entity Framework Core (EF Core)',
                'Dapper (Micro ORM)',
                'Stored Procedures',
                'Migrations'
            ],
            website: 'https://learn.microsoft.com/en-us/ef/core/',
            nextStepId: 'api'
        },
        {
            id: 'api',
            title: 'API Development',
            description: 'Building robust APIs.',
            whyImportant: 'Exposing your application logic to clients.',
            subtopics: [
                'RESTful APIs',
                'Swagger / OpenAPI',
                'Routing & Model Binding',
                'Action Filters',
                'Versioning'
            ],
            website: 'https://learn.microsoft.com/en-us/aspnet/core/web-api/',
            nextStepId: 'security'
        },
        {
            id: 'security',
            title: 'Security',
            description: 'Securing your application.',
            whyImportant: 'Protecting user data is paramount.',
            subtopics: [
                'Authentication (Identity, JWT, Cookies)',
                'Authorization (Policies, Claims)',
                'CORS',
                'HTTPS / SSL',
                'Data Protection API'
            ],
            website: 'https://learn.microsoft.com/en-us/aspnet/core/security/',
            nextStepId: 'performance'
        },
        {
            id: 'performance',
            title: 'Performance & Caching',
            description: 'Making your app faster.',
            whyImportant: 'Users expect instant responses.',
            subtopics: [
                'In-Memory Cache',
                'Distributed Cache (Redis)',
                'Response Caching',
                'Asynchronous Programming'
            ],
            website: 'https://learn.microsoft.com/en-us/aspnet/core/performance/caching/memory',
            nextStepId: 'realtime'
        },
        {
            id: 'realtime',
            title: 'Real-Time Communication',
            description: 'Pushing updates to clients.',
            whyImportant: 'For chat apps, live dashboards, etc.',
            subtopics: [
                'SignalR',
                'WebSockets'
            ],
            website: 'https://learn.microsoft.com/en-us/aspnet/core/signalr/introduction',
            nextStepId: 'background-tasks'
        },
        {
            id: 'background-tasks',
            title: 'Background Tasks',
            description: 'Running long-running processes.',
            whyImportant: 'Offloading work from the main request thread.',
            subtopics: [
                'Hosted Services (IHostedService)',
                'BackgroundService',
                'Hangfire / Quartz.NET'
            ],
            website: 'https://learn.microsoft.com/en-us/aspnet/core/fundamentals/host/hosted-services',
            nextStepId: 'testing'
        },
        {
            id: 'testing',
            title: 'Testing',
            description: 'Validating your code.',
            whyImportant: 'Ensuring reliability and preventing regressions.',
            subtopics: [
                'Unit Testing (xUnit, NUnit)',
                'Integration Testing',
                'Moq / NSubstitute',
                'TestContainers'
            ],
            website: 'https://learn.microsoft.com/en-us/dotnet/core/testing/',
            nextStepId: 'deployment'
        },
        {
            id: 'deployment',
            title: 'Deployment & DevOps',
            description: 'Hosting your application.',
            whyImportant: 'Getting your app to production.',
            subtopics: [
                'Docker & Containers',
                'Azure / AWS',
                'CI/CD (GitHub Actions, Azure Pipelines)',
                'IIS / Kestrel'
            ],
            website: 'https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/',
            nextStepId: null
        }
    ]
};
