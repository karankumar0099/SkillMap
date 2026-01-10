export const springBootRoadmap = {
    id: 'spring-boot',
    title: 'Spring Boot Developer',
    description: 'Step by step guide to becoming a Spring Boot developer in 2025.',
    nodes: [
        {
            id: 'intro',
            title: 'Introduction to Spring',
            description: 'Core concepts of the Spring Framework.',
            whyImportant: 'Spring Boot is built on top of the Spring Framework; you need the basics.',
            subtopics: [
                'Inversion of Control (IoC)',
                'Dependency Injection (DI)',
                'Spring Beans & Scopes',
                'Aspect Oriented Programming (AOP)',
                'Spring MVC Architecture'
            ],
            website: 'https://docs.spring.io/spring-framework/reference/core.html',
            nextStepId: 'spring-boot-basics'
        },
        {
            id: 'spring-boot-basics',
            title: 'Spring Boot Basics',
            description: 'Convention over configuration.',
            whyImportant: 'Spring Boot simplifies Spring development.',
            subtopics: [
                'Spring Boot Starters',
                'Auto Configuration',
                'Embedded Servers (Tomcat, Jetty)',
                'Actuators (Monitoring)',
                'DevTools'
            ],
            website: 'https://spring.io/guides/gs/spring-boot/',
            nextStepId: 'spring-security'
        },
        {
            id: 'spring-security',
            title: 'Spring Security',
            description: 'Securing your application.',
            whyImportant: 'Standard for authentication and authorization in Java.',
            subtopics: [
                'Authentication vs Authorization',
                'JWT (JSON Web Tokens)',
                'OAuth2 & OpenID Connect',
                'Method Level Security',
                'CSRF & CORs'
            ],
            website: 'https://spring.io/guides/topicals/spring-security-architecture',
            nextStepId: 'database'
        },
        {
            id: 'database',
            title: 'Spring Data & JPA',
            description: 'Data access layer.',
            whyImportant: 'Simplified database interactions.',
            subtopics: [
                'Hibernate (ORM)',
                'Spring Data JPA',
                'Repositories (CrudRepository, JpaRepository)',
                'Transactions (@Transactional)',
                'Database Migrations (Flyway / Liquibase)'
            ],
            website: 'https://spring.io/projects/spring-data',
            nextStepId: 'microservices'
        },
        {
            id: 'microservices',
            title: 'Microservices with Spring Cloud',
            description: 'Building distributed systems.',
            whyImportant: 'Spring Cloud provides tools for common patterns in distributed systems.',
            subtopics: [
                'Spring Cloud Gateway',
                'Service Discovery (Eureka / Consul)',
                'Config Server',
                'Circuit Breakers (Resilience4j)',
                'Distributed Tracing (Zipkin / Micrometer)'
            ],
            website: 'https://spring.io/projects/spring-cloud',
            nextStepId: 'testing'
        },
        {
            id: 'testing',
            title: 'Testing',
            description: 'Ensuring application quality.',
            whyImportant: 'Spring Boot offers excellent testing support.',
            subtopics: [
                '@SpringBootTest',
                '@MockBean',
                'MockMvc (Controller Testing)',
                '@DataJpaTest',
                'TestContainers'
            ],
            website: 'https://spring.io/guides/gs/testing-web/',
            nextStepId: null
        }
    ]
};
