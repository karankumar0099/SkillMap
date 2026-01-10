export const angularRoadmap = {
    id: 'angular',
    title: 'Angular Developer',
    description: 'A comprehensive guide to becoming a professional Angular developer.',
    nodes: [
        {
            id: 'prerequisites',
            title: 'Prerequisites',
            description: 'The foundation you need before diving into Angular.',
            whyImportant: 'Angular is a robust framework. Strong fundamentals are non-negotiable.',
            subtopics: [
                'HTML & CSS',
                'JavaScript (ES6+)',
                'TypeScript (Crucial)',
                'Node.js & npm'
            ],
            website: 'https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html',
            nextStepId: 'angular-basics'
        },
        {
            id: 'angular-basics',
            title: 'Angular Basics & CLI',
            description: 'Getting started with the framework.',
            whyImportant: 'The Angular CLI is a powerful tool toolchain that automates much of the development workflow.',
            subtopics: [
                'Angular CLI (ng new, ng serve)',
                'Project Structure',
                'Standalone Components (Modern Angular)',
                'Modules (NgModule - Legacy but important)'
            ],
            website: 'https://angular.dev/tools/cli',
            nextStepId: 'components'
        },
        {
            id: 'components',
            title: 'Components',
            description: 'The fundamental building blocks of Angular applications.',
            whyImportant: 'Components control a patch of screen called a view.',
            subtopics: [
                'Component Decorator @Component',
                'Lifecycle Hooks (ngOnInit, ngOnDestroy)',
                'Input & Output (@Input, @Output)',
                'ViewChild & ContentChild'
            ],
            website: 'https://angular.dev/guide/components',
            nextStepId: 'templates'
        },
        {
            id: 'templates',
            title: 'Templates & Binding',
            description: 'Defining the view for your components.',
            whyImportant: 'How you display data and respond to user actions.',
            subtopics: [
                'Interpolation {{ }}',
                'Property Binding [ ]',
                'Event Binding ( )',
                'Two-way Binding [( )]',
                'Control Flow (@if, @for)'
            ],
            website: 'https://angular.dev/guide/templates',
            nextStepId: 'directives'
        },
        {
            id: 'directives',
            title: 'Directives',
            description: 'Classes that add behavior to elements.',
            whyImportant: 'Extending HTML capabilities.',
            subtopics: [
                'Structural Directives (*ngIf, *ngFor - Legacy)',
                'Attribute Directives (ngClass, ngStyle)',
                'Custom Directives'
            ],
            website: 'https://angular.dev/guide/directives',
            nextStepId: 'di'
        },
        {
            id: 'di',
            title: 'Dependency Injection',
            description: 'Design pattern in which a class asks for dependencies from external sources.',
            whyImportant: 'Angulars DI system is core to how the framework operates, enabling modularity and testability.',
            subtopics: [
                'Services & @Injectable',
                'Providers',
                'Injection Context',
                'Hierarchical Injectors'
            ],
            website: 'https://angular.dev/guide/di',
            nextStepId: 'routing'
        },
        {
            id: 'routing',
            title: 'Routing',
            description: 'Handling navigation and URL manipulation.',
            whyImportant: 'Building Single Page Applications (SPAs) requires a router.',
            subtopics: [
                'Route Configuration',
                'Router Outlet',
                'Lazy Loading',
                'Guards (CanActivate)',
                'Resolvers'
            ],
            website: 'https://angular.dev/guide/routing',
            nextStepId: 'forms'
        },
        {
            id: 'forms',
            title: 'Forms',
            description: 'Handling user input validation and submission.',
            whyImportant: 'Angular provides two powerful approaches to handling forms.',
            subtopics: [
                'Template-driven Forms (Simple)',
                'Reactive Forms (Scalable, Robust)',
                'FormBuilder',
                'Validators'
            ],
            website: 'https://angular.dev/guide/forms',
            nextStepId: 'rxjs'
        },
        {
            id: 'rxjs',
            title: 'RxJS & Signals',
            description: 'Handling asynchronous data and state reactivity.',
            whyImportant: 'Managing state changes over time efficiently.',
            subtopics: [
                'Observables & Observers',
                'Operators (map, filter, switchMap)',
                'Async Pipe',
                'Angular Signals (Modern State)'
            ],
            website: 'https://angular.dev/guide/signals',
            nextStepId: 'http'
        },
        {
            id: 'http',
            title: 'HTTP Client',
            description: 'Communicating with backend services.',
            whyImportant: 'Fetching data from APIs.',
            subtopics: [
                'HttpClientModule / provideHttpClient',
                'Interceptors',
                'Error Handling'
            ],
            website: 'https://angular.dev/guide/http',
            nextStepId: 'testing'
        },
        {
            id: 'testing',
            title: 'Testing',
            description: 'Ensuring your application works as expected.',
            whyImportant: 'Angular has first-class support for testing.',
            subtopics: [
                'Unit Testing (Jasmine/Karma or Jest)',
                'Component Testing',
                'E2E Testing (Cypress/Playwright)'
            ],
            website: 'https://angular.dev/guide/testing',
            nextStepId: null
        }
    ]
};
