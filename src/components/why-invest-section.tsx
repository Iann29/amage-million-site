'use client';

import Component, { AnimatedCounter } from '@/components/ui/stacking-card';

const investmentProblems = [
  {
    title: 'Educação <span class="underline decoration-red-500 decoration-4 underline-offset-4">zero</span>',
    description: '<div class="space-y-4 md:space-y-6"><p class="text-lg md:text-2xl font-bold">"O governo não ensina você a investir"</p><p class="text-sm md:text-lg leading-relaxed opacity-90 mt-3 md:mt-4">Apenas 21% das crianças brasileiras recebem alguma educação financeira. O sistema foi projetado para formar funcionários obedientes, não investidores independentes. Enquanto isso, a elite financeira passa esse conhecimento de pai para filho.</p><div class="mt-6 md:mt-8 p-4 md:p-6 bg-white/10 rounded-lg"><p class="text-2xl md:text-3xl font-bold text-red-500">21%</p><p class="text-xs md:text-sm uppercase tracking-wide opacity-80 mt-1 md:mt-2">de educação financeira na infância</p></div></div>',
    link: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop',
    color: '#1a1a1a',
  },
  {
    title: 'Cultura do <span class="underline decoration-red-500 decoration-4 underline-offset-4">imediatismo</span>',
    description: '<div class="space-y-4 md:space-y-6"><p class="text-lg md:text-2xl font-bold">"77% das famílias estão endividadas"</p><p class="text-sm md:text-lg leading-relaxed opacity-90 mt-3 md:mt-4">61% não conseguem poupar nada do que ganham. 55% não controlam os gastos do cartão. 56% cedem aos impulsos de compra. A mentalidade do "vou aproveitar agora" está criando uma geração inteira sem patrimônio.</p><div class="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4"><div class="flex-1 p-4 md:p-6 bg-white/10 rounded-lg"><p class="text-2xl md:text-3xl font-bold text-red-500">77%</p><p class="text-xs md:text-sm uppercase tracking-wide opacity-80 mt-1 md:mt-2">das famílias endividadas</p></div><div class="flex-1 p-4 md:p-6 bg-white/10 rounded-lg"><p class="text-2xl md:text-3xl font-bold text-red-500">61%</p><p class="text-xs md:text-sm uppercase tracking-wide opacity-80 mt-1 md:mt-2">não poupam nada</p></div></div></div>',
    link: 'https://images.unsplash.com/photo-1556742521-9713bf272865?q=80&w=1000&auto=format&fit=crop',
    color: '#2a2a2a',
  },
  {
    title: '<span class="underline decoration-red-500 decoration-4 underline-offset-4">Medo</span> e desconfiança',
    description: '<div class="space-y-4 md:space-y-6"><p class="text-lg md:text-2xl font-bold">"90% reconhecem necessidade de educação financeira"</p><p class="text-sm md:text-lg leading-relaxed opacity-90 mt-3 md:mt-4">Mas o medo paralisa. Décadas de planos econômicos fracassados criaram um trauma coletivo. A maioria prefere perder dinheiro na poupança do que aprender a investir. O medo de "perder tudo" paralisa milhões de brasileiros.</p><div class="mt-6 md:mt-8 p-4 md:p-6 bg-white/10 rounded-lg text-center"><p class="text-sm md:text-lg">Enquanto isso, a poupança...</p><p class="text-2xl md:text-3xl font-bold text-red-400 mt-1 md:mt-2">-3,5% ao ano</p><p class="text-xs md:text-sm uppercase tracking-wide opacity-80 mt-1 md:mt-2">perde para a inflação</p></div></div>',
    link: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=1000&auto=format&fit=crop',
    color: '#1a1a1a',
  },
  {
    title: 'Inflação <span class="underline decoration-red-500 decoration-4 underline-offset-4">silenciosa</span>',
    description: '<div class="space-y-4 md:space-y-6"><p class="text-lg md:text-2xl font-bold">"R$ 100 = R$ 75 em 5 anos"</p><p class="text-sm md:text-lg leading-relaxed opacity-90 mt-3 md:mt-4">A inflação é um imposto invisível que corrói seu dinheiro 24 horas por dia. Enquanto você dorme, trabalha ou descansa, seu poder de compra está sendo destruído silenciosamente.</p><div class="mt-6 md:mt-8 p-4 md:p-6 bg-white/10 rounded-lg"><p class="text-sm md:text-lg opacity-80">Seu dinheiro derrete</p><p class="text-2xl md:text-3xl font-bold text-red-500 mt-1 md:mt-2">33%</p><p class="text-xs md:text-sm uppercase tracking-wide opacity-60 mt-1 md:mt-2">de inflação acumulada em 5 anos</p></div></div>',
    link: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=1000&auto=format&fit=crop',
    color: '#2a2a2a',
  },
];

export function WhyInvestSection() {
  return (
    <div className="relative why-invest-section">
      <Component projects={investmentProblems} />
    </div>
  );
}