export const gameDeveloperRoadmap = {
    id: 'game-developer',
    title: 'Game Developer',
    description: 'Step by step guide to becoming a Game Developer in 2024.',
    nodes: [
        {
            id: 'mathematics',
            title: 'Game Mathematics',
            description: 'The language of 3D space.',
            whyImportant: 'You need linear algebra to move objects in 3D space.',
            website: 'https://gamemath.com/',
            nextStepId: 'physics',
            subtopics: ['Vectors', 'Matrices', 'Quaternions', 'Dot/Cross Product']
        },
        {
            id: 'physics',
            title: 'Game Physics',
            description: 'Simulating reality.',
            whyImportant: 'Collision detection and rigid body dynamics make the world feel solid.',
            website: 'https://gafferongames.com/',
            nextStepId: 'languages',
            subtopics: ['Collision Detection', 'Rigid Body Dynamics', 'Kinematics', 'Raycasting']
        },
        {
            id: 'languages',
            title: 'Programming Languages',
            description: 'C++ and C#.',
            whyImportant: 'C++ is the industry standard (Unreal). C# is used in Unity.',
            website: 'https://isocpp.org/',
            nextStepId: 'engines',
            subtopics: ['C++ (Performance)', 'C# (Scripting)', 'Lua', 'Python']
        },
        {
            id: 'engines',
            title: 'Game Engines',
            description: 'Unity & Unreal.',
            whyImportant: 'Don\'t reinvent the wheel. Use an engine for rendering, physics, and audio.',
            website: 'https://unity.com/learn',
            nextStepId: 'graphics',
            subtopics: ['Unity', 'Unreal Engine', 'Godot', 'Custom Engines']
        },
        {
            id: 'graphics',
            title: 'Computer Graphics',
            description: 'Rendering pixels.',
            whyImportant: 'Understand how triangles turn into pixels on the screen.',
            website: 'https://learnopengl.com/',
            nextStepId: 'apis',
            subtopics: ['Rendering Pipeline', 'Shaders (GLSL/HLSL)', 'Lighting Models', 'Textures']
        },
        {
            id: 'apis',
            title: 'Graphics APIs',
            description: 'Talking to the GPU.',
            whyImportant: 'DirectX, OpenGL, and Vulkan are the bridges between CPU and GPU.',
            website: 'https://www.khronos.org/vulkan/',
            nextStepId: 'ai',
            subtopics: ['OpenGL', 'DirectX', 'Vulkan', 'Metal']
        },
        {
            id: 'ai',
            title: 'Game AI',
            description: 'Intelligent Agents.',
            whyImportant: 'Make NPCs smart enough to challenge the player.',
            website: 'https://www.gameaipro.com/',
            nextStepId: 'networking',
            subtopics: ['Pathfinding (A*)', 'Finite State Machines', 'Behavior Trees', 'NavMesh']
        },
        {
            id: 'networking',
            title: 'Multiplayer Networking',
            description: 'Client-Server Architecture.',
            whyImportant: 'Synchronizing game state across the internet is incredibly hard.',
            website: 'https://ithare.com/',
            nextStepId: null,
            subtopics: ['State Synchronization', 'Lag Compensation', 'Client-Side Prediction', 'UDP vs TCP']
        }
    ]
};
