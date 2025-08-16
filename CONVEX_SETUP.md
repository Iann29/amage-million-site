# Configuração do Sistema de Captura de Leads com Convex

## Visão Geral
Sistema completo de captura de leads implementado usando Convex como backend. O sistema inclui:

- Modal de captura com validação em tempo real
- Formatação automática de telefone brasileiro
- Estados de loading/sucesso/erro
- Integração completa com Convex Database
- Prevenção de leads duplicados

## Estrutura Implementada

### 1. Schema do Banco de Dados (`convex/schema.ts`)
```typescript
leads: defineTable({
  nome_completo: v.string(),
  telefone: v.string(),
  created_at: v.number(),
})
.index("by_created_at", ["created_at"])
.index("by_telefone", ["telefone"])
```

### 2. Mutations e Queries (`convex/leads.ts`)
- `createLead`: Mutation para criar/atualizar leads
- `getAllLeads`: Query para listar todos os leads
- `getLeadsCount`: Query para contar total de leads

### 3. Modal de Captura (`src/components/lead-capture-modal.tsx`)
- Formulário responsivo com validação
- Formatação automática de telefone
- Estados visuais (loading, sucesso, erro)
- Animações com Framer Motion

### 4. Context Modal Atualizado (`src/contexts/modal-context.tsx`)
- Suporte a múltiplos tipos de modal
- Gerenciamento de estado centralizado

### 5. Header Atualizado (`src/components/header.tsx`)
- Botão "Simular Rendimentos" integrado ao modal
- Funciona tanto em desktop quanto mobile

## Comandos de Configuração

### Instalar Dependências
```bash
npm install convex
```

### Configurar Convex
```bash
# 1. Fazer login (primeira vez)
npx convex login

# 2. Configurar projeto
npx convex dev --once --configure=new

# 3. Gerar código TypeScript
npx convex codegen
```

### Scripts Disponíveis
```bash
npm run convex:dev      # Desenvolvimento local
npm run convex:deploy   # Deploy para produção
npm run convex:codegen  # Gerar tipos TypeScript
```

## Configuração de Ambiente

### .env.local
```env
# URL do Convex (gerada após configuração)
NEXT_PUBLIC_CONVEX_URL=https://your-project.convex.cloud

# Para produção (opcional)
CONVEX_DEPLOY_KEY=your-deploy-key
```

## Funcionalidades do Sistema

### Validação
- Nome completo: mínimo 2 caracteres
- Telefone: formato brasileiro com máscara automática
- Prevenção de submissão múltipla

### Formatação de Telefone
- Automática: (11) 99999-9999
- Remove caracteres não numéricos
- Limita a 11 dígitos

### Prevenção de Duplicatas
- Verifica telefone existente
- Atualiza lead com nova timestamp se já existe
- Mantém histórico de contatos

### Estados Visuais
- Loading: spinner durante envio
- Sucesso: confirmação visual com auto-fechamento
- Erro: mensagem específica de erro

## Fluxo de Uso

1. Usuário clica em "Simular Rendimentos" no header
2. Modal abre com formulário
3. Usuário preenche nome e telefone
4. Sistema valida dados em tempo real
5. Ao submeter, dados são salvos no Convex
6. Confirmação visual é exibida
7. Modal fecha automaticamente após 2,5s

## Administração de Leads

### Visualizar Leads
```typescript
// Usar query getAllLeads no Convex Dashboard
// ou criar página administrativa
```

### Exportar Dados
```typescript
// Query personalizada para relatórios
// Filtros por data, status, etc.
```

## Próximos Passos Sugeridos

1. **Dashboard Administrativo**: Criar página para visualizar leads
2. **Exportação**: Implementar export para CSV/Excel
3. **Notificações**: Integrar com WhatsApp/Email
4. **Analytics**: Tracking de conversão
5. **A/B Testing**: Testar diferentes versões do modal

## Segurança e LGPD

- Dados armazenados em servidor seguro (Convex)
- Apenas nome e telefone coletados
- Aviso de privacidade no modal
- Possibilidade de implementar opt-out

## Troubleshooting

### Erro de Tipagem
```bash
npm run convex:codegen
```

### Modal não abre
- Verificar se ConvexProvider está configurado
- Verificar se .env.local está correto

### Leads não salvam
- Verificar conexão com Convex
- Verificar logs no dashboard do Convex
- Verificar se schema está atualizado

## Suporte
Para dúvidas sobre implementação, consulte:
- [Documentação oficial do Convex](https://docs.convex.dev)
- Logs no dashboard do Convex
- DevTools do navegador para debugging