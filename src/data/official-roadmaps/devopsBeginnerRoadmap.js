export const devopsBeginnerRoadmap = {
    id: 'devops-beginner',
    title: 'DevOps (Absolute Beginners)',
    description: 'Introduction to the world of Development + Operations.',
    nodes: [
        {
            id: 'what-is-devops',
            title: 'What is DevOps?',
            description: 'Understanding the culture, philosophy, and lifecycle.',
            whyImportant: 'DevOps is not just tools; it is a way of working to deliver software faster.',
            subtopics: ['CAMS Model', 'Software Development Lifecycle', 'Agile'],
            website: 'https://aws.amazon.com/devops/what-is-devops/',
            nextStepId: 'linux-fundamentals'
        },
        {
            id: 'linux-fundamentals',
            title: 'Linux Fundamentals',
            description: 'The operating system that powers the cloud.',
            whyImportant: 'Most servers run on Linux. You must be comfortable with the terminal.',
            subtopics: ['Shell Commands', 'File System', 'Permissions', 'SSH'],
            website: 'https://linuxjourney.com/',
            nextStepId: 'scripting'
        },
        {
            id: 'scripting',
            title: 'Scripting (Bash/Python)',
            description: 'Automating repetitive tasks.',
            whyImportant: 'Automation is the heart of DevOps. Don\'t do things manually.',
            subtopics: ['Variables', 'Loops', 'Cron Jobs', 'Automation scripts'],
            website: 'https://tldp.org/LDP/Bash-Beginners-Guide/html/',
            nextStepId: 'git-devops'
        },
        {
            id: 'git-devops',
            title: 'Version Control (Git)',
            description: 'Source code management.',
            whyImportant: 'Infrastructure as Code relies heavily on version control.',
            subtopics: ['Branching Strategies', 'Pull Requests', 'Code Review'],
            website: 'https://git-scm.com/book/en/v2',
            nextStepId: 'docker-intro'
        },
        {
            id: 'docker-intro',
            title: 'Containers (Docker)',
            description: 'Packaging applications to run anywhere.',
            whyImportant: 'Containers solve the "it works on my machine" problem.',
            subtopics: ['Containerization', 'Images vs Containers', 'Dockerfile'],
            website: 'https://www.docker.com/resources/what-container/',
            nextStepId: null
        }
    ]
};
