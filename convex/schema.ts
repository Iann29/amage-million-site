import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  leads: defineTable({
    nome_completo: v.string(),
    telefone: v.string(),
    created_at: v.number(),
  })
    .index("by_created_at", ["created_at"])
    .index("by_telefone", ["telefone"]),
});