export const linuxRoadmap = {
    id: 'linux',
    title: 'Linux Administrator',
    description: 'Step by step guide to mastering Linux in 2025.',
    nodes: [
        {
            id: 'basics',
            title: 'Navigation & Basics',
            description: 'Getting around the command line.',
            whyImportant: 'The CLI is the primary way to interact with Linux servers.',
            subtopics: [
                'Basic Commands (ls, cd, pwd, man)',
                'File Operations (cp, mv, rm, mkdir, touch)',
                'Directory Hierarchy (/, /home, /etc, /var)',
                'Users (sudo, su)'
            ],
            website: 'https://ubuntu.com/tutorials/command-line-for-beginners',
            nextStepId: 'editing'
        },
        {
            id: 'editing',
            title: 'Editing Files',
            description: 'Terminal-based text editors.',
            whyImportant: 'You wont always have a GUI. You need VIM or Nano.',
            subtopics: [
                'Nano (Beginner friendly)',
                'Vim (Powerful, modal)',
                'cat, less, head, tail'
            ],
            website: 'https://www.openvim.com/',
            nextStepId: 'permissions'
        },
        {
            id: 'permissions',
            title: 'File Permissions',
            description: 'Security at the file level.',
            whyImportant: 'Linux is a multi-user OS; security is built-in.',
            subtopics: [
                'chmod (Change Mode - 755, +x)',
                'chown (Change Owner)',
                'Read, Write, Execute (rwx)',
                'Soft Links vs Hard Links (ln)'
            ],
            website: 'https://linuxcommand.org/lc3_lts0090.php',
            nextStepId: 'shell-basics'
        },
        {
            id: 'shell-basics',
            title: 'Shell & Redirects',
            description: 'Controlling input and output.',
            whyImportant: 'The power of Linux comes from chaining small tools together.',
            subtopics: [
                'Standard Streams (stdin, stdout, stderr)',
                'Pipes (|)',
                'Redirection (>, >>, 2>)',
                'Environment Variables ($PATH, export)'
            ],
            website: 'https://www.gnu.org/software/bash/manual/html_node/Redirections.html',
            nextStepId: 'text-processing'
        },
        {
            id: 'text-processing',
            title: 'Text Processing',
            description: 'Manipulating text streams.',
            whyImportant: 'Logs and config files are text; knowing how to parse them is key.',
            subtopics: [
                'grep (Search)',
                'awk (Pattern scanning)',
                'sed (Stream Editor)',
                'cut, sort, uniq, wc',
                'find'
            ],
            website: 'https://www.geeksforgeeks.org/linux-commands-cheat-sheet/#text-processing',
            nextStepId: 'processes'
        },
        {
            id: 'processes',
            title: 'Process Management',
            description: 'Monitoring and controlling programs.',
            whyImportant: 'Managing system resources and unresponsive programs.',
            subtopics: [
                'top / htop',
                'ps (Process Status)',
                'kill / killall',
                'Background / Foreground (bg, fg, &)'
            ],
            website: 'https://www.digitalocean.com/community/tutorials/how-to-use-ps-kill-and-nice-to-manage-processes-in-linux',
            nextStepId: 'networking'
        },
        {
            id: 'networking',
            title: 'Networking',
            description: 'Connectivity and remote access.',
            whyImportant: 'Servers live on the network.',
            subtopics: [
                'SSH (Secure Shell)',
                'curl / wget',
                'ip / ifconfig',
                'netstat / ss',
                'DNS (nslookup, dig)'
            ],
            website: 'https://ubuntu.com/server/docs/network-configuration',
            nextStepId: 'system-management'
        },
        {
            id: 'system-management',
            title: 'System Management',
            description: 'Services and Packages.',
            whyImportant: 'Keeping the system running and up to date.',
            subtopics: [
                'systemd (systemctl)',
                'Package Managers (apt, yum, dnf)',
                'Cron Jobs (Scheduling)',
                'Logs (/var/log, journalctl)'
            ],
            website: 'https://www.freedesktop.org/wiki/Software/systemd/',
            nextStepId: 'shell-scripting'
        },
        {
            id: 'shell-scripting',
            title: 'Shell Scripting',
            description: 'Automating tasks.',
            whyImportant: 'If you do it twice, automate it.',
            subtopics: [
                'Bash Scripting Basics',
                'Shebang (#!/bin/bash)',
                'Variables & Loops',
                'Conditionals (if/else)'
            ],
            website: 'https://devhints.io/bash',
            nextStepId: null
        }
    ]
};
