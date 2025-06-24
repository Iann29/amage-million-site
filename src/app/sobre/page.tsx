'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Shield, Target, Zap, Award, Globe, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section - Padrão similar aos ebooks */}
      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Transformando o mercado financeiro
              <span className="block font-bold text-primary">com você</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Há mais de 3 anos democratizando o acesso a investimentos inteligentes 
              e construindo um futuro próspero para cada brasileiro.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium">NOSSA HISTÓRIA</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Nascemos com um propósito claro
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                A Million nasceu em Tapejara com a missão de quebrar as barreiras 
                que separam pessoas comuns de investimentos inteligentes. Somos os 
                pioneiros em democratizar o mercado financeiro em nossa região.
              </p>
              <p>
                Acreditamos que todo brasileiro merece acesso a oportunidades de 
                crescimento financeiro, independente de onde mora ou quanto tem 
                para começar.
              </p>
              <p className="text-foreground font-semibold">
                Você não é apenas um cliente. Você faz parte desta revolução.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="text-center z-10">
                <motion.div 
                  className="text-8xl font-bold text-primary mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                >
                  3+
                </motion.div>
                <p className="text-xl text-muted-foreground">anos transformando</p>
                <p className="text-2xl font-semibold">vidas financeiras</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Números que Importam */}
      <section className="bg-card/50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Números que contam nossa história
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Famílias atendidas", icon: Users },
              { number: "R$ 10M+", label: "Sob gestão", icon: TrendingUp },
              { number: "98%", label: "Satisfação", icon: Heart },
              { number: "24/7", label: "Suporte dedicado", icon: Shield }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary">{stat.number}</div>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium">NOSSOS VALORES</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            O que nos move todos os dias
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: Shield,
              title: "Transparência Total",
              description: "Cada decisão, cada movimento, cada resultado. Você tem acesso a tudo, porque confiança se constrói com clareza."
            },
            {
              icon: Target,
              title: "Foco no Cliente",
              description: "Seus objetivos são nossos objetivos. Personalizamos cada estratégia porque entendemos que cada sonho é único."
            },
            {
              icon: Zap,
              title: "Inovação Constante",
              description: "O mercado evolui, e nós evoluímos junto. Sempre buscando as melhores oportunidades para seu patrimônio."
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl border border-gray-800 hover:border-primary/50 transition-all"
            >
              <value.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="bg-gradient-to-br from-primary/5 via-transparent to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <span className="text-primary text-sm font-medium">NOSSA EQUIPE</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Especialistas comprometidos com seu sucesso
            </h2>
            <p className="text-lg text-muted-foreground">
              Um time de profissionais certificados e apaixonados por transformar 
              vidas através de investimentos inteligentes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Carlos Silva", role: "CEO & Fundador", expertise: "20+ anos no mercado" },
              { name: "Ana Costa", role: "Head de Investimentos", expertise: "Especialista em renda variável" },
              { name: "Roberto Lima", role: "Diretor de Operações", expertise: "Gestão de portfólios" },
              { name: "Mariana Santos", role: "Head de Cliente", expertise: "Experiência do cliente" }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full mx-auto mb-4" />
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
                <p className="text-xs text-muted-foreground mt-1">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium">POR QUE A MILLION?</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            O que nos torna únicos
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              title: "Pioneirismo Regional",
              description: "Fomos os primeiros a democratizar investimentos em Tapejara e região. Conhecemos sua realidade porque vivemos ela.",
              icon: Award
            },
            {
              title: "Educação Financeira",
              description: "Não apenas investimos seu dinheiro. Ensinamos você a entender cada movimento, porque conhecimento é o melhor investimento.",
              icon: Globe
            },
            {
              title: "Resultados Comprovados",
              description: "Nossos números falam por si. Mas o que mais nos orgulha são as histórias de transformação de cada cliente.",
              icon: TrendingUp
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-6 p-6 bg-card rounded-2xl border border-gray-800"
            >
              <div className="p-4 bg-primary/10 rounded-2xl">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
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
            Pronto para fazer parte desta história?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de famílias que já transformaram seu futuro financeiro com a Million.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link
              href="/#iniciar-jornada"
              className="bg-primary text-background px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Quero começar agora
            </Link>
            <Link
              href="/ebooks"
              className="text-primary hover:underline"
            >
              Conhecer nossos materiais educativos
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}