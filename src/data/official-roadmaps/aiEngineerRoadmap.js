export const aiEngineerRoadmap = {
    id: 'ai-engineer',
    title: 'AI Engineer',
    description: 'Step by step guide to becoming an AI Engineer in 2024.',
    nodes: [
        {
            id: 'intro',
            title: 'Introduction to AI Engineering',
            description: 'Understanding the role of an AI Engineer.',
            whyImportant: 'Bridge the gap between traditional software engineering and machine learning.',
            website: 'https://huggingface.co/learn',
            nextStepId: 'pretrained-models',
            subtopics: ['LLMs vs Traditional ML', 'Prompt Engineering', 'AI Agents', 'Common Terminology']
        },
        {
            id: 'pretrained-models',
            title: 'Pre-trained Models',
            description: 'Leveraging existing powerful models.',
            whyImportant: 'You rarely train from scratch. Learn to use GPT-4, Claude, Gemini, and LLaMA.',
            website: 'https://huggingface.co/models',
            nextStepId: 'openai-api',
            subtopics: ['Transformers', 'Hugging Face Hub', 'Inference vs Training', 'Model Context Length']
        },
        {
            id: 'openai-api',
            title: 'Proprietary APIs (OpenAI)',
            description: 'Building apps with GPT-4.',
            whyImportant: 'The easiest way to build AI apps is via APIs. Master Chat Completions, Function Calling, and Fine-tuning.',
            website: 'https://platform.openai.com/docs/introduction',
            nextStepId: 'opensource-ai',
            subtopics: ['Chat Completions API', 'Earnings/Tokens', 'Function Calling', 'Fine-tuning']
        },
        {
            id: 'opensource-ai',
            title: 'Open Source AI',
            description: 'Hosting your own models.',
            whyImportant: 'For privacy, control, and cost. Learn to run models locally with Ollama or vLLM.',
            website: 'https://ollama.com/',
            nextStepId: 'embeddings',
            subtopics: ['Llama 3', 'Mistral', 'Ollama', 'Hugging Face Transformers', 'Quantization']
        },
        {
            id: 'embeddings',
            title: 'Embeddings',
            description: 'Representing text as numbers.',
            whyImportant: 'The core of semantic search and RAG.',
            website: 'https://platform.openai.com/docs/guides/embeddings',
            nextStepId: 'vector-dbs',
            subtopics: ['Semantic Search', 'Cosine Similarity', 'Text-to-Vector', 'Sentence Transformers']
        },
        {
            id: 'vector-dbs',
            title: 'Vector Databases',
            description: 'Storing high-dimensional data.',
            whyImportant: 'Standard databases can\'t handle semantic search efficiently. You need optimized vector stores.',
            website: 'https://www.pinecone.io/learn/vector-database/',
            nextStepId: 'rag',
            subtopics: ['Pinecone', 'ChromaDB', 'Weaviate', 'pgvector']
        },
        {
            id: 'rag',
            title: 'RAG (Retrieval Augmented Generation)',
            description: 'Chat with your data.',
            whyImportant: 'Overcome LLM hallucinations and knowledge cutoffs by providing relevant context.',
            website: 'https://python.langchain.com/docs/use_cases/question_answering/',
            nextStepId: 'agents',
            subtopics: ['Chunking Strategies', 'Retrieval', 'Context Injection', 'Hybrid Search']
        },
        {
            id: 'agents',
            title: 'AI Agents & Frameworks',
            description: 'Autonomous AI (LangChain, LlamaIndex).',
            whyImportant: 'Build systems that can think and act, not just talk. Chain multiple steps together.',
            website: 'https://www.langchain.com/',
            nextStepId: 'deployment',
            subtopics: ['LangChain', 'LlamaIndex', 'AutoGPT', 'ReAct Pattern']
        },
        {
            id: 'deployment',
            title: 'Deployment & MLOps',
            description: 'Serving AI apps to production.',
            whyImportant: 'Scalable inference and monitoring for AI applications.',
            website: 'https://modal.com/',
            nextStepId: null,
            subtopics: ['Vercel AI SDK', 'Streamlit', 'Modal', 'Docker for ML']
        }
    ]
};
