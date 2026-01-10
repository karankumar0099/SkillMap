export const phpRoadmap = {
    id: 'php',
    title: 'PHP Developer',
    description: 'Step by step guide to becoming a PHP developer in 2025.',
    nodes: [
        {
            id: 'basics',
            title: 'Fundamentals',
            description: 'Core syntax and concepts.',
            whyImportant: 'The foundation of server-side logic.',
            subtopics: [
                'Syntax & Tags (<?php ... ?>)',
                'Variables & Data Types',
                'Output (echo / print)',
                'Control Structures (if/else, switch, match)',
                'Loops (foreach is king in PHP)'
            ],
            website: 'https://www.php.net/manual/en/langref.php',
            nextStepId: 'functions'
        },
        {
            id: 'functions',
            title: 'Functions',
            description: 'Reusable code blocks.',
            whyImportant: 'Learn how to modularize your code.',
            subtopics: [
                'Function Declaration',
                'Arguments & Return Types',
                'Anonymous Functions (Closures)',
                'Arrow Functions (fn)',
                'Strict Types'
            ],
            website: 'https://www.php.net/manual/en/language.functions.php',
            nextStepId: 'arrays'
        },
        {
            id: 'arrays',
            title: 'Arrays',
            description: 'The most powerful data structure in PHP.',
            whyImportant: 'PHP arrays are versatile maps/lists used everywhere.',
            subtopics: [
                'Indexed Arrays',
                'Associative Arrays (Key-Value)',
                'Multi-dimensional Arrays',
                'Array Functions (array_map, array_filter, array_reduce)'
            ],
            website: 'https://www.php.net/manual/en/language.types.array.php',
            nextStepId: 'http'
        },
        {
            id: 'http',
            title: 'Forms & HTTP',
            description: 'Handling web requests.',
            whyImportant: 'PHP was born to handle HTML forms.',
            subtopics: [
                'Superglobals ($_GET, $_POST, $_SERVER)',
                'Form Handling & Validation',
                'Cookies vs Sessions',
                'Header Manipulation'
            ],
            website: 'https://www.php.net/manual/en/tutorial.forms.php',
            nextStepId: 'databases'
        },
        {
            id: 'databases',
            title: 'Working with Database',
            description: 'Persisting data.',
            whyImportant: 'Most web apps need a DB backend.',
            subtopics: [
                'PDO (PHP Data Objects) - Standard',
                'MySQLi',
                'Prepared Statements (Security)',
                'Database Transactions'
            ],
            website: 'https://phpdelusions.net/pdo',
            nextStepId: 'oop'
        },
        {
            id: 'oop',
            title: 'Object Oriented Programming',
            description: 'Modern PHP.',
            whyImportant: 'This is how modern frameworks (Laravel/Symfony) are built.',
            subtopics: [
                'Classes & Objects',
                'Properties & Methods',
                'Constructor / Destructor',
                'Inheritance & Polymorphism',
                'Interfaces & Traits',
                'Namespaces (PSR-4)'
            ],
            website: 'https://www.php.net/manual/en/language.oop5.php',
            nextStepId: 'package-management'
        },
        {
            id: 'package-management',
            title: 'Package Management',
            description: 'Using 3rd party code.',
            whyImportant: 'Stop reinventing the wheel.',
            subtopics: [
                'Composer',
                'Packagist',
                'Autoloading (vendor/autoload.php)',
                'composer.json vs composer.lock'
            ],
            website: 'https://getcomposer.org/doc/00-intro.md',
            nextStepId: 'frameworks'
        },
        {
            id: 'frameworks',
            title: 'Frameworks',
            description: 'Rapid development.',
            whyImportant: 'Enterprise PHP is done with frameworks.',
            subtopics: [
                'Laravel (Most Popular)',
                'Symfony (Enterprise)',
                'CodeIgniter (Legacy/Simple)',
                'Slim (Micro-framework)'
            ],
            website: 'https://laravel.com/docs',
            nextStepId: 'testing'
        },
        {
            id: 'testing',
            title: 'Testing',
            description: 'Ensuring quality.',
            whyImportant: 'Catch bugs before deployment.',
            subtopics: [
                'PHPUnit',
                'Pest PHP (Modern)',
                'Unit vs Feature Tests',
                'Mocking'
            ],
            website: 'https://phpunit.de/getting-started/phpunit-10.html',
            nextStepId: null
        }
    ]
};
