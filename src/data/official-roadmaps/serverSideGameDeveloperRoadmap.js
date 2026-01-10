export const serverSideGameDeveloperRoadmap = {
    id: 'server-side-game-developer',
    title: 'Server Side Game Developer',
    description: 'Step by step guide to becoming a Server Side Game Developer in 2024.',
    nodes: [
        {
            id: 'networking-basics',
            title: 'Networking Basics',
            description: 'TCP vs UDP',
            whyImportant: 'Real-time games rely heavily on UDP for speed, while turn-based/strategy games might use TCP. Understanding the difference is crucial.',
            website: 'https://gafferongames.com/post/udp_vs_tcp/',
            nextStepId: 'languages',
            subtopics: ['TCP/IP Model', 'Reliable UDP', 'Packet Loss & Jitter', 'NAT Punch-through']
        },
        {
            id: 'languages',
            title: 'Programming Languages',
            description: 'Performance matters.',
            whyImportant: 'C++ is the standard for high-performance servers. Go and C# are also widely used.',
            website: 'https://golang.org/',
            nextStepId: 'socket-programming',
            subtopics: ['C++ (Unreal/Custom)', 'Go (Scalable services)', 'C# (Unity/ASP.NET)', 'Node.js/TypeScript (Web games)']
        },
        {
            id: 'socket-programming',
            title: 'Socket Programming',
            description: 'Communication pipelines.',
            whyImportant: 'You need to know how to send and receive data packets efficiently.',
            website: 'https://beej.us/guide/bgnet/',
            nextStepId: 'architecture',
            subtopics: ['WebSockets', 'Berkeley Sockets', 'Serialization (Protobuf/FlatBuffers)', 'Endianness']
        },
        {
            id: 'architecture',
            title: 'Server Architecture',
            description: 'How to structure the game world.',
            whyImportant: 'Decide who owns the truth: Authoritative Server or Peer-to-Peer.',
            website: 'https://developer.valvesoftware.com/wiki/Source_Multiplayer_Networking',
            nextStepId: 'databases',
            subtopics: ['Authoritative Server', 'Client-Side Prediction', 'Lag Compensation', 'Spatial Partitioning']
        },
        {
            id: 'databases',
            title: 'Databases & Persistence',
            description: 'Saving player data.',
            whyImportant: 'Player profiles, inventories, and leaderboards need reliable storage.',
            website: 'https://redis.io/',
            nextStepId: 'scaling',
            subtopics: ['Redis (Leaderboards/Session)', 'PostgreSQL (Player Data)', 'NoSQL (Game State/Logs)', 'CAP Theorem']
        },
        {
            id: 'scaling',
            title: 'Scalability & Infrastructure',
            description: 'Handling millions of players.',
            whyImportant: 'Games like Fortnite or WoW need massive infrastructure to handle concurrent players.',
            website: 'https://agones.dev/site/',
            nextStepId: 'security',
            subtopics: ['Load Balancing', 'Matchmaking Services', 'Docker & Kubernetes', 'Agones (K8s for Games)']
        },
        {
            id: 'security',
            title: 'Security & Anti-Cheat',
            description: 'Fair play.',
            whyImportant: 'Cheaters kill games. You must validate everything on the server.',
            website: 'https://www.youtube.com/watch?v=hO7gR8qR5Ag',
            nextStepId: null,
            subtopics: ['DDOS Mitigation', 'Server-Side Validation', 'Anti-Cheat Systems', 'Encryption (TLS/DTLS)']
        }
    ]
};
