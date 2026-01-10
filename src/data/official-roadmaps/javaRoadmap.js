export const javaRoadmap = {
    id: 'java',
    title: 'Java Developer',
    description: 'Step by step guide to becoming a Java developer in 2025.',
    nodes: [
        {
            id: 'basics',
            title: 'Learn the Basics',
            description: 'The foundation of Java programming.',
            whyImportant: 'Java is strongly typed and verbose; understanding the syntax is key.',
            subtopics: [
                'How Java Works (JVM/JRE/JDK)',
                'Variables & Data Types',
                'Strings & Methods',
                'Conditionals & Loops',
                'Type Casting'
            ],
            website: 'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/index.html',
            nextStepId: 'oop'
        },
        {
            id: 'oop',
            title: 'Object Oriented Programming',
            description: 'The core paradigm of Java.',
            whyImportant: 'Java is purely object-oriented (mostly).',
            subtopics: [
                'Classes & Objects',
                'Inheritance, Encapsulation, Polymorphism',
                'Interfaces & Abstract Classes',
                'Static vs Final',
                'Access Specifiers'
            ],
            website: 'https://docs.oracle.com/javase/tutorial/java/concepts/index.html',
            nextStepId: 'collections'
        },
        {
            id: 'collections',
            title: 'Collections Framework',
            description: 'Data structures in Java.',
            whyImportant: 'Essential for manipulating groups of objects.',
            subtopics: [
                'List (ArrayList, LinkedList)',
                'Set (HashSet, TreeSet)',
                'Map (HashMap, TreeMap)',
                'Queue / Deque'
            ],
            website: 'https://docs.oracle.com/javase/tutorial/collections/index.html',
            nextStepId: 'modern-java'
        },
        {
            id: 'modern-java',
            title: 'Modern Java (Java 8+)',
            description: 'Functional programming features.',
            whyImportant: 'Makes code more concise and readable.',
            subtopics: [
                'Lambda Expressions',
                'Stream API',
                'Optional Class',
                'Functional Interfaces',
                'Modules (Java 9)'
            ],
            website: 'https://www.baeldung.com/java-8-new-features',
            nextStepId: 'concurrency'
        },
        {
            id: 'concurrency',
            title: 'Concurrency & Multithreading',
            description: 'Executing multiple tasks simultaneously.',
            whyImportant: 'Taking advantage of multi-core processors.',
            subtopics: [
                'Threads & Runnable',
                'Synchronization',
                'Thread Pools',
                'Completable Futures',
                'Virtual Threads (Java 21)'
            ],
            website: 'https://docs.oracle.com/javase/tutorial/essential/concurrency/',
            nextStepId: 'build-tools'
        },
        {
            id: 'build-tools',
            title: 'Build Tools',
            description: 'Automating the build process.',
            whyImportant: 'Managing dependencies and packaging applications.',
            subtopics: [
                'Maven (XML based)',
                'Gradle (Groovy/Kotlin based)',
                'Dependency Management'
            ],
            website: 'https://maven.apache.org/guides/getting-started/index.html',
            nextStepId: 'frameworks'
        },
        {
            id: 'frameworks',
            title: 'Web Frameworks (Spring Boot)',
            description: 'Building enterprise applications.',
            whyImportant: 'Spring Boot is the de-facto standard for Java web dev.',
            subtopics: [
                'Spring Core (IoC/DI)',
                'Spring MVC',
                'Spring Data JPA',
                'Spring Security',
                'Hibernate (ORM)'
            ],
            website: 'https://spring.io/guides/gs/spring-boot/',
            nextStepId: 'testing'
        },
        {
            id: 'testing',
            title: 'Testing',
            description: 'Ensuring code correctness.',
            whyImportant: 'Robust enterprise apps demand high test coverage.',
            subtopics: [
                'JUnit (Unit Testing)',
                'Mockito (Mocking)',
                'TestContainers',
                'Jacoco (Code Coverage)'
            ],
            website: 'https://junit.org/junit5/docs/current/user-guide/',
            nextStepId: 'database'
        },
        {
            id: 'database',
            title: 'Database Access',
            description: 'Connecting to databases.',
            whyImportant: 'Persisting application state.',
            subtopics: [
                'JDBC (Low level)',
                'JPA / Hibernate',
                'Transaction Management'
            ],
            website: 'https://www.baeldung.com/java-jdbc',
            nextStepId: null
        }
    ]
};
