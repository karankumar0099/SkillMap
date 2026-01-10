export const shellRoadmap = {
    id: 'shell',
    title: 'Shell / Bash',
    description: 'Command Line Interface mastery.',
    nodes: [
        {
            id: 'terminal-basics',
            title: 'Terminal Habits',
            description: 'Navigating the file system efficiently.',
            whyImportant: 'Speed up your workflow significantly.',
            subtopics: ['ls, cd, pwd', 'mkdir, touch, rm', 'cp, mv', 'man pages'],
            website: 'https://ubuntu.com/tutorials/command-line-for-beginners',
            nextStepId: 'streams'
        },
        {
            id: 'streams',
            title: 'Streams & Pipes',
            description: 'Connecting inputs and outputs.',
            whyImportant: 'The power of Unix - chaining small tools together.',
            subtopics: ['stdin, stdout, stderr', 'Piping (|)', 'Redirection (>, >>, <)'],
            website: 'https://www.gnu.org/software/bash/manual/html_node/Redirections.html',
            nextStepId: 'scripting'
        },
        {
            id: 'scripting',
            title: 'Bash Scripting',
            description: 'Writing scripts to automate tasks.',
            whyImportant: 'Automate repetitive tasks like deployment or backups.',
            subtopics: ['Variables', 'Conditionals (if/else)', 'Loops', 'Functions', 'Shebang'],
            website: 'https://devhints.io/bash',
            nextStepId: 'power-tools'
        },
        {
            id: 'power-tools',
            title: 'Power Tools',
            description: 'Advanced text processing.',
            whyImportant: 'Manipulate data directly in the terminal.',
            subtopics: ['grep', 'sed', 'awk', 'find', 'curl'],
            website: 'https://www.thegeekstuff.com/2010/12/50-linux-commands/',
            nextStepId: null
        }
    ]
};
