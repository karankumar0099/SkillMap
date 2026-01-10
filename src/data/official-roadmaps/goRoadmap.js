export const goRoadmap = {
    id: 'golang',
    title: 'Go Developer',
    description: 'Step by step guide to becoming a Go developer in 2025.',
    nodes: [
        {
            id: 'intro',
            title: 'Introduction to Go',
            description: 'Setting up the workspace.',
            whyImportant: 'Go has a unique workspace structure and toolchain.',
            subtopics: [
                'Installation & Workspace',
                'Go Modules (go.mod)',
                'GOPATH vs Modules',
                'Hello World'
            ],
            website: 'https://go.dev/doc/tutorial/getting-started',
            nextStepId: 'basics'
        },
        {
            id: 'basics',
            title: 'Basic Syntax',
            description: 'Variables and Control Structures.',
            whyImportant: 'Simplicity is Go\'s main feature.',
            subtopics: [
                'Variables (var, :=)',
                'Constants',
                'Data Types (Primitives)',
                'Type Conversion'
            ],
            website: 'https://go.dev/tour/basics/1',
            nextStepId: 'data-structures'
        },
        {
            id: 'data-structures',
            title: 'Data Structures',
            description: 'Arrays, Slices, Maps.',
            whyImportant: 'How you store collections of data.',
            subtopics: [
                'Arrays (Fixed size)',
                'Slices (Dynamic)',
                'Maps (Key-Value)',
                'Structs (Custom types)'
            ],
            website: 'https://go.dev/blog/slices-intro',
            nextStepId: 'control-flow'
        },
        {
            id: 'control-flow',
            title: 'Control Flow',
            description: 'Logic and looping.',
            whyImportant: 'Go only has "for" loops, no while.',
            subtopics: [
                'if / else',
                'switch / case',
                'for loop (standard, while-style, infinite)',
                'defer statement'
            ],
            website: 'https://go.dev/tour/flowcontrol/1',
            nextStepId: 'functions'
        },
        {
            id: 'functions',
            title: 'Functions & Pointers',
            description: 'Code organization.',
            whyImportant: 'Go passes by value; pointers are key for shared state.',
            subtopics: [
                'Function Declaration',
                'Multiple Return Values',
                'Variadic Functions',
                'Pointers (* and &)'
            ],
            website: 'https://go.dev/tour/moretypes/1',
            nextStepId: 'methods-interfaces'
        },
        {
            id: 'methods-interfaces',
            title: 'Methods & Interfaces',
            description: 'Object-oriented programming in Go.',
            whyImportant: 'Go uses composition over inheritance.',
            subtopics: [
                'Methods (Receivers)',
                'Interfaces (Implicit implementation)',
                'Type Assertions',
                'Empty Interface (interface{})'
            ],
            website: 'https://go.dev/tour/methods/1',
            nextStepId: 'concurrency'
        },
        {
            id: 'concurrency',
            title: 'Concurrency',
            description: 'Goroutines and Channels.',
            whyImportant: 'Go\'s killer feature for high-performance systems.',
            subtopics: [
                'Goroutines (Lightweight threads)',
                'Channels (Communication)',
                'Buffered Channels',
                'Select Statement',
                'WaitGroups (sync package)'
            ],
            website: 'https://go.dev/tour/concurrency/1',
            nextStepId: 'error-handling'
        },
        {
            id: 'error-handling',
            title: 'Error Handling',
            description: 'Explicit error checking.',
            whyImportant: 'Go does not have exceptions (mostly).',
            subtopics: [
                'The "error" Interface',
                'Checking Errors (if err != nil)',
                'Panic & Recover'
            ],
            website: 'https://go.dev/blog/error-handling-and-go',
            nextStepId: 'web-dev'
        },
        {
            id: 'web-dev',
            title: 'Web Development',
            description: 'Building servers.',
            whyImportant: 'Go is excellent for backend services.',
            subtopics: [
                'net/http (Standard Library)',
                'JSON En/Decoding',
                'Web Frameworks (Gin, Echo, Fiber)',
                'Middleware'
            ],
            website: 'https://go.dev/doc/articles/wiki/',
            nextStepId: 'testing'
        },
        {
            id: 'testing',
            title: 'Testing',
            description: 'Built-in testing tool.',
            whyImportant: 'Test files live right next to source code.',
            subtopics: [
                'go test',
                'Test Functions (TestXxx)',
                'Table-Driven Tests',
                'Benchmarks'
            ],
            website: 'https://go.dev/doc/tutorial/add-a-test',
            nextStepId: null
        }
    ]
};
