export const reactRoadmap = {
    id: 'react',
    title: 'React Developer',
    description: 'Everything you need to know about React and its ecosystem.',
    nodes: [
        {
            id: 'prerequisites',
            title: 'Prerequisites',
            description: 'Before jumping into React, ensure you have a solid foundation in these areas.',
            whyImportant: 'React is a JavaScript library. Weak JS fundamentals will make learning React much harder.',
            subtopics: [
                'HTML & CSS',
                'JavaScript (ES6+)',
                'Arrow Functions',
                'Desctructuring & Spread Operator',
                'Array Methods (map, filter, reduce)',
                'Modules (import/export)'
            ],
            website: 'https://javascript.info/',
            nextStepId: 'cli-tools'
        },
        {
            id: 'cli-tools',
            title: 'CLI Tools',
            description: 'Tools to set up your React environment quickly.',
            whyImportant: 'Modern React development relies on build tools for bundling, transpiling, and dev servers.',
            subtopics: [
                'Vite (Recommended)',
                'Create React App (Legacy)',
                'npm / yarn / pnpm'
            ],
            website: 'https://vitejs.dev/guide/',
            nextStepId: 'components'
        },
        {
            id: 'components',
            title: 'Components & JSX',
            description: 'The building blocks of any React application.',
            whyImportant: 'Everything in React is a component. You need to know how to create and compose them.',
            subtopics: [
                'Functional Components',
                'JSX Syntax',
                'Props vs State',
                'Conditional Rendering',
                'Composition'
            ],
            website: 'https://react.dev/learn/your-first-component',
            nextStepId: 'rendering'
        },
        {
            id: 'rendering',
            title: 'Rendering & Lifecycle',
            description: 'How React manages the DOM and updates the UI.',
            whyImportant: 'Understanding rendering helps you avoid performance pitfalls and synchronization issues.',
            subtopics: [
                'Component Lifecycle (Mount, Update, Unmount)',
                'Lists & Keys',
                'Render Props',
                'Events handling',
                'Refs'
            ],
            website: 'https://react.dev/learn/render-and-commit',
            nextStepId: 'hooks'
        },
        {
            id: 'hooks',
            title: 'Hooks',
            description: 'Functions that let you hook into React state and lifecycle features.',
            whyImportant: 'Hooks are the standard way to write side logic in functional components today.',
            subtopics: [
                'useState (State)',
                'useEffect (Side Effects)',
                'useContext (Context)',
                'useReducer (Complex State)',
                'useRef (References)',
                'useMemo & useCallback (Optimization)',
                'Custom Hooks'
            ],
            website: 'https://react.dev/reference/react',
            nextStepId: 'router'
        },
        {
            id: 'router',
            title: 'Routing',
            description: 'Handling navigation in a single-page application.',
            whyImportant: 'Users expect to navigate between different views with URLs keeping in sync.',
            subtopics: [
                'React Router (Standard)',
                'TanStack Router (Modern)',
                'Dynamic Routes',
                'Protected Routes'
            ],
            website: 'https://reactrouter.com/en/main/start/tutorial',
            nextStepId: 'styling'
        },
        {
            id: 'styling',
            title: 'Styling',
            description: 'Different ways to style React components.',
            whyImportant: 'A good looking app is a usable app. React offers many styling paradigms.',
            subtopics: [
                'CSS Modules',
                'Tailwind CSS (Utility-first)',
                'Styled Components (CSS-in-JS)',
                'UI Libraries (MUI, Chakra, Shadcn UI)'
            ],
            website: 'https://tailwindcss.com/docs/guides/vite',
            nextStepId: 'state-management'
        },
        {
            id: 'state-management',
            title: 'State Management',
            description: 'Managing global state across your application.',
            whyImportant: 'Prop drilling becomes painful in large apps. Global state tools solve this.',
            subtopics: [
                'Context API (Built-in)',
                'Redux Toolkit (Standard for large apps)',
                'Zustand (Minimalist)',
                'Jotai / Recoil (Atomic)'
            ],
            website: 'https://redux-toolkit.js.org/',
            nextStepId: 'api-calls'
        },
        {
            id: 'api-calls',
            title: 'API Calls',
            description: 'Fetching and synchronizing server state.',
            whyImportant: 'Most apps invoke backend APIs. Proper data fetching handles caching and loading states.',
            subtopics: [
                'TanStack Query (React Query)',
                'Axios',
                'SWR',
                'GraphQL (Apollo)'
            ],
            website: 'https://tanstack.com/query/latest/docs/framework/react/overview',
            nextStepId: 'forms'
        },
        {
            id: 'forms',
            title: 'Forms',
            description: 'Handling user input efficiently.',
            whyImportant: 'Forms are hard. Specialized libraries make validation and state management easier.',
            subtopics: [
                'React Hook Form (Performance focused)',
                'Formik',
                'Zod (Validation Schema)'
            ],
            website: 'https://react-hook-form.com/',
            nextStepId: 'testing'
        },
        {
            id: 'testing',
            title: 'Testing',
            description: 'Verifying your code works as expected.',
            whyImportant: 'Testing prevents regressions and ensures reliability.',
            subtopics: [
                'Vitest / Jest (Unit Testing)',
                'React Testing Library',
                'Cypress / Playwright (E2E)'
            ],
            website: 'https://testing-library.com/docs/react-testing-library/intro/',
            nextStepId: 'frameworks'
        },
        {
            id: 'frameworks',
            title: 'Frameworks',
            description: 'Full-stack React frameworks for production.',
            whyImportant: 'Frameworks handle routing, SSR, and optimization out of the box.',
            subtopics: [
                'Next.js (Industry Standard)',
                'Remix',
                'Astro'
            ],
            website: 'https://nextjs.org/docs',
            nextStepId: null
        }
    ]
};
