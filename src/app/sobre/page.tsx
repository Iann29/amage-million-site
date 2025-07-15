'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, BookOpen, Users, Rocket, Target, TrendingUp } from 'lucide-react';

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Nossa História Reimaginada */}
      <section className="pt-32 pb-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Uma jornada de <span className="text-primary font-bold">transformação</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 max-w-3xl mx-auto">
                Começamos em Tapejara, RS, com uma visão clara: democratizar o acesso 
                ao mercado financeiro. O que começou como um sonho de três jovens 
                se transformou em uma plataforma que já impactou centenas de vidas.
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Nosso compromisso vai além dos números. É sobre criar um Brasil onde 
                cada pessoa tenha as ferramentas necessárias para construir seu 
                patrimônio com segurança e inteligência.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              As mentes por trás da revolução
            </h2>
            <p className="text-lg text-muted-foreground">
              Três jovens visionários descomplicando o mundo dos investimentos 
              e facilitando seu acesso ao mercado financeiro.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              { name: "Matheus Gonçalves", image: "/images/Matheus.jpg" },
              { name: "Nicolas Cauduro", image: "/images/Nicolas.jpg" },
              { name: "Gabriel Boff", image: "/images/Gabriel.jpg" }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="font-bold text-2xl text-white mb-1">{member.name}</h3>
                      <p className="text-sm text-primary">Sócio Fundador</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nosso Diferencial */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Por que escolher a <span className="text-primary font-bold">Million</span>?
            </h2>
            <p className="text-muted-foreground text-lg">
              Não somos apenas mais uma empresa de investimentos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Rocket,
                title: "Metodologia própria",
                description: "Desenvolvemos um método único que simplifica conceitos complexos, tornando o mercado financeiro acessível para todos."
              },
              {
                icon: Target,
                title: "Foco em resultados reais",
                description: "Nossos clientes não apenas aprendem, eles aplicam. E os resultados aparecem desde o primeiro mês."
              },
              {
                icon: TrendingUp,
                title: "Acompanhamento contínuo",
                description: "O mercado nunca para, e nós também não. Suporte dedicado e atualizações constantes para sua jornada."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:scale-105 hover:rotate-[10deg]">
                  <item.icon className="w-8 h-8 text-[#151515]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Anos de Conteúdo */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-[0_-20px_60px_rgba(0,0,0,0.06)] p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-900">
                  Há + de 3 anos produzindo <span className="text-primary font-bold">conteúdo</span> que transforma
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Desde 2021, criamos conteúdo diário sobre investimentos, economia e educação 
                  financeira. São milhares de posts, vídeos e materiais educativos que já 
                  ajudaram centenas de visões a mudar sua relação com o dinheiro.
                </p>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-[#D8AE63]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-background">
              Pronto para fazer parte desta história?
            </h2>
            <p className="text-lg text-background/80 mb-8 max-w-2xl mx-auto">
              Junte-se a centenas de famílias que já transformaram seu futuro financeiro com a Million.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link
                href="/#iniciar-jornada"
                className="bg-background text-primary px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors"
              >
                Quero começar agora
              </Link>
              <Link
                href="/ebooks"
                className="text-background hover:underline"
              >
                Conhecer nossos materiais educativos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}