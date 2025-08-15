'use client';

import { motion } from 'framer-motion';
import { Check, Shield, MessageSquare, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';

export function PricingSection() {
  const [, setIsHovered] = useState(false);

  return (
    <section className="relative overflow-hidden">
      {/* Seção com fundo branco */}
      <div className="bg-white pt-16 pb-32 rounded-t-[3rem]">
        <div className="container mx-auto px-4 relative z-10">
          {/* Header com persuasão */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-light text-gray-900">
              Tenha a <span className="text-primary font-bold">luz</span> que você precisa
              <span className="block">para começar a investir...</span>
            </h2>
          </motion.div>

          {/* Plano único centralizado - SEM VALORES */}
          <div className="max-w-lg mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`
                relative rounded-3xl bg-[#1a1a1a] border border-gray-800 p-8
                transform transition-all duration-300 hover:scale-[1.02]
              `}
            >
              {/* Nome do plano */}
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">Plano Start</h3>
                <p className="text-gray-400">Seu primeiro passo rumo à liberdade financeira</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white font-medium">Acompanhamento personalizado</p>
                    <p className="text-xs text-gray-500">Analistas dedicados ao seu sucesso</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white font-medium">Setup completo de investimentos</p>
                    <p className="text-xs text-gray-500">Do zero ao primeiro investimento</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white font-medium">Carteira Exclusiva Million</p>
                    <p className="text-xs text-gray-500">Estratégias que geraram +127% em 2023</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white font-medium">Grupo VIP de oportunidades</p>
                    <p className="text-xs text-gray-500">Alertas e análises em tempo real</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white font-medium">Suporte direto via WhatsApp</p>
                    <p className="text-xs text-gray-500">Tire suas dúvidas quando precisar</p>
                  </div>
                </div>
              </div>


              {/* CTA Button */}
              <Link 
                href="https://wa.me/5554996578874?text=Olá!%20Quero%20saber%20mais%20sobre%20o%20Plano%20Start"
                target="_blank"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold text-base transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                Quero conhecer o Plano Start
              </Link>

            </motion.div>
          </div>
        </div>
      </div>

      {/* Seção com fundo escuro */}
      <div className="bg-[#151515] pt-24 pb-20">
        <div className="container mx-auto px-4 relative z-10">
          {/* Comparação */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-light text-center mb-8">
              Por que investir com <span className="text-primary font-bold">orientação</span>?
            </h2>
            
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
                  <li>• Risco de perder dinheiro</li>
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
                  <li>• Resultados comprovados e consistentes</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Seção sobre acompanhamento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-32 max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-16">
              Por que o acompanhamento é <span className="text-primary font-bold">essencial</span>?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
              {[
                {
                  icon: Clock,
                  title: "Mercado em movimento",
                  description: "O cenário econômico muda diariamente. Sem orientação contínua, você perde oportunidades."
                },
                {
                  icon: Shield,
                  title: "Proteção do patrimônio",
                  description: "Ajustamos sua carteira conforme o mercado, protegendo e maximizando seus ganhos."
                },
                {
                  icon: MessageSquare,
                  title: "Suporte quando precisar",
                  description: "Dúvidas surgem a qualquer momento. Tenha respostas rápidas e precisas sempre."
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
                💡 Investir sem orientação é como dirigir vendado
              </p>
              <p className="text-gray-600">
                Tenha especialistas cuidando do seu dinheiro todos os dias
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
              href="https://wa.me/5554996578874?text=Olá!%20Vim%20pelo%20site%20e%20quero%20começar%20a%20investir"
              target="_blank"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <FaWhatsapp className="w-5 h-5" />
              Falar com um especialista agora
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}