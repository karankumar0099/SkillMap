export const terraformRoadmap = {
    id: 'terraform',
    title: 'Terraform',
    description: 'Infrastructure as Code (IaC).',
    nodes: [
        {
            id: 'tf-basics',
            title: 'HCL Basics',
            description: 'HashiCorp Configuration Language.',
            whyImportant: 'The syntax used to define infrastructure.',
            subtopics: ['Providers', 'Resources', 'Variables', 'Outputs'],
            website: 'https://developer.hashicorp.com/terraform/intro',
            nextStepId: 'tf-state'
        },
        {
            id: 'tf-state',
            title: 'State Management',
            description: 'Tracking the state of your infrastructure.',
            whyImportant: 'Terraform needs to know what is deployed to compare changes.',
            subtopics: ['terraform.tfstate', 'Remote State (S3)', 'State Locking', 'Backends'],
            website: 'https://developer.hashicorp.com/terraform/language/state',
            nextStepId: 'tf-modules'
        },
        {
            id: 'tf-modules',
            title: 'Modules',
            description: 'Reusable infrastructure components.',
            whyImportant: 'Don\'t repeat yourself (DRY) in infrastructure code.',
            subtopics: ['Module Structure', 'Calling Modules', 'Registry'],
            website: 'https://developer.hashicorp.com/terraform/language/modules',
            nextStepId: 'tf-commands'
        },
        {
            id: 'tf-commands',
            title: 'CLI Workflow',
            description: 'The lifecycle commands.',
            whyImportant: 'How to actually apply your changes.',
            subtopics: ['init', 'plan', 'apply', 'destroy'],
            website: 'https://developer.hashicorp.com/terraform/cli/commands',
            nextStepId: null
        }
    ]
};
