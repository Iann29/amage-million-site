'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Target, TrendingUp, Users, Lightbulb, Map, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function SobrePage() {
  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Com <span className="text-primary">você</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              A Million constrói valor hoje, gera impacto duradouro e deixa um legado para as próximas gerações.
              Somos o ponto de virada entre onde você está e tudo o que podemos construir juntos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* História Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <motion.div 
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            transition={fadeIn.transition}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                Há mais de <span className="text-primary">3 anos</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Nossa missão é transformar o mercado financeiro brasileiro com responsabilidade e inovação.
                </p>
                <p>
                  Somos reconhecidos pela transparência em cada relação e por um compromisso genuíno com o sucesso de cada cliente.
                </p>
                <p className="text-xl font-semibold text-foreground">
                  Você faz parte desta história, e sim, você merece estar nessa jornada conosco.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl md:text-8xl font-bold text-primary mb-4">3+</div>
                  <p className="text-xl text-muted-foreground">anos transformando vidas</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            transition={fadeIn.transition}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Nossos <span className="text-primary">valores</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Desafiamos o tradicional para tornar o investimento acessível e descomplicado
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Map,
                title: "Pioneiros em Tapejara",
                description: "Temos orgulho em ser os primeiros a democratizar investimentos em nossa região, sempre respeitando os objetivos individuais e oferecendo soluções personalizadas."
              },
              {
                icon: Lightbulb,
                title: "Inovação constante",
                description: "Nosso time trabalha incansavelmente para tornar o investimento acessível a todos. É exatamente por isso que a Million existe."
              },
              {
                icon: Target,
                title: "Foco em resultados",
                description: "O que impede muitos não é a falta de vontade, mas a ausência de orientação adequada. Facilitamos escolhas e caminhamos ao lado de quem decide crescer."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors"
              >
                <item.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            transition={fadeIn.transition}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
              Por que somos <span className="text-primary">diferentes</span>?
            </h2>

            <div className="space-y-16">
              {[
                {
                  title: "Serviços personalizados",
                  description: "Nossos serviços são pensados para quem escolhe ser diferente. Afinal, você não é convencional e suas escolhas também não devem ser.",
                  highlight: "Cada cliente é único"
                },
                {
                  title: "Resultados comprovados",
                  description: "Há um longo caminho pela frente, mas ele já está traçado. Construímos com força e incentivamos a postura de quem escolhe se desafiar para vencer.",
                  highlight: "Crescimento consistente"
                },
                {
                  title: "Direção clara",
                  description: "Agora é a hora de facilitar escolhas inteligentes e caminhar ao lado de quem está decidido a construir um futuro próspero.",
                  highlight: "Orientação especializada"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1">
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                      {item.highlight}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex-1">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Pronto para fazer parte desta <span className="text-primary">história</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Junte-se a centenas de investidores que já transformaram seu futuro com a Million
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#iniciar-jornada"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105"
              >
                Começar agora
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-background text-foreground border-2 border-border px-8 py-4 rounded-lg font-semibold text-lg hover:border-primary/50 transition-all"
              >
                Voltar ao início
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}