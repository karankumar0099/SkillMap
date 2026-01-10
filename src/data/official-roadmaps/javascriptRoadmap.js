export const javascriptRoadmap = {
    id: 'javascript',
    title: 'JavaScript Roadmap',
    description: 'Step by step guide to learning JavaScript in 2025.',
    nodes: [
        {
            id: 'intro',
            title: 'Introduction to JavaScript',
            description: 'Understanding what JavaScript is and how it works.',
            whyImportant: 'The first step is knowing the history and environment of the language.',
            subtopics: [
                'History of JavaScript',
                'JavaScript Versions (ES6+)',
                'How to run JS (Browser/Node)',
                'Strict Mode'
            ],
            website: 'https://javascript.info/intro',
            nextStepId: 'variables'
        },
        {
            id: 'variables',
            title: 'All about Variables',
            description: 'Storing and managing data.',
            whyImportant: 'You need to store data to work with it.',
            subtopics: [
                'var, let, const',
                'Hoisting',
                'Variable Scopes (Block, Function, Global)',
                'Naming Rules'
            ],
            website: 'https://javascript.info/variables',
            nextStepId: 'datatypes'
        },
        {
            id: 'datatypes',
            title: 'Data Types',
            description: 'The different kinds of values you can use.',
            whyImportant: 'JS is dynamically typed; knowing types prevents bugs.',
            subtopics: [
                'Primitive Types (string, number, boolean, null, undefined, symbol, bigint)',
                'Object Type',
                'typeof operator',
                'Type Conversion vs Coercion'
            ],
            website: 'https://javascript.info/types',
            nextStepId: 'operators'
        },
        {
            id: 'operators',
            title: 'Expressions & Operators',
            description: 'Performing operations on data.',
            whyImportant: 'Manipulation of values is the core of logic.',
            subtopics: [
                'Assignment',
                'Arithmetic',
                'Comparison (== vs ===)',
                'Logical (&&, ||, !)',
                'Ternary Operator'
            ],
            website: 'https://javascript.info/operators',
            nextStepId: 'control-flow'
        },
        {
            id: 'control-flow',
            title: 'Control Flow',
            description: 'Controlling the execution order of your code.',
            whyImportant: 'Code needs to make decisions and repeat actions.',
            subtopics: [
                'if...else',
                'switch',
                'Loops (for, while, do...while)',
                'break / continue',
                'Error Handling (try...catch)'
            ],
            website: 'https://javascript.info/ifelse',
            nextStepId: 'functions'
        },
        {
            id: 'functions',
            title: 'Functions',
            description: 'Reusable blocks of code.',
            whyImportant: 'Functions are the building blocks of modular code.',
            subtopics: [
                'Function Declarations vs Expressions',
                'Arrow Functions',
                'Parameters & Arguments (Default, Rest)',
                'Scopes & Closures',
                'IIFE'
            ],
            website: 'https://javascript.info/function-basics',
            nextStepId: 'objects'
        },
        {
            id: 'objects',
            title: 'Objects & Arrays',
            description: 'Complex data structures to store collections.',
            whyImportant: 'Most real-world data is structured as objects or lists.',
            subtopics: [
                'Object Literals',
                'Array Methods (map, filter, reduce)',
                'Destructuring',
                'Spread Operator',
                'this keyword'
            ],
            website: 'https://javascript.info/object',
            nextStepId: 'async'
        },
        {
            id: 'async',
            title: 'Asynchronous JavaScript',
            description: 'Handling operations that take time (like fetching data).',
            whyImportant: 'JavaScript is single-threaded; async creates the illusion of multitasking.',
            subtopics: [
                'Callbacks (and Callback Hell)',
                'Promises',
                'async / await',
                'Event Loop',
                'Fetch API'
            ],
            website: 'https://javascript.info/async',
            nextStepId: 'dom'
        },
        {
            id: 'dom',
            title: 'DOM Manipulation',
            description: 'Interacting with the web page.',
            whyImportant: 'This is how you make web pages interactive.',
            subtopics: [
                'Selecting Elements',
                'Traversing the DOM',
                'Manipulating Styles & Classes',
                'Event Listeners (Bubbling & Capturing)'
            ],
            website: 'https://javascript.info/document',
            nextStepId: 'modern-js'
        },
        {
            id: 'modern-js',
            title: 'Modern JavaScript (ES6+)',
            description: 'Newer features that make coding easier.',
            whyImportant: 'Standard in modern development.',
            subtopics: [
                'Modules (import/export)',
                'Classes',
                'Template Literals',
                'Optional Chaining'
            ],
            website: 'https://javascript.info/modules',
            nextStepId: null
        }
    ]
};
