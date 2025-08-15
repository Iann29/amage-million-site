'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {} from 'lucide-react';
import { GetStartedButton } from '@/components/ui/get-started-button';

const plans = [
  {
    name: 'Essencial',
    price: 97,
    description: 'Para quem está começando',
    features: [
      'Análise de perfil completa',
      'Estratégia personalizada inicial',
      'Relatórios mensais',
      'Acesso ao grupo exclusivo',
      'Conteúdo educacional premium',
    ],
    highlighted: false,
  },
  {
    name: 'Evolução',
    price: 197,
    description: 'Para quem quer acelerar',
    features: [
      'Tudo do plano Essencial',
      'Reuniões quinzenais individuais',
      'Revisão mensal da estratégia',
      'Suporte por email ilimitado',
      'Certificado de conclusão',
    ],
    highlighted: true,
    badge: 'Mais escolhido',
  },
  {
    name: 'Premium',
    price: 397,
    description: 'Para resultados máximos',
    features: [
      'Tudo do plano Evolução',
      'Consultoria semanal 1:1',
      'Suporte prioritário WhatsApp',
      'Análises de oportunidades em tempo real',
      'Mentoria para objetivos específicos',
    ],
    highlighted: false,
  },
];

export function PricingPlans() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sendWhatsAppMessage = (planName: string) => {
    const message = `Olá! Vi o site da Million e tenho interesse no plano ${planName}. Gostaria de saber mais detalhes.`;
    const whatsappUrl = `https://wa.me/5554965778874?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="planos" ref={ref} className="py-24 bg-muted/30">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Investimento em <span className="font-semibold text-primary">conhecimento</span>
          </h2>
          <p className="text-lg text-secondary max-w-3xl">
            O único investimento com retorno garantido é em você mesmo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {plan.badge && (
                <div className="absolute -top-3 left-8 z-10">
                  <div className="bg-primary text-background px-3 py-1 text-xs font-medium uppercase tracking-wider">
                    {plan.badge}
                  </div>
                </div>
              )}
              
              <div className={`h-full bg-background border ${
                plan.highlighted ? 'border-primary' : 'border-muted'
              } p-8`}>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-sm text-secondary mb-6">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-secondary">R$</span>
                    <span className="text-4xl font-light">{plan.price}</span>
                    <span className="text-sm text-secondary">/mês</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 border-t border-muted pt-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                <GetStartedButton
                  onClick={() => sendWhatsAppMessage(plan.name)}
                  className={`w-full py-3 text-sm ${
                    plan.highlighted
                      ? 'bg-primary text-background hover:bg-primary/90'
                      : 'bg-transparent text-primary border border-primary hover:bg-primary hover:text-background'
                  }`}
                >
                  Começar agora
                </GetStartedButton>

                <p className="text-xs text-center text-secondary mt-4">
                  Cancele quando quiser
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-secondary">
            Todos os planos incluem garantia de 7 dias. Não gostou? Devolvemos seu dinheiro.
          </p>
        </motion.div>
      </div>
    </section>
  );
}