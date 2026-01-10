export const gitRoadmap = {
    id: 'git',
    title: 'Git & GitHub',
    description: 'Step by step guide to mastering Version Control in 2025.',
    nodes: [
        {
            id: 'basics',
            title: 'Git Basics',
            description: 'Fundamental commands.',
            whyImportant: 'You cannot be a developer without knowing how to save your work properly.',
            subtopics: [
                'What is Version Control?',
                'git init (Initialize)',
                'git add (Staging)',
                'git commit (Saving)',
                'git status & git log'
            ],
            website: 'https://git-scm.com/book/en/v2/Getting-Started-Git-Basics',
            nextStepId: 'branching'
        },
        {
            id: 'branching',
            title: 'Branching & Merging',
            description: 'Working in parallel.',
            whyImportant: 'Isolating features and fixes from the main code.',
            subtopics: [
                'git branch (Create/List)',
                'git checkout / switch',
                'git merge',
                'Merge Conflicts (Resolving)',
                'Fast-forward vs Recursive'
            ],
            website: 'https://www.atlassian.com/git/tutorials/using-branches',
            nextStepId: 'remotes'
        },
        {
            id: 'remotes',
            title: 'Remotes (GitHub)',
            description: 'Syncing with the cloud.',
            whyImportant: 'Collaborating with others and backing up code.',
            subtopics: [
                'git remote add origin',
                'git push',
                'git pull (fetch + merge)',
                'git clone',
                'SSH vs HTTPS'
            ],
            website: 'https://docs.github.com/en/get-started/getting-started-with-git',
            nextStepId: 'collaboration'
        },
        {
            id: 'collaboration',
            title: 'Collaboration Workflow',
            description: 'Working in a team.',
            whyImportant: 'Pull Requests are the standard for code review.',
            subtopics: [
                'Forking a Repository',
                'Pull Requests (PRs)',
                'Code Reviews',
                'Issues & Labeling',
                'Git Flow / Trunk Based Development'
            ],
            website: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests',
            nextStepId: 'undoing'
        },
        {
            id: 'undoing',
            title: 'Undoing Changes',
            description: 'Fixing mistakes.',
            whyImportant: 'We all mess up. Knowing how to revert safely is a superpower.',
            subtopics: [
                'git checkout -- <file> (Discard changes)',
                'git reset (Soft, Mixed, Hard)',
                'git revert (Safe undo)',
                'git stash (Save for later)',
                'git clean'
            ],
            website: 'https://www.atlassian.com/git/tutorials/undoing-changes',
            nextStepId: 'advanced'
        },
        {
            id: 'advanced',
            title: 'Advanced Git',
            description: 'Power user tools.',
            whyImportant: 'Keeping history clean and automating tasks.',
            subtopics: [
                'git rebase (Interactive)',
                'git cherry-pick',
                'git bisect (Debugging)',
                'git blame',
                'Git Hooks (pre-commit)'
            ],
            website: 'https://www.atlassian.com/git/tutorials/advanced-overview',
            nextStepId: 'github-actions'
        },
        {
            id: 'github-actions',
            title: 'GitHub Actions (CI/CD)',
            description: 'Automation.',
            whyImportant: 'Automate testing and deployment directly from GitHub.',
            subtopics: [
                'Workflow YAML Syntax',
                'Triggers (push, pull_request)',
                'Jobs & Steps',
                'Secrets & Environment Variables',
                'Marketplace Actions'
            ],
            website: 'https://docs.github.com/en/actions',
            nextStepId: null
        }
    ]
};
