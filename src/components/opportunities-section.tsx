'use client';

import { Shield, BookOpen, Users, BarChart3, ArrowRight } from 'lucide-react';
import { GlareCard } from '@/components/ui/glare-card';
import { GetStartedButton } from '@/components/ui/get-started-button';

const solutions = [
  {
    icon: BookOpen,
    title: "Educação Financeira",
    description: "Conteúdo educativo sobre renda fixa, ações e fundos imobiliários para você entender cada modalidade.",
    highlight: "Conhecimento é poder"
  },
  {
    icon: BarChart3,
    title: "Análise de Mercado",
    description: "Estudos aprofundados sobre tendências e oportunidades em diferentes classes de ativos do mercado brasileiro.",
    highlight: "Visão estratégica"
  },
  {
    icon: Shield,
    title: "Gestão de Riscos",
    description: "Orientação sobre como diversificar e proteger seu patrimônio através de diferentes instrumentos financeiros.",
    highlight: "Proteção inteligente"
  },
  {
    icon: Users,
    title: "Acompanhamento Personalizado",
    description: "Suporte contínuo para esclarecer dúvidas e auxiliar na sua jornada de educação financeira.",
    highlight: "Sempre presente"
  }
];

export function OpportunitiesSection() {
  return (
    <div className="relative mt-8">
        {/* Golden Circle Divider */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-20">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
            <img 
              src="/images/divisória.svg" 
              alt="Million Logo" 
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>
        
        <section className="bg-white pt-16 pb-16 md:pt-20 md:pb-20 rounded-t-2xl md:rounded-t-3xl rounded-b-2xl md:rounded-b-3xl shadow-[0_-20px_60px_rgba(0,0,0,0.06)] relative">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
          
          {/* Dots pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />

          {/* Watermark background */}
          <div 
            className="absolute -bottom-72 -left-96 w-[2000px] h-[1600px] opacity-[0.04]"
            style={{
              backgroundImage: `url('/images/conhecafundo.svg')`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain'
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Title */}
          <div className="max-w-6xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-5xl lg:text-5xl text-[#151515] font-bold font-[family-name:var(--font-lato)]">
              E como a <span className="text-primary">Million</span> vai te ajudar?
            </h2>
          </div>

          {/* Solution cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <div key={index} className="group h-full">
              <GlareCard className="p-10 md:p-6">
                <div className="flex flex-col min-h-full">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6">
                    <solution.icon className="w-6 h-6 text-[#151515]" />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-white mb-4">
                    {solution.title}
                  </h4>
                  <p className="text-gray-300 text-xs md:text-sm leading-loose mb-8">
                    {solution.description}
                  </p>
                  <div className="mt-auto">
                    <span className="text-primary font-semibold text-xs md:text-sm lg:hidden block">
                      {solution.highlight}
                    </span>
                  </div>
                </div>
              </GlareCard>
            </div>
          ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-12">
            <GetStartedButton 
              href="#contato"
              className="bg-[#151515] text-white hover:bg-[#151515]/90 py-4 shadow-lg hover:shadow-xl inline-flex items-center gap-2 group"
            >
              Comece sua jornada agora
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </GetStartedButton>
          </div>
        </div>
      </section>
    </div>
  );
}