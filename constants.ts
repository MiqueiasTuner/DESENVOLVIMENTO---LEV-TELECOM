import { Wifi, ShieldCheck, Zap, Headphones, Globe, Smartphone } from 'lucide-react';

export const PLANS = [
  {
    name: 'Plano Start',
    speed: '550',
    unit: 'MEGAS',
    price: '85',
    cents: '00',
    features: [
      'Wi-Fi',
      'Instalação Rápida',
      'Suporte Técnico',
      'Sem Fidelidade'
    ],
    highlight: false,
  },
  {
    name: 'Plano Turbo',
    speed: '800',
    unit: 'MEGAS',
    price: '95',
    cents: '00',
    features: [
      'Wi-Fi',
      'Instalação Rápida',
      'Suporte Técnico',
      'Sem Fidelidade'
    ],
    highlight: true,
    tag: 'Mais Vendido'
  },
  {
    name: 'Plano Fiber Max',
    speed: '01',
    unit: 'GIGA',
    price: '110',
    cents: '90',
    features: [
      'Wi-Fi Mesh Adicional Grátis',
      'Instalação Rápida',
      'Suporte Técnico',
      'Sem Fidelidade'
    ],
    highlight: false,
  },
];

export const FEATURES = [
  {
    icon: Zap,
    title: 'Ultra Velocidade',
    description: 'Tecnologia de fibra óptica de ponta a ponta para garantir a máxima velocidade.'
  },
  {
    icon: ShieldCheck,
    title: 'Conexão Segura',
    description: 'Navegue com tranquilidade. Proteção contra ataques e estabilidade garantida.'
  },
  {
    icon: Headphones,
    title: 'Suporte 24/7',
    description: 'Nossa equipe técnica está sempre pronta para te atender, a qualquer hora do dia.'
  },
  {
    icon: Wifi,
    title: 'Wi-Fi Inteligente',
    description: 'Equipamentos modernos que garantem sinal forte em todos os cômodos da casa.'
  }
];

export const SOLUTIONS = [
  {
    title: 'Internet Fibra',
    description: 'Navegue, assista e trabalhe com a máxima performance! A fibra óptica da Lev Telecom garante ultra velocidade, estabilidade e franquia ilimitada.',
    image: 'https://telesintese.com.br/wp-content/uploads/2023/11/fibra-optica-telecom-conexao-infraestrutura-freepik.jpg'
  },
  {
    title: 'Wi-Fi',
    description: 'Conectividade sem fios de última geração para sua casa inteligente, games e streaming 4K sem travamentos.',
    image: 'https://www.desktop.com.br/blog/wp-content/webp-express/webp-images/uploads/2025/09/o-que-e-e-como-o-wifi-e-gerado.jpg.webp'
  },
  {
    title: 'Telefonia Fixa',
    description: 'Planos de voz digital com clareza cristalina para falar com quem você ama ou fechar grandes negócios.',
    image: 'https://mobilit.com.br/wp-content/uploads/2021/08/telefonia-fixa.jpg'
  }
];