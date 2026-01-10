export const devsecopsRoadmap = {
    id: 'devsecops',
    title: 'DevSecOps',
    description: 'Integrating security practices into the DevOps process.',
    nodes: [
        {
            id: 'devsecops-basics',
            title: 'DevSecOps Basics',
            description: 'Shift Left Security principle.',
            whyImportant: 'Security should be part of the development process, not an afterthought.',
            subtopics: ['Shift Left', 'Security as Code', 'Threat Modeling'],
            website: 'https://www.redhat.com/en/topics/devops/what-is-devsecops',
            nextStepId: 'sast-dast'
        },
        {
            id: 'sast-dast',
            title: 'SAST & DAST',
            description: 'Static and Dynamic Application Security Testing.',
            whyImportant: 'Automated security scanning finds vulnerabilities early.',
            subtopics: ['SonarQube (SAST)', 'OWASP ZAP (DAST)', 'Dependency Scanning'],
            website: 'https://owasp.org/www-community/Source_Code_Analysis_Tools',
            nextStepId: 'container-security'
        },
        {
            id: 'container-security',
            title: 'Container Security',
            description: 'Securing Docker and Kubernetes.',
            whyImportant: 'Containers introduce new attack surfaces.',
            subtopics: ['Image Scanning', 'Runtime Security', 'Kubernetes Security (RBAC, Network Policies)'],
            website: 'https://sysdig.com/learn-cloud-native/container-security/what-is-container-security/',
            nextStepId: 'compliance'
        },
        {
            id: 'compliance',
            title: 'Compliance as Code',
            description: 'Automating compliance checks.',
            whyImportant: 'Ensure infrastructure meets regulatory standards automatically.',
            subtopics: ['Open Policy Agent (OPA)', 'InSpec', 'Cloud Security Posture Management (CSPM)'],
            website: 'https://www.hashicorp.com/resources/what-is-compliance-as-code',
            nextStepId: null
        }
    ]
};
