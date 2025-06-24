'use client';

import { motion } from 'framer-motion';
import { ebooks } from '@/data/ebooks';
import Link from 'next/link';
import Image from 'next/image';
import { Star, TrendingUp, Clock, Filter, BookOpen, Smartphone, Shield, CheckCircle, Zap, Globe } from 'lucide-react';
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
      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Conhecimento é o melhor
              <span className="block font-bold text-primary">investimento</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Ebooks práticos e diretos ao ponto, escritos por quem entende do assunto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtros */}
      <section className="container mx-auto px-4 pb-8">
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
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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
                <motion.div 
                  className="group relative cursor-pointer"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Imagem do Ebook */}
                  <div className="relative aspect-[3/4] mb-4 rounded-lg overflow-hidden bg-card">
                    <Image
                      src={ebook.coverImage}
                      alt={ebook.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Overlay no hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Badge de desconto */}
                    {ebook.originalPrice && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                        -{Math.round(((ebook.originalPrice - ebook.price) / ebook.originalPrice) * 100)}%
                      </div>
                    )}

                    {/* Preço no hover */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-white">
                        {ebook.originalPrice && (
                          <span className="text-sm line-through opacity-75">
                            R$ {ebook.originalPrice.toFixed(2)}
                          </span>
                        )}
                        <p className="text-2xl font-bold">
                          R$ {ebook.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Informações do Ebook */}
                  <div>
                    <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors line-clamp-2">
                      {ebook.title}
                    </h3>
                    
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                      {ebook.subtitle}
                    </p>

                    {/* Rating e info */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                        <span className="text-muted-foreground">{ebook.rating}</span>
                      </div>
                      
                      <span className="text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Saiba mais →
                      </span>
                    </div>
                  </div>
                </motion.div>
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
          className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Por que conhecimento financeiro é o investimento mais seguro?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Enquanto ações podem cair e imóveis desvalorizar, o conhecimento que você adquire 
              permanece com você para sempre. É o único ativo que ninguém pode tirar de você.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Retorno garantido</h3>
                  <p className="text-sm text-muted-foreground">
                    Aplique o que aprender e veja resultados reais
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Sem riscos</h3>
                  <p className="text-sm text-muted-foreground">
                    Conhecimento não desvaloriza com o tempo
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Acesso vitalício</h3>
                  <p className="text-sm text-muted-foreground">
                    Estude no seu ritmo, quando quiser
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
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

            <div className="grid md:grid-cols-4 gap-8">
              {/* Passo 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
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
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
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
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
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
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
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
          className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Comece sua jornada de conhecimento hoje
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Invista em você mesmo. O conhecimento é o único investimento que sempre 
            gera retorno positivo.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Garantia de 7 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Pagamento seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Acesso imediato</span>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}