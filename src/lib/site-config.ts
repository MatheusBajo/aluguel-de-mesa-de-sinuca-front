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
// enabled: false = não aparece no site (mas código fica aqui)
export const PRODUCTS = [
    {
        id: 'compacta',
        enabled: true, // ← Desativado por enquanto
        name: 'Mesa Compacta',
        size: '1.80m x 1.00m',
        image: '/Mesa de Sinuca.png',
        badge: 'Ideal para apartamento',
        idealFor: 'Espaços menores',
        features: [
            'Cabe em ambientes compactos',
            'Tecido verde padrão',
            'Estrutura de Madeira ou Compensado',
            'Kit com 7 tacos e 1 jogo de bola numerada, 1 jogo de bola lisa, 1 bolão branco, giz azul e giz branco'
        ],
        spaces: ['Sala', 'Varanda', 'Quarto extra'],
        monthlyPrice: 295,
        type: 'pf' as const
    },
    {
        id: 'padrao',
        enabled: true, // ← ESTE FICA VISÍVEL
        name: 'Mesa Padrão',
        size: '2.00m x 1.10m',
        image: '/Mesa de Sinuca.png',
        badge: 'Mais procurada',
        idealFor: 'Casas e áreas comuns',
        features: [
            'Tamanho mais comum',
            'Bom custo-benefício',
            'Estrutura reforçada',
            'Kit completo de acessórios'
        ],
        spaces: ['Garagem', 'Salão de festas', 'Área de lazer'],
        monthlyPrice: 250,
        type: 'pf' as const
    },
    {
        id: 'grande',
        enabled: false, // ← Desativado por enquanto
        name: 'Mesa Grande',
        size: '2.20m x 1.20m',
        image: '/Mesa de Sinuca.png',
        badge: 'Para grupos',
        idealFor: 'Empresas e condomínios',
        features: [
            'Tamanho maior',
            'Ideal para muitos jogadores',
            'Estrutura robusta',
            'Kit profissional'
        ],
        spaces: ['Área corporativa', 'Condomínio', 'Casa grande'],
        monthlyPrice: 350,
        type: 'pj' as const
    }
] as const;

// 📊 ESTATÍSTICAS (MOCK - atualizar quando tiver dados reais)
export const STATS = {
    // MOCK: Atualizar com números reais
    totalClients: 247,
    clientsInSP: 150,
    clientsInGrandeSP: 150,
    groupsSharing: 47,
    renewalRate: 87, // %
    regretRate: 73, // %
    averageUsagePerMonth: 8, // vezes
} as const;

// 💬 DEPOIMENTOS (MOCK - substituir por depoimentos reais depois)
export const TESTIMONIALS = [
    {
        id: '1',
        name: 'Carlos Eduardo',
        role: 'Morador Vila Mariana',
        content: 'Melhor decisão! Dividi com 3 amigos, fica R$ 62 cada. Mesa chegou rápido, montaram tudo certinho. Toda sexta a galera vem aqui pra casa jogar.',
        rating: 5,
        location: 'São Paulo - SP',
        type: 'pf' as const,
        highlight: 'Dividindo com amigos',
        months: '8 meses alugando',
        // MOCK: Substituir por depoimento real
    },
    {
        id: '2',
        name: 'Patricia Santos',
        role: 'Síndica Condomínio Jardins',
        content: 'Transformou nossa área de lazer! Os moradores usam todos os dias. A manutenção que eles fazem mantém a mesa sempre em ordem. Vale cada centavo.',
        rating: 5,
        location: 'São Paulo - SP',
        type: 'pj' as const,
        highlight: 'Manutenção inclusa',
        months: '1 ano e 3 meses',
        // MOCK: Substituir por depoimento real
    },
    {
        id: '3',
        name: 'Roberto Lima',
        role: 'Empresário',
        content: 'Instalei na área de descompressão da empresa. O pessoal adora, melhorou o clima. Quando precisamos trocar por uma maior, foi super tranquilo.',
        rating: 5,
        location: 'Sorocaba - SP',
        type: 'pj' as const,
        highlight: 'Flexibilidade pra trocar',
        months: '6 meses alugando',
        // MOCK: Substituir por depoimento real
    },
    {
        id: '4',
        name: 'Ana Clara',
        role: 'Moradora Brooklin',
        content: 'Meu marido sempre quis uma mesa mas eu tinha medo do investimento. Com o aluguel, testamos e adoramos! Agora é o point da família nos finais de semana.',
        rating: 5,
        location: 'São Paulo - SP',
        type: 'pf' as const,
        highlight: 'Teste antes de comprar',
        months: '4 meses alugando',
        // MOCK: Substituir por depoimento real
    },
    {
        id: '5',
        name: 'Fernando Oliveira',
        role: 'Dono de Bar',
        content: 'Alugo 3 mesas para meu bar. Muito melhor que comprar! Eles cuidam de toda manutenção, e se uma mesa dá problema, resolvem rápido. Excelente!',
        rating: 5,
        location: 'Grande São Paulo',
        type: 'pj' as const,
        highlight: 'Suporte comercial',
        months: '2 anos alugando',
        // MOCK: Substituir por depoimento real
    }
] as const;

// 🎯 BENEFÍCIOS PRINCIPAIS
export const BENEFITS = [
    {
        icon: '🎱',
        title: 'Teste Antes de Comprar',
        description: 'Descubra se você e sua família vão realmente usar. Sem gastar R$ 5.000+ para descobrir.',
        highlight: 'Teste por 6 meses',
        color: 'text-green-600',
        bgColor: 'bg-green-50'
    },
    {
        icon: '👥',
        title: 'Divida com os Amigos',
        description: 'R$ 250 dividido por 4 = R$ 62,50 cada. Menos que 2 lanches no McDonald\'s.',
        highlight: 'R$ 62/cada',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50'
    },
    {
        icon: '🏠',
        title: 'Sua Casa Vira o Point',
        description: 'Transforme sua casa no lugar onde todos querem se reunir. O rolê sempre vai ser na sua casa.',
        highlight: 'Point garantido',
        color: 'text-purple-600',
        bgColor: 'bg-purple-50'
    },
    {
        icon: '🔧',
        title: 'Zero Dor de Cabeça',
        description: 'Mesa desnivelou? Pano rasgou? Problema nosso. Você só joga, a gente cuida do resto.',
        highlight: 'Manutenção inclusa',
        color: 'text-orange-600',
        bgColor: 'bg-orange-50'
    },
    {
        icon: '📅',
        title: 'Flexibilidade Real',
        description: 'Vai mudar? A gente leva. Galera sumiu? Cancele sem drama. Sua vida muda, o contrato também.',
        highlight: 'Cancele quando quiser',
        color: 'text-indigo-600',
        bgColor: 'bg-indigo-50'
    },
    {
        icon: '💚',
        title: 'Sem Peso na Consciência',
        description: 'Sem investimento de R$ 5.000+. Sem mesa virando cabideiro. Sem briga com a esposa.',
        highlight: 'Consciência limpa',
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