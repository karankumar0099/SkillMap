export const dsaRoadmap = {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    description: 'Step by step guide to mastering DSA in 2025.',
    nodes: [
        {
            id: 'basics',
            title: 'Prerequisites',
            description: 'Pick a language and master the syntax.',
            whyImportant: 'You cannot implement algorithms without knowing a programming language fluently.',
            subtopics: [
                'Choose: C++, Java, or Python',
                'Control Structures (Loops, If-Else)',
                'Functions & Recursion Basics',
                'Pointers / References'
            ],
            website: 'https://leetcode.com/explore/learn/',
            nextStepId: 'complexity'
        },
        {
            id: 'complexity',
            title: 'Algorithmic Complexity',
            description: 'Measuring code efficiency.',
            whyImportant: 'Big O notation tells you if your code will time out on large inputs.',
            subtopics: [
                'Time vs Space Complexity',
                'Big O Notation (O(1), O(n), O(log n))',
                'Best, Average, and Worst Case',
                'Recursion Analysis (Master Theorem)'
            ],
            website: 'https://www.bigocheatsheet.com/',
            nextStepId: 'basic-ds'
        },
        {
            id: 'basic-ds',
            title: 'Basic Data Structures',
            description: 'The building blocks.',
            whyImportant: 'Choosing the right structure simplifies the problem.',
            subtopics: [
                'Arrays (Dynamic vs Static)',
                'Linked Lists (Singly, Doubly)',
                'Stacks (LIFO)',
                'Queues (FIFO)',
                'Hash Tables (Maps/Sets) - CRITICAL'
            ],
            website: 'https://www.geeksforgeeks.org/data-structures/',
            nextStepId: 'sorting-searching'
        },
        {
            id: 'sorting-searching',
            title: 'Sorting & Searching',
            description: 'Organizing and finding data.',
            whyImportant: 'Fundamental operations used inside complex algorithms.',
            subtopics: [
                'Binary Search (Important!)',
                'Merge Sort',
                'Quick Sort',
                'Heap Sort',
                'Two Pointers Technique'
            ],
            website: 'https://visualgo.net/en/sorting',
            nextStepId: 'trees'
        },
        {
            id: 'trees',
            title: 'Trees & Heaps',
            description: 'Hierarchical data.',
            whyImportant: 'Used in databases, filesystems, and priority queues.',
            subtopics: [
                'Binary Trees & Traversals (In/Pre/Post-order)',
                'Binary Search Trees (BST)',
                'Heaps (Priority Queues)',
                'Tries (Prefix Trees)',
                'Balanced Trees (AVL/Red-Black - Theory)'
            ],
            website: 'https://visualgo.net/en/bst',
            nextStepId: 'graphs'
        },
        {
            id: 'graphs',
            title: 'Graphs',
            description: 'Networks and connections.',
            whyImportant: 'Social networks, maps, and routing problems.',
            subtopics: [
                'Representation (Adjacency Matrix/List)',
                'BFS (Breadth-First Search)',
                'DFS (Depth-First Search)',
                'Shortest Path (Dijkstra, Bellman-Ford)',
                'Minimum Spanning Tree (Prim, Kruskal)',
                'Topological Sort'
            ],
            website: 'https://visualgo.net/en/graphds',
            nextStepId: 'dp'
        },
        {
            id: 'dp',
            title: 'Dynamic Programming',
            description: 'Optimization over plain recursion.',
            whyImportant: 'Solves complex optimization problems by caching sub-results.',
            subtopics: [
                'Memoization (Top-Down)',
                'Tabulation (Bottom-Up)',
                'Knapsack Problem',
                'Longest Common Subsequence',
                'Climbing Stairs / Grid Paths'
            ],
            website: 'https://leetcode.com/explore/learn/card/dynamic-programming/',
            nextStepId: 'advanced'
        },
        {
            id: 'advanced',
            title: 'Advanced Techniques',
            description: 'Tools for hard problems.',
            whyImportant: 'Required for competitive programming and high-level interviews.',
            subtopics: [
                'Backtracking (N-Queens, Sudoku)',
                'Greedy Algorithms',
                'Sliding Window',
                'Bit Manipulation',
                'Disjoint Set Union (Union-Find)'
            ],
            website: 'https://cp-algorithms.com/',
            nextStepId: null
        }
    ]
};
