'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { BookOpen, Calculator, HelpCircle, FileText, ArrowRight } from 'lucide-react';

const ebooks = [
  {
    title: 'Do Zero aos Primeiros R$ 1.000',
    description: 'Guia completo para iniciantes',
    cover: '📈',
  },
  {
    title: 'Aposentadoria aos 40',
    description: 'O poder dos juros compostos',
    cover: '🎯',
  },
  {
    title: 'Renda Extra com Dividendos',
    description: 'Viva de renda passiva',
    cover: '💰',
  },
];

const blogPosts = [
  {
    title: '5 erros que todo iniciante comete (e como evitá-los)',
    excerpt: 'Descubra os principais erros e proteja seu dinheiro desde o início.',
    date: '15 de Janeiro',
  },
  {
    title: 'Renda fixa vs. Renda variável: qual escolher?',
    excerpt: 'Entenda as diferenças e saiba qual se encaixa no seu perfil.',
    date: '10 de Janeiro',
  },
  {
    title: 'Como criar sua reserva de emergência em 6 meses',
    excerpt: 'Passo a passo prático para construir sua segurança financeira.',
    date: '5 de Janeiro',
  },
];

export function EducationHub() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [investmentAmount, setInvestmentAmount] = useState(100);
  const [monthlyContribution, setMonthlyContribution] = useState(100);
  const [years, setYears] = useState(10);

  const calculateFutureValue = () => {
    const monthlyRate = 0.01; // 1% ao mês (aproximadamente 12.68% ao ano)
    const months = years * 12;
    const futureValue = investmentAmount * Math.pow(1 + monthlyRate, months) +
      monthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    return Math.round(futureValue);
  };

  return (
    <section id="educacao" ref={ref} className="py-20 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Conhecimento: seu primeiro investimento
          </h2>
          <p className="text-lg md:text-xl text-secondary">
            Acreditamos que educação financeira deve ser acessível a todos
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* E-books */}
          <div className="lg:col-span-2 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                E-books Gratuitos
              </h3>
              <div className="grid gap-4">
                {ebooks.map((ebook, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 4 }}
                    className="bg-background border border-primary/10 rounded-lg p-4 hover:border-primary/30 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{ebook.cover}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                          {ebook.title}
                        </h4>
                        <p className="text-sm text-secondary">{ebook.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quiz */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="lg:col-span-1 md:col-span-1"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-primary" />
              Quiz do Investidor
            </h3>
            <div className="bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 rounded-2xl p-6 h-[calc(100%-3.5rem)]">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-xl font-bold mb-2">Descubra seu perfil</h4>
              <p className="text-secondary mb-4">Em apenas 5 minutos</p>
              <button className="w-full bg-primary text-background py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Fazer quiz agora
              </button>
            </div>
          </motion.div>

          {/* Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="lg:col-span-1 md:col-span-1"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Calculator className="w-6 h-6 text-primary" />
              Calculadora
            </h3>
            <div className="bg-background border border-primary/10 rounded-2xl p-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-secondary">Valor inicial</label>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="100"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                    className="w-full mt-1"
                  />
                  <div className="text-right text-sm font-semibold">R$ {investmentAmount}</div>
                </div>
                <div>
                  <label className="text-sm text-secondary">Aporte mensal</label>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="50"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                    className="w-full mt-1"
                  />
                  <div className="text-right text-sm font-semibold">R$ {monthlyContribution}</div>
                </div>
                <div>
                  <label className="text-sm text-secondary">Tempo (anos)</label>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full mt-1"
                  />
                  <div className="text-right text-sm font-semibold">{years} anos</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-primary/10">
                <div className="text-sm text-secondary mb-1">Valor estimado:</div>
                <div className="text-2xl font-bold text-primary">
                  R$ {calculateFutureValue().toLocaleString('pt-BR')}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Blog */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="lg:col-span-4 md:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6 text-primary" />
              Artigos Recentes
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={index}
                  whileHover={{ y: -4 }}
                  className="bg-background border border-primary/10 rounded-lg p-6 hover:border-primary/30 transition-all cursor-pointer"
                >
                  <div className="text-sm text-primary mb-2">{post.date}</div>
                  <h4 className="text-lg font-semibold mb-2 line-clamp-2">{post.title}</h4>
                  <p className="text-secondary text-sm line-clamp-2">{post.excerpt}</p>
                </motion.article>
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="#" className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2">
                Ver todos os artigos
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}