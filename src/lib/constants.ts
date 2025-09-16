// ==================================================
// src/lib/constants.ts
export const PRICING = {
    pf: {
        monthly: 250,
        contract: 6,
        total: 1500,
        label: 'Residencial'
    },
    pj: {
        monthly: 350,
        contract: 6,
        total: 2100,
        label: 'Empresarial'
    }
} as const;

export const REGIONS = {
    'sao-paulo': {
        name: 'São Paulo',
        slug: 'sao-paulo',
        neighborhoods: ['Vila Mariana', 'Pinheiros', 'Moema', 'Itaim Bibi', 'Brooklin'],
        meta: {
            title: 'Aluguel Mesa de Sinuca São Paulo | Entrega em 24h',
            description: 'Alugue mesa de sinuca em São Paulo. R$ 250/mês para residências. Montagem grátis, mesas certificadas e revisadas. Atendemos toda capital.'
        }
    },
    'grande-sao-paulo': {
        name: 'Grande São Paulo',
        slug: 'grande-sao-paulo',
        neighborhoods: ['São Bernardo', 'Santo André', 'Guarulhos', 'Osasco', 'Barueri'],
        meta: {
            title: 'Aluguel Mesa Sinuca Grande São Paulo | ABC e Região',
            description: 'Locação de mesa de sinuca na Grande São Paulo. Atendemos ABC, Guarulhos, Osasco. R$ 250/mês, contrato flexível. Entrega e montagem inclusas.'
        }
    },
    'sorocaba': {
        name: 'Sorocaba',
        slug: 'sorocaba',
        neighborhoods: ['Centro', 'Campolim', 'Jardim São Paulo', 'Vila Jardini', 'Wanel Ville'],
        meta: {
            title: 'Aluguel Mesa de Sinuca Sorocaba | Locação Mensal',
            description: 'Alugue mesa de sinuca em Sorocaba e região. Contratos a partir de 6 meses, R$ 250/mês. Mesas profissionais revisadas com entrega grátis.'
        }
    }
} as const;

export const BENEFITS = [
    {
        title: 'Economia Inteligente',
        description: 'Até 70% mais barato que comprar',
        icon: '💰'
    },
    {
        title: 'Sem Burocracia',
        description: 'Contrato simples, sem caução',
        icon: '📝'
    },
    {
        title: 'Manutenção Inclusa',
        description: 'Suporte técnico quando precisar',
        icon: '🔧'
    },
    {
        title: 'Entrega Expressa',
        description: 'Montagem profissional em 24h',
        icon: '🚚'
    }
];