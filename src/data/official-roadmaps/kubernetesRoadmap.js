export const kubernetesRoadmap = {
    id: 'kubernetes',
    title: 'Kubernetes',
    description: 'Container Orchestration at scale.',
    nodes: [
        {
            id: 'k8s-basics',
            title: 'Kubernetes Architecture',
            description: 'Master Node, Worker Nodes, and components.',
            whyImportant: 'Understand how the cluster actually works.',
            subtopics: ['Control Plane', 'Etcd', 'Kubelet', 'Kube-proxy'],
            website: 'https://kubernetes.io/docs/concepts/overview/components/',
            nextStepId: 'k8s-objects'
        },
        {
            id: 'k8s-objects',
            title: 'Basic Objects',
            description: 'Pods, Services, and Deployments.',
            whyImportant: 'The primitives you use to run applications.',
            subtopics: ['Pod', 'Service (ClusterIP, NodePort, LoadBalancer)', 'Deployment', 'ReplicaSet'],
            website: 'https://kubernetes.io/docs/concepts/workloads/pods/',
            nextStepId: 'k8s-config'
        },
        {
            id: 'k8s-config',
            title: 'Configuration & Storage',
            description: 'Managing app config and persistent data.',
            whyImportant: 'Apps need configuration and state.',
            subtopics: ['ConfigMaps', 'Secrets', 'PersistentVolumes', 'PersistentVolumeClaims'],
            website: 'https://kubernetes.io/docs/concepts/configuration/',
            nextStepId: 'helm'
        },
        {
            id: 'helm',
            title: 'Helm (Package Manager)',
            description: 'Managing Kubernetes applications.',
            whyImportant: 'Templating and versioning for your K8s manifests.',
            subtopics: ['Charts', 'Templates', 'Values.yaml', 'Release Management'],
            website: 'https://helm.sh/docs/',
            nextStepId: null
        }
    ]
};
