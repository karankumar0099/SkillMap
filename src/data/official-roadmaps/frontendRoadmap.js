export const frontendRoadmap = {
    id: 'frontend',
    title: 'Frontend Developer',
    description: 'Step by step guide to becoming a modern Frontend Developer in 2024.',
    nodes: [
        {
            id: 'internet',
            title: 'Internet',
            description: 'The foundation of the web. Understanding how the internet works is crucial.',
            whyImportant: 'You need to know how computers communicate, what happens when you type a URL, and how bits travel through the wire.',
            website: 'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work',
            nextStepId: 'html',
            subtopics: ['DNS', 'HTTP/HTTPS', 'Domain Names', 'Hosting']
        },
        {
            id: 'html',
            title: 'HTML',
            description: 'HyperText Markup Language - The skeleton of every web page.',
            whyImportant: 'It is the standard markup language for documents designed to be displayed in a web browser. Semantic HTML matters for SEO and accessibility.',
            website: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
            nextStepId: 'css',
            subtopics: ['Semantic HTML', 'Forms', 'SEO Basics', 'Accessibility']
        },
        {
            id: 'css',
            title: 'CSS',
            description: 'Cascading Style Sheets - Making the web look beautiful.',
            whyImportant: 'CSS handles the look and feel. You must master layout (Flexbox, Grid) and responsive design to build modern sites.',
            website: 'https://web.dev/learn/css',
            nextStepId: 'javascript',
            subtopics: ['Flexbox', 'Grid', 'Responsive Design', 'Box Model']
        },
        {
            id: 'javascript',
            title: 'JavaScript',
            description: 'The programming language of the web.',
            whyImportant: 'It allows you to implement complex features on web pages. It is the core logic layer for any frontend application.',
            website: 'https://javascript.info/',
            nextStepId: 'vcs',
            subtopics: ['ES6+', 'DOM Manipulation', 'Fetch API', 'Async/Await']
        },
        {
            id: 'vcs',
            title: 'Version Control Systems',
            description: 'Tracking changes and collaborating with Git.',
            whyImportant: 'Version control is essential for any developer to track history, branch out features, and work in teams.',
            website: 'https://git-scm.com/doc',
            nextStepId: 'pkg-managers',
            subtopics: ['Git Basics', 'GitHub/GitLab', 'Branching', 'Pull Requests']
        },
        {
            id: 'pkg-managers',
            title: 'Package Managers',
            description: 'Managing dependencies with npm or pnpm.',
            whyImportant: 'Modern development relies on external libraries. Package managers automate the process of installing, upgrading, and configuring them.',
            website: 'https://docs.npmjs.com/about-npm',
            nextStepId: 'frameworks',
            subtopics: ['npm', 'yarn', 'pnpm']
        },
        {
            id: 'frameworks',
            title: 'Frontend Frameworks',
            description: 'Building scalable apps with React, Vue, or Angular.',
            whyImportant: 'Frameworks simplify the development of complex, interactive user interfaces by providing a structured way to manage state and components.',
            website: 'https://react.dev/learn',
            nextStepId: 'css-frameworks',
            subtopics: ['React', 'Vue.js', 'Angular', 'State Management']
        },
        {
            id: 'css-frameworks',
            title: 'CSS Frameworks',
            description: 'Rapid styling with Tailwind CSS or Material UI.',
            whyImportant: 'They provide pre-designed components and utility classes, significantly speeding up the UI development process.',
            website: 'https://tailwindcss.com/docs',
            nextStepId: 'testing',
            subtopics: ['Tailwind CSS', 'Material UI', 'Bootstrap', 'Radix UI']
        },
        {
            id: 'testing',
            title: 'Testing',
            description: 'Ensuring code reliability with Jest, Vitest, and Cypress.',
            whyImportant: 'Testing prevents bugs and ensures your application works as expected as it scales. Learn Unit, Integration, and E2E testing.',
            website: 'https://jestjs.io/docs/getting-started',
            nextStepId: 'build-tools',
            subtopics: ['Jest', 'React Testing Library', 'Cypress', 'Playwright']
        },
        {
            id: 'build-tools',
            title: 'Build Tools',
            description: 'Bundling and optimizing with Vite or Webpack.',
            whyImportant: 'Build tools optimize your code for production (minification, tree-shaking) and provide a fast development experience.',
            website: 'https://vitejs.dev/guide/',
            nextStepId: null,
            subtopics: ['Vite', 'Webpack', 'Linters (ESLint)', 'Formatters (Prettier)']
        },
        {
            id: 'web-security',
            title: 'Web Security',
            description: 'Protecting users and data (OWASP, CORS, HTTPS).',
            whyImportant: 'Security is critical. You must understand common vulnerabilities like XSS, CSRF, and how to secure API communication.',
            website: 'https://owasp.org/www-project-top-ten/',
            nextStepId: null,
            subtopics: ['HTTPS', 'CORS', 'Content Security Policy', 'OWASP Top 10']
        }
    ]
};
