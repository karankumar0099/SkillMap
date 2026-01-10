export const swiftRoadmap = {
    id: 'swift',
    title: 'Swift & Swift-UI',
    description: 'Apple\'s modern programming language for iOS/macOS.',
    nodes: [
        {
            id: 'swift-basics',
            title: 'Swift Basics',
            description: 'Variables, Constants, and Control Flow.',
            whyImportant: 'The foundation of iOS development.',
            subtopics: ['Variables (var/let)', 'Data Types', 'Loops', 'Conditionals'],
            website: 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/',
            nextStepId: 'swift-oop'
        },
        {
            id: 'swift-oop',
            title: 'OOP & Structs',
            description: 'Classes, Structs, and Protocols.',
            whyImportant: 'Building complex data models and logic.',
            subtopics: ['Classes vs Structs', 'Inheritance', 'Protocols', 'Extensions'],
            website: 'https://www.hackingwithswift.com/sixty/6/1/creating-your-own-structs',
            nextStepId: 'swiftui-basics'
        },
        {
            id: 'swiftui-basics',
            title: 'SwiftUI Basics',
            description: 'Declarative UI framework for Apple platforms.',
            whyImportant: 'The modern way to build user interfaces on iOS.',
            subtopics: ['Views', 'Modifiers', 'State Management (@State, @Binding)', 'Layouts (VStack, HStack)'],
            website: 'https://developer.apple.com/xcode/swiftui/',
            nextStepId: 'persistence'
        },
        {
            id: 'persistence',
            title: 'Data Persistence',
            description: 'Saving data locally.',
            whyImportant: 'Apps usually need to store user preferences or content.',
            subtopics: ['UserDefaults', 'SwiftData', 'Core Data Basics'],
            website: 'https://developer.apple.com/documentation/swiftdata',
            nextStepId: null
        }
    ]
};
