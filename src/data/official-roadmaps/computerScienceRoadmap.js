export const computerScienceRoadmap = {
    id: 'computer-science',
    title: 'Computer Science Roadmap',
    description: 'A comprehensive curriculum for self-taught developers covering CS fundamentals.',
    nodes: [
        {
            id: 'pick-a-language',
            title: 'Pick a Language',
            description: 'Start by learning the syntax and basic concepts of one programming language.',
            whyImportant: 'You need a tool to express your algorithms and logic.',
            subtopics: [
                'Python (Recommended for beginners)',
                'Java',
                'C++',
                'JavaScript',
                'Go',
                'Rust'
            ],
            website: 'https://www.freecodecamp.org/news/what-programming-language-should-i-learn-first-19a33b0a467d/',
            nextStepId: 'data-structures'
        },
        {
            id: 'data-structures',
            title: 'Data Structures',
            description: 'Ways of organizing and storing data so it can be accessed and modified efficiently.',
            whyImportant: 'Fundamental for writing efficient code and solving complex problems.',
            subtopics: [
                'Arrays & Linked Lists',
                'Stacks & Queues',
                'Hash Tables',
                'Trees (Binary, AVL, Red-Black)',
                'Graphs',
                'Heaps'
            ],
            website: 'https://www.geeksforgeeks.org/data-structures/',
            nextStepId: 'asymptotic-notations'
        },
        {
            id: 'asymptotic-notations',
            title: 'Asymptotic Notation (Big O)',
            description: 'Mathematical notation to describe the limiting behavior of a function.',
            whyImportant: 'Essential for analyzing the time and space complexity of your algorithms.',
            subtopics: [
                'Big O (Upper Bound)',
                'Big Omega (Lower Bound)',
                'Big Theta (Tight Bound)',
                'Time Complexity',
                'Space Complexity'
            ],
            website: 'https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/asymptotic-notation',
            nextStepId: 'algorithms'
        },
        {
            id: 'algorithms',
            title: 'Common Algorithms',
            description: 'Step-by-step procedures for calculations, data processing, and automated reasoning.',
            whyImportant: 'Standard solutions to common problems (sorting, searching, etc.).',
            subtopics: [
                'Sorting (Merge, Quick, Heap)',
                'Searching (Binary Search)',
                'Graph Traversal (BFS, DFS)',
                'Recursion',
                'Dynamic Programming',
                'Greedy Algorithms'
            ],
            website: 'https://www.coursera.org/specializations/algorithms',
            nextStepId: 'string-search'
        },
        {
            id: 'string-search',
            title: 'String Search & Manipulations',
            description: 'Algorithms specifically for processing and finding patterns in text.',
            whyImportant: 'Text processing is a massive part of computing (search engines, editors, etc.).',
            subtopics: [
                'Substring Search (KMP, Rabin-Karp)',
                'Tries / Prefix Trees',
                'Suffix Arrays',
                'Regular Expressions'
            ],
            website: 'https://cp-algorithms.com/string/string-hashing.html',
            nextStepId: 'design-patterns'
        },
        {
            id: 'design-patterns',
            title: 'Design Patterns',
            description: 'Typical solutions to common problems in software design.',
            whyImportant: 'Helps in writing code that is flexible, reusable, and maintainable.',
            subtopics: [
                'Creational (Singleton, Factory)',
                'Structural (Adapter, Decorator)',
                'Behavioral (Observer, Strategy)',
                'SOLID Principles'
            ],
            website: 'https://refactoring.guru/design-patterns',
            nextStepId: 'complexity-classes'
        },
        {
            id: 'complexity-classes',
            title: 'Complexity Classes',
            description: 'Classifying computational problems according to their resource usage.',
            whyImportant: 'Understanding what is computable efficiently (P vs NP).',
            subtopics: [
                'P (Polynomial Time)',
                'NP (Nondeterministic Polynomial)',
                'NP-Complete',
                'NP-Hard'
            ],
            website: 'https://en.wikipedia.org/wiki/Complexity_class',
            nextStepId: 'databases'
        },
        {
            id: 'databases',
            title: 'Databases',
            description: 'Organized collections of data, generally stored and accessed electronically.',
            whyImportant: 'Almost all software applications need to persist data.',
            subtopics: [
                'Relational (SQL, ACID, Normalization)',
                'NoSQL (Document, Key-Value)',
                'Indexing & Hashing',
                'Replication & Sharding',
                'CAP Theorem'
            ],
            website: 'https://www.educative.io/blog/database-design-tutorial',
            nextStepId: 'system-design'
        },
        {
            id: 'system-design',
            title: 'System Design',
            description: 'Architecture of systems to meet requirements.',
            whyImportant: 'Crucial for building scalable, reliable, and maintainable large-scale applications.',
            subtopics: [
                'Horizontal vs Vertical Scaling',
                'Load Balancing',
                'Caching',
                'Proxies',
                'Microservices vs Monolith'
            ],
            website: 'https://github.com/donnemartin/system-design-primer',
            nextStepId: 'operating-systems'
        },
        {
            id: 'operating-systems',
            title: 'Operating Systems',
            description: 'System software that manages computer hardware and software resources.',
            whyImportant: 'Understanding how your code interacts with the hardware (Threads, Processes, Memory).',
            subtopics: [
                'Processes & Threads',
                'Concurrency & Parallelism',
                'Memory Management (Stack vs Heap)',
                'File Systems',
                'I/O Management'
            ],
            website: 'https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O',
            nextStepId: 'networking'
        },
        {
            id: 'networking',
            title: 'Computer Networking',
            description: 'Interconnected computing devices that can exchange data.',
            whyImportant: 'The backbone of the internet and distributed systems.',
            subtopics: [
                'OSI Model & TCP/IP',
                'DNS, HTTP/HTTPS',
                'Sockets',
                'Security (SSL/TLS)',
                'Load Balancers'
            ],
            website: 'https://www.cloudflare.com/learning/network-layer/what-is-networking/',
            nextStepId: null
        }
    ]
};
