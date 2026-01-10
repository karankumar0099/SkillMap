export const iosRoadmap = {
    id: 'ios',
    title: 'iOS Developer',
    description: 'Step by step guide to becoming an iOS Developer in 2024.',
    nodes: [
        {
            id: 'language',
            title: 'Pick a Language',
            description: 'Swift.',
            whyImportant: 'Swift is the modern, safe, and fast language for iOS development. Objective-C is legacy.',
            website: 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/guidedtour/',
            nextStepId: 'fundamentals',
            subtopics: ['Swift Basics', 'Variables & Constants', 'Control Flow', 'Functions']
        },
        {
            id: 'fundamentals',
            title: 'The Fundamentals',
            description: 'Xcode & Ecosystem.',
            whyImportant: 'Master your IDE (Xcode) and the iOS ecosystem basics.',
            website: 'https://developer.apple.com/xcode/',
            nextStepId: 'vcs',
            subtopics: ['Xcode', 'Interface Builder', 'iOS SDK', 'Cocoa Touch']
        },
        {
            id: 'vcs',
            title: 'Version Control',
            description: 'Git & GitHub.',
            whyImportant: 'Standard for code collaboration and history management.',
            website: 'https://git-scm.com/doc',
            nextStepId: 'ui-frameworks',
            subtopics: ['Git', 'GitHub', 'Pull Requests', 'Branching Strategy']
        },
        {
            id: 'ui-frameworks',
            title: 'UI Frameworks',
            description: 'SwiftUI & UIKit.',
            whyImportant: 'SwiftUI is the future (Declarative). UIKit is the past present (Imperative). You often need both.',
            website: 'https://developer.apple.com/xcode/swiftui/',
            nextStepId: 'architecture',
            subtopics: ['SwiftUI', 'UIKit', 'Auto Layout', 'View Controllers', 'Storyboards']
        },
        {
            id: 'architecture',
            title: 'Design Patterns & Architecture',
            description: 'Structuring Apps.',
            whyImportant: 'Write clean, maintainable, and testable code.',
            website: 'https://developer.apple.com/documentation/swiftui/managing-model-data-in-your-app',
            nextStepId: 'networking',
            subtopics: ['MVVM', 'MVC', 'Coordinator Pattern', 'Delegation']
        },
        {
            id: 'networking',
            title: 'Networking',
            description: 'API integration.',
            whyImportant: 'Most apps need to talk to a backend server.',
            website: 'https://developer.apple.com/documentation/foundation/urlsession',
            nextStepId: 'storage',
            subtopics: ['URLSession', 'JSON Parsing (Codable)', 'Alamofire', 'REST APIs']
        },
        {
            id: 'storage',
            title: 'Data Persistence',
            description: 'Saving data locally.',
            whyImportant: 'Store user preferences or cache data for offline use.',
            website: 'https://developer.apple.com/documentation/coredata',
            nextStepId: 'concurrency',
            subtopics: ['Core Data', 'SwiftData', 'UserDefaults', 'Realm']
        },
        {
            id: 'concurrency',
            title: 'Concurrency',
            description: 'Grand Central Dispatch (GCD).',
            whyImportant: 'Keep the UI responsive while performing background tasks.',
            website: 'https://developer.apple.com/documentation/swift/concurrency',
            nextStepId: 'testing',
            subtopics: ['Async/Await', 'GCD', 'Operations', 'Actors']
        },
        {
            id: 'testing',
            title: 'Testing',
            description: 'Unit & UI Testing.',
            whyImportant: 'Ensure app reliability and prevent regressions.',
            website: 'https://developer.apple.com/documentation/xctest',
            nextStepId: 'distribution',
            subtopics: ['XCTest', 'Unit Tests', 'UI Tests', 'Test Driven Development (TDD)']
        },
        {
            id: 'distribution',
            title: 'App Store Distribution',
            description: 'Publishing your app.',
            whyImportant: 'Navigate the App Store Guidelines and release your app to users.',
            website: 'https://developer.apple.com/distribution/',
            nextStepId: null,
            subtopics: ['App Store Connect', 'TestFlight', 'Human Interface Guidelines', 'Signing & Provisioning']
        }
    ]
};
