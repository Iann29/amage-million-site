'use client';

import { motion } from 'framer-motion';
import { Check, Star, TrendingUp, Shield, Users, MessageSquare, BarChart3, Zap, Clock, Award, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function PricingSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="pb-20 bg-[#151515] relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header com persuasão */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            Tenha a <span className="text-primary font-bold">luz</span> que você precisa
            <span className="block">para começar a investir</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
            Saia da escuridão financeira. Com orientação profissional, você enxerga
            <strong className="text-primary"> oportunidades</strong> onde outros vêem apenas <strong className="text-white">riscos</strong>.
          </p>
        </motion.div>

        {/* Plano único centralizado */}
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
              relative rounded-3xl border-2 border-primary bg-card/50 backdrop-blur-sm p-8
              transform transition-all duration-300 hover:scale-[1.02]
            `}
          >
            {/* Badge popular */}
            <div className="absolute -top-3 -right-3 bg-primary px-4 py-2 rounded-bl-2xl rounded-tr-2xl">
              <span className="text-background font-bold text-xs">MAIS VENDIDO</span>
            </div>

            {/* Nome do plano */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-1">Plano Start</h3>
              <p className="text-sm text-gray-400">Pontapé inicial com estrutura completa</p>
            </div>

            {/* Preços */}
            <div className="text-center mb-6 space-y-3">
              <div className="bg-primary/10 rounded-xl p-5 border border-primary/20">
                <p className="text-xs text-gray-400 mb-1">Investimento inicial</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold text-white">R$ 149</span>
                  <span className="text-lg text-gray-400">,90</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Pagamento único</p>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-gray-400 my-4">
                <span className="text-2xl">+</span>
              </div>
              
              <div className="bg-background/50 rounded-xl p-4 border border-gray-800">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-xl font-bold text-white">R$ 69,90</span>
                  <span className="text-sm text-gray-400">/mês</span>
                </div>
                <p className="text-xs text-gray-500">Acompanhamento e atualização</p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white font-medium">Contato próximo com analistas</p>
                  <p className="text-xs text-gray-500">Tire dúvidas direto com especialistas</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white font-medium">Abertura de conta com suporte</p>
                  <p className="text-xs text-gray-500">Acompanhamento total no processo</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white font-medium">Definição do perfil de investidor</p>
                  <p className="text-xs text-gray-500">Descubra a melhor estratégia para você</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white font-medium">Carteira Exclusiva Million</p>
                  <p className="text-xs text-gray-500">Composição ideal para o cenário atual</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white font-medium">Grupo VIP de notícias diárias</p>
                  <p className="text-xs text-gray-500">Informações exclusivas do mercado</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                  <BookOpen className="w-3 h-3 text-green-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white font-medium flex items-center gap-2">
                    2 Ebooks GRÁTIS 
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">Bônus exclusivo</span>
                  </p>
                  <p className="text-xs text-gray-500">Economia Sem Complicação + Termos do Mercado</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link href="https://pay.kiwify.com.br/example" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  w-full bg-primary text-background py-3 rounded-lg font-bold text-base
                  relative overflow-hidden transition-all duration-300
                `}
              >
                <span className="relative z-10">Começar agora mesmo</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0"
                  animate={{
                    x: isHovered ? ['-100%', '100%'] : '-100%',
                  }}
                  transition={{
                    duration: 0.7,
                    ease: 'easeInOut',
                  }}
                />
              </motion.button>
            </Link>

            {/* Garantias */}
            <div className="mt-6 pt-6 border-t border-primary/20">
              <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  <span>Garantia de 7 dias</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare className="w-3 h-3" />
                  <span>Suporte prioritário</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>


        {/* Comparação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-32 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Por que investir com orientação?
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Sem orientação */}
            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
              <h4 className="font-bold text-red-400 mb-4 flex items-center gap-2">
                <span className="text-2xl">❌</span> Investindo sozinho
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>• Decisões baseadas em emoção</li>
                <li>• Compra na alta, vende na baixa</li>
                <li>• Sem estratégia definida</li>
                <li>• Perde oportunidades importantes</li>
                <li>• Média de -8% ao ano (perde pra inflação)</li>
              </ul>
            </div>
            
            {/* Com orientação */}
            <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-6">
              <h4 className="font-bold text-green-400 mb-4 flex items-center gap-2">
                <span className="text-2xl">✅</span> Com o Plano Start
              </h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>• Decisões técnicas e fundamentadas</li>
                <li>• Aproveita correções para comprar</li>
                <li>• Estratégia personalizada e clara</li>
                <li>• Recebe alertas de oportunidades</li>
                <li>• Média de +18,2% ao ano (bate a inflação)</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Seção sobre acompanhamento mensal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-32 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-16">
            Por que o acompanhamento mensal é <span className="text-primary font-bold">essencial</span>?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
            {[
              {
                icon: Clock,
                title: "Mercado em movimento",
                description: "O cenário econômico muda diariamente. Sem orientação contínua, você perde oportunidades e pode tomar decisões erradas."
              },
              {
                icon: Shield,
                title: "Proteção do patrimônio",
                description: "Ajustamos sua carteira conforme o mercado, protegendo seus investimentos de crises e maximizando ganhos."
              },
              {
                icon: MessageSquare,
                title: "Suporte quando precisar",
                description: "Dúvidas surgem a qualquer momento. Com nosso acompanhamento, você tem respostas rápidas e precisas sempre."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:scale-105 hover:rotate-[10deg]">
                  <item.icon className="w-8 h-8 text-[#151515]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <p className="text-lg text-gray-900 font-medium mb-2">
              💡 Investir sem acompanhamento é como dirigir vendado
            </p>
            <p className="text-gray-600">
              Por apenas R$ 69,90/mês, você tem um time de especialistas cuidando do seu dinheiro 24/7
            </p>
          </div>
        </motion.div>


        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="text-lg text-gray-400 mb-6">
            Não perca mais tempo vendo seu dinheiro perder valor
          </p>
          <Link 
            href="https://pay.kiwify.com.br/example" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-background px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105"
          >
            Garantir minha vaga agora
          </Link>
        </motion.div>
      </div>
    </section>
  );
}