export const nextjsRoadmap = {
    id: 'next.js',
    title: 'Next.js Developer',
    description: 'Step by step guide to mastering Next.js in 2025.',
    nodes: [
        {
            id: 'foundations',
            title: 'Foundations',
            description: 'Core concepts before Next.js.',
            whyImportant: 'Next.js builds on top of React. You must know React well.',
            subtopics: [
                'React Fundamentals (Components, Props, State)',
                'React Hooks (useState, useEffect)',
                'Server Side Rendering (SSR) Concept',
                'Client Side Rendering (CSR) Concept',
                'Static Site Generation (SSG)'
            ],
            website: 'https://nextjs.org/docs',
            nextStepId: 'routing'
        },
        {
            id: 'routing',
            title: 'App Router & Routing',
            description: 'The file-system based router.',
            whyImportant: 'The App Router is the modern way to build Next.js apps.',
            subtopics: [
                'File-system Routing (folders defines routes)',
                'Pages vs App Router',
                'Special Files (page.js, layout.js, loading.js, error.js)',
                'Dynamic Routes ([id])',
                'Navigation (Link component, useRouter)'
            ],
            website: 'https://nextjs.org/docs/app/building-your-application/routing',
            nextStepId: 'rendering'
        },
        {
            id: 'rendering',
            title: 'Rendering',
            description: 'Server vs Client Components.',
            whyImportant: 'Understand where your code runs to optimize performance and SEO.',
            subtopics: [
                'Server Components (RSC) - Default',
                'Client Components ("use client")',
                'Composition Patterns (Server inside Client?)',
                'Edge vs Node.js Runtimes'
            ],
            website: 'https://nextjs.org/docs/app/building-your-application/rendering',
            nextStepId: 'data-fetching'
        },
        {
            id: 'data-fetching',
            title: 'Data Fetching',
            description: 'Loading data in your app.',
            whyImportant: 'Next.js extends fetch to add caching and revalidation.',
            subtopics: [
                'fetch() API in Server Components',
                'Caching & Revalidation (ISR)',
                'Server Actions (Mutations)',
                'Route Handlers (API Endpoints)'
            ],
            website: 'https://nextjs.org/docs/app/building-your-application/data-fetching',
            nextStepId: 'styling'
        },
        {
            id: 'styling',
            title: 'Styling',
            description: 'Making it look good.',
            whyImportant: 'Next.js supports various styling methods out of the box.',
            subtopics: [
                'CSS Modules',
                'Tailwind CSS (Recommended)',
                'Global CSS',
                'CSS-in-JS (Styled Components - caveats with RSC)'
            ],
            website: 'https://nextjs.org/docs/app/building-your-application/styling',
            nextStepId: 'optimizations'
        },
        {
            id: 'optimizations',
            title: 'Optimizations',
            description: 'Performance features.',
            whyImportant: 'Core Web Vitals matter for user experience and SEO.',
            subtopics: [
                'Image Component (next/image)',
                'Font Optimization (next/font)',
                'Script Optimization (next/script)',
                'Lazy Loading',
                'Metadata (SEO)'
            ],
            website: 'https://nextjs.org/docs/app/building-your-application/optimizing',
            nextStepId: 'deployment'
        },
        {
            id: 'deployment',
            title: 'Deployment',
            description: 'Going live.',
            whyImportant: 'Vercel is the creators platform, but you can host anywhere.',
            subtopics: [
                'Vercel (Zero-config)',
                'Docker (Self-hosting)',
                'Static Export (next export)',
                'Environment Variables'
            ],
            website: 'https://nextjs.org/docs/app/building-your-application/deploying',
            nextStepId: null
        }
    ]
};
