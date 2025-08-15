'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { GetStartedButton } from '@/components/ui/get-started-button';

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Nossa História com Banner - Hero completa */}
      <section className="relative min-h-screen flex flex-col">
        {/* Imagem de fundo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/tapejara-sobre.jpg"
            alt="Tapejara"
            fill
            className="object-cover opacity-80"
            style={{ objectPosition: 'center 60%' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 via-background/85 to-background/60" />
        </div>
        
        {/* Conteúdo */}
        <div className="container mx-auto px-4 relative z-10 flex-1 flex flex-col justify-center py-32">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h1 className="text-3xl md:text-5xl font-light mb-8">
              Nossa
              <span className="text-primary font-bold"> história</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
              Três jovens de Tapejara, RS, que decidiram compartilhar o que aprenderam 
              sobre investimentos. Sem grandes pretensões, apenas a vontade de ajudar 
              pessoas próximas a não perderem dinheiro com a inflação.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Hoje ajudamos dezenas de pessoas a investir melhor. Não somos gurus, 
              somos jovens que criaram um negócio para tornar o investimento acessível 
              de forma simples e direta.
            </p>
          </motion.div>
          
          {/* 3 Anos de Conteúdo - Dentro da Hero */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-[0_-20px_60px_rgba(0,0,0,0.06)] p-6 md:p-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  + de 3 anos criando <span className="text-primary">conteúdos</span><br />
                  <span className="text-primary">sobre finanças.</span>
                </h2>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Bull Watermark */}
        <div 
          className="absolute -bottom-72 -left-64 w-[1500px] h-[1200px] opacity-[0.04]"
          style={{
            backgroundImage: `url('/images/conhecafundo.svg')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-6xl mx-auto text-left mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-background">
              As mentes por trás da revolução.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Três jovens visionários simplificando o mundo dos investimentos 
              e tornando o mercado financeiro acessível para todos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              { name: "Matheus Gonçalves", image: "/imgOtimized/Matheus.webp", position: '60% 15%' },
              { name: "Nicolas Cauduro", image: "/imgOtimized/Nicolas.webp", position: '60% 20%' },
              { name: "Gabriel Boff", image: "/imgOtimized/Gabriel.webp", position: '65% 15%' }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    unoptimized={true}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectPosition: member.position }}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <h3 className="font-bold text-2xl text-white">{member.name}</h3>
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Por que escolher a <span className="text-primary font-bold">Million</span>?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Fácil de começar",
                description: "Setup simples e rápido para você iniciar sua jornada nos investimentos sem complicação."
              },
              {
                title: "Foco em resultados reais",
                description: "Nossos clientes não apenas aprendem, eles aplicam. E os resultados aparecem desde o primeiro mês."
              },
              {
                title: "Acompanhamento contínuo",
                description: "O mercado nunca para, e nós também não. Suporte dedicado e atualizações constantes para sua jornada."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3 }}
                className="text-center border-2 border-gray-200 rounded-lg p-6 hover:border-primary transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-8 bg-background mb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Pronto para fazer parte desta história?
            </h2>
            <GetStartedButton
              href="/planos"
            >
              Quero começar
            </GetStartedButton>
          </motion.div>
        </div>
      </section>
    </main>
  );
}