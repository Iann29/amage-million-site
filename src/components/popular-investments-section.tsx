'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, InfoIcon } from 'lucide-react';
import { InvestmentModal } from './investment-modal';

const investmentCategories = [
  {
    id: 'renda-fixa',
    name: 'Renda Fixa',
    description: 'Investimentos previsíveis onde você sabe exatamente quanto vai receber no vencimento. É como emprestar seu dinheiro e receber de volta com juros combinados.',
    products: [
      {
        title: 'Tesouro Direto',
        description: 'O investimento mais seguro do Brasil, garantido pelo governo.',
        fullDescription: 'O Tesouro Direto é um programa do Tesouro Nacional que permite a compra de títulos públicos federais por pessoas físicas. É considerado o investimento mais seguro do país, pois tem a garantia do Governo Federal.',
        example: 'Se você investir R$ 1.000 em um Tesouro Selic hoje, em 1 ano terá aproximadamente R$ 1.130 (considerando Selic a 13% ao ano). O valor exato você já sabe no momento da compra.',
        risks: 'O único risco é o governo quebrar, o que é extremamente improvável. Alguns títulos podem ter volatilidade no preço se você precisar vender antes do vencimento.',
        benefits: ['Segurança máxima', 'Baixo valor inicial (a partir de R$ 30)', 'Liquidez diária em alguns títulos', 'Diversas opções de rentabilidade']
      },
      {
        title: 'CDB',
        description: 'Renda fixa dos bancos com proteção do FGC até R$ 250 mil.',
        fullDescription: 'Certificado de Depósito Bancário é um título emitido pelos bancos para captar recursos. Você empresta dinheiro ao banco e recebe de volta com juros.',
        example: 'Um CDB que paga 100% do CDI renderá aproximadamente a taxa Selic. Se investir R$ 10.000, em 1 ano terá cerca de R$ 11.300 (com Selic a 13%).',
        risks: 'Risco do banco quebrar, mas há proteção do FGC até R$ 250 mil por CPF e por instituição.',
        benefits: ['Garantia do FGC', 'Várias opções de prazo', 'Alguns com liquidez diária', 'Rentabilidade conhecida']
      },
      {
        title: 'LCI e LCA',
        description: 'Renda fixa isenta de imposto de renda para pessoa física.',
        fullDescription: 'Letras de Crédito Imobiliário e do Agronegócio são títulos lastreados em financiamentos desses setores. Principal vantagem: isenção de IR para pessoas físicas.',
        example: 'Uma LCI que paga 90% do CDI, por ser isenta de IR, pode render mais que um CDB de 100% do CDI. R$ 5.000 investidos podem virar R$ 5.585 em 1 ano, líquidos.',
        risks: 'Geralmente exigem prazo mínimo de 90 dias e valores iniciais maiores. Protegidos pelo FGC.',
        benefits: ['Isenção de IR', 'Garantia do FGC', 'Boa rentabilidade líquida', 'Incentiva setores produtivos']
      },
      {
        title: 'CRI e CRA',
        description: 'Títulos imobiliários e do agro isentos de IR com maior rentabilidade.',
        fullDescription: 'Certificados de Recebíveis são títulos lastreados em créditos imobiliários ou do agronegócio. Emitidos por securitizadoras, não têm garantia do FGC.',
        example: 'Um CRI pode pagar IPCA + 6% ao ano. Com inflação a 5%, renderia 11% ao ano, isento de IR. R$ 20.000 podem virar R$ 22.200 em 1 ano.',
        risks: 'Não tem garantia do FGC. Risco de crédito do devedor. Geralmente tem baixa liquidez.',
        benefits: ['Isenção de IR', 'Rentabilidade atrativa', 'Proteção contra inflação', 'Diversificação de carteira']
      },
      {
        title: 'Debêntures',
        description: 'Empréstimos para grandes empresas com boa rentabilidade.',
        fullDescription: 'São títulos de dívida emitidos por empresas para financiar seus projetos. Você empresta para a empresa e recebe juros.',
        example: 'Uma debênture pode pagar CDI + 3% ao ano. Com CDI a 13%, renderia 16% bruto ao ano. Após IR, cerca de 13% líquido.',
        risks: 'Risco de crédito da empresa. Não tem garantia do FGC. Pode ter baixa liquidez.',
        benefits: ['Rentabilidade superior', 'Variedade de emissores', 'Diferentes indexadores', 'Algumas incentivadas são isentas de IR']
      },
      {
        title: 'Letra de Câmbio',
        description: 'Título de financeiras com ótimas taxas e proteção FGC.',
        fullDescription: 'Título emitido por financeiras para captar recursos. Similar ao CDB, mas geralmente com rentabilidade maior.',
        example: 'Uma LC pagando 115% do CDI renderá cerca de 15% ao ano bruto. R$ 3.000 investidos virariam R$ 3.365 em 1 ano (após IR).',
        risks: 'Risco da financeira quebrar, mas tem proteção do FGC até R$ 250 mil.',
        benefits: ['Garantia do FGC', 'Rentabilidade atrativa', 'Prazos variados', 'Acessível a pequenos investidores']
      }
    ]
  },
  {
    id: 'renda-variavel',
    name: 'Renda Variável',
    description: 'Ativos que oscilam conforme o mercado, sem garantia de retorno. O potencial de ganho é maior, mas o risco também. Ideal para objetivos de longo prazo.',
    products: [
      {
        title: 'Ações',
        description: 'Seja sócio das maiores empresas e participe dos lucros.',
        fullDescription: 'Ações representam uma pequena parte do capital de uma empresa. Ao comprar ações, você se torna sócio e pode ganhar com valorização e dividendos.',
        example: 'Se você comprar 100 ações da Petrobras a R$ 35 cada (R$ 3.500), e ela subir para R$ 40, seu patrimônio será R$ 4.000. Ainda pode receber dividendos trimestrais.',
        risks: 'Preço pode cair e você ter prejuízo. Empresas podem quebrar. Mercado é volátil no curto prazo.',
        benefits: ['Potencial de alta valorização', 'Recebimento de dividendos', 'Liquidez diária', 'Participação no crescimento de empresas']
      },
      {
        title: 'Fundos Imobiliários',
        description: 'Invista em imóveis e receba "aluguéis" mensais isentos de IR.',
        fullDescription: 'FIIs são fundos que investem em imóveis físicos ou títulos imobiliários. Distribuem rendimentos mensais aos cotistas, geralmente isentos de IR.',
        example: 'Comprando R$ 10.000 em cotas de um FII que paga 0,7% ao mês, você receberia R$ 70 mensais isentos de IR, além da possível valorização das cotas.',
        risks: 'Vacância dos imóveis, inadimplência, desvalorização das cotas. Mercado imobiliário é cíclico.',
        benefits: ['Renda mensal isenta de IR', 'Diversificação em imóveis', 'Gestão profissional', 'Baixo valor inicial']
      },
      {
        title: 'ETFs',
        description: 'Invista em uma cesta diversificada com apenas uma operação.',
        fullDescription: 'Exchange Traded Funds são fundos que replicam índices e são negociados na bolsa como ações. Permitem diversificação instantânea.',
        example: 'O BOVA11 replica o Ibovespa. Com R$ 100 você investe nas principais empresas do Brasil de uma vez. Se o Ibovespa subir 20%, seu ETF sobe junto.',
        risks: 'Segue a volatilidade do índice. Em crises, pode ter quedas expressivas.',
        benefits: ['Diversificação automática', 'Baixo custo', 'Liquidez diária', 'Gestão passiva eficiente']
      },
      {
        title: 'BDRs',
        description: 'Acesse empresas globais direto da bolsa brasileira.',
        fullDescription: 'Brazilian Depositary Receipts são certificados de ações estrangeiras negociados no Brasil. Permite investir em Apple, Google, etc. em reais.',
        example: 'Comprando BDR da Apple, você acompanha a valorização da empresa em dólares. Se a ação subir 10% e o dólar 5%, seu ganho seria cerca de 15%.',
        risks: 'Variação cambial, risco da empresa, menor liquidez que as ações originais.',
        benefits: ['Acesso a empresas globais', 'Diversificação internacional', 'Operação em reais', 'Grandes empresas mundiais']
      },
      {
        title: 'Fiagro',
        description: 'Fundos do agronegócio com benefícios fiscais.',
        fullDescription: 'Fundos de Investimento nas Cadeias Produtivas Agroindustriais investem no agronegócio brasileiro, um dos mais competitivos do mundo.',
        example: 'Um Fiagro pode distribuir rendimentos de 0,8% ao mês. R$ 5.000 investidos gerariam R$ 40 mensais, com potencial de valorização.',
        risks: 'Riscos climáticos, preços de commodities, câmbio. Setor pode ser volátil.',
        benefits: ['Exposição ao agro', 'Rendimentos periódicos', 'Benefícios fiscais', 'Setor estratégico brasileiro']
      }
    ]
  },
  {
    id: 'previdencia',
    name: 'Previdência Privada',
    description: 'Investimentos de longo prazo com benefícios fiscais. Ideal para aposentadoria ou objetivos distantes, com vantagens tributárias exclusivas.',
    products: [
      {
        title: 'PGBL',
        description: 'Reduza até 12% da base do IR e construa sua aposentadoria.',
        fullDescription: 'Plano Gerador de Benefício Livre permite deduzir até 12% da renda bruta anual do IR. Ideal para quem faz declaração completa.',
        example: 'Se você ganha R$ 10.000/mês, pode deduzir até R$ 14.400/ano. Com alíquota de 27,5%, economia imediata de R$ 3.960 no IR.',
        risks: 'No resgate, IR incide sobre o valor total. Taxas de administração podem ser altas.',
        benefits: ['Dedução fiscal imediata', 'Disciplina de poupança', 'Sucessão simplificada', 'Portabilidade entre planos']
      },
      {
        title: 'VGBL',
        description: 'Acumule patrimônio com IR só sobre os rendimentos.',
        fullDescription: 'Vida Gerador de Benefício Livre é ideal para quem faz declaração simplificada ou já usa o limite do PGBL. IR incide apenas sobre rendimentos.',
        example: 'Investindo R$ 500/mês por 20 anos, com rentabilidade de 8% ao ano, acumularia cerca de R$ 294.000. IR só sobre os R$ 174.000 de rendimento.',
        risks: 'Rentabilidade depende dos fundos escolhidos. Resgate antecipado pode ter carência.',
        benefits: ['IR só sobre ganhos', 'Não entra em inventário', 'Flexibilidade de aportes', 'Ideal para herança']
      }
    ]
  },
  {
    id: 'ofertas',
    name: 'Ofertas Públicas',
    description: 'Oportunidades especiais de investir em empresas em momentos únicos, como aberturas de capital ou novas emissões.',
    products: [
      {
        title: 'IPOs',
        description: 'Entre no início da história de empresas na bolsa.',
        fullDescription: 'Initial Public Offering é quando uma empresa abre capital na bolsa. Você pode ser um dos primeiros investidores.',
        example: 'No IPO do Nubank, quem investiu R$ 1.000 no preço inicial viu uma valorização de mais de 50% nos primeiros meses.',
        risks: 'Empresa nova na bolsa, histórico limitado, pode ter alta volatilidade inicial.',
        benefits: ['Potencial de valorização', 'Acesso antecipado', 'Democratização do capital', 'Participar do crescimento']
      },
      {
        title: 'Follow-on',
        description: 'Aproveite novas emissões de empresas já conhecidas.',
        fullDescription: 'Oferta subsequente de ações de empresas já listadas. Geralmente para financiar expansão ou reduzir dívidas.',
        example: 'A Petrobras fez follow-on para investir no pré-sal. Quem participou, comprou ações com desconto e viu valorização posterior.',
        risks: 'Diluição da participação, momento de mercado, execução do plano de negócios.',
        benefits: ['Preço com desconto', 'Empresa conhecida', 'Financiar crescimento', 'Oportunidade pontual']
      }
    ]
  },
  {
    id: 'fundos',
    name: 'Fundos de Investimento',
    description: 'Deixe gestores profissionais cuidarem do seu dinheiro. Acesse estratégias sofisticadas com valores acessíveis.',
    products: [
      {
        title: 'Fundos Multimercado',
        description: 'Estratégias diversificadas para diferentes momentos de mercado.',
        fullDescription: 'Fundos que podem investir em diversos ativos: ações, renda fixa, câmbio, etc. Gestão ativa busca superar o CDI.',
        example: 'Um fundo multimercado pode render 150% do CDI em um ano bom. Com R$ 5.000, teria cerca de R$ 5.975 (CDI + 50%).',
        risks: 'Performance depende do gestor. Pode ter volatilidade e até prejuízo. Taxas reduzem retorno.',
        benefits: ['Gestão profissional', 'Diversificação automática', 'Estratégias complexas', 'Diferentes perfis de risco']
      },
      {
        title: 'Fundos de Ações',
        description: 'Invista em uma carteira diversificada gerida por especialistas.',
        fullDescription: 'Fundos que investem no mínimo 67% em ações. Gestores selecionam as melhores empresas segundo sua análise.',
        example: 'Um fundo de ações pode ter 30 empresas na carteira. Com R$ 1.000, você já está diversificado. Se o fundo subir 25% no ano, seu patrimônio vai a R$ 1.250.',
        risks: 'Alta volatilidade, pode ter prejuízos significativos em quedas da bolsa.',
        benefits: ['Diversificação profissional', 'Análise especializada', 'Acesso com pouco capital', 'Come-cotas semestral']
      }
    ]
  }
];

export function PopularInvestmentsSection() {
  const [activeTab, setActiveTab] = useState('renda-fixa');
  const [selectedInvestment, setSelectedInvestment] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const activeCategory = investmentCategories.find(cat => cat.id === activeTab);

  const handleSaibaMais = (product: any) => {
    setSelectedInvestment(product);
    setIsModalOpen(true);
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Conheça os <span className="text-primary">investimentos</span><br className="md:hidden" /> mais populares do mercado
          </h2>
        </motion.div>

        {/* Tab Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 border-b border-gray-800">
            {investmentCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`
                  px-4 md:px-6 py-3 text-sm md:text-base font-medium transition-all duration-300
                  border-b-2 -mb-[2px]
                  ${activeTab === category.id 
                    ? 'text-white border-primary' 
                    : 'text-gray-400 border-transparent hover:text-gray-200'
                  }
                `}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Tab Content */}
        {activeCategory && (
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-7xl mx-auto"
          >
            {/* Category Header */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                {activeCategory.name}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
                {activeCategory.description}
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeCategory.products.map((product, index) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] rounded-2xl border border-white/10 p-8 hover:border-primary/50 hover:from-white/[0.12] hover:to-white/[0.05] transition-all duration-300 relative overflow-hidden">
                    <h4 className="text-xl font-semibold text-white mb-3">
                      {product.title}
                    </h4>
                    <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                      {product.description}
                    </p>
                    <button 
                      onClick={() => handleSaibaMais(product)}
                      className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all duration-300"
                    >
                      Aprofunde-se mais 
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    
                    {/* Info icon on hover */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <InfoIcon className="w-5 h-5 text-gray-500" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        
        {/* CTA para E-books */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto mt-24 mb-8"
        >
          <div className="text-left">
            <p className="text-lg text-gray-400 italic mb-2">
              "O juro composto é a oitava maravilha do mundo.<br />
              Quem entende, ganha. Quem não entende, paga."
            </p>
            <p className="text-sm text-gray-500">
              — Albert Einstein
            </p>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <InvestmentModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        investment={selectedInvestment}
      />
    </section>
  );
}