export const aiAgentsRoadmap = {
    id: 'ai-agents',
    title: 'AI Agents',
    description: 'Building autonomous systems powered by LLMs.',
    nodes: [
        {
            id: 'agents-basics',
            title: 'Agent Fundamentals',
            description: 'What makes an agent different from a chatbot?',
            whyImportant: 'Agents have agency—they can take actions.',
            subtopics: ['ReAct Pattern', 'Tool Use', 'Memory (Short/Long term)'],
            website: 'https://lilianweng.github.io/posts/2023-06-23-agent/',
            nextStepId: 'frameworks'
        },
        {
            id: 'frameworks',
            title: 'Frameworks',
            description: 'Tools for building agents.',
            whyImportant: 'Don\'t reinvent functionality that already exists.',
            subtopics: ['LangChain', 'AutoGPT', 'BabyAGI', 'CrewAI'],
            website: 'https://www.langchain.com/',
            nextStepId: 'tools-planning'
        },
        {
            id: 'tools-planning',
            title: 'Planning & Tooling',
            description: 'Giving your agent abilities.',
            whyImportant: 'Agents need to interact with the world (Search, Calculator, APIs).',
            subtopics: ['Function Calling', 'Decomposition', 'Reflection'],
            website: 'https://platform.openai.com/docs/guides/function-calling',
            nextStepId: 'multi-agent'
        },
        {
            id: 'multi-agent',
            title: 'Multi-Agent Systems',
            description: 'Orchestrating teams of agents.',
            whyImportant: 'Specialized agents working together perform better than one generalist.',
            subtopics: ['Collaboration', 'Hiring/Manager patterns', 'Shared Memory'],
            website: 'https://microsoft.github.io/autogen/',
            nextStepId: null
        }
    ]
};
