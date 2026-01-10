export const cyberSecurityRoadmap = {
    id: 'cyber-security',
    title: 'Cyber Security Expert',
    description: 'Step by step guide to becoming a Cyber Security Expert in 2024.',
    nodes: [
        {
            id: 'fundamentals',
            title: 'IT Fundamentals',
            description: 'Hardware, OS, and Networking basics.',
            whyImportant: 'You cannot secure a system you do not understand.',
            website: 'https://www.comptia.org/certifications/a',
            nextStepId: 'networking',
            subtopics: ['Computer Components', 'Operating Systems (Linux/Windows)', 'Virtualization']
        },
        {
            id: 'networking',
            title: 'Networking',
            description: 'How the internet works.',
            whyImportant: '99% of attacks happen over the network. Master TCP/IP, DNS, and OSI Model.',
            website: 'https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/networking-basics.html',
            nextStepId: 'security-basics',
            subtopics: ['OSI Model', 'TCP/IP', 'DNS/HTTP/HTTPS', 'Subnetting', 'Firewalls']
        },
        {
            id: 'security-basics',
            title: 'Security Foundations',
            description: 'CIA Triad.',
            whyImportant: 'Confidentiality, Integrity, and Availability are the pillars of security.',
            website: 'https://www.coursera.org/learn/cyber-security-basics',
            nextStepId: 'systems-admin',
            subtopics: ['CIA Triad', 'Authentication vs Authorization', 'Cryptography Basics', 'Access Control']
        },
        {
            id: 'systems-admin',
            title: 'Systems Administration',
            description: 'Linux & Windows Admin.',
            whyImportant: 'Learn to configure and harden operating systems.',
            website: 'https://linuxjourney.com/',
            nextStepId: 'scripting',
            subtopics: ['Linux CLI', 'Windows Registry', 'Active Directory', 'System Hardening']
        },
        {
            id: 'scripting',
            title: 'Scripting & Programming',
            description: 'Automate tasks.',
            whyImportant: 'Python and Bash are essential for writing tools and exploits.',
            website: 'https://portswigger.net/burp/documentation/desktop/tools/intruder/payloads',
            nextStepId: 'penetration-testing',
            subtopics: ['Python', 'Bash', 'PowerShell', 'Go']
        },
        {
            id: 'penetration-testing',
            title: 'Penetration Testing (Red Team)',
            description: 'Ethical Hacking.',
            whyImportant: 'Learn how to break into systems to find vulnerabilities.',
            website: 'https://www.hackthebox.com/',
            nextStepId: 'forensics',
            subtopics: ['Reconnaissance', 'Scanning (Nmap)', 'Exploitation (Metasploit)', 'Web App Security (OWASP Top 10)']
        },
        {
            id: 'forensics',
            title: 'Forensics & Defense (Blue Team)',
            description: 'Incident Response.',
            whyImportant: 'Detecting attacks and analyzing evidence after a breach.',
            website: 'https://www.sans.org/cyber-security-courses/digital-forensics-incident-response/',
            nextStepId: 'cloud-security',
            subtopics: ['SIEM (Splunk)', 'Log Analysis', 'Malware Analysis', 'Wireshark']
        },
        {
            id: 'cloud-security',
            title: 'Cloud Security',
            description: 'Securing AWS/Azure.',
            whyImportant: 'The world is moving to the cloud. Understand permissions and shared responsibility.',
            website: 'https://aws.amazon.com/security/',
            nextStepId: 'certifications',
            subtopics: ['IAM', 'CloudTrail', 'VPC Security', 'Container Security']
        },
        {
            id: 'certifications',
            title: 'Certifications',
            description: 'Validate your skills.',
            whyImportant: 'Certifications are highly valued in the Cyber Security industry.',
            website: 'https://www.isc2.org/Certifications/CISSP',
            nextStepId: null,
            subtopics: ['CompTIA Security+', 'OSCP (Offensive)', 'CISSP (Management)', 'CEH']
        }
    ]
};
