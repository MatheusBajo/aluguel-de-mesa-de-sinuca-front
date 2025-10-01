// src/lib/site-config.ts
// ========================================
// CONFIGURAÇÃO CENTRALIZADA DO SITE
// Edite aqui para mudar textos, produtos, preços, etc
// ========================================

// 💰 PREÇOS
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

// 🎱 PRODUTOS
export const PRODUCTS = [
    {
        id: 'padrao',
        enabled: true,
        name: 'Mesa Padrão',
        size: '2.00m x 1.10m',
        image: '/Mesa de Sinuca.png',
        badge: 'Ideal pra maioria',
        idealFor: 'Churrasco, família, amigos',
        features: [
            'Perfeita pra churrasco toda semana',
            'Cabe em garagem ou área de lazer',
            'Kit completo: tacos, bolas, giz',
            'Manutenção sempre que precisar'
        ],
        spaces: ['Garagem', 'Área de lazer', 'Salão'],
        monthlyPrice: 250,
        type: 'pf' as const
    }
] as const;

// 📊 ESTATÍSTICAS (MOCK - atualizar com dados reais)
export const STATS = {
    totalClients: 247,
    clientsInSP: 150,
    clientsInGrandeSP: 150,
    groupsSharing: 47,
    renewalRate: 87,
    regretRate: 73,
    averageUsagePerMonth: 8,
} as const;

// 💬 DEPOIMENTOS (formato história)
export const TESTIMONIALS = [
    {
        id: '1',
        name: 'Carlos Eduardo',
        role: 'Vila Mariana',
        content: 'Juntei 3 amigos, dividimos o valor. R$ 62 cada. Primeiro mês foi teste, achei que ia enjoar. Cara, todo sábado tem gente aqui agora. Minha casa virou o point oficial do grupo.',
        rating: 5,
        location: 'São Paulo - SP',
        type: 'pf' as const,
        highlight: 'Casa virou point',
        months: '8 meses alugando',
    },
    {
        id: '2',
        name: 'Patricia Santos',
        role: 'Síndica - Jardins',
        content: 'Instalamos no salão de festas. Mudou completamente. Antes era só aniversário de criança. Agora os moradores usam toda semana. A manutenção deles é ótima, mesa sempre impecável.',
        rating: 5,
        location: 'São Paulo - SP',
        type: 'pj' as const,
        highlight: 'Área de lazer transformada',
        months: '1 ano e 3 meses',
    },
    {
        id: '3',
        name: 'Roberto Lima',
        role: 'Dono de Empresa',
        content: 'Coloquei na área de descanso. Pessoal joga no intervalo do almoço. Clima melhorou muito. Quando a equipe cresceu, trocamos por uma maior em 2 dias. Simples assim.',
        rating: 5,
        location: 'Sorocaba - SP',
        type: 'pj' as const,
        highlight: 'Flexibilidade real',
        months: '6 meses alugando',
    },
    {
        id: '4',
        name: 'Ana Clara',
        role: 'Brooklin',
        content: 'Meu marido sempre quis. Eu tinha medo de comprar e virar cabideiro. Alugamos pra testar 6 meses. Acabou o contrato e renovamos na hora. A família inteira usa, inclusive eu!',
        rating: 5,
        location: 'São Paulo - SP',
        type: 'pf' as const,
        highlight: 'Teste que deu certo',
        months: '4 meses alugando',
    },
    {
        id: '5',
        name: 'Fernando Oliveira',
        role: 'Dono de Bar',
        content: 'Tenho 3 mesas alugadas. Muito melhor que comprar. Eles cuidam da manutenção, eu cuido do bar. Semana passada uma teve problema, trocaram no dia seguinte. Parceria que funciona.',
        rating: 5,
        location: 'Grande São Paulo',
        type: 'pj' as const,
        highlight: 'Suporte comercial',
        months: '2 anos alugando',
    }
] as const;

// 🎯 BENEFÍCIOS (HONESTOS - sem promessas falsas)
export const BENEFITS = [
    {
        icon: '🏠',
        title: 'Sua casa vira o point',
        description: 'Aquele amigo que sumiu? Volta toda semana. Sua casa se torna o lugar onde todo mundo quer estar.',
        highlight: 'Todo rolê na sua casa',
        color: 'text-purple-600',
        bgColor: 'bg-purple-50'
    },
    {
        icon: '🍖',
        title: 'Churrasco sem sinuca é só churrasco',
        description: 'Transforma aquele churrasco de 3h num evento que vai até meia-noite. Ninguém quer ir embora.',
        highlight: 'Churrasco épico',
        color: 'text-orange-600',
        bgColor: 'bg-orange-50'
    },
    {
        icon: '👥',
        title: 'Divida com os amigos',
        description: 'R$ 250 dividido por 4 = R$ 62 cada. Menos que 2 lanches no McDonald\'s.',
        highlight: 'R$ 62/mês cada',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50'
    },
    {
        icon: '✅',
        title: 'Teste antes de comprar',
        description: 'Contrato de 6 meses. Descubra se você realmente vai usar antes de gastar R$ 5.000+ numa mesa própria.',
        highlight: '6 meses mínimo',
        color: 'text-green-600',
        bgColor: 'bg-green-50'
    },
    {
        icon: '🚚',
        title: 'Montagem profissional',
        description: 'Nossa equipe instala, nivela e deixa pronta. Você não precisa fazer nada.',
        highlight: 'Instalação inclusa',
        color: 'text-indigo-600',
        bgColor: 'bg-indigo-50'
    },
    {
        icon: '📦',
        title: 'Não vira cabideiro',
        description: 'Não é sua, então não tem aquele peso de "gastei R$ 5k e ninguém usa". Testou e não rolou? É só avisar.',
        highlight: 'Sem arrependimento',
        color: 'text-red-600',
        bgColor: 'bg-red-50'
    }
] as const;

// 🌎 REGIÕES ATENDIDAS
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

// ✨ HELPERS
export const getEnabledProducts = () => PRODUCTS.filter(p => p.enabled);
export const getProductById = (id: string) => PRODUCTS.find(p => p.id === id);
export const getPriceByType = (type: 'pf' | 'pj') => PRICING[type].monthly;