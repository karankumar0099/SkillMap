export const pythonRoadmap = {
    id: 'python',
    title: 'Python Developer',
    description: 'Step by step guide to becoming a Python developer in 2025.',
    nodes: [
        {
            id: 'basics',
            title: 'Learn the Basics',
            description: 'Fundamental syntax and concepts.',
            whyImportant: 'You must walk before you can run.',
            subtopics: [
                'Variables & Data Types',
                'Strings & String Methods',
                'Conditionals (if/else)',
                'Loops (for, while)',
                'Type Casting',
                'Exceptions (try/except)'
            ],
            website: 'https://docs.python.org/3/tutorial/introduction.html',
            nextStepId: 'data-structures'
        },
        {
            id: 'data-structures',
            title: 'Data Structures',
            description: 'Core containers for data.',
            whyImportant: 'Choosing the right data structure is 90% of the battle in programming.',
            subtopics: [
                'Lists (Arrays)',
                'Dictionaries (Hash Maps)',
                'Tuples (Immutable)',
                'Sets (Unique items)',
                'List Comprehensions'
            ],
            website: 'https://docs.python.org/3/tutorial/datastructures.html',
            nextStepId: 'functions'
        },
        {
            id: 'functions',
            title: 'Functions & Modules',
            description: 'Structuring your code.',
            whyImportant: 'Writing reusable logic.',
            subtopics: [
                'Function Definition',
                'Arguments (*args, **kwargs)',
                'Lambda Functions',
                'Built-in Modules (os, sys, math)',
                'Creating Modules'
            ],
            website: 'https://docs.python.org/3/tutorial/controlflow.html#defining-functions',
            nextStepId: 'oop'
        },
        {
            id: 'oop',
            title: 'Object Oriented Programming',
            description: 'Modeling real-world entities.',
            whyImportant: 'Most large Python codebases use OOP.',
            subtopics: [
                'Classes & Objects',
                'Inheritance',
                'Dunder Methods (__init__, __str__)',
                'Encapsulation & Polymorphism'
            ],
            website: 'https://realpython.com/python3-object-oriented-programming/',
            nextStepId: 'advanced'
        },
        {
            id: 'advanced',
            title: 'Advanced Features',
            description: 'Features that make Python "Pythonic".',
            whyImportant: 'Writing efficient and clean code.',
            subtopics: [
                'Decorators',
                'Generators & Iterators',
                'Context Managers (with statement)',
                'Regular Expressions'
            ],
            website: 'https://realpython.com/primer-on-python-decorators/',
            nextStepId: 'package-managers'
        },
        {
            id: 'package-managers',
            title: 'Package Environments',
            description: 'Managing third-party libraries.',
            whyImportant: 'Dependency management is critical to avoid "it works on my machine".',
            subtopics: [
                'pip (Standard)',
                'Virtual Environments (venv)',
                'Propetry / Pipenv',
                'Anaconda / Conda'
            ],
            website: 'https://packaging.python.org/en/latest/tutorials/installing-packages/',
            nextStepId: 'frameworks'
        },
        {
            id: 'frameworks',
            title: 'Web Frameworks',
            description: 'Building web applications.',
            whyImportant: 'Python is massive in backend web development.',
            subtopics: [
                'Django (Full Stack)',
                'Flask (Microframework)',
                'FastAPI (Modern & Fast)',
                'Async Operations'
            ],
            website: 'https://fastapi.tiangolo.com/',
            nextStepId: 'testing'
        },
        {
            id: 'testing',
            title: 'Testing',
            description: 'Ensuring code quality.',
            whyImportant: 'Automated testing saves time in the long run.',
            subtopics: [
                'unittest (Built-in)',
                'pytest (Industry Standard)',
                'Mocking'
            ],
            website: 'https://docs.pytest.org/en/7.4.x/',
            nextStepId: 'typing'
        },
        {
            id: 'typing',
            title: 'Type Checking',
            description: 'Static type checking in Python.',
            whyImportant: 'Modern Python uses type hints for better tooling and fewer bugs.',
            subtopics: [
                'Type Hints',
                'mypy',
                'Pydantic (Data Validation)'
            ],
            website: 'https://docs.python.org/3/library/typing.html',
            nextStepId: null
        }
    ]
};
