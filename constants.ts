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
    image: 'https://images.unsplash.com/photo-1520697517388-12f367e525c3?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Wi-Fi 5G',
    description: 'Conectividade sem fios de última geração para sua casa inteligente, games e streaming 4K sem travamentos.',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Voz Digital',
    description: 'Planos de voz digital com clareza cristalina para falar com quem você ama ou fechar grandes negócios.',
    image: 'https://images.unsplash.com/photo-1587578726258-2919a5539c97?auto=format&fit=crop&q=80&w=800'
  }
];