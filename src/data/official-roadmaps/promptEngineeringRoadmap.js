export const promptEngineeringRoadmap = {
    id: 'prompt-engineering',
    title: 'Prompt Engineering',
    description: 'Step by step guide to learning Prompt Engineering in 2025.',
    nodes: [
        {
            id: 'intro',
            title: 'Introduction to LLMs',
            description: 'Understanding the engine behind the magic.',
            whyImportant: 'You must know how Large Language Models work to control them effectively.',
            subtopics: [
                'How LLMs Work (Next Token Prediction)',
                'What is a Prompt?',
                'Tokens vs Words',
                'Context Window'
            ],
            website: 'https://platform.openai.com/docs/introduction',
            nextStepId: 'configuration'
        },
        {
            id: 'configuration',
            title: 'LLM Configuration',
            description: 'Controlling the output randomness and length.',
            whyImportant: 'Parameters drastically change the model behavior.',
            subtopics: [
                'Temperature (Creativity vs Determinism)',
                'Top-P & Top-K (Sampling)',
                'Max Tokens',
                'Stop Sequences',
                'Frequency & Presence Penalties'
            ],
            website: 'https://platform.openai.com/docs/api-reference/chat/create',
            nextStepId: 'basic-techniques'
        },
        {
            id: 'basic-techniques',
            title: 'Basic Prompting Techniques',
            description: 'Fundamental strategies for better results.',
            whyImportant: 'Simple changes can yield massively better responses.',
            subtopics: [
                'Zero-Shot Prompting',
                'Few-Shot Prompting (Providing Examples)',
                'Role Prompting (Persona)',
                'Instruction Formatting'
            ],
            website: 'https://www.promptingguide.ai/techniques/fewshot',
            nextStepId: 'advanced-techniques'
        },
        {
            id: 'advanced-techniques',
            title: 'Advanced Reasoning',
            description: 'Helping the model think.',
            whyImportant: 'Necessary for complex logical or mathematical tasks.',
            subtopics: [
                'Chain of Thought (CoT)',
                'Zero-Shot CoT ("Let\'s think step by step")',
                'Self-Consistency',
                'Tree of Thoughts (ToT)',
                'ReAct (Reasoning + Acting)'
            ],
            website: 'https://www.promptingguide.ai/techniques/cot',
            nextStepId: 'structure'
        },
        {
            id: 'structure',
            title: 'Structuring Prompts',
            description: 'Formatting inputs for reliability.',
            whyImportant: 'LLMs parse structured data (JSON/Markdown) better than block text.',
            subtopics: [
                'Delimiters (Triple Quotes, XML tags)',
                'Structured Output (JSON Mode)',
                'System vs User Messages',
                'Modular Prompting'
            ],
            website: 'https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/advanced-prompt-engineering',
            nextStepId: 'rag'
        },
        {
            id: 'rag',
            title: 'RAG & Context',
            description: 'Retrieval Augmented Generation.',
            whyImportant: 'Overcoming hallucination and knowledge cutoffs.',
            subtopics: [
                'What is RAG?',
                'Vector Databases',
                'Embeddings',
                'Grounding Responses'
            ],
            website: 'https://aws.amazon.com/what-is/rag/',
            nextStepId: 'reliability'
        },
        {
            id: 'reliability',
            title: 'Reliability & Security',
            description: 'Making prompts robust.',
            whyImportant: 'Protecting against injection and ensuring consistent quality.',
            subtopics: [
                'Prompt Injection / Jailbreaking',
                'Prompt Leaking',
                'Hallucination Mitigation',
                'Prompt Ensembling',
                'Self-Evaluation'
            ],
            website: 'https://portswigger.net/web-security/llm-attacks',
            nextStepId: 'automation'
        },
        {
            id: 'automation',
            title: 'Automatic Prompt Engineering',
            description: 'Using AI to write AI prompts.',
            whyImportant: 'Scaling prompt optimization.',
            subtopics: [
                'APE (Automatic Prompt Engineer)',
                'DSPy (Declarative Self-improving Language Programs)',
                'Prompt Optimization Frameworks'
            ],
            website: 'https://github.com/stanfordnlp/dspy',
            nextStepId: null
        }
    ]
};
