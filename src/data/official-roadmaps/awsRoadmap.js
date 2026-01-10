export const awsRoadmap = {
    id: 'aws',
    title: 'AWS Cloud Engineer',
    description: 'Step by step guide to mastering Amazon Web Services in 2025.',
    nodes: [
        {
            id: 'cloud-basics',
            title: 'Cloud Fundamentals',
            description: 'Understanding the Cloud.',
            whyImportant: 'Before diving into AWS, understand what the cloud actually is.',
            subtopics: [
                'IaaS vs PaaS vs SaaS',
                'Public vs Private vs Hybrid Cloud',
                'AWS Global Infrastructure (Regions & Availability Zones)',
                'Shared Responsibility Model'
            ],
            website: 'https://aws.amazon.com/what-is-cloud-computing/',
            nextStepId: 'iam'
        },
        {
            id: 'iam',
            title: 'IAM (Identity & Access Management)',
            description: 'Security & Permissions.',
            whyImportant: 'The very first thing you configure. Never use the Root user for daily tasks.',
            subtopics: [
                'Users & Groups',
                'Roles (Service & Cross-account)',
                'Policies (JSON Permissions)',
                'MFA (Multi-Factor Authentication)'
            ],
            website: 'https://aws.amazon.com/iam/',
            nextStepId: 'vpc'
        },
        {
            id: 'vpc',
            title: 'VPC (Virtual Private Cloud)',
            description: 'Networking layer.',
            whyImportant: 'Network isolation and control is fundamental to security.',
            subtopics: [
                'CIDR Blocks & Subnets (Public vs Private)',
                'Route Tables',
                'Internet Gateways (IGW) & NAT Gateways',
                'Security Groups vs NACLs'
            ],
            website: 'https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html',
            nextStepId: 'compute'
        },
        {
            id: 'compute',
            title: 'Compute (EC2)',
            description: 'Virtual Servers.',
            whyImportant: 'The workhorse of AWS.',
            subtopics: [
                'Instance Types (T3, C5, M5, etc.)',
                'AMIs (Amazon Machine Images)',
                'EBS Volumes (Storage)',
                'User Data Scripts',
                'Key Pairs (SSH)'
            ],
            website: 'https://aws.amazon.com/ec2/',
            nextStepId: 'storage'
        },
        {
            id: 'storage',
            title: 'Storage (S3)',
            description: 'Object Storage.',
            whyImportant: 'Infinite storage for files, backups, and static websites.',
            subtopics: [
                'Buckets & Objects',
                'Storage Classes (Standard, Intelligent, Glacier)',
                'Lifecycle Policies',
                'Static Website Hosting'
            ],
            website: 'https://aws.amazon.com/s3/',
            nextStepId: 'databases'
        },
        {
            id: 'databases',
            title: 'Databases',
            description: 'Managed Data Stores.',
            whyImportant: 'Let AWS handle patching and backups.',
            subtopics: [
                'RDS (MySQL, Postgres)',
                'DynamoDB (NoSQL / Key-Value)',
                'ElastiCache (Redis / Memcached)',
                'Aurora (Serverless RDS)'
            ],
            website: 'https://aws.amazon.com/products/databases/',
            nextStepId: 'scaling'
        },
        {
            id: 'scaling',
            title: 'Load Balancing & Auto Scaling',
            description: 'High Availability.',
            whyImportant: 'Your app should survive server failures and traffic spikes.',
            subtopics: [
                'ELB (Elastic Load Balancer - ALB/NLB)',
                'Auto Scaling Groups (ASG)',
                'Target Groups',
                'Launch Templates'
            ],
            website: 'https://aws.amazon.com/autoscaling/',
            nextStepId: 'serverless'
        },
        {
            id: 'serverless',
            title: 'Serverless (Lambda)',
            description: 'Function as a Service.',
            whyImportant: 'Pay only for compute time, zero server management.',
            subtopics: [
                'AWS Lambda',
                'API Gateway',
                'EventBridge (Event Bus)',
                'Serverless Framework / SAM'
            ],
            website: 'https://aws.amazon.com/lambda/',
            nextStepId: 'monitoring'
        },
        {
            id: 'monitoring',
            title: 'Monitoring & Notification',
            description: 'Observability.',
            whyImportant: 'You need to know when things break.',
            subtopics: [
                'CloudWatch (Metrics & Logs)',
                'SNS (Simple Notification Service)',
                'SQS (Simple Queue Service)',
                'CloudTrail (Audit Logs)'
            ],
            website: 'https://aws.amazon.com/cloudwatch/',
            nextStepId: null
        }
    ]
};
