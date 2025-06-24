'use client';

import { useParams } from 'next/navigation';
import { getEbookBySlug } from '@/data/ebooks';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, CheckCircle, Clock, BookOpen, Users, Shield, ArrowLeft, ShoppingCart, TrendingUp, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth-context';

export default function EbookSalesPage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const ebook = getEbookBySlug(params.slug as string);

  if (!ebook) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Ebook não encontrado</h1>
          <Link href="/ebooks" className="text-primary hover:underline">
            Voltar para a biblioteca
          </Link>
        </div>
      </div>
    );
  }

  const handlePurchase = async () => {
    setIsLoading(true);
    
    // Verifica se está autenticado
    if (!user) {
      // Salva o ebook que estava tentando comprar
      localStorage.setItem('pendingPurchase', ebook.id);
      // Redireciona para login
      router.push('/login?redirect=checkout');
    } else {
      // Se já está autenticado, vai direto para o checkout
      router.push(`/checkout?ebook=${ebook.id}`);
    }
  };

  const discount = ebook.originalPrice 
    ? Math.round(((ebook.originalPrice - ebook.price) / ebook.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Imagem e Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              <Image
                src={ebook.coverImage}
                alt={ebook.title}
                fill
                className="object-cover rounded-2xl"
              />
              {discount > 0 && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-lg font-bold">
                  -{discount}%
                </div>
              )}
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 max-w-md mx-auto">
              <div className="text-center p-4 bg-card rounded-lg border border-gray-800">
                <BookOpen className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-2xl font-bold">{ebook.pages}</p>
                <p className="text-sm text-muted-foreground">páginas</p>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-gray-800">
                <Star className="w-6 h-6 mx-auto mb-2 text-yellow-500" />
                <p className="text-2xl font-bold">{ebook.rating}</p>
                <p className="text-sm text-muted-foreground">avaliação</p>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-gray-800">
                <Users className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-2xl font-bold">{ebook.reviewsCount}</p>
                <p className="text-sm text-muted-foreground">leitores</p>
              </div>
            </div>
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24"
          >
            <Link 
              href="/ebooks" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para biblioteca
            </Link>
            
            <div className="bg-card p-8 rounded-2xl border border-gray-800">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{ebook.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{ebook.subtitle}</p>
              
              {/* Preço */}
              <div className="mb-6">
                {ebook.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through decoration-red-500 block mb-1">
                    De R$ {ebook.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-sm text-muted-foreground block mb-1">Por apenas</span>
                <span className="text-4xl font-bold text-primary">R$ {ebook.price.toFixed(2)}</span>
              </div>

              {/* CTA Principal */}
              <button
                onClick={handlePurchase}
                disabled={isLoading}
                className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mb-6 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <span>Processando...</span>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    Comprar Agora
                  </>
                )}
              </button>

              {/* Features */}
              <div className="space-y-2 border-t border-gray-800 pt-6">
                {ebook.features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Descrição Detalhada */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">Sobre o Ebook</h2>
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
              {ebook.longDescription}
            </div>
          </div>
        </motion.div>
      </section>

      {/* O que você vai aprender */}
      <section className="bg-card/50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">O que você vai aprender</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {ebook.learningOutcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 bg-background p-4 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{outcome}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Para quem é este ebook */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Para quem é este ebook?</h2>
          <div className="space-y-3">
            {ebook.targetAudience.map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-3 bg-card p-4 rounded-lg border border-gray-800"
              >
                <Users className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{audience}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Final */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="max-w-2xl mx-auto text-center bg-gradient-to-r from-primary/20 to-primary/10 p-8 rounded-3xl"
        >
          <h2 className="text-3xl font-bold mb-4">
            Transforme sua vida financeira hoje
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Junte-se a mais de {ebook.reviewsCount} pessoas que já estão aprendendo com este ebook
          </p>
          
          <div className="mb-6">
            <span className="text-5xl font-bold text-primary">R$ {ebook.price.toFixed(2)}</span>
            {ebook.originalPrice && (
              <span className="text-lg text-muted-foreground line-through ml-3">
                R$ {ebook.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button
            onClick={handlePurchase}
            disabled={isLoading}
            className="bg-primary text-background px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
          >
            {isLoading ? (
              <span>Processando...</span>
            ) : (
              <>
                <ShoppingCart className="w-5 h-5" />
                Comprar Agora
              </>
            )}
          </button>
          
          <div className="mt-4 flex items-center gap-2 justify-center text-sm text-muted-foreground">
            <Shield className="w-4 h-4 text-green-500" />
            <span>Compra 100% segura • Garantia de 7 dias</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}