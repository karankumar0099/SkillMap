export const kotlinRoadmap = {
    id: 'kotlin',
    title: 'Kotlin Developer',
    description: 'Step by step guide to mastering Kotlin in 2025.',
    nodes: [
        {
            id: 'intro',
            title: 'Introduction to Kotlin',
            description: 'A modern language for the JVM.',
            whyImportant: 'Concise, safe, and fully interoperable with Java.',
            subtopics: [
                'History & Philosophy',
                'Java Interoperability',
                'Kotlin vs Java',
                'Setting up the Environment (IntelliJ IDEA)'
            ],
            website: 'https://kotlinlang.org/docs/home.html',
            nextStepId: 'basics'
        },
        {
            id: 'basics',
            title: 'Language Basics',
            description: 'Variables and Types.',
            whyImportant: 'The building blocks of the language.',
            subtopics: [
                'Variables (val vs var)',
                'Basic Types (Numbers, Booleans, Char)',
                'String Templates ("$name")',
                'Type Inference'
            ],
            website: 'https://kotlinlang.org/docs/basic-syntax.html',
            nextStepId: 'control-flow'
        },
        {
            id: 'control-flow',
            title: 'Control Flow',
            description: 'Making decisions.',
            whyImportant: 'Kotlin expression-based control flow is powerful.',
            subtopics: [
                'if expressions (returns a value)',
                'when expression (switch on steroids)',
                'Loops (for, while)',
                'Ranges (1..10)'
            ],
            website: 'https://kotlinlang.org/docs/control-flow.html',
            nextStepId: 'null-safety'
        },
        {
            id: 'null-safety',
            title: 'Null Safety',
            description: 'The Billion Dollar Mistake fix.',
            whyImportant: 'Kotlin type system aims to eliminate NullPointerExceptions.',
            subtopics: [
                'Nullable Types (String?)',
                'Safe Calls (?.)',
                'Elvis Operator (?:)',
                'The !! Operator (Use with caution)'
            ],
            website: 'https://kotlinlang.org/docs/null-safety.html',
            nextStepId: 'functions'
        },
        {
            id: 'functions',
            title: 'Functions',
            description: 'Reusable code.',
            whyImportant: 'Functions are first-class citizens in Kotlin.',
            subtopics: [
                'Function Declaration (fun)',
                'Default Arguments',
                'Named Arguments',
                'Single-expression functions',
                'Extension Functions'
            ],
            website: 'https://kotlinlang.org/docs/functions.html',
            nextStepId: 'oop'
        },
        {
            id: 'oop',
            title: 'Object Oriented Programming',
            description: 'Classes and Objects.',
            whyImportant: 'Kotlin simplifies Java verbosity.',
            subtopics: [
                'Classes & Primary Constructors',
                'Data Classes (POJOs made easy)',
                'Sealed Classes (Advanced Enums)',
                'Objects & Companions (Singleton)',
                'Interfaces & Inheritance'
            ],
            website: 'https://kotlinlang.org/docs/classes.html',
            nextStepId: 'collections'
        },
        {
            id: 'collections',
            title: 'Collections & Functional Ops',
            description: 'Working with data groups.',
            whyImportant: 'Kotlin standard library provides powerful Functional APIs.',
            subtopics: [
                'List, Set, Map',
                'Mutable vs Immutable',
                'Lambdas & Higher-Order Functions',
                'Transformations (map, filter, web, reduce)'
            ],
            website: 'https://kotlinlang.org/docs/collections-overview.html',
            nextStepId: 'coroutines'
        },
        {
            id: 'coroutines',
            title: 'Coroutines',
            description: 'Asynchronous Programming.',
            whyImportant: 'Write async code seamlessly, like synchronous code.',
            subtopics: [
                'suspend functions',
                'CoroutineScope & Context',
                'launch vs async',
                'Roles of Dispatchers (IO, Main, Default)'
            ],
            website: 'https://kotlinlang.org/docs/coroutines-overview.html',
            nextStepId: 'ecosystem'
        },
        {
            id: 'ecosystem',
            title: 'Ecosystem',
            description: 'Where Kotlin is used.',
            whyImportant: 'Kotlin is not just for Android.',
            subtopics: [
                'Android Development (Google Preferred)',
                'Server-side (Ktor, Spring Boot)',
                'Kotlin Multiplatform (KMP)',
                'Gradle (Kotlin DSL)'
            ],
            website: 'https://kotlinlang.org/docs/server-overview.html',
            nextStepId: null
        }
    ]
};
