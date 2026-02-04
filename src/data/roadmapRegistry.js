import { frontendRoadmap } from './official-roadmaps/frontendRoadmap';
import { backendRoadmap } from './official-roadmaps/backendRoadmap';
import { fullstackRoadmap } from './official-roadmaps/fullstackRoadmap';
import { dataAnalystRoadmap } from './official-roadmaps/dataAnalystRoadmap';
import { dataEngineerRoadmap } from './official-roadmaps/dataEngineerRoadmap';
import { aiEngineerRoadmap } from './official-roadmaps/aiEngineerRoadmap';
import { aiDataScientistRoadmap } from './official-roadmaps/aiDataScientistRoadmap';
import { androidRoadmap } from './official-roadmaps/androidRoadmap';
import { iosRoadmap } from './official-roadmaps/iosRoadmap';
import { machineLearningRoadmap } from './official-roadmaps/machineLearningRoadmap';
import { productManagerRoadmap } from './official-roadmaps/productManagerRoadmap';
import { postgresqlRoadmap } from './official-roadmaps/postgresqlRoadmap';
import { blockchainRoadmap } from './Role-based/blockchainRoadmap';
import { cyberSecurityRoadmap } from './Role-based/cyberSecurityRoadmap';
import { gameDeveloperRoadmap } from './official-roadmaps/gameDeveloperRoadmap';
import { qaRoadmap } from './official-roadmaps/qaRoadmap';
import { softwareArchitectRoadmap } from './official-roadmaps/softwareArchitectRoadmap';
import { technicalWriterRoadmap } from './official-roadmaps/technicalWriterRoadmap';
import { uxDesignRoadmap } from './official-roadmaps/uxDesignRoadmap';
import { devopsRoadmap } from './official-roadmaps/devopsRoadmap';
import { serverSideGameDeveloperRoadmap } from './official-roadmaps/serverSideGameDeveloperRoadmap';

import { reactRoadmap } from './official-roadmaps/reactRoadmap';
import { pythonRoadmap } from './official-roadmaps/pythonRoadmap';
import { javaRoadmap } from './official-roadmaps/javaRoadmap';
import { sqlRoadmap } from './official-roadmaps/sqlRoadmap';
import { computerScienceRoadmap } from './official-roadmaps/computerScienceRoadmap';
import { vueRoadmap } from './official-roadmaps/vueRoadmap';
import { angularRoadmap } from './official-roadmaps/angularRoadmap';
import { javascriptRoadmap } from './official-roadmaps/javascriptRoadmap';
import { typescriptRoadmap } from './official-roadmaps/typescriptRoadmap';
import { nodejsRoadmap } from './official-roadmaps/nodejsRoadmap';
import { systemDesignRoadmap } from './official-roadmaps/systemDesignRoadmap';
import { aspnetRoadmap } from './official-roadmaps/aspnetRoadmap';
import { apiDesignRoadmap } from './official-roadmaps/apiDesignRoadmap';
import { springBootRoadmap } from './official-roadmaps/springBootRoadmap';
import { flutterRoadmap } from './official-roadmaps/flutterRoadmap';
import { cppRoadmap } from './official-roadmaps/cppRoadmap';
import { rustRoadmap } from './official-roadmaps/rustRoadmap';
import { goRoadmap } from './official-roadmaps/goRoadmap';
import { softwareArchitectureRoadmap } from './official-roadmaps/softwareArchitectureRoadmap';
import { graphqlRoadmap } from './official-roadmaps/graphqlRoadmap';
import { reactNativeRoadmap } from './official-roadmaps/reactNativeRoadmap';
import { designSystemRoadmap } from './official-roadmaps/designSystemRoadmap';
import { promptEngineeringRoadmap } from './official-roadmaps/promptEngineeringRoadmap';
import { mongodbRoadmap } from './official-roadmaps/mongodbRoadmap';
import { linuxRoadmap } from './official-roadmaps/linuxRoadmap';
import { dockerRoadmap } from './official-roadmaps/dockerRoadmap';
import { awsRoadmap } from './official-roadmaps/awsRoadmap';
import { dsaRoadmap } from './official-roadmaps/dsaRoadmap';
import { gitRoadmap } from './official-roadmaps/gitRoadmap';
import { phpRoadmap } from './official-roadmaps/phpRoadmap';
import { nextjsRoadmap } from './official-roadmaps/nextjsRoadmap';
import { kotlinRoadmap } from './official-roadmaps/kotlinRoadmap';
import { frontendBeginnerRoadmap } from './official-roadmaps/frontendBeginnerRoadmap';
import { backendBeginnerRoadmap } from './official-roadmaps/backendBeginnerRoadmap';
import { devopsBeginnerRoadmap } from './official-roadmaps/devopsBeginnerRoadmap';
import { wordpressRoadmap } from './official-roadmaps/wordpressRoadmap';
import { laravelRoadmap } from './official-roadmaps/laravelRoadmap';
import { htmlRoadmap } from './official-roadmaps/htmlRoadmap';
import { cssRoadmap } from './official-roadmaps/cssRoadmap';
import { swiftRoadmap } from './official-roadmaps/swiftRoadmap';
import { djangoRoadmap } from './official-roadmaps/djangoRoadmap';
import { devsecopsRoadmap } from './official-roadmaps/devsecopsRoadmap';
import { kubernetesRoadmap } from './official-roadmaps/kubernetesRoadmap';
import { cloudflareRoadmap } from './official-roadmaps/cloudflareRoadmap';
import { redisRoadmap } from './official-roadmaps/redisRoadmap';
import { elasticsearchRoadmap } from './official-roadmaps/elasticsearchRoadmap';
import { codeReviewRoadmap } from './official-roadmaps/codeReviewRoadmap';
import { devRelRoadmap } from './official-roadmaps/devRelRoadmap';
import { aiAgentsRoadmap } from './official-roadmaps/aiAgentsRoadmap';
import { aiRedTeamingRoadmap } from './official-roadmaps/aiRedTeamingRoadmap';
import { biAnalystRoadmap } from './official-roadmaps/biAnalystRoadmap';
import { mlopsRoadmap } from './official-roadmaps/mlopsRoadmap';
import { engineeringManagerRoadmap } from './official-roadmaps/engineeringManagerRoadmap';
import { terraformRoadmap } from './official-roadmaps/terraformRoadmap';

const generateGenericRoadmap = (id, title) => {
    const formatTitle = (str) => {
        if (!str) return 'Skill';
        return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    const niceTitle = title || formatTitle(id);

    return {
        id: id,
        title: niceTitle + ' Roadmap',
        description: `Everything you need to know to master ${niceTitle}.`,
        nodes: [
            {
                id: 'basics',
                title: 'Fundamentals',
                description: `Core concepts of ${niceTitle}.`,
                whyImportant: 'You need a strong foundation.',
                website: `https://www.google.com/search?q=${id}+documentation`,
                nextStepId: 'intermediate'
            },
            {
                id: 'intermediate',
                title: 'Intermediate Topics',
                description: 'Deeper dive.',
                whyImportant: 'Expand your knowledge.',
                website: `https://www.google.com/search?q=${id}+intermediate+tutorial`,
                nextStepId: 'advanced'
            },
            {
                id: 'advanced',
                title: 'Advanced Concepts',
                description: 'Mastery levels.',
                whyImportant: 'Become an expert.',
                website: `https://www.google.com/search?q=${id}+advanced+concepts`,
                nextStepId: 'best-practices'
            },
            {
                id: 'best-practices',
                title: 'Best Practices',
                description: 'Do it right.',
                whyImportant: 'Write clean, maintainable code.',
                website: `https://www.google.com/search?q=${id}+best+practices`,
                nextStepId: 'projects'
            },
            {
                id: 'projects',
                title: 'Build Projects',
                description: 'Practical application.',
                whyImportant: 'Theory is nothing without practice.',
                website: `https://github.com/topics/${id}`,
                nextStepId: null
            }
        ]
    };
};

const definedRoadmaps = {
    frontend: frontendRoadmap,
    backend: backendRoadmap,
    fullstack: fullstackRoadmap,
    'data-analyst': dataAnalystRoadmap,
    'data-engineer': dataEngineerRoadmap,
    'ai-engineer': aiEngineerRoadmap,
    'ai-data-scientist': aiDataScientistRoadmap,
    'ai-agents': aiAgentsRoadmap,
    'ai-red-teaming': aiRedTeamingRoadmap,
    'bi-analyst': biAnalystRoadmap,
    'mlops': mlopsRoadmap,
    android: androidRoadmap,
    ios: iosRoadmap,
    blockchain: blockchainRoadmap,
    'cyber-security': cyberSecurityRoadmap,
    'game-developer': gameDeveloperRoadmap,
    'machine-learning': machineLearningRoadmap,
    'product-manager': productManagerRoadmap,
    'engineering-manager': engineeringManagerRoadmap,
    'postgresql': postgresqlRoadmap,
    'server-side-game-developer': serverSideGameDeveloperRoadmap,
    qa: qaRoadmap,
    'software-architect': softwareArchitectRoadmap,
    'technical-writer': technicalWriterRoadmap,
    'ux-design': uxDesignRoadmap,
    react: reactRoadmap,
    devops: devopsRoadmap,
    python: pythonRoadmap,
    java: javaRoadmap,
    sql: sqlRoadmap,
    'computer-science': computerScienceRoadmap,
    vue: vueRoadmap,
    angular: angularRoadmap,
    javascript: javascriptRoadmap,
    typescript: typescriptRoadmap,
    nodejs: nodejsRoadmap,
    'node.js': nodejsRoadmap,
    'system-design': systemDesignRoadmap,
    'aspnet-core': aspnetRoadmap,
    'asp.net': aspnetRoadmap,
    'api-design': apiDesignRoadmap,
    'spring-boot': springBootRoadmap,
    'flutter': flutterRoadmap,
    'cpp': cppRoadmap,
    'c++': cppRoadmap,
    'rust': rustRoadmap,
    'go': goRoadmap,
    'golang': goRoadmap,
    'software-architecture': softwareArchitectureRoadmap,
    'software-design': softwareArchitectureRoadmap,

    'software-design-architecture': softwareArchitectureRoadmap,
    'design-and-architecture': softwareArchitectureRoadmap,
    'code-review': codeReviewRoadmap,
    'devrel': devRelRoadmap,

    'graphql': graphqlRoadmap,
    'react-native': reactNativeRoadmap,
    'design-system': designSystemRoadmap,
    'prompt-engineering': promptEngineeringRoadmap,
    'mongodb': mongodbRoadmap,
    'mongo': mongodbRoadmap,
    'linux': linuxRoadmap,
    'docker': dockerRoadmap,
    'aws': awsRoadmap,
    'dsa': dsaRoadmap,
    'data-structures': dsaRoadmap,
    'algorithms': dsaRoadmap,
    'git': gitRoadmap,
    'github': gitRoadmap,
    'php': phpRoadmap,
    'next.js': nextjsRoadmap,
    'kotlin': kotlinRoadmap,
    'frontend-beginner': frontendBeginnerRoadmap,
    'backend-beginner': backendBeginnerRoadmap,
    'devops-beginner': devopsBeginnerRoadmap,
    'wordpress': wordpressRoadmap,
    'laravel': laravelRoadmap,
    'html': htmlRoadmap,
    'css': cssRoadmap,
    'swift': swiftRoadmap,
    'django': djangoRoadmap,
    'devsecops': devsecopsRoadmap,
    'kubernetes': kubernetesRoadmap,
    'cloudflare': cloudflareRoadmap,
    'redis': redisRoadmap,
    'elasticsearch': elasticsearchRoadmap,
    terraform: terraformRoadmap,
};

export const getRoadmapData = (id) => {
    if (!id) return null;

    if (definedRoadmaps[id]) {
        return definedRoadmaps[id];
    }

    return generateGenericRoadmap(id);
};

export const searchRoadmapId = (query) => {
    if (!query) return 'frontend';
    const normalized = query.toLowerCase().replace(/[^a-z0-9]/g, ''); 

    const keys = Object.keys(definedRoadmaps);

    const match = keys.find(k => {
        const normKey = k.replace(/[^a-z0-9]/g, '');
        return normKey === normalized || normKey.includes(normalized) || normalized.includes(normKey);
    });

    return match || query.toLowerCase().replace(/\s+/g, '-'); 
};
