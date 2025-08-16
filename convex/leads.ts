import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

/**
 * Mutation para criar um novo lead
 */
export const createLead = mutation({
  args: {
    nome_completo: v.string(),
    telefone: v.string(),
  },
  handler: async (ctx, args) => {
    // Validação básica
    if (!args.nome_completo.trim()) {
      throw new Error("Nome completo é obrigatório");
    }
    
    if (!args.telefone.trim()) {
      throw new Error("Telefone é obrigatório");
    }

    // Verificar se o telefone já existe
    const existingLead = await ctx.db
      .query("leads")
      .withIndex("by_telefone", (q) => q.eq("telefone", args.telefone))
      .first();

    if (existingLead) {
      // Atualizar lead existente com novo timestamp
      await ctx.db.patch(existingLead._id, {
        nome_completo: args.nome_completo,
        created_at: Date.now(),
      });
      return existingLead._id;
    }

    // Criar novo lead
    const leadId = await ctx.db.insert("leads", {
      nome_completo: args.nome_completo.trim(),
      telefone: args.telefone.trim(),
      created_at: Date.now(),
    });

    return leadId;
  },
});

/**
 * Query para buscar todos os leads (para uso administrativo)
 */
export const getAllLeads = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("leads")
      .withIndex("by_created_at")
      .order("desc")
      .collect();
  },
});

/**
 * Query para contar total de leads
 */
export const getLeadsCount = query({
  args: {},
  handler: async (ctx) => {
    const leads = await ctx.db.query("leads").collect();
    return leads.length;
  },
});