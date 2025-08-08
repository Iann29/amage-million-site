'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, Award } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: "+127%",
    label: "Retorno em 2023",
    color: "text-green-400"
  },
  {
    icon: Users,
    value: "1.500+",
    label: "Alunos ativos",
    color: "text-primary"
  },
  {
    icon: Target,
    value: "98%",
    label: "Taxa de satisfação",
    color: "text-blue-400"
  },
  {
    icon: Award,
    value: "3+",
    label: "Anos de experiência",
    color: "text-purple-400"
  }
];

export function PortfolioDivider() {
  return (
    <section className="relative py-16 bg-gradient-to-r from-[#0a0a0a] via-[#151515] to-[#0a0a0a] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle, #D8AE63 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-lato)]">
              Resultados que <span className="text-primary">falam por si</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Nossos números refletem o compromisso com a educação financeira de qualidade
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 mb-4">
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <p className="text-gray-500 text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}