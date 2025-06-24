'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Book, Download, Clock, User, LogOut, Settings, BookOpen } from 'lucide-react';
import { ebooks } from '@/data/ebooks';
import { useAuth } from '@/contexts/auth-context';

export default function MinhaAreaPage() {
  const [activeTab, setActiveTab] = useState('ebooks');
  const { user, isLoading, logout } = useAuth();
  const router = useRouter();
  
  // Simulando ebooks comprados pelo usuário
  const purchasedEbooks = ebooks.slice(0, 2); // Pegando os 2 primeiros como exemplo

  useEffect(() => {
    // Redireciona para login se não estiver autenticado
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  // Mostra loading enquanto verifica autenticação
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <BookOpen className="w-12 h-12 text-primary" />
        </div>
      </div>
    );
  }

  // Se não tem usuário, não renderiza nada (será redirecionado)
  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Minha Área</h1>
            <p className="text-muted-foreground">Bem-vindo de volta! Acesse seus conteúdos aqui.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl p-4">
                <div className="flex items-center gap-3 mb-6 p-3 bg-background rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </div>
                </div>

                <nav className="space-y-1">
                  <button
                    onClick={() => setActiveTab('ebooks')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'ebooks' 
                        ? 'bg-primary text-background' 
                        : 'hover:bg-background text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Meus Ebooks</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('perfil')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === 'perfil' 
                        ? 'bg-primary text-background' 
                        : 'hover:bg-background text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Settings className="w-5 h-5" />
                    <span>Meu Perfil</span>
                  </button>
                  <button
                    onClick={logout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors hover:bg-background text-muted-foreground hover:text-foreground"
                  >
                    <LogOut className="w-5 h-5" />
                    <span>Sair</span>
                  </button>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {activeTab === 'ebooks' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-2xl font-semibold mb-6">Meus Ebooks</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {purchasedEbooks.map((ebook) => (
                      <motion.div
                        key={ebook.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-card rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <div className="flex gap-4 p-4">
                          <div className="relative w-24 h-32 rounded-lg overflow-hidden bg-background flex-shrink-0">
                            <Image
                              src={ebook.coverImage}
                              alt={ebook.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{ebook.title}</h3>
                            <p className="text-sm text-muted-foreground mb-3">{ebook.author}</p>
                            
                            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                              <div className="flex items-center gap-1">
                                <Book className="w-3 h-3" />
                                <span>{ebook.pages} páginas</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                <span>Comprado em 15/01/2024</span>
                              </div>
                            </div>

                            <div className="flex gap-2">
                              <Link
                                href={`/minha-area/ler/${ebook.slug}`}
                                className="flex-1 bg-primary text-background py-2 px-3 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors text-center"
                              >
                                Ler agora
                              </Link>
                              <button className="flex items-center gap-1 bg-card border border-gray-800 text-foreground py-2 px-3 rounded-lg text-sm hover:border-primary transition-colors">
                                <Download className="w-4 h-4" />
                                PDF
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {purchasedEbooks.length === 0 && (
                    <div className="text-center py-12">
                      <Book className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">Nenhum ebook ainda</h3>
                      <p className="text-muted-foreground mb-6">
                        Você ainda não possui nenhum ebook. Que tal começar?
                      </p>
                      <Link
                        href="/ebooks"
                        className="inline-flex items-center gap-2 bg-primary text-background px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                      >
                        Explorar ebooks
                      </Link>
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === 'perfil' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-card rounded-xl p-6"
                >
                  <h2 className="text-2xl font-semibold mb-6">Meu Perfil</h2>
                  
                  <form className="space-y-4 max-w-md">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nome completo</label>
                      <input
                        type="text"
                        defaultValue={user.name}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-gray-800 focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue={user.email}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-gray-800 focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">CPF</label>
                      <input
                        type="text"
                        defaultValue="123.456.789-00"
                        className="w-full px-4 py-3 rounded-lg bg-background border border-gray-800 focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-primary text-background py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                      Salvar alterações
                    </button>
                  </form>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}