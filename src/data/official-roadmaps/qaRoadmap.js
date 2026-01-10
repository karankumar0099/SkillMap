export const qaRoadmap = {
    id: 'qa',
    title: 'QA Engineer',
    description: 'Step by step guide to becoming a Quality Assurance Engineer in 2024.',
    nodes: [
        {
            id: 'fundamentals',
            title: 'QA Fundamentals',
            description: 'The mindset of quality.',
            whyImportant: 'Understand the difference between Verification and Validation, and why testing is crucial.',
            website: 'https://www.istqb.org/certifications/certified-tester-foundation-level',
            nextStepId: 'sdlc',
            subtopics: ['Black Box vs White Box', 'Test Piramid', 'Bug Life Cycle', 'STLC']
        },
        {
            id: 'sdlc',
            title: 'SDLC & Methodologies',
            description: 'How software is built.',
            whyImportant: 'QA needs to integrate into the development process, whether it is Agile or Waterfall.',
            website: 'https://www.atlassian.com/agile',
            nextStepId: 'manual-testing',
            subtopics: ['Agile / Scrum', 'Waterfall', 'V-Model', 'Kanban']
        },
        {
            id: 'manual-testing',
            title: 'Manual Testing',
            description: 'Human verification.',
            whyImportant: 'You cannot automate what you do not understand. Learn to write Test Cases and Plans.',
            website: 'https://www.guru99.com/manual-testing.html',
            nextStepId: 'automation-basics',
            subtopics: ['Test Plans', 'Test Scenarios', 'Bug Reporting (Jira)', 'Exploratory Testing']
        },
        {
            id: 'automation-basics',
            title: 'Automation Basics',
            description: 'Programming for QA.',
            whyImportant: 'Automation requires coding skills. Python or Java are popular choices for Selenium.',
            website: 'https://www.selenium.dev/documentation/webdriver/',
            nextStepId: 'frontend-automation',
            subtopics: ['Python/Java/JS basics', 'DOM Manipulation', 'CSS Selectors', 'XPath']
        },
        {
            id: 'frontend-automation',
            title: 'Frontend Automation',
            description: 'Testing the UI.',
            whyImportant: 'Ensure the user interface works as expected across browsers.',
            website: 'https://www.cypress.io/',
            nextStepId: 'backend-automation',
            subtopics: ['Selenium', 'Cypress', 'Playwright', 'Page Object Model']
        },
        {
            id: 'backend-automation',
            title: 'Backend/API Testing',
            description: 'Testing the logic.',
            whyImportant: 'APIs are the backbone of modern apps. Test them directly to isolate UI issues.',
            website: 'https://learning.postman.com/docs/getting-started/introduction/',
            nextStepId: 'non-functional',
            subtopics: ['Postman', 'REST Assured', 'Status Codes', 'JSON Validation']
        },
        {
            id: 'non-functional',
            title: 'Non-Functional Testing',
            description: 'Performance & Security.',
            whyImportant: 'App speed and security are just as important as functionality.',
            website: 'https://jmeter.apache.org/',
            nextStepId: 'ci-cd',
            subtopics: ['Load Testing (JMeter/K6)', 'Security Testing (OWASP ZAP)', 'Accessibility (A11y)']
        },
        {
            id: 'ci-cd',
            title: 'CI/CD & DevOps',
            description: 'Automated Pipelines.',
            whyImportant: 'Run your tests automatically whenever developers push code.',
            website: 'https://www.jenkins.io/',
            nextStepId: null,
            subtopics: ['Jenkins', 'GitHub Actions', 'Docker for Testing', 'Continuous Integration']
        }
    ]
};
