export const flutterRoadmap = {
    id: 'flutter',
    title: 'Flutter Developer',
    description: 'Step by step guide to becoming a Flutter developer in 2025.',
    nodes: [
        {
            id: 'dart-basics',
            title: 'Basics of Dart',
            description: 'The programming language of Flutter.',
            whyImportant: 'Flutter is written in Dart; you must know it well.',
            subtopics: [
                'Variables & Built-in Types',
                'Functions & Operators',
                'Control Flow Statements',
                'Dart Pad'
            ],
            website: 'https://dart.dev/guides/language/language-tour',
            nextStepId: 'environment'
        },
        {
            id: 'environment',
            title: 'Development Environment',
            description: 'Setting up your tools.',
            whyImportant: 'A good IDE setup increases productivity.',
            subtopics: [
                'Flutter CLI / FVM',
                'VS Code / Android Studio',
                'Android Emulator / iOS Simulator',
                'DevTools'
            ],
            website: 'https://docs.flutter.dev/get-started/install',
            nextStepId: 'widgets'
        },
        {
            id: 'widgets',
            title: 'Widgets',
            description: 'Building the UI.',
            whyImportant: 'Everything in Flutter is a Widget.',
            subtopics: [
                'Stateless vs Stateful Widgets',
                'Material vs Cupertino Widgets',
                'Layout Widgets (Row, Column, Stack)',
                'ValueListenableBuilder'
            ],
            website: 'https://docs.flutter.dev/ui/widgets/layout',
            nextStepId: 'assets'
        },
        {
            id: 'assets',
            title: 'Working with Assets',
            description: 'Images, Fonts, and Files.',
            whyImportant: 'Apps need static resources.',
            subtopics: [
                'Images & Icons',
                'Custom Fonts',
                'pubspec.yaml Configuration',
                'JSON Files'
            ],
            website: 'https://docs.flutter.dev/ui/assets/assets-and-images',
            nextStepId: 'storage'
        },
        {
            id: 'storage',
            title: 'Storage',
            description: 'Persisting data locally.',
            whyImportant: 'Saving user preferences or caching data.',
            subtopics: [
                'Shared Preferences',
                'SQLite (sqflite)',
                'Hive (NoSQL)',
                'Secure Storage'
            ],
            website: 'https://docs.flutter.dev/cookbook/persistence',
            nextStepId: 'networking'
        },
        {
            id: 'networking',
            title: 'Networking & APIs',
            description: 'Connecting to the internet.',
            whyImportant: 'Fetching remote data.',
            subtopics: [
                'HTTP Package',
                'REST REST APIs',
                'JSON Serialization',
                'Dio (Advanced HTTP)'
            ],
            website: 'https://docs.flutter.dev/data-and-backend/networking',
            nextStepId: 'state-management'
        },
        {
            id: 'state-management',
            title: 'State Management',
            description: 'Managing application state.',
            whyImportant: 'Ensuring your UI reflects your data.',
            subtopics: [
                'Provider (Recommended for beginners)',
                'Riverpod (Modern)',
                'BLoC / Cubit (Enterprise)',
                'GetX (All-in-one)'
            ],
            website: 'https://docs.flutter.dev/data-and-backend/state-mgmt/options',
            nextStepId: 'advanced-dart'
        },
        {
            id: 'advanced-dart',
            title: 'Advanced Dart',
            description: 'Complex language features.',
            whyImportant: 'Writing efficient and clean code.',
            subtopics: [
                'Asynchronous Programming (Futures, Streams, async/await)',
                'Isolates (Multi-threading)',
                'Generators',
                'Extensions'
            ],
            website: 'https://dart.dev/codelabs/async-await',
            nextStepId: 'testing'
        },
        {
            id: 'testing',
            title: 'Testing',
            description: 'Ensuring app stability.',
            whyImportant: 'Apps must be bug-free before release.',
            subtopics: [
                'Unit Testing',
                'Widget Testing',
                'Integration Testing',
                'Mocking (Mockito)'
            ],
            website: 'https://docs.flutter.dev/testing',
            nextStepId: 'deployment'
        },
        {
            id: 'deployment',
            title: 'Deployment',
            description: 'Releasing your app.',
            whyImportant: 'Getting your app to users.',
            subtopics: [
                'Play Store (Android)',
                'App Store (iOS)',
                'CI/CD (Codemagic, GitHub Actions)',
                'Firebase App Distribution'
            ],
            website: 'https://docs.flutter.dev/deployment',
            nextStepId: null
        }
    ]
};
