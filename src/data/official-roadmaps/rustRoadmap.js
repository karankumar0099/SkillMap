export const rustRoadmap = {
    id: 'rust',
    title: 'Rust Developer',
    description: 'Step by step guide to becoming a Rust developer in 2025.',
    nodes: [
        {
            id: 'intro',
            title: 'Introduction & Setup',
            description: 'Getting started with Rust.',
            whyImportant: 'Rust offers memory safety without garbage collection.',
            subtopics: [
                'Why Rust?',
                'Installing Rust (rustup)',
                'Cargo (Package Manager)',
                'Hello World'
            ],
            website: 'https://www.rust-lang.org/learn/get-started',
            nextStepId: 'basics'
        },
        {
            id: 'basics',
            title: 'Common Programming Concepts',
            description: 'Syntax and core building blocks.',
            whyImportant: 'Understanding how variables and functions work is the first step.',
            subtopics: [
                'Variables & Mutability (let vs let mut)',
                'Data Types (Scalar & Compound)',
                'Functions',
                'Control Flow (if, loop, while, for)'
            ],
            website: 'https://doc.rust-lang.org/book/ch03-00-common-programming-concepts.html',
            nextStepId: 'ownership'
        },
        {
            id: 'ownership',
            title: 'Ownership & Borrowing',
            description: 'Rust\'s most unique feature.',
            whyImportant: 'Guarantees memory safety without a garbage collector.',
            subtopics: [
                'Ownership Rules',
                'References & Borrowing',
                'The Slice Type',
                'Stack vs Heap'
            ],
            website: 'https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html',
            nextStepId: 'structs-enums'
        },
        {
            id: 'structs-enums',
            title: 'Structs & Enums',
            description: 'Defining custom types.',
            whyImportant: 'Modeling your domain data.',
            subtopics: [
                'Defining Structs',
                'Method Syntax',
                'Enums',
                'The Match Control Flow Construct',
                'if let'
            ],
            website: 'https://doc.rust-lang.org/book/ch06-00-enums.html',
            nextStepId: 'collections'
        },
        {
            id: 'collections',
            title: 'Common Collections',
            description: 'Storing lists of data.',
            whyImportant: 'Standard data structures for everyday tasks.',
            subtopics: [
                'Vectors (Vec<T>)',
                'Strings (String vs &str)',
                'Hash Maps',
                'Iterators'
            ],
            website: 'https://doc.rust-lang.org/book/ch08-00-common-collections.html',
            nextStepId: 'error-handling'
        },
        {
            id: 'error-handling',
            title: 'Error Handling',
            description: 'Result and Option types.',
            whyImportant: 'Rust forces you to handle errors explicitly.',
            subtopics: [
                'Unrecoverable Errors (panic!)',
                'Recoverable Errors (Result<T, E>)',
                'The ? Operator',
                'Custom Error Types'
            ],
            website: 'https://doc.rust-lang.org/book/ch09-00-error-handling.html',
            nextStepId: 'generics-traits'
        },
        {
            id: 'generics-traits',
            title: 'Generics, Traits & Lifetimes',
            description: 'Polymorphism in Rust.',
            whyImportant: 'Writing reusable code and satisfying the borrow checker.',
            subtopics: [
                'Generic Data Types',
                'Traits (Interfaces)',
                'Trait Bounds',
                'Lifetimes Annotation'
            ],
            website: 'https://doc.rust-lang.org/book/ch10-00-generics.html',
            nextStepId: 'testing'
        },
        {
            id: 'testing',
            title: 'Writing Automated Tests',
            description: 'Built-in testing framework.',
            whyImportant: 'Ensuring your code works as expected.',
            subtopics: [
                'Unit Tests',
                'Integration Tests',
                'Test Organization'
            ],
            website: 'https://doc.rust-lang.org/book/ch11-00-testing.html',
            nextStepId: 'concurrency'
        },
        {
            id: 'concurrency',
            title: 'Fearless Concurrency',
            description: 'Parallel programming made safe.',
            whyImportant: 'Leveraging multi-core processors without data races.',
            subtopics: [
                'Threads (spawn)',
                'Message Passing (Channels)',
                'Shared State (Mutex, Arc)',
                'Sync and Send Traits'
            ],
            website: 'https://doc.rust-lang.org/book/ch16-00-concurrency.html',
            nextStepId: 'async'
        },
        {
            id: 'async',
            title: 'Async Rust & Ecosystem',
            description: 'Asynchronous programming and tools.',
            whyImportant: 'Building high-performance network services.',
            subtopics: [
                'Async / Await',
                'Tokio (Runtime)',
                'Web Frameworks (Actix, Axum)',
                'Crates.io'
            ],
            website: 'https://rust-lang.github.io/async-book/',
            nextStepId: null
        }
    ]
};
