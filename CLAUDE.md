# Million Capital - Site de Educação Financeira

## Visão Geral
Site de educação financeira focado em ensinar brasileiros a investir de forma inteligente e segura. O projeto usa Next.js 15, TypeScript, Tailwind CSS e Framer Motion.

## Estrutura do Projeto

### Páginas Principais
- **Home** (`/`) - Landing page com todas as seções principais
- **Ebooks** (`/ebooks`) - Loja de ebooks sobre finanças e investimentos  
- **Planos** (`/planos`) - Plano Start de consultoria para iniciantes
- **Sobre** (`/sobre`) - Informações sobre a empresa e missão

### Componentes Principais
- `ProblemsTimelineNew` - Timeline animada mostrando os 5 problemas econômicos do Brasil
- `OpportunitiesSection` - Oportunidades de investimento
- `PricingSection` - Seção do Plano Start
- `EbooksSection` - Vitrine de ebooks

## Plano Start - Detalhes

### Estrutura de Preços
- **Taxa única**: R$ 149,90 (setup inicial)
- **Mensalidade**: R$ 69,90 (acompanhamento contínuo)

### O que está incluído:
1. Contato próximo com equipe de analistas
2. Abertura de conta em corretora com suporte completo
3. Definição personalizada do perfil de investidor
4. Composição de carteira ideal para cenário atual
5. Acesso à Carteira Exclusiva Million
6. Grupo VIP com notícias diárias do mercado

### URLs de Pagamento
- **ATENÇÃO**: Atualizar URL de pagamento em `/src/components/pricing-section.tsx`
- Atualmente usando placeholder: `https://pay.kiwify.com.br/example`

## Cores do Projeto
- **Primary (Dourado)**: #D8AE63
- **Background**: #151515
- **Text**: #FFFFFF
- **Muted**: #C5C5C5

## Comandos Importantes
```bash
npm run dev      # Desenvolvimento
npm run build    # Build de produção
npm run lint     # Verificar erros de código
```

## TODO Prioritário
1. [ ] Substituir URL de pagamento do Kiwify pela URL real
2. [ ] Adicionar pixel do Facebook/Google para tracking
3. [ ] Configurar Google Analytics
4. [ ] Adicionar mais planos (Premium, VIP) quando disponíveis

## Notas de Conversão
- Usar sempre urgência/escassez (ex: "12 vagas restantes")
- Destacar resultados comprovados (+127% em 2023)
- Garantia de 7 dias para reduzir objeções
- Comparar "com vs sem orientação" para mostrar valor

## Contatos para Dúvidas
- Site em produção: [adicionar URL]
- Suporte Kiwify: [adicionar contato]