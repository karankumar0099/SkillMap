export const typescriptRoadmap = {
    id: 'typescript',
    title: 'TypeScript Developer',
    description: 'Everything you need to learn about TypeScript in 2025.',
    nodes: [
        {
            id: 'intro',
            title: 'Introduction',
            description: 'What is TypeScript and why use it?',
            whyImportant: 'TypeScript adds static typing to JavaScript, making code more robust and easier to maintain.',
            subtopics: [
                'TypeScript vs JavaScript',
                'Installation (npm install -g typescript)',
                'The Compiler (tsc)',
                'tsconfig.json Configuration'
            ],
            website: 'https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html',
            nextStepId: 'basic-types'
        },
        {
            id: 'basic-types',
            title: 'Basic Types',
            description: 'The fundamental types available in TypeScript.',
            whyImportant: 'Defining types for your variables is the core of TS.',
            subtopics: [
                'Primitives (string, number, boolean)',
                'Arrays & Tuples',
                'Enums',
                'any, unknown, never, void',
                'null & undefined'
            ],
            website: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html',
            nextStepId: 'interfaces'
        },
        {
            id: 'interfaces',
            title: 'Type Aliases & Interfaces',
            description: 'Defining shape of objects.',
            whyImportant: 'Interfaces are the primary way to define contracts within your code.',
            subtopics: [
                'type vs interface',
                'Defining Object Shapes',
                'Optional Properties (?)',
                'Readonly Properties',
                'Extending Interfaces'
            ],
            website: 'https://www.typescriptlang.org/docs/handbook/2/objects.html',
            nextStepId: 'functions'
        },
        {
            id: 'functions',
            title: 'Functions',
            description: 'Typing function arguments and return values.',
            whyImportant: 'Functions are the main way to pass data around; typing them ensures data integrity.',
            subtopics: [
                'Parameter Types',
                'Return Types',
                'Function Overloading',
                'Rest Parameters'
            ],
            website: 'https://www.typescriptlang.org/docs/handbook/2/functions.html',
            nextStepId: 'unions'
        },
        {
            id: 'unions',
            title: 'Combining Types',
            description: 'Building new types from existing ones.',
            whyImportant: 'Real-world data is often messy and can be one of multiple types.',
            subtopics: [
                'Union Types (|)',
                'Intersection Types (&)',
                'Literal Types',
                'Type Assertions (as)'
            ],
            website: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types',
            nextStepId: 'narrowing'
        },
        {
            id: 'narrowing',
            title: 'Type Guarding / Narrowing',
            description: 'Refining types to more specific ones.',
            whyImportant: 'TS needs help knowing which specific type inside a Union you are currently working with.',
            subtopics: [
                'typeof guards',
                'instanceof guards',
                'Equality narrowing',
                'in operator',
                'Type Predicates (is)'
            ],
            website: 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html',
            nextStepId: 'classes'
        },
        {
            id: 'classes',
            title: 'Classes',
            description: 'Object-oriented programming in TypeScript.',
            whyImportant: 'TS adds powerful OOP features like visibility modifiers to JS classes.',
            subtopics: [
                'Access Modifiers (public, private, protected)',
                'readonly',
                'Abstract Classes',
                'Implements Clause'
            ],
            website: 'https://www.typescriptlang.org/docs/handbook/2/classes.html',
            nextStepId: 'generics'
        },
        {
            id: 'generics',
            title: 'Generics',
            description: 'Writing reusable code that works with any type.',
            whyImportant: 'Generics allow you to create components that can work over a variety of types rather than a single one.',
            subtopics: [
                'Generic Functions',
                'Generic Interfaces',
                'Generic Classes',
                'Generic Constraints (extends)'
            ],
            website: 'https://www.typescriptlang.org/docs/handbook/2/generics.html',
            nextStepId: 'utility-types'
        },
        {
            id: 'utility-types',
            title: 'Utility Types',
            description: 'Built-in type transformations.',
            whyImportant: 'TS provides global utilities to facilitate common type transformations.',
            subtopics: [
                'Partial<T>, Required<T>',
                'Pick<T, K>, Omit<T, K>',
                'Record<K, T>',
                'ReturnType<T>'
            ],
            website: 'https://www.typescriptlang.org/docs/handbook/utility-types.html',
            nextStepId: 'advanced'
        },
        {
            id: 'advanced',
            title: 'Advanced Types',
            description: 'Powerful features for complex type modeling.',
            whyImportant: 'For building libraries or complex apps, you need these tools.',
            subtopics: [
                'Mapped Types',
                'Conditional Types',
                'Template Literal Types',
                'keyof operator'
            ],
            website: 'https://www.typescriptlang.org/docs/handbook/2/types-from-types.html',
            nextStepId: null
        }
    ]
};
