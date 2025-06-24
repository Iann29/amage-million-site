'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { User, LogOut, BookOpen, Settings, LogIn, UserPlus } from 'lucide-react';
import { useAuth } from '@/contexts/auth-context';
import { motion, AnimatePresence } from 'framer-motion';

export function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Botão do usuário */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center justify-center w-10 h-10 rounded-full bg-primary text-background hover:bg-primary/90 transition-colors"
      >
        <User className="w-5 h-5" />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay para fechar ao clicar fora */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-56 bg-card rounded-lg border border-gray-800 shadow-lg z-50"
            >
              {user ? (
                <>
                  {/* Header do usuário */}
                  <div className="px-4 py-3 border-b border-gray-800">
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                  </div>

                  {/* Opções para usuário logado */}
                  <div className="py-2">
                    <Link
                      href="/minha-area"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-background transition-colors"
                    >
                      <User className="w-4 h-4" />
                      Minha área
                    </Link>
                    <Link
                      href="/minha-area#ebooks"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-background transition-colors"
                    >
                      <BookOpen className="w-4 h-4" />
                      Meus ebooks
                    </Link>
                    <Link
                      href="/minha-area#perfil"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-background transition-colors"
                    >
                      <Settings className="w-4 h-4" />
                      Perfil
                    </Link>
                  </div>

                  {/* Sair */}
                  <div className="border-t border-gray-800 py-2">
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-background transition-colors w-full text-left text-red-500"
                    >
                      <LogOut className="w-4 h-4" />
                      Sair
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* Opções para usuário não logado */}
                  <div className="py-2">
                    <Link
                      href="/login"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-background transition-colors"
                    >
                      <LogIn className="w-4 h-4" />
                      Entrar
                    </Link>
                    <Link
                      href="/login?register=true"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-background transition-colors"
                    >
                      <UserPlus className="w-4 h-4" />
                      Criar conta
                    </Link>
                  </div>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}