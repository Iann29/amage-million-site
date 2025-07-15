'use client';

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { TrendingDown, Users, AlertCircle, DollarSign, Timer } from 'lucide-react';

export function ProblemsTimelineNew() {
  const data = [
    {
      title: "Crise Histórica",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <p className="text-white/80 text-base md:text-lg font-semibold mb-4">
              "A economia do Brasil sempre foi caracterizada por instabilidade"
            </p>
            <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
              Desde a independência em 1822, o Brasil já nasceu em crise econômica. 
              São mais de 200 anos alternando entre recessões, altas taxas de inflação, 
              décadas perdidas e crescimento insuficiente.
            </p>
            
            <div className="bg-black/50 border border-red-500/20 rounded-xl p-6 inline-block">
              <div className="text-3xl font-bold text-red-500 mb-2">82%</div>
              <p className="text-sm text-gray-400">
                dos países cresceram mais que o Brasil na última década
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative h-64 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent rounded-2xl" />
            <img
              src="/images/problema-1.svg"
              alt="Crise histórica"
              className="rounded-2xl object-cover w-full h-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Educação Zero",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <p className="text-white/80 text-base md:text-lg font-semibold mb-4">
              "O governo não ensina você a investir"
            </p>
            <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
              Apenas 21% das crianças brasileiras recebem alguma educação financeira. 
              O sistema foi projetado para formar funcionários obedientes, não investidores independentes. 
              Enquanto isso, a elite financeira passa esse conhecimento de pai para filho.
            </p>
            
            <div className="bg-black/50 border border-red-500/20 rounded-xl p-6 inline-block">
              <div className="text-3xl font-bold text-red-500 mb-2">21%</div>
              <p className="text-sm text-gray-400">
                de educação financeira na infância
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative h-64 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-2xl" />
            <img
              src="/images/problema-2.svg"
              alt="Educação zero"
              className="rounded-2xl object-cover w-full h-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Imediatismo",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <p className="text-white/80 text-base md:text-lg font-semibold mb-4">
              "77% das famílias estão endividadas"
            </p>
            <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
              61% não conseguem poupar nada do que ganham. 55% não controlam os gastos do cartão. 
              56% cedem aos impulsos de compra. A mentalidade do "vou aproveitar agora" está criando 
              uma geração inteira sem patrimônio.
            </p>
            
            <div className="bg-black/50 border border-red-500/20 rounded-xl p-6 inline-block">
              <div className="text-3xl font-bold text-red-500 mb-2">77%</div>
              <p className="text-sm text-gray-400">
                das famílias brasileiras estão endividadas
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative h-64 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-2xl" />
            <img
              src="/images/problema-3.svg"
              alt="Imediatismo"
              className="rounded-2xl object-cover w-full h-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Medo",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <p className="text-white/80 text-base md:text-lg font-semibold mb-4">
              "90% reconhecem necessidade de educação financeira"
            </p>
            <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
              Mas o medo paralisa. Décadas de planos econômicos fracassados criaram um trauma coletivo. 
              A maioria prefere perder dinheiro na poupança do que aprender a investir. 
              O medo de "perder tudo" paralisa milhões de brasileiros.
            </p>
            
            <div className="bg-black/50 border border-red-500/20 rounded-xl p-6 inline-block">
              <div className="text-3xl font-bold text-red-500 mb-2">-3,5% ao ano</div>
              <p className="text-sm text-gray-400">
                é quanto a poupança perde para a inflação
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative h-64 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-2xl" />
            <img
              src="/images/problema-4.svg"
              alt="Medo"
              className="rounded-2xl object-cover w-full h-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Inflação",
      content: (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <p className="text-white/80 text-base md:text-lg font-semibold mb-4">
                "R$ 100 = R$ 75 em 5 anos"
              </p>
              <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
                A inflação é um imposto invisível que corrói seu dinheiro 24 horas por dia. 
                Enquanto você dorme, trabalha ou descansa, seu poder de compra está sendo 
                destruído silenciosamente.
              </p>
              
              <div className="bg-black/50 border border-red-500/20 rounded-xl p-6 inline-block">
                <div className="text-3xl font-bold text-red-500 mb-2">33%</div>
                <p className="text-sm text-gray-400">
                  de inflação acumulada em 5 anos
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2 relative h-64 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent rounded-2xl" />
              <img
                src="/images/problema-5.svg"
                alt="Inflação"
                className="rounded-2xl object-cover w-full h-full"
              />
            </div>
          </div>
          
        </div>
      ),
    },
  ];

  return (
    <section className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-white">
          O que realmente <span className="text-red-500">trava</span> o crescimento do{' '}
          <span className="bg-gradient-to-r from-green-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
            Brasil
          </span>?
        </h2>
        <p className="text-gray-400 text-base md:text-lg text-center max-w-2xl mx-auto mb-16">
          5 problemas que mantêm o brasileiro preso em um ciclo de pobreza
        </p>
      </div>
      <Timeline data={data} />
    </section>
  );
}