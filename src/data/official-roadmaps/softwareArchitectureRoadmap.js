export const softwareArchitectureRoadmap = {
    id: 'software-architecture',
    title: 'Software Design & Architecture',
    description: 'Step by step guide to learning software design and architecture.',
    nodes: [
        {
            id: 'clean-code',
            title: 'Clean Code Principles',
            description: 'Writing code that is easy to understand and maintain.',
            whyImportant: 'Code is read much more often than it is written.',
            subtopics: [
                'Meaningful Names',
                'Single Responsibility Functions',
                'Avoid Side Effects',
                'Code Formatting & Indentation',
                'Comments vs Self-documenting code'
            ],
            website: 'https://www.freecodecamp.org/news/clean-coding-for-beginners/',
            nextStepId: 'paradigms'
        },
        {
            id: 'paradigms',
            title: 'Programming Paradigms',
            description: 'Fundamental styles of computer programming.',
            whyImportant: 'Different problems require different approaches.',
            subtopics: [
                'Object-Oriented Programming (OOP)',
                'Functional Programming (FP)',
                'Structured Programming',
                'Declarative vs Imperative'
            ],
            website: 'https://www.geeksforgeeks.org/introduction-of-programming-paradigms/',
            nextStepId: 'oop'
        },
        {
            id: 'oop',
            title: 'Object-Oriented Programming',
            description: 'Modeling software based on real-world objects.',
            whyImportant: 'The dominant paradigm for large-scale enterprise systems.',
            subtopics: [
                'Classes & Objects',
                'Inheritance',
                'Polymorphism',
                'Encapsulation',
                'Abstraction'
            ],
            website: 'https://www.w3schools.com/java/java_oop.asp',
            nextStepId: 'design-principles'
        },
        {
            id: 'design-principles',
            title: 'Design Principles',
            description: 'Guidelines for software design.',
            whyImportant: 'Principles that help avoid code rot.',
            subtopics: [
                'SOLID Principles',
                'DRY (Don\'t Repeat Yourself)',
                'KISS (Keep It Simple, Stupid)',
                'YAGNI (You Aren\'t Gonna Need It)',
                'Law of Demeter'
            ],
            website: 'https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design',
            nextStepId: 'design-patterns'
        },
        {
            id: 'design-patterns',
            title: 'Design Patterns (GoF)',
            description: 'Reusable solutions to common problems.',
            whyImportant: 'A common vocabulary for developers to discuss solutions.',
            subtopics: [
                'Creational (Singleton, Factory, Builder)',
                'Structural (Adapter, Decorator, Facade)',
                'Behavioral (Observer, Strategy, Command)',
                'Repository Pattern'
            ],
            website: 'https://refactoring.guru/design-patterns',
            nextStepId: 'architectural-principles'
        },
        {
            id: 'architectural-principles',
            title: 'Architectural Principles',
            description: 'High-level guidelines for system structure.',
            whyImportant: 'Ensuring scalability, maintainability, and reliability.',
            subtopics: [
                'Separation of Concerns',
                'Dependency Inversion',
                'Coding against Interfaces',
                'High Cohesion, Low Coupling'
            ],
            website: 'https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles',
            nextStepId: 'architectural-patterns'
        },
        {
            id: 'architectural-patterns',
            title: 'Architectural Styles & Patterns',
            description: 'Blueprints for high-level system organization.',
            whyImportant: 'Defining how components interact globally.',
            subtopics: [
                'Monolithic Architecture',
                'Layered (N-Tier) Architecture',
                'Microservices',
                'Event-Driven Architecture',
                'Serverless',
                'Hexagonal Architecture (Ports & Adapters)'
            ],
            website: 'https://medium.com/system-design-blog/architectural-styles-vs-architectural-patterns-vs-design-patterns-543166885dc3',
            nextStepId: 'enterprise-patterns'
        },
        {
            id: 'enterprise-patterns',
            title: 'Enterprise Patterns',
            description: 'Patterns for complex business applications.',
            whyImportant: 'Solving complex domain logic and data flow problems.',
            subtopics: [
                'DTO (Data Transfer Object)',
                'Domain Model',
                'CQRS (Command Query Responsibility Segregation)',
                'Event Sourcing',
                'Circuit Breaker'
            ],
            website: 'https://martinfowler.com/eaaCatalog/',
            nextStepId: 'ddd'
        },
        {
            id: 'ddd',
            title: 'Domain-Driven Design (DDD)',
            description: 'Aligning software design with business domain.',
            whyImportant: 'Bridging the gap between technical and business experts.',
            subtopics: [
                'Ubiquitous Language',
                'Bounded Contexts',
                'Entities & Value Objects',
                'Aggregates & Roots'
            ],
            website: 'https://martinfowler.com/bliki/DomainDrivenDesign.html',
            nextStepId: null
        }
    ]
};
