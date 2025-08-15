export interface Chapter {
  id: string;
  title: string;
  content: string;
  orderIndex: number;
}

export interface Ebook {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice?: number;
  coverImage: string;
  author: string;
  pages: number;
  chapters: Chapter[];
  features: string[];
  learningOutcomes: string[];
  targetAudience: string[];
  publishedAt: string;
  category: string;
  rating: number;
  reviewsCount: number;
  sales?: number;
  discount?: number;
}

export const ebooks: Ebook[] = [
  {
    id: '1',
    slug: 'economia-sem-complicacao',
    title: 'Economia Sem Complicação',
    subtitle: 'A base que ninguém te deu, de forma descomplicada e sem enrolação.',
    description: 'Aprenda os fundamentos da economia de forma simples e direta. Este ebook transforma conceitos complexos em conhecimento acessível para todos.',
    longDescription: `
      Você já se sentiu perdido quando o assunto é economia? Já teve dificuldade para entender conceitos básicos que parecem tão simples para outros?
      
      Este ebook foi criado especialmente para você que quer entender economia de verdade, sem termos complicados ou teorias abstratas.
      
      Com uma linguagem simples e exemplos práticos do dia a dia, você vai finalmente compreender:
      - Como a economia afeta sua vida diariamente
      - Os princípios básicos que regem o mercado
      - Como tomar decisões financeiras mais inteligentes
      - O que realmente importa saber sobre economia
      
      Esqueça os livros acadêmicos cheios de jargões. Aqui você encontra o conhecimento essencial, explicado de forma que qualquer pessoa pode entender e aplicar.
    `,
    price: 19.90,
    originalPrice: 49.90,
    coverImage: '/imgOtimized/Ebook-1.webp',
    author: 'Million Educação',
    pages: 120,
    chapters: [
      {
        id: 'cap1',
        title: 'Introdução: Por que economia importa?',
        content: 'Conteúdo do capítulo 1...',
        orderIndex: 1
      },
      {
        id: 'cap2',
        title: 'O básico que ninguém explica',
        content: 'Conteúdo do capítulo 2...',
        orderIndex: 2
      },
      {
        id: 'cap3',
        title: 'Oferta e demanda na prática',
        content: 'Conteúdo do capítulo 3...',
        orderIndex: 3
      },
      {
        id: 'cap4',
        title: 'Inflação: o vilão silencioso',
        content: 'Conteúdo do capítulo 4...',
        orderIndex: 4
      },
      {
        id: 'cap5',
        title: 'Juros: entenda de uma vez',
        content: 'Conteúdo do capítulo 5...',
        orderIndex: 5
      },
      {
        id: 'cap6',
        title: 'PIB e indicadores econômicos',
        content: 'Conteúdo do capítulo 6...',
        orderIndex: 6
      },
      {
        id: 'cap7',
        title: 'Mercado de trabalho e salários',
        content: 'Conteúdo do capítulo 7...',
        orderIndex: 7
      },
      {
        id: 'cap8',
        title: 'Impostos: para onde vai seu dinheiro',
        content: 'Conteúdo do capítulo 8...',
        orderIndex: 8
      },
      {
        id: 'cap9',
        title: 'Economia global simplificada',
        content: 'Conteúdo do capítulo 9...',
        orderIndex: 9
      },
      {
        id: 'cap10',
        title: 'Aplicando tudo na sua vida',
        content: 'Conteúdo do capítulo 10...',
        orderIndex: 10
      }
    ],
    features: [
      'Linguagem simples e direta',
      '120 páginas de conteúdo prático',
      'Exemplos do dia a dia',
      'Exercícios práticos',
      'Acesso vitalício',
      'Atualizações gratuitas'
    ],
    learningOutcomes: [
      'Entender os conceitos básicos de economia',
      'Compreender como a economia afeta seu dia a dia',
      'Tomar decisões financeiras mais conscientes',
      'Interpretar notícias econômicas',
      'Planejar melhor seu futuro financeiro'
    ],
    targetAudience: [
      'Iniciantes em economia',
      'Pessoas que querem entender melhor o mercado',
      'Empreendedores',
      'Estudantes',
      'Qualquer pessoa interessada em melhorar sua educação financeira'
    ],
    publishedAt: '2024-01-15',
    category: 'Economia',
    rating: 4.8,
    reviewsCount: 127,
    sales: 2347,
    discount: 60
  },
  {
    id: '2',
    slug: 'entenda-termos-mercado-financeiro',
    title: 'Entenda Termos do Mercado Financeiro',
    subtitle: 'Pare de se sentir perdido ao conversar com alguém que entenda do assunto, seja esse alguém.',
    description: 'Domine o vocabulário do mercado financeiro e converse com confiança sobre investimentos.',
    longDescription: `
      Você já ficou perdido em uma conversa sobre investimentos? Já ouviu termos como EBITDA, IPO, Commodities e não fez ideia do que significavam?
      
      Este ebook é seu dicionário prático e descomplicado do mercado financeiro. Aqui você vai:
      - Aprender os principais termos usados por investidores
      - Entender siglas e jargões do mercado
      - Compreender conceitos fundamentais de forma simples
      - Ganhar confiança para conversar sobre investimentos
      
      Cada termo é explicado de forma clara, com exemplos práticos que facilitam o entendimento.
    `,
    price: 19.90,
    originalPrice: 39.90,
    coverImage: '/imgOtimized/Ebook-2.webp',
    author: 'Million Educação',
    pages: 95,
    chapters: [
      { id: 'cap1', title: 'Termos básicos do mercado', content: '', orderIndex: 1 },
      { id: 'cap2', title: 'Indicadores fundamentalistas', content: '', orderIndex: 2 },
      { id: 'cap3', title: 'Siglas e abreviações essenciais', content: '', orderIndex: 3 },
      { id: 'cap4', title: 'Jargões do mercado financeiro', content: '', orderIndex: 4 },
      { id: 'cap5', title: 'Glossário completo de A a Z', content: '', orderIndex: 5 }
    ],
    features: [
      'Explicações simples e diretas',
      'Exemplos práticos',
      'Glossário completo',
      'Acesso vitalício'
    ],
    learningOutcomes: [
      'Entender conversas sobre investimentos',
      'Interpretar notícias do mercado financeiro',
      'Conversar com confiança sobre finanças',
      'Tomar decisões mais informadas'
    ],
    targetAudience: [
      'Iniciantes no mercado financeiro',
      'Pessoas que querem entender notícias econômicas',
      'Profissionais em transição de carreira'
    ],
    publishedAt: '2024-02-01',
    category: 'Mercado Financeiro',
    rating: 4.9,
    reviewsCount: 89,
    sales: 1823,
    discount: 50
  }
];

export function getEbookBySlug(slug: string): Ebook | undefined {
  return ebooks.find(ebook => ebook.slug === slug);
}

export function getEbookById(id: string): Ebook | undefined {
  return ebooks.find(ebook => ebook.id === id);
}