export const cloudflareRoadmap = {
    id: 'cloudflare',
    title: 'Cloudflare',
    description: 'CDN, Security, and Edge Computing.',
    nodes: [
        {
            id: 'cf-basics',
            title: 'CDN & DNS',
            description: 'Speeding up websites and managing domains.',
            whyImportant: 'Core services of Cloudflare.',
            subtopics: ['DNS Records', 'Proxied vs DNS only', 'Caching Rules', 'Edge Network'],
            website: 'https://learning.cloudflare.com/cdn/what-is-a-cdn/',
            nextStepId: 'cf-security'
        },
        {
            id: 'cf-security',
            title: 'Security',
            description: 'Protecting applications from attacks.',
            whyImportant: 'DDoS protection and WAF are critical for modern apps.',
            subtopics: ['WAF (Web Application Firewall)', 'DDoS Protection', 'Bot Management', 'SSL/TLS'],
            website: 'https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/',
            nextStepId: 'cf-workers'
        },
        {
            id: 'cf-workers',
            title: 'Cloudflare Workers',
            description: 'Serverless functions at the edge.',
            whyImportant: 'Run code closer to the user for low latency.',
            subtopics: ['V8 Isolate', 'Wrangler CLI', 'KV Storage', 'Durable Objects'],
            website: 'https://workers.cloudflare.com/',
            nextStepId: 'cf-zero-trust'
        },
        {
            id: 'cf-zero-trust',
            title: 'Zero Trust',
            description: 'Secure access to internal applications.',
            whyImportant: 'Modern replacement for VPNs.',
            subtopics: ['Access', 'Gateway', 'Tunnels (Cloudflared)'],
            website: 'https://www.cloudflare.com/learning/security/glossary/what-is-zero-trust/',
            nextStepId: null
        }
    ]
};
