export const blockchainRoadmap = {
    id: 'blockchain',
    title: 'Blockchain Developer',
    description: 'Step by step guide to becoming a Blockchain Developer in 2024.',
    nodes: [
        {
            id: 'intro',
            title: 'Introduction to Blockchain',
            description: 'The foundation of Web3.',
            whyImportant: 'Understand how a distributed ledger works, hashing (SHA-256), and decentralization.',
            website: 'https://andersbrownworth.com/blockchain/',
            nextStepId: 'consensus',
            subtopics: ['Distributed Ledger', 'Hashing', 'Blocks & Chains', 'Decentralization']
        },
        {
            id: 'consensus',
            title: 'Consensus Mechanisms',
            description: 'How nodes agree.',
            whyImportant: 'How a decentralized network agrees on the state of truth without a central authority.',
            website: 'https://ethereum.org/en/developers/docs/consensus-mechanisms/',
            nextStepId: 'smart-contracts',
            subtopics: ['Proof of Work (PoW)', 'Proof of Stake (PoS)', 'Validators', 'Mining']
        },
        {
            id: 'smart-contracts',
            title: 'Smart Contracts (Solidity)',
            description: 'Programming the blockchain.',
            whyImportant: 'Solidity is the primary language for Ethereum and EVM-compatible chains. Code is law.',
            website: 'https://soliditylang.org/',
            nextStepId: 'devtools',
            subtopics: ['Solidity', 'EVM (Ethereum Virtual Machine)', 'Gas Fees', 'ERC Standards (ERC-20, ERC-721)']
        },
        {
            id: 'devtools',
            title: 'Development Tools',
            description: 'Remix, Hardhat, Foundry.',
            whyImportant: 'You need tools to compile, test, and deploy your contracts.',
            website: 'https://hardhat.org/',
            nextStepId: 'frontend-integration',
            subtopics: ['Remix IDE', 'Hardhat', 'Foundry', 'Ganache']
        },
        {
            id: 'frontend-integration',
            title: 'Frontend Integration (Web3)',
            description: 'Connecting dApps to users.',
            whyImportant: 'Allows users to interact with your smart contracts using their wallets (like MetaMask).',
            website: 'https://docs.ethers.org/v5/',
            nextStepId: 'security',
            subtopics: ['Ethers.js', 'Web3.js', 'MetaMask', 'WalletConnect']
        },
        {
            id: 'security',
            title: 'Smart Contract Security',
            description: 'Auditing and Safety.',
            whyImportant: 'Hacks in crypto are irreversible. You must write secure code.',
            website: 'https://consensys.github.io/smart-contract-best-practices/',
            nextStepId: 'scaling',
            subtopics: ['Reentrancy Attacks', 'Overflow/Underflow', 'Auditing', 'OpenZeppelin']
        },
        {
            id: 'scaling',
            title: 'Scaling Solutions (L2)',
            description: 'Making blockchains faster.',
            whyImportant: 'Ethereum Mainnet is slow and expensive. Layer 2 solutions are the standard for scaling.',
            website: 'https://ethereum.org/en/layer-2/',
            nextStepId: null,
            subtopics: ['Polygon', 'Optimistic Rollups', 'ZK Rollups', 'Sidechains']
        }
    ]
};
