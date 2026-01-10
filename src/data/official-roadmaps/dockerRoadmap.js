export const dockerRoadmap = {
    id: 'docker',
    title: 'Docker & Containers',
    description: 'Step by step guide to learning Docker in 2025.',
    nodes: [
        {
            id: 'intro',
            title: 'Introduction to Containers',
            description: 'Understanding the problem Docker solves.',
            whyImportant: 'Solves "it works on my machine" - Application isolation and portability.',
            subtopics: [
                'Virtual Machines vs Containers',
                'What is Docker?',
                'OCI (Open Container Initiative)',
                'The Docker Architecture (Client-Server)'
            ],
            website: 'https://docs.docker.com/get-started/overview/',
            nextStepId: 'installation'
        },
        {
            id: 'installation',
            title: 'Installation & Setup',
            description: 'Getting Docker running.',
            whyImportant: 'You need the engine to run containers.',
            subtopics: [
                'Docker Desktop (Windows/Mac)',
                'Docker Engine (Linux)',
                'Post-installation steps (Linux managed user)',
                'Hello World'
            ],
            website: 'https://docs.docker.com/get-docker/',
            nextStepId: 'basics'
        },
        {
            id: 'basics',
            title: 'Docker Basics',
            description: 'Core concepts.',
            whyImportant: 'Understanding the difference between a recipe (Image) and the cake (Container).',
            subtopics: [
                'Images vs Containers',
                'The Docker CLI',
                'Lifecycle (create, start, stop, kill, rm)',
                'Logs and Interactive Mode (-it)'
            ],
            website: 'https://labs.play-with-docker.com/',
            nextStepId: 'building-images'
        },
        {
            id: 'building-images',
            title: 'Building Images',
            description: 'Creating your own containers.',
            whyImportant: 'Packaging your application for distribution.',
            subtopics: [
                'Dockerfile Syntax (FROM, RUN, CMD, COPY)',
                'Layer Caching',
                '.dockerignore',
                'Multi-stage Builds (Optimization)'
            ],
            website: 'https://docs.docker.com/build/building/best-practices/',
            nextStepId: 'networking'
        },
        {
            id: 'networking',
            title: 'Networking',
            description: 'Connecting containers.',
            whyImportant: 'Applications often need to talk to databases or other services.',
            subtopics: [
                'Bridge Network',
                'Host Network',
                'Exposing Ports (-p)',
                'DNS within Docker'
            ],
            website: 'https://docs.docker.com/network/',
            nextStepId: 'volumes'
        },
        {
            id: 'volumes',
            title: 'Data Persistence (Volumes)',
            description: 'Saving data.',
            whyImportant: 'Containers are ephemeral; data is lost when they die unless you save it.',
            subtopics: [
                'Volumes (Managed by Docker)',
                'Bind Mounts (Direct host access)',
                'Tmpfs Mounts',
                'Volume Drivers'
            ],
            website: 'https://docs.docker.com/storage/',
            nextStepId: 'compose'
        },
        {
            id: 'compose',
            title: 'Docker Compose',
            description: 'Multi-container applications.',
            whyImportant: 'Orchestrating a frontend, backend, and database together.',
            subtopics: [
                'docker-compose.yml',
                'Services, Networks, Volumes definition',
                'Environment Variables (.env)',
                'Depends On'
            ],
            website: 'https://docs.docker.com/compose/',
            nextStepId: 'registry'
        },
        {
            id: 'registry',
            title: 'Container Registries',
            description: 'Sharing images.',
            whyImportant: 'Where images are stored and downloaded from.',
            subtopics: [
                'Docker Hub',
                'Private Registries (ECR, GCR)',
                'Pushing and Pulling',
                'Tagging Strategy'
            ],
            website: 'https://hub.docker.com/',
            nextStepId: 'production'
        },
        {
            id: 'production',
            title: 'Docker in Production',
            description: 'Best practices for deployment.',
            whyImportant: 'Security and performance in the wild.',
            subtopics: [
                'Non-root Users',
                'Image Scanning (Vulnerabilities)',
                'Healthchecks',
                'Orchestration (Swarm / Kubernetes)'
            ],
            website: 'https://docs.docker.com/develop/dev-best-practices/',
            nextStepId: null
        }
    ]
};
