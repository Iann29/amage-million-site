'use client';

import Component, { AnimatedCounter } from '@/components/ui/stacking-card';

const investmentProblems = [
  {
    title: 'Educação <span class="underline decoration-red-500 decoration-4 underline-offset-4">zero</span>',
    description: '<div class="space-y-6"><p class="text-2xl font-bold">"O governo não ensina você a investir"</p><p class="text-lg leading-relaxed opacity-90 mt-4">Apenas 21% das crianças brasileiras recebem alguma educação financeira. O sistema foi projetado para formar funcionários obedientes, não investidores independentes. Enquanto isso, a elite financeira passa esse conhecimento de pai para filho.</p><div class="mt-8 p-6 bg-white/10 rounded-lg"><p class="text-3xl font-bold text-red-500">21%</p><p class="text-sm uppercase tracking-wide opacity-80 mt-2">de educação financeira na infância</p></div></div>',
    link: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop',
    color: '#1a1a1a',
  },
  {
    title: 'Cultura do <span class="underline decoration-red-500 decoration-4 underline-offset-4">imediatismo</span>',
    description: '<div class="space-y-6"><p class="text-2xl font-bold">"77% das famílias estão endividadas"</p><p class="text-lg leading-relaxed opacity-90 mt-4">61% não conseguem poupar nada do que ganham. 55% não controlam os gastos do cartão. 56% cedem aos impulsos de compra. A mentalidade do "vou aproveitar agora" está criando uma geração inteira sem patrimônio.</p><div class="mt-8 flex gap-4"><div class="flex-1 p-6 bg-white/10 rounded-lg"><p class="text-3xl font-bold text-red-500">77%</p><p class="text-sm uppercase tracking-wide opacity-80 mt-2">das famílias endividadas</p></div><div class="flex-1 p-6 bg-white/10 rounded-lg"><p class="text-3xl font-bold text-red-500">61%</p><p class="text-sm uppercase tracking-wide opacity-80 mt-2">não poupam nada</p></div></div></div>',
    link: 'https://images.unsplash.com/photo-1556742521-9713bf272865?q=80&w=1000&auto=format&fit=crop',
    color: '#2a2a2a',
  },
  {
    title: '<span class="underline decoration-red-500 decoration-4 underline-offset-4">Medo</span> e desconfiança',
    description: '<div class="space-y-6"><p class="text-2xl font-bold">"90% reconhecem necessidade de educação financeira"</p><p class="text-lg leading-relaxed opacity-90 mt-4">Mas o medo paralisa. Décadas de planos econômicos fracassados criaram um trauma coletivo. A maioria prefere perder dinheiro na poupança do que aprender a investir. O medo de "perder tudo" paralisa milhões de brasileiros.</p><div class="mt-8 p-6 bg-white/10 rounded-lg text-center"><p class="text-lg">Enquanto isso, a poupança...</p><p class="text-3xl font-bold text-red-400 mt-2">-3,5% ao ano</p><p class="text-sm uppercase tracking-wide opacity-80 mt-2">perde para a inflação</p></div></div>',
    link: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=1000&auto=format&fit=crop',
    color: '#1a1a1a',
  },
  {
    title: 'Inflação <span class="underline decoration-red-500 decoration-4 underline-offset-4">silenciosa</span>',
    description: '<div class="space-y-6"><p class="text-2xl font-bold">"R$ 100 = R$ 75 em 5 anos"</p><p class="text-lg leading-relaxed opacity-90 mt-4">A inflação é um imposto invisível que corrói seu dinheiro 24 horas por dia. Enquanto você dorme, trabalha ou descansa, seu poder de compra está sendo destruído silenciosamente.</p><div class="mt-8 p-6 bg-white/10 rounded-lg"><p class="text-lg opacity-80">Seu dinheiro derrete</p><p class="text-3xl font-bold text-red-500 mt-2">33%</p><p class="text-sm uppercase tracking-wide opacity-60 mt-2">de inflação acumulada em 5 anos</p></div></div>',
    link: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=1000&auto=format&fit=crop',
    color: '#2a2a2a',
  },
  {
    title: 'Nossa solução para <span class="underline decoration-primary decoration-4 underline-offset-4">você</span>',
    description: '<div class="flex flex-col h-full"><div class="space-y-4 flex-1"><p class="text-2xl mb-2"><span style="text-decoration: line-through; opacity: 0.5;">"É muito difícil começar"</span></p><p class="text-2xl font-bold mb-6">Com a Million, amanhã você já inicia o seu dia sabendo onde investir.</p><div class="space-y-4 mb-12"><div class="flex items-start gap-4"><div class="w-12 h-12 bg-[#151515] rounded-lg flex items-center justify-center flex-shrink-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 11H15M9 15H15M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z" stroke="#D8AE63" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 7H12.5C13.3284 7 14 7.67157 14 8.5C14 9.32843 13.3284 10 12.5 10H9V7Z" stroke="#D8AE63" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div><p class="font-semibold text-lg">Análise gratuita do seu perfil</p><p class="opacity-80">Entenda onde você está e onde pode chegar</p></div></div><div class="flex items-start gap-4"><div class="w-12 h-12 bg-[#151515] rounded-lg flex items-center justify-center flex-shrink-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8C21 7.44772 20.5523 7 20 7H4C3.44772 7 3 7.44772 3 8V16M21 16C21 16.5523 20.5523 17 20 17H4C3.44772 17 3 16.5523 3 16M21 16L16.5 11.5L14 14L10 10L3 16" stroke="#D8AE63" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div><p class="font-semibold text-lg">Estratégia personalizada</p><p class="opacity-80">Plano de investimento sob medida para seus objetivos</p></div></div><div class="flex items-start gap-4"><div class="w-12 h-12 bg-[#151515] rounded-lg flex items-center justify-center flex-shrink-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#D8AE63" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 22L20 20" stroke="#D8AE63" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 8.5C15 10.433 13.433 12 11.5 12C9.567 12 8 10.433 8 8.5C8 6.567 9.567 5 11.5 5C13.433 5 15 6.567 15 8.5Z" stroke="#D8AE63" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.5 18.2C5.5 16.3 8.5 14.5 11.5 14.5C14.5 14.5 17.5 16.3 17.5 18.2" stroke="#D8AE63" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div><p class="font-semibold text-lg">Consultores reais</p><p class="opacity-80">Humanos de verdade para tirar suas dúvidas</p></div></div></div></div><div class="mt-auto pt-8"><a href="https://wa.me/5511999999999" target="_blank" class="group relative overflow-hidden inline-block bg-[#151515] text-[#D8AE63] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 font-[family-name:var(--font-lato)]"><span class="mr-8 transition-opacity duration-500 group-hover:opacity-0">Falar com Consultor</span><i class="absolute right-2 top-1/2 -translate-y-1/2 rounded-sm z-10 grid w-10 h-10 place-items-center transition-all duration-500 bg-[#D8AE63]/20 group-hover:w-[calc(100%-1rem)] group-hover:h-[calc(100%-1rem)] group-hover:top-2 group-hover:translate-y-0 group-active:scale-95"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 5L15.5 12L8.5 19" stroke="#D8AE63" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></i></a></div></div>',
    link: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    color: '#D8AE63',
  },
];

export function WhyInvestSection() {
  return (
    <div className="relative">
      <Component projects={investmentProblems} />
    </div>
  );
}