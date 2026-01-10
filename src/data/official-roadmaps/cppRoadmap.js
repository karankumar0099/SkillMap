export const cppRoadmap = {
    id: 'cpp',
    title: 'C++ Developer',
    description: 'Step by step guide to becoming a C++ developer in 2025.',
    nodes: [
        {
            id: 'intro',
            title: 'Introduction to C++',
            description: 'Understanding the language.',
            whyImportant: 'C++ is a high-performance language used in games, systems, and high-frequency trading.',
            subtopics: [
                'What is C++?',
                'C vs C++',
                'Standards (C++11, 14, 17, 20, 23)',
                'The Compilation Process'
            ],
            website: 'https://isocpp.org/tour',
            nextStepId: 'environment'
        },
        {
            id: 'environment',
            title: 'Environment Setup',
            description: 'Compilers and IDEs.',
            whyImportant: 'You need tools to write and run code.',
            subtopics: [
                'Compilers (GCC, Clang, MSVC)',
                'IDEs (Visual Studio, CLion, VS Code)',
                'Build Systems (CMake - Industry Standard)',
                'Debuggers (GDB, LLDB)'
            ],
            website: 'https://cmake.org/cmake/help/latest/guide/tutorial/index.html',
            nextStepId: 'basics'
        },
        {
            id: 'basics',
            title: 'Basics & Control Flow',
            description: 'Syntax and logic.',
            whyImportant: 'Core building blocks of the language.',
            subtopics: [
                'Variables & Constants (const, constexpr)',
                'Operators (Arithmetic, Bitwise)',
                'Control Flow (if, switch, for, while)',
                'Functions'
            ],
            website: 'https://www.learncpp.com/',
            nextStepId: 'memory'
        },
        {
            id: 'memory',
            title: 'Memory Management',
            description: 'Manual memory control.',
            whyImportant: 'C++ gives you direct control over memory, which is its superpower and its danger.',
            subtopics: [
                'Stack vs Heap',
                'Pointers & References',
                'Dynamic Allocation (new/delete)',
                'Smart Pointers (unique_ptr, shared_ptr, weak_ptr)',
                'RAII (Resource Acquisition Is Initialization)'
            ],
            website: 'https://en.cppreference.com/w/cpp/memory',
            nextStepId: 'oop'
        },
        {
            id: 'oop',
            title: 'Object Oriented Programming',
            description: 'Classes and Objects.',
            whyImportant: 'Structuring complex applications.',
            subtopics: [
                'Classes & Structs',
                'Constructors & Destructors',
                'Inheritance',
                'Polymorphism (Virtual Functions, V-Tables)',
                'Encapsulation'
            ],
            website: 'https://www.geeksforgeeks.org/object-oriented-programming-in-cpp/',
            nextStepId: 'stl'
        },
        {
            id: 'stl',
            title: 'Standard Template Library (STL)',
            description: 'Built-in algorithms and containers.',
            whyImportant: 'Don\'t reinvent the wheel; use optimized standard components.',
            subtopics: [
                'Containers (std::vector, std::map, std::string)',
                'Iterators',
                'Algorithms (std::sort, std::find)',
                'Function Objects (Functors)'
            ],
            website: 'https://en.cppreference.com/w/cpp/container',
            nextStepId: 'advanced'
        },
        {
            id: 'advanced',
            title: 'Advanced Features',
            description: 'Templates and Modern C++.',
            whyImportant: 'Writing generic and efficient code.',
            subtopics: [
                'Templates (Generic Programming)',
                'Lambda Expressions',
                'Move Semantics (std::move)',
                'R-value References',
                'Exception Handling'
            ],
            website: 'https://isocpp.org/wiki/faq/templates',
            nextStepId: 'concurrency'
        },
        {
            id: 'concurrency',
            title: 'Concurrency',
            description: 'Multithreading.',
            whyImportant: 'Utilizing multi-core processors.',
            subtopics: [
                'std::thread',
                'Mutex & Locks',
                'Condition Variables',
                'std::future & std::async',
                'Atomics'
            ],
            website: 'https://en.cppreference.com/w/cpp/thread',
            nextStepId: 'ecosystem'
        },
        {
            id: 'ecosystem',
            title: 'Ecosystem & Tools',
            description: 'Libraries and Package Managers.',
            whyImportant: 'Managing dependencies in large projects.',
            subtopics: [
                'Package Managers (Conan, Vcpkg)',
                'Unit Testing (Google Test, Catch2)',
                'Boost Libraries',
                'Profiling Tools'
            ],
            website: 'https://conan.io/',
            nextStepId: null
        }
    ]
};
