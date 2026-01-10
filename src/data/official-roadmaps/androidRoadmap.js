export const androidRoadmap = {
    id: 'android',
    title: 'Android Developer',
    description: 'Step by step guide to becoming an Android Developer in 2024.',
    nodes: [
        {
            id: 'language',
            title: 'Pick a Language',
            description: 'Kotlin or Java.',
            whyImportant: 'Kotlin is now the official language for Android. Java is legacy but still widely used.',
            website: 'https://kotlinlang.org/docs/android-overview.html',
            nextStepId: 'fundamentals',
            subtopics: ['Kotlin', 'Java', 'JDK', 'Basic Syntax']
        },
        {
            id: 'fundamentals',
            title: 'The Fundamentals',
            description: 'Core concepts of Android development.',
            whyImportant: 'Understand how the Android OS works and how to set up your environment.',
            website: 'https://developer.android.com/studio',
            nextStepId: 'vcs',
            subtopics: ['Android Studio', 'Gradle', 'OOP Basics', 'Data Structures']
        },
        {
            id: 'vcs',
            title: 'Version Control',
            description: 'Git & GitHub.',
            whyImportant: 'Manage your code history and collaborate with others.',
            website: 'https://git-scm.com/doc',
            nextStepId: 'components',
            subtopics: ['Git', 'GitHub', 'GitLab', 'Branches']
        },
        {
            id: 'components',
            title: 'App Components',
            description: 'Building blocks of an app.',
            whyImportant: 'You cannot build an app without understanding Activities, Services, and Intents.',
            website: 'https://developer.android.com/guide/components/fundamentals',
            nextStepId: 'ui',
            subtopics: ['Activity', 'Service', 'Broadcast Receiver', 'Content Provider', 'Intents']
        },
        {
            id: 'ui',
            title: 'Interface & Navigation',
            description: 'Layouts and Views.',
            whyImportant: 'Create the visual part of your app. Learn Jetpack Compose (Modern) and XML (Legacy).',
            website: 'https://developer.android.com/jetpack/compose',
            nextStepId: 'storage',
            subtopics: ['Jetpack Compose', 'XML Layouts', 'ConstraintLayout', 'RecyclerView', 'Fragments']
        },
        {
            id: 'storage',
            title: 'Storage',
            description: 'Persisting Data.',
            whyImportant: 'Apps need to save user data locally.',
            website: 'https://developer.android.com/training/data-storage/room',
            nextStepId: 'network',
            subtopics: ['Room Database', 'DataStore', 'Shared Preferences', 'File System']
        },
        {
            id: 'network',
            title: 'Networking',
            description: 'API Integration.',
            whyImportant: 'Fetch data from the internet using REST APIs.',
            website: 'https://square.github.io/retrofit/',
            nextStepId: 'concurrency',
            subtopics: ['Retrofit', 'OkHttp', 'JSON Parsing (Gson/Moshi)', 'REST APIs']
        },
        {
            id: 'concurrency',
            title: 'Asynchronism',
            description: 'Background Tasks.',
            whyImportant: 'Avoid freezing the UI while fetching data or performing heavy operations.',
            website: 'https://developer.android.com/kotlin/coroutines',
            nextStepId: 'architecture',
            subtopics: ['Coroutines', 'Flow', 'RxJava', 'WorkManager']
        },
        {
            id: 'architecture',
            title: 'Architecture & Design Patterns',
            description: 'Structuring your code.',
            whyImportant: 'Build scalable, testable, and maintainable apps.',
            website: 'https://developer.android.com/topic/architecture',
            nextStepId: 'testing',
            subtopics: ['MVVM', 'MVI', 'Repository Pattern', 'Dependency Injection (Hilt/Koin)']
        },
        {
            id: 'testing',
            title: 'Testing',
            description: 'Unit & UI Testing.',
            whyImportant: 'Ensure your app works as expected and doesn\'t crash.',
            website: 'https://developer.android.com/training/testing',
            nextStepId: 'distribution',
            subtopics: ['JUnit', 'Espresso', 'Mockito', 'Robolectric']
        },
        {
            id: 'distribution',
            title: 'Distribution',
            description: 'Play Store.',
            whyImportant: 'Publish your app to the world.',
            website: 'https://developer.android.com/studio/publish',
            nextStepId: null,
            subtopics: ['Signed APK/Bundle', 'Google Play Store', 'Firebase App Distribution']
        }
    ]
};
