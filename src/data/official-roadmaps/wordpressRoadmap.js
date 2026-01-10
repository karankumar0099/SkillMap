export const wordpressRoadmap = {
    id: 'wordpress',
    title: 'WordPress Developer',
    description: 'Master the world\'s most popular CMS.',
    nodes: [
        {
            id: 'wp-basics',
            title: 'WordPress Basics',
            description: 'Installation, Dashboard, Themes, and Plugins.',
            whyImportant: 'Understand how WordPress works out of the box.',
            subtopics: ['Installation', 'Dashboard Overiew', 'Posts vs Pages', 'Settings'],
            website: 'https://wordpress.org/support/article/new-to-wordpress-where-to-start/',
            nextStepId: 'theme-dev'
        },
        {
            id: 'theme-dev',
            title: 'Theme Development',
            description: 'Creating custom designs.',
            whyImportant: 'Themes control the look and feel of the site.',
            subtopics: ['Template Hierarchy', 'The Loop', 'Functions.php', 'Child Themes'],
            website: 'https://developer.wordpress.org/themes/',
            nextStepId: 'plugin-dev'
        },
        {
            id: 'plugin-dev',
            title: 'Plugin Development',
            description: 'Extending functionality.',
            whyImportant: 'Plugins add features without changing the theme.',
            subtopics: ['Hooks (Actions & Filters)', 'Shortcodes', 'Widgets', 'Custom Post Types'],
            website: 'https://developer.wordpress.org/plugins/',
            nextStepId: 'advanced-wp'
        },
        {
            id: 'advanced-wp',
            title: 'Advanced Concepts',
            description: 'Performance, Security, and REST API.',
            whyImportant: 'Build scalable and secure WordPress sites.',
            subtopics: ['WP REST API', 'Security Best Practices', 'Performance Optimization', 'Gutenberg Blocks'],
            website: 'https://developer.wordpress.org/rest-api/',
            nextStepId: null
        }
    ]
};
