'use client';

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { TrendingDown, BookX, ShoppingCart, Brain, Clock } from 'lucide-react';

export function ProblemsVisualTimeline() {
  const data = [
    {
      title: "1822 - Hoje",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">Crise Perpétua</h3>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Desde a independência, o Brasil vive em instabilidade econômica. 
              200+ anos de crises, inflações e décadas perdidas.
            </p>
            
            <div className="bg-gradient-to-r from-red-900/20 to-red-600/20 p-6 rounded-xl">
              <div className="text-4xl font-bold text-red-400 mb-2">82%</div>
              <p className="text-sm text-gray-400">
                dos países cresceram mais que o Brasil na última década
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent rounded-2xl" />
            <img
              src="/images/problema-1.svg"
              alt="Crise econômica"
              className="w-full h-full object-cover rounded-2xl opacity-50"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Educação Zero",
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-2xl" />
            <img
              src="/images/problema-2.svg"
              alt="Educação zero"
              className="w-full h-full object-cover rounded-2xl opacity-50"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                <BookX className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">Sistema Falho</h3>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              O governo não ensina sobre dinheiro. Sistema criado para formar 
              funcionários obedientes, não investidores.
            </p>
            
            <div className="flex gap-4">
              <div className="bg-orange-900/30 p-4 rounded-xl flex-1">
                <div className="text-3xl font-bold text-orange-400">21%</div>
                <p className="text-xs text-gray-400">educação financeira</p>
              </div>
              <div className="bg-orange-900/30 p-4 rounded-xl flex-1">
                <div className="text-3xl font-bold text-orange-400">79%</div>
                <p className="text-xs text-gray-400">sem preparo</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Cultura Tóxica",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-yellow-500" />
            </div>
            <h3 className="text-2xl font-bold text-white">Imediatismo Fatal</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-600/20 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">77%</div>
              <p className="text-sm text-gray-300">famílias endividadas</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-600/20 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">61%</div>
              <p className="text-sm text-gray-300">não poupam nada</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-600/20 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">55%</div>
              <p className="text-sm text-gray-300">sem controle</p>
            </div>
          </div>
          
          <blockquote className="border-l-4 border-yellow-500 pl-4 text-gray-300 italic">
            "Vou aproveitar agora" - A frase que destrói o futuro de milhões
          </blockquote>
        </div>
      ),
    },
    {
      title: "Paralisia",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
              <Brain className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="text-2xl font-bold text-white">Medo Irracional</h3>
          </div>
          
          <div className="bg-gradient-to-r from-purple-900/20 to-purple-600/20 p-8 rounded-2xl mb-6">
            <p className="text-lg text-gray-300 mb-4">
              90% sabem que precisam aprender sobre dinheiro...
            </p>
            <p className="text-2xl font-bold text-purple-400">
              Mas o medo de "perder tudo" paralisa a ação
            </p>
          </div>
          
          <div className="flex items-center justify-between p-6 bg-red-900/20 rounded-xl">
            <div>
              <p className="text-gray-400 mb-1">Resultado: Poupança</p>
              <div className="text-3xl font-bold text-red-500">-3,5% ao ano</div>
            </div>
            <div className="text-6xl text-red-500/20">💸</div>
          </div>
        </div>
      ),
    },
    {
      title: "O Fim",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-white">Inflação Assassina</h3>
          </div>
          
          <div className="bg-gradient-to-br from-red-900/40 to-orange-900/40 p-8 rounded-2xl mb-8">
            <div className="text-center mb-6">
              <p className="text-gray-300 mb-2">Seu R$ 100 hoje será</p>
              <div className="text-5xl font-bold text-red-500">R$ 75</div>
              <p className="text-gray-400 mt-2">em apenas 5 anos</p>
            </div>
            
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-black/30 p-3 rounded">
                <p className="text-2xl font-bold text-red-400">33%</p>
                <p className="text-xs text-gray-400">inflação</p>
              </div>
              <div className="bg-black/30 p-3 rounded">
                <p className="text-2xl font-bold text-orange-400">24h</p>
                <p className="text-xs text-gray-400">por dia</p>
              </div>
              <div className="bg-black/30 p-3 rounded">
                <p className="text-2xl font-bold text-yellow-400">365</p>
                <p className="text-xs text-gray-400">dias/ano</p>
              </div>
            </div>
          </div>
          
          <div className="bg-primary/10 border border-primary/20 p-6 rounded-xl text-center">
            <p className="text-xl font-semibold text-white mb-2">
              Chegou a hora de mudar
            </p>
            <p className="text-gray-400">
              Investir não é luxo. É sobrevivência.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-background py-20 rounded-t-2xl md:rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-white">
          A jornada do brasileiro para a <span className="text-red-500">pobreza</span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg text-center max-w-2xl mx-auto mb-16">
          Como o sistema mantém você preso em um ciclo sem fim
        </p>
      </div>
      <Timeline data={data} />
    </section>
  );
}