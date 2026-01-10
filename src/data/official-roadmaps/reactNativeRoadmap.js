export const reactNativeRoadmap = {
    id: 'react-native',
    title: 'React Native Developer',
    description: 'Step by step guide to becoming a React Native developer in 2025.',
    nodes: [
        {
            id: 'prerequisites',
            title: 'Prerequisites',
            description: 'Foundational knowledge needed before starting.',
            whyImportant: 'React Native is React; you need to know React first.',
            subtopics: [
                'JavaScript (ES6+)',
                'React Basics (JSX, Components, Props, State)',
                'React Hooks (useState, useEffect)',
                'Flexbox (Layout Engine)'
            ],
            website: 'https://reactnative.dev/docs/intro-react',
            nextStepId: 'environment'
        },
        {
            id: 'environment',
            title: 'Environment Setup',
            description: 'Choosing your development focus.',
            whyImportant: 'Getting the tools ready is the first hurdle.',
            subtopics: [
                'Expo (Managed Workflow - Recommended for beginners)',
                'React Native CLI (Bare Workflow)',
                'Metro Bundler',
                'Android Studio / Xcode'
            ],
            website: 'https://reactnative.dev/docs/environment-setup',
            nextStepId: 'core-components'
        },
        {
            id: 'core-components',
            title: 'Core Components',
            description: 'Building blocks of UI.',
            whyImportant: 'These are the native equivalents of HTML tags.',
            subtopics: [
                'View & SafeAreaView',
                'Text & Image',
                'TextInput & Button',
                'ScrollView',
                'FlatList (Performance Lists)'
            ],
            website: 'https://reactnative.dev/docs/components-and-apis',
            nextStepId: 'styling'
        },
        {
            id: 'styling',
            title: 'Styling',
            description: 'Making apps look good.',
            whyImportant: 'React Native uses JavaScript objects for styling, not CSS files.',
            subtopics: [
                'StyleSheet API',
                'Flexbox Layout',
                'Platform Specific Code (Platform.OS)',
                'Responsive Design (Dimensions, Percentage)'
            ],
            website: 'https://reactnative.dev/docs/style',
            nextStepId: 'navigation'
        },
        {
            id: 'navigation',
            title: 'Navigation',
            description: 'Moving between screens.',
            whyImportant: 'Mobile apps have complex screen hierarchies.',
            subtopics: [
                'React Navigation (Standard)',
                'Stack Navigator',
                'Tab Navigator',
                'Drawer Navigator',
                'Deep Linking'
            ],
            website: 'https://reactnavigation.org/docs/getting-started',
            nextStepId: 'storage'
        },
        {
            id: 'storage',
            title: 'Data & Storage',
            description: 'Saving data locally.',
            whyImportant: 'Persisting user sessions or settings.',
            subtopics: [
                'AsyncStorage (Simple Key-Value)',
                'Expo SecureStore (Encrypted)',
                'MMKV (High Performance)',
                'SQLite / Realm'
            ],
            website: 'https://docs.expo.dev/versions/latest/sdk/async-storage/',
            nextStepId: 'native-features'
        },
        {
            id: 'native-features',
            title: 'Native Features',
            description: 'Accessing device capabilities.',
            whyImportant: 'The main reason to build a mobile app.',
            subtopics: [
                'Camera & Gallery',
                'Location / Maps',
                'Sensors (Gyroscope, Accelerometer)',
                'Push Notifications'
            ],
            website: 'https://docs.expo.dev/guides/permissions/',
            nextStepId: 'testing'
        },
        {
            id: 'testing',
            title: 'Testing',
            description: 'Ensuring reliability.',
            whyImportant: 'Mobile releases are hard to rollback; testing is crucial.',
            subtopics: [
                'Jest (Unit Testing)',
                'React Native Testing Library',
                'Detox / Maestro (E2E)'
            ],
            website: 'https://reactnative.dev/docs/testing-overview',
            nextStepId: 'deployment'
        },
        {
            id: 'deployment',
            title: 'Deployment',
            description: 'Publishing to stores.',
            whyImportant: 'Reaching your users.',
            subtopics: [
                'Google Play Store',
                'Apple App Store',
                'EAS Build (Expo Application Services)',
                'Fastlane (Automation)',
                'OTA Updates (Expo Updates / CodePush)'
            ],
            website: 'https://reactnative.dev/docs/publishing-to-google-play-store',
            nextStepId: null
        }
    ]
};
