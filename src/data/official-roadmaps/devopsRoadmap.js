export const devopsRoadmap = {
    id: 'devops',
    title: 'DevOps Roadmap',
    description: 'Step by step guide to becoming a DevOps Engineer in 2024.',
    nodes: [
        {
            id: 'language',
            title: 'Learn a Language',
            description: 'Python, Go, or Node.js.',
            whyImportant: 'You need a scripting language for automation and glue code. Python and Go are industry standards.',
            website: 'https://www.python.org/about/gettingstarted/',
            nextStepId: 'os',
            subtopics: ['Python', 'Go', 'Bash Scripting', 'Node.js']
        },
        {
            id: 'os',
            title: 'Operating Systems',
            description: 'Linux & Terminal Mastery.',
            whyImportant: 'Servers run on Linux. You must be comfortable with the command line, permissions, and process management.',
            website: 'https://linuxcommand.org/',
            nextStepId: 'vcs',
            subtopics: ['Ubuntu/Debian', 'CentOS/RHEL', 'Shell Commands', 'Vim/Nano']
        },
        {
            id: 'vcs',
            title: 'Version Control',
            description: 'Git & Git Hosting.',
            whyImportant: 'Infrastructure is now code. You need to manage it with version control systems like Git.',
            website: 'https://git-scm.com/doc',
            nextStepId: 'networking',
            subtopics: ['Git', 'GitHub', 'GitLab', 'Branching Models']
        },
        {
            id: 'networking',
            title: 'Networking & Protocols',
            description: 'DNS, HTTP/S, SSH, Firewalls.',
            whyImportant: 'Debugging connection issues is 50% of the job. Understand the OSI model and standard protocols.',
            website: 'https://roadmap.sh/guides/dns-in-one-picture',
            nextStepId: 'containers',
            subtopics: ['DNS', 'HTTP vs HTTPS', 'SSH', 'SSL/TLS', 'Load Balancing']
        },
        {
            id: 'containers',
            title: 'Containers',
            description: 'Docker.',
            whyImportant: 'Containers provide consistent environments across development and production.',
            website: 'https://www.docker.com/get-started/',
            nextStepId: 'orchestration',
            subtopics: ['Docker Engine', 'Docker Compose', 'Container Registries']
        },
        {
            id: 'orchestration',
            title: 'Orchestration',
            description: 'Kubernetes (K8s).',
            whyImportant: 'The standard for managing containerized applications at scale.',
            website: 'https://kubernetes.io/docs/home/',
            nextStepId: 'cloud',
            subtopics: ['Pods & Nodes', 'Deployments', 'Services', 'Helm Charts']
        },
        {
            id: 'cloud',
            title: 'Cloud Providers',
            description: 'AWS, Azure, or GCP.',
            whyImportant: 'Most modern infrastructure is cloud-based. Master at least one major provider.',
            website: 'https://aws.amazon.com/getting-started/',
            nextStepId: 'iac',
            subtopics: ['AWS (EC2, S3, VPC)', 'Azure', 'Google Cloud', 'IAM']
        },
        {
            id: 'iac',
            title: 'Infrastructure as Code',
            description: 'Terraform & Ansible.',
            whyImportant: 'Provision and configure infrastructure automatically and consistently.',
            website: 'https://www.terraform.io/',
            nextStepId: 'cicd',
            subtopics: ['Terraform', 'Ansible', 'CloudFormation', 'Pulumi']
        },
        {
            id: 'cicd',
            title: 'CI/CD Pipelines',
            description: 'Jenkins, GitHub Actions, GitLab CI.',
            whyImportant: 'Automate the integration and deployment process to release software faster.',
            website: 'https://docs.github.com/en/actions',
            nextStepId: 'monitoring',
            subtopics: ['Jenkins', 'GitHub Actions', 'ArgoCD', 'Pipeline Concepts']
        },
        {
            id: 'monitoring',
            title: 'Monitoring & Observability',
            description: 'Prometheus, Grafana, ELK.',
            whyImportant: 'You can\'t fix what you can\'t see. specialized tools for logs, metrics, and tracing.',
            website: 'https://prometheus.io/',
            nextStepId: null,
            subtopics: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog']
        }
    ]
};
