export const vueRoadmap = {
    id: 'vue',
    title: 'Vue.js Developer',
    description: 'The progressive JavaScript framework roadmap.',
    nodes: [
        {
            id: 'prerequisites',
            title: 'Prerequisites',
            description: 'Foundations you need before learning Vue.',
            whyImportant: 'Vue is built on standard HTML, CSS, and JavaScript. Knowing these well makes learning Vue easy.',
            subtopics: [
                'HTML & CSS',
                'JavaScript Essentials (ES6+)',
                'npm / yarn'
            ],
            website: 'https://javascript.info/',
            nextStepId: 'basics'
        },
        {
            id: 'basics',
            title: 'Vue Basics & Setup',
            description: 'Setting up your first Vue project.',
            whyImportant: 'Understand the toolchain and how to bundle a Vue app.',
            subtopics: [
                'create-vue (Vite based)',
                'Application Instance',
                'Single File Components (.vue)',
                'Template Syntax'
            ],
            website: 'https://vuejs.org/guide/quick-start.html',
            nextStepId: 'reactivity'
        },
        {
            id: 'reactivity',
            title: 'Reactivity Fundamentals',
            description: 'How Vue tracks changes and updates the DOM.',
            whyImportant: 'Reactivity is the heart of Vue.',
            subtopics: [
                'ref() vs reactive()',
                'Computed Properties',
                'Watchers',
                'Class and Style Bindings'
            ],
            website: 'https://vuejs.org/guide/essentials/reactivity-fundamentals.html',
            nextStepId: 'components'
        },
        {
            id: 'components',
            title: 'Components',
            description: 'Building reusable UI blocks.',
            whyImportant: 'Components allow you to split your UI into independent, reusable pieces.',
            subtopics: [
                'Props (Passing data)',
                'Events ($emit)',
                'Slots (Content distribution)',
                'Dynamic Components',
                'Async Components'
            ],
            website: 'https://vuejs.org/guide/essentials/component-basics.html',
            nextStepId: 'api-styles'
        },
        {
            id: 'api-styles',
            title: 'API Styles',
            description: 'Different ways to write Vue components.',
            whyImportant: 'Vue offers two styles: Options API (traditional) and Composition API (modern, functional).',
            subtopics: [
                'Options API (data, methods, mounted)',
                'Composition API (setup, <script setup>)',
                'Composables (Reusability)'
            ],
            website: 'https://vuejs.org/guide/introduction.html#api-styles',
            nextStepId: 'directives'
        },
        {
            id: 'directives',
            title: 'Built-in Directives',
            description: 'Special tokens in markup that tell the library to do something.',
            whyImportant: 'Directives handle most dynamic DOM manipulations without writing manual DOM code.',
            subtopics: [
                'v-if / v-else / v-show (Conditional)',
                'v-for (Loops)',
                'v-bind (Attribute binding)',
                'v-on (Event listeners)',
                'v-model (Two-way binding)'
            ],
            website: 'https://vuejs.org/api/built-in-directives.html',
            nextStepId: 'forms'
        },
        {
            id: 'forms',
            title: 'Forms Handling',
            description: 'Managing user input.',
            whyImportant: 'Collecting data from users is a primary requirement for most apps.',
            subtopics: [
                'Input Bindings',
                'Modifiers (.lazy, .number, .trim)',
                'Form Validation (VeeValidate / FormKit)'
            ],
            website: 'https://vuejs.org/guide/essentials/forms.html',
            nextStepId: 'routing'
        },
        {
            id: 'routing',
            title: 'Vue Router',
            description: 'The official router for Vue.js.',
            whyImportant: 'Essential for building Single Page Applications (SPAs).',
            subtopics: [
                'Route Configuration',
                'Nested Routes',
                'Dynamic Route Matching',
                'Navigation Guards',
                'Lazy Loading Routes'
            ],
            website: 'https://router.vuejs.org/',
            nextStepId: 'state-management'
        },
        {
            id: 'state-management',
            title: 'State Management (Pinia)',
            description: 'Managing global state across components.',
            whyImportant: 'Pinia is the modern, official state management library for Vue (replacing Vuex).',
            subtopics: [
                'Stores',
                'State, Getters, Actions',
                'Modules / Composing Stores',
                'Vuex (Legacy knowledge)'
            ],
            website: 'https://pinia.vuejs.org/',
            nextStepId: 'ecosystem'
        },
        {
            id: 'ecosystem',
            title: 'Ecosystem & Tooling',
            description: 'Libraries and tools that enhance Vue development.',
            whyImportant: 'Don\'t reinvent the wheel; use the robust ecosystem.',
            subtopics: [
                'Nuxt.js (SSR / Static Framework)',
                'VueUse (Collection of utilities)',
                'Vitest (Testing)',
                'Tailwind CSS (Styling)',
                'Vue DevTools'
            ],
            website: 'https://nuxt.com/',
            nextStepId: null
        }
    ]
};
