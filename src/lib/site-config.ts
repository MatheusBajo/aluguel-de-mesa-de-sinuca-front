// src/lib/site-config.ts
// ========================================
// CONFIGURAÇÃO CENTRALIZADA DO SITE
// Edite aqui para mudar textos, produtos, preços, etc
// ========================================

// 💰 PREÇOS
export const PRICING = {
    pf: {
        monthly: 295,
        contract: 6,
        total: 1770,
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
        size: '1,90 C x 1,20 L',
        image: '/Mesa de Sinuca.png',
        badge: 'Ideal pra maioria',
        idealFor: 'Churrasco, família, amigos',
        features: [
            'Perfeita pra churrasco toda semana',
            'Cabe em garagem ou área de lazer',
            'Tecido verde padrão',
            'Estrutura de Madeira ou Compensado',
            'Kit com 7 tacos e 1 jogo de bola numerada, 1 jogo de bola lisa, 1 bolão branco, giz azul e giz branco'
        ],
        spaces: ['Garagem', 'Área de lazer', 'Salão'],
        monthlyPrice: 295,
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
        name: 'Lucas Mendes',
        role: 'Moema',
        content: 'A gente se juntava sempre no bar, gastava uma fortuna. Alguém sugeriu alugar uma mesa e dividir. Ficou tipo o preço de dois barzinhos no mês entre 4 pessoas. Mesa chegou bem conservada, dá pra ver que foi usada mas tá impecável pra jogar. Agora toda sexta tem gente aqui.',
        rating: 5,
        location: 'São Paulo - SP',
        type: 'pf' as const,
        highlight: 'Economizou com bar',
        months: '5 meses alugando',
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
        name: 'Ricardo Almeida',
        role: 'Vila Mariana',
        content: 'Procurei bastante antes de decidir. Li que as mesas eram usadas e fiquei preocupado com nivelamento. Quando chegou, testei e o nivelamento estava ótimo. O pano tava novo. A manutenção inclusa é ótima.',
        rating: 5,
        location: 'São Paulo - SP',
        type: 'pf' as const,
        highlight: 'Qualidade surpreendente',
        months: '7 meses alugando',
    },
    {
        id: '4',
        name: 'Rodrigo Costa',
        role: 'Jardim São Paulo',
        content: 'Meu cunhado viu no Instagram e me mostrou. Achei interessante pra reunir a família nos domingos. Juntei com ele e mais dois amigos pra dividir. A mesa ocupa bastante espaço na garagem mas todo mundo usa. Meu filho de 16 já tá melhor que eu no jogo.',
        rating: 5,
        location: 'Sorocaba - SP',
        type: 'pf' as const,
        highlight: 'Família reunida',
        months: '6 meses alugando',
    }
] as const;

// 🎯 BENEFÍCIOS (HONESTOS - sem promessas falsas)
export const BENEFITS = [
    {
        icon: '🏠',
        title: 'Sua casa vira o point',
        description: 'Sua casa se torna o lugar onde todo mundo quer estar. O espaço que reúne amigos e cria memórias.',
        highlight: 'Todo rolê na sua casa',
        color: 'text-purple-600',
        bgColor: 'bg-purple-50'
    },
    {
        icon: '🍖',
        title: 'Transforme o seu churrasco',
        description: 'Adicione sinuca ao seu churrasco e crie momentos memoráveis. O diferencial que vai fazer todo mundo querer voltar.',
        highlight: 'Churrasco + Sinuca',
        color: 'text-orange-600',
        bgColor: 'bg-orange-50'
    },
    {
        icon: '👥',
        title: 'Divida com os amigos',
        description: 'Junte a galera e dividam o valor. Ou façam apostas amigáveis de quem paga o mês!',
        highlight: 'Diversão garantida',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50'
    },
    {
        icon: '✅',
        title: 'Experiência completa em casa',
        description: 'Contrato de 6 meses para você descobrir o quanto uma mesa de sinuca transforma sua casa em um espaço de diversão.',
        highlight: '6 meses de tradição',
        color: 'text-green-600',
        bgColor: 'bg-green-50'
    },
    {
        icon: '🚚',
        title: 'Frete e instalação',
        description: 'Nossa equipe instala, nivela e deixa pronta. Você não precisa fazer nada.',
        highlight: 'Cobrado à parte',
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