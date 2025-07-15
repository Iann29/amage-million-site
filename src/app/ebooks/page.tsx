'use client';

import { motion } from 'framer-motion';
import { ebooks } from '@/data/ebooks';
import Link from 'next/link';
import Image from 'next/image';
import { Star, TrendingUp, Clock, Filter, BookOpen, Smartphone, Shield, CheckCircle, Zap, Globe, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

export default function EbooksPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState('todos');
  const [selectedCategory, setSelectedCategory] = useState('todos');

  // Filtros disponíveis
  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'mais-vendidos', label: 'Mais vendidos' },
    { id: 'lancamentos', label: 'Lançamentos' },
  ];

  const categories = [
    { id: 'todos', label: 'Todas' },
    { id: 'iniciante', label: 'Iniciante' },
    { id: 'intermediario', label: 'Intermediário' },
    { id: 'avancado', label: 'Avançado' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section Minimalista - Mantendo o título que você gostou */}
      <section className="relative pt-28 pb-12">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-light mb-4">
              Invista no seu
              <span className="text-primary font-bold"> futuro financeiro</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
              Ebooks práticos e diretos ao ponto, escritos por quem entende do assunto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtros */}
      <section className="container mx-auto px-4 pb-6">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          {/* Filtros principais */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedFilter === filter.id
                    ? 'bg-primary text-background'
                    : 'bg-card border border-gray-800 hover:border-primary/50'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Categorias */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground mr-2">Nível:</span>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedCategory === category.id
                    ? 'text-primary font-medium'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Ebooks - Cards Pequenos */}
      <section className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {ebooks.map((ebook, index) => (
            <motion.div
              key={ebook.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCard(ebook.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Link href={`/ebooks/${ebook.slug}`}>
                <div className="group relative cursor-pointer h-full flex flex-col">
                  {/* Imagem do Ebook */}
                  <div className="relative aspect-[3/4] mb-2 rounded-lg overflow-hidden bg-card border border-gray-800 group-hover:border-primary/50 transition-colors">
                    <Image
                      src={ebook.coverImage}
                      alt={ebook.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Badge de desconto */}
                    {ebook.originalPrice && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg animate-pulse">
                        -{Math.round(((ebook.originalPrice - ebook.price) / ebook.originalPrice) * 100)}%
                      </div>
                    )}
                  </div>

                  {/* Informações do Ebook */}
                  <div className="px-2 pb-2 flex-1 flex flex-col">
                    {/* Título primeiro */}
                    <h3 className="font-bold text-sm mb-2 group-hover:text-primary transition-colors line-clamp-2 text-white">
                      {ebook.title}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3">
                      <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                      <span className="text-xs text-muted-foreground">{ebook.rating}</span>
                    </div>

                    {/* Espacer para empurrar preço para baixo */}
                    <div className="flex-1" />
                    
                    {/* Preços com destaque */}
                    <div className="mb-3">
                      {ebook.originalPrice && (
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs line-through text-gray-500">
                            R$ {ebook.originalPrice.toFixed(2)}
                          </span>
                          <span className="text-[10px] bg-primary/20 text-primary px-1.5 py-0.5 rounded font-medium">
                            Economize R$ {(ebook.originalPrice - ebook.price).toFixed(2)}
                          </span>
                        </div>
                      )}
                      <p className="text-xl font-bold text-white">
                        R$ {ebook.price.toFixed(2)}
                        <span className="text-xs text-gray-400 font-normal ml-1">à vista</span>
                      </p>
                    </div>

                    {/* Botão de compra aprimorado */}
                    <button className="w-full bg-gradient-to-r from-primary to-primary/80 text-background py-2.5 px-3 rounded-lg text-xs font-bold hover:from-primary/90 hover:to-primary/70 transition-all duration-300 transform hover:scale-[1.02] group">
                      <span className="flex items-center justify-center gap-1">
                        Comprar agora
                        <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </button>
                    
                    {/* Garantias */}
                    <div className="mt-2 text-[9px] text-center text-gray-500">
                      🔒 Compra segura • 📱 Acesso imediato
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Banner Persuasivo */}
      <section className="container mx-auto px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-background">
              Por que conhecimento financeiro é o investimento mais seguro?
            </h2>
            <p className="text-lg text-background/80 mb-6">
              Enquanto ações podem cair e imóveis desvalorizar, o conhecimento que você adquire 
              permanece com você para sempre. É o único ativo que ninguém pode tirar de você.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-background mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-background">Retorno garantido</h3>
                  <p className="text-sm text-background/70">
                    Aplique o que aprender e veja resultados reais
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-background mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-background">Sem riscos</h3>
                  <p className="text-sm text-background/70">
                    Conhecimento não desvaloriza com o tempo
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-background mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-background">Acesso vitalício</h3>
                  <p className="text-sm text-background/70">
                    Estude no seu ritmo, quando quiser
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-background/10 rounded-full blur-3xl" />
        </motion.div>
      </section>

      {/* Como Funciona - Esquema de Entrega */}
      <section className="bg-card/50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-4">Como funciona?</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Processo simples e rápido. Do pagamento ao acesso completo em poucos minutos.
            </p>

            <div className="grid md:grid-cols-4 gap-8 relative">              
              {/* Passo 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center relative z-10"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-background">1</span>
                </div>
                <h3 className="font-semibold mb-2">Escolha seu ebook</h3>
                <p className="text-sm text-muted-foreground">
                  Navegue pela biblioteca e escolha o conteúdo ideal para você
                </p>
              </motion.div>

              {/* Passo 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center relative z-10"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-background">2</span>
                </div>
                <h3 className="font-semibold mb-2">Pagamento seguro</h3>
                <p className="text-sm text-muted-foreground">
                  Pague via PIX ou cartão com total segurança e privacidade
                </p>
              </motion.div>

              {/* Passo 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center relative z-10"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-background">3</span>
                </div>
                <h3 className="font-semibold mb-2">Acesso imediato</h3>
                <p className="text-sm text-muted-foreground">
                  Após confirmação, acesse instantaneamente sua área exclusiva
                </p>
              </motion.div>

              {/* Passo 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center relative z-10"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-background">4</span>
                </div>
                <h3 className="font-semibold mb-2">Estude onde quiser</h3>
                <p className="text-sm text-muted-foreground">
                  Leia online ou baixe o PDF para estudar offline
                </p>
              </motion.div>
            </div>

            {/* Benefícios da plataforma */}
            <div className="mt-16 grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-background p-6 rounded-2xl border border-gray-800"
              >
                <BookOpen className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Leitor online exclusivo</h3>
                <p className="text-sm text-muted-foreground">
                  Leia diretamente no navegador com nosso leitor otimizado, 
                  marque páginas e acompanhe seu progresso
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-background p-6 rounded-2xl border border-gray-800"
              >
                <Smartphone className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Acesso multiplataforma</h3>
                <p className="text-sm text-muted-foreground">
                  Estude no computador, tablet ou celular. 
                  Sincronize seu progresso em todos os dispositivos
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-background p-6 rounded-2xl border border-gray-800"
              >
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Atualizações gratuitas</h3>
                <p className="text-sm text-muted-foreground">
                  Receba todas as atualizações e melhorias do conteúdo 
                  automaticamente, sem custo adicional
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-background">
            Comece sua jornada de conhecimento hoje
          </h2>
          <p className="text-lg text-background/80 mb-8 max-w-2xl mx-auto">
            Invista em você mesmo. O conhecimento é o único investimento que sempre 
            gera retorno positivo.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-background" />
              <span className="text-background font-medium">Garantia de 7 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-background" />
              <span className="text-background font-medium">Pagamento seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-background" />
              <span className="text-background font-medium">Acesso imediato</span>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}