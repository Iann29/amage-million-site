'use client';

import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingDown, Users, AlertCircle } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const inflationData = [
  { year: '2019', poupanca: 4.26, inflacao: 4.31 },
  { year: '2020', poupanca: 2.11, inflacao: 4.52 },
  { year: '2021', poupanca: 2.94, inflacao: 10.06 },
  { year: '2022', poupanca: 7.90, inflacao: 5.79 },
  { year: '2023', poupanca: 8.00, inflacao: 4.62 },
  { year: '2024', poupanca: 6.17, inflacao: 4.83 },
];

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [monthlyValue, setMonthlyValue] = useState(100);
  
  const calculateLoss = (years: number) => {
    const totalSaved = monthlyValue * 12 * years;
    const avgInflationLoss = 0.02; // 2% average loss per year
    const loss = totalSaved * avgInflationLoss * years;
    return {
      saved: totalSaved,
      loss: Math.round(loss),
    };
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A dura realidade: <span className="text-destructive">o Brasil não investe</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Stat 1: 89% não investem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-background border border-destructive/20 rounded-2xl p-8 text-center"
          >
            <Users className="w-12 h-12 text-destructive mx-auto mb-4" />
            <div className="text-5xl font-bold text-destructive mb-2">89%</div>
            <p className="text-xl mb-4">dos brasileiros não investem</p>
            
            <div className="grid grid-cols-10 gap-1 mb-4">
              {Array.from({ length: 100 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i < 89 ? 'bg-destructive/30' : 'bg-primary'
                  }`}
                />
              ))}
            </div>
            
            <p className="text-sm text-secondary">Fonte: Anbima 2023</p>
          </motion.div>

          {/* Stat 2: 67% endividados */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="bg-background border border-destructive/20 rounded-2xl p-8 text-center"
          >
            <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
            <div className="text-5xl font-bold text-destructive mb-2">67%</div>
            <p className="text-xl mb-4">das famílias estão endividadas</p>
            
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[
                  { name: 'Endividados', value: 67 },
                  { name: 'Sem dívidas', value: 33 },
                ]}>
                  <Bar dataKey="value" fill="#DC2626" />
                  <XAxis dataKey="name" />
                  <YAxis />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <p className="text-sm text-secondary">Fonte: CNC 2024</p>
          </motion.div>

          {/* Stat 3: Poupança perde */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="bg-background border border-destructive/20 rounded-2xl p-8 text-center"
          >
            <TrendingDown className="w-12 h-12 text-destructive mx-auto mb-4" />
            <div className="text-3xl font-bold text-destructive mb-2">Poupança perde</div>
            <p className="text-xl mb-4">para inflação há 5 anos</p>
            
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={inflationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="poupanca" stroke="#D8AE63" name="Poupança" />
                  <Line type="monotone" dataKey="inflacao" stroke="#DC2626" name="Inflação" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Interactive Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="bg-muted rounded-2xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">O custo de não investir</h3>
          
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <label className="block text-sm font-medium mb-2">
                Quanto você guarda por mês?
              </label>
              <input
                type="range"
                min="50"
                max="1000"
                step="50"
                value={monthlyValue}
                onChange={(e) => setMonthlyValue(Number(e.target.value))}
                className="w-full h-2 bg-background rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-center mt-2">
                <span className="text-3xl font-bold text-primary">R$ {monthlyValue}</span>
                <span className="text-secondary"> por mês</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[1, 5, 10].map((years) => {
                const { saved, loss } = calculateLoss(years);
                return (
                  <div key={years} className="bg-background rounded-lg p-6 text-center">
                    <div className="text-lg font-medium mb-2">Em {years} {years === 1 ? 'ano' : 'anos'}</div>
                    <div className="text-sm text-secondary mb-1">Você guardaria:</div>
                    <div className="text-2xl font-bold text-white mb-3">R$ {saved.toLocaleString('pt-BR')}</div>
                    <div className="text-sm text-secondary mb-1">Mas perderia:</div>
                    <div className="text-xl font-bold text-destructive">- R$ {loss.toLocaleString('pt-BR')}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Transition to Solution */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <p className="text-3xl md:text-4xl font-bold mb-4">
            Mas não precisa ser assim
          </p>
          <p className="text-xl md:text-2xl text-secondary mb-8">
            Investir não é privilégio. É necessidade. E é mais acessível do que você imagina.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
              <div className="text-lg font-medium mb-2">Um cafézinho por dia</div>
              <div className="text-3xl font-bold text-destructive">R$ 150/mês</div>
            </div>
            
            <div className="text-2xl">VS</div>
            
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <div className="text-lg font-medium mb-2">Seu futuro financeiro</div>
              <div className="text-3xl font-bold text-primary">R$ 30/mês</div>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#como-funciona"
              className="inline-block bg-primary text-background px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(216,174,99,0.5)]"
            >
              Quero mudar minha história
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}