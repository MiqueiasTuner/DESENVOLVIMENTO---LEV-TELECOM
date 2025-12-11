import { Wifi, ShieldCheck, Zap, Headphones, Globe, Smartphone } from 'lucide-react';

export const PLANS = [
  {
    name: 'Plano Start',
    speed: '200',
    unit: 'MEGA',
    price: '99',
    features: [
      'Wi-Fi Turbo',
      'Suporte 24x7',
      'Instalação Grátis'
    ],
    highlight: false,
  },
  {
    name: 'Plano Power',
    speed: '400',
    unit: 'MEGA',
    price: '139',
    features: [
      'Wi-Fi 6 Turbo',
      'Sem franquia de consumo',
      'Suporte Prioritário 24x7',
      'App de Filmes Grátis'
    ],
    highlight: true,
    tag: 'Mais Vendido'
  },
  {
    name: 'Plano Ultra',
    speed: '600',
    unit: 'MEGA',
    price: '189',
    features: [
      'Wi-Fi Mesh Incluso',
      'Atendimento Prioritário',
      'Sem franquia de consumo'
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