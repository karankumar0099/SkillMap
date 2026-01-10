export const aiRedTeamingRoadmap = {
    id: 'ai-red-teaming',
    title: 'AI Red Teaming',
    description: 'Testing AI systems for vulnerabilities and bias.',
    nodes: [
        {
            id: 'red-team-basics',
            title: 'Basics of AI Red Teaming',
            description: 'Adversarial thinking applied to AI.',
            whyImportant: 'Ensure models are safe, robust, and aligned.',
            subtopics: ['Jailbreaking', 'Prompt Injection', 'Model Extraction'],
            website: 'https://huggingface.co/blog/red-teaming',
            nextStepId: 'adversarial-attacks'
        },
        {
            id: 'adversarial-attacks',
            title: 'Adversarial Attacks',
            description: 'Techniques to fool models.',
            whyImportant: 'Identify weaknesses before bad actors do.',
            subtopics: ['Token manipulation', 'Universal Adversarial Triggers', 'Poisoning'],
            website: 'https://arxiv.org/abs/2307.15043',
            nextStepId: 'evaluation'
        },
        {
            id: 'evaluation',
            title: 'Safety Evaluation',
            description: 'Measuring model safety.',
            whyImportant: 'Quantify risks related to toxicity, bias, and hallucination.',
            subtopics: ['Benchmarks (TruthfulQA, RealToxicityPrompts)', 'Human Evaluation'],
            website: 'https://www.anthropic.com/index/red-teaming-language-models-to-reduce-harms-methods-scaling-behaviors-and-lessons-learned',
            nextStepId: 'tools'
        },
        {
            id: 'tools',
            title: 'Tools & Frameworks',
            description: 'Automating the attack process.',
            whyImportant: 'Manual testing is not scalable.',
            subtopics: ['Garak', 'PyRIT', 'Inspect'],
            website: 'https://github.com/leondz/garak',
            nextStepId: null
        }
    ]
};
