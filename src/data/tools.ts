import type { ImageMetadata } from 'astro';

// Import logos
import k8sLogo from '../assets/images/tools/kubernetes.svg';
import prometheusLogo from '../assets/images/tools/prometheus.svg';
import falcoLogo from '@assets/images/tools/falco.svg';
import vaultLogo from '../assets/images/tools/vault.svg';
import githubLogo from '../assets/images/tools/github.svg';

export interface Tool {
  name: string;
  link: string;
  logo: ImageMetadata;
  description?: string; // Optional, for extra detail elsewhere
}

export const tools: Tool[] = [
  {
    name: 'Kubernetes',
    link: 'https://kubernetes.io/',
    logo: k8sLogo,
  },
  {
    name: 'Prometheus',
    link: 'https://prometheus.io/',
    logo: prometheusLogo,
  },
  {
    name: 'Falco',
    link: 'https://falco.org',
    logo: falcoLogo,
  },
  {
    name: 'HashiCorp Vault',
    link: 'https://www.vaultproject.io/',
    logo: vaultLogo,
  },
  {
    name: 'GitHub',
    link: 'https://github.com/',
    logo: githubLogo,
  },
];
