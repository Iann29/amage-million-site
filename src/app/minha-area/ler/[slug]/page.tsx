'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Menu, X, Home, BookOpen, Settings, Maximize, Minimize } from 'lucide-react';
import { getEbookBySlug } from '@/data/ebooks';
import Link from 'next/link';

export default function LerEbookPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const ebook = getEbookBySlug(slug);

  const [currentChapter, setCurrentChapter] = useState(0);
  const [showSidebar, setShowSidebar] = useState(true);
  const [fontSize, setFontSize] = useState('medium');
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!ebook) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Ebook não encontrado.</p>
      </div>
    );
  }

  const nextChapter = () => {
    if (currentChapter < ebook.chapters.length - 1) {
      setCurrentChapter(currentChapter + 1);
    }
  };

  const prevChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const fontSizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
    xlarge: 'text-xl'
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <AnimatePresence>
        {showSidebar && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            className="w-80 bg-card border-r border-gray-800 flex flex-col"
          >
            {/* Sidebar Header */}
            <div className="p-4 border-b border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Sumário</h2>
                <button
                  onClick={() => setShowSidebar(false)}
                  className="p-1 hover:bg-background rounded transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <h3 className="text-sm text-muted-foreground">{ebook.title}</h3>
            </div>

            {/* Chapters List */}
            <div className="flex-1 overflow-y-auto p-4">
              <ul className="space-y-2">
                {ebook.chapters.map((chapter, index) => (
                  <li key={chapter.id}>
                    <button
                      onClick={() => setCurrentChapter(index)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        currentChapter === index
                          ? 'bg-primary text-background'
                          : 'hover:bg-background'
                      }`}
                    >
                      <span className="text-sm">Capítulo {index + 1}</span>
                      <p className="text-sm font-medium mt-1">{chapter.title}</p>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar Footer */}
            <div className="p-4 border-t border-gray-800 space-y-2">
              <Link
                href="/minha-area"
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-background transition-colors"
              >
                <Home className="w-5 h-5" />
                <span className="text-sm">Minha área</span>
              </Link>
              <Link
                href="/ebooks"
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-background transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                <span className="text-sm">Mais ebooks</span>
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-card border-b border-gray-800 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {!showSidebar && (
                <button
                  onClick={() => setShowSidebar(true)}
                  className="p-2 hover:bg-background rounded-lg transition-colors"
                >
                  <Menu className="w-5 h-5" />
                </button>
              )}
              <h1 className="text-lg font-semibold">
                Capítulo {currentChapter + 1}: {ebook.chapters[currentChapter].title}
              </h1>
            </div>

            {/* Reading Controls */}
            <div className="flex items-center gap-4">
              {/* Font Size */}
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-muted-foreground" />
                <select
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value)}
                  className="bg-background border border-gray-800 rounded px-3 py-1 text-sm"
                >
                  <option value="small">Pequeno</option>
                  <option value="medium">Médio</option>
                  <option value="large">Grande</option>
                  <option value="xlarge">Muito Grande</option>
                </select>
              </div>

              {/* Fullscreen */}
              <button
                onClick={toggleFullscreen}
                className="p-2 hover:bg-background rounded-lg transition-colors"
              >
                {isFullscreen ? (
                  <Minimize className="w-5 h-5" />
                ) : (
                  <Maximize className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Reader Content */}
        <div className="flex-1 overflow-y-auto">
          <motion.div
            key={currentChapter}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`max-w-4xl mx-auto p-8 ${fontSizeClasses[fontSize as keyof typeof fontSizeClasses]}`}
          >
            <h2 className="text-3xl font-bold mb-8">
              {ebook.chapters[currentChapter].title}
            </h2>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Este é o conteúdo do {ebook.chapters[currentChapter].title}. 
                Em uma implementação real, aqui estaria o conteúdo completo do capítulo, 
                com parágrafos, subtítulos, imagens e outros elementos formatados.
              </p>
              
              <p className="mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Conceitos importantes</h3>
              <p className="mb-6 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-8">
                <h4 className="font-semibold mb-2">Dica importante:</h4>
                <p className="text-sm">
                  Esta é uma dica ou destaque importante do capítulo que ajuda o leitor a 
                  fixar conceitos fundamentais.
                </p>
              </div>

              <p className="mb-6 leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Navigation Footer */}
        <footer className="bg-card border-t border-gray-800 px-6 py-4">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <button
              onClick={prevChapter}
              disabled={currentChapter === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                currentChapter === 0
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-background'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Capítulo anterior</span>
            </button>

            <span className="text-sm text-muted-foreground">
              {currentChapter + 1} de {ebook.chapters.length}
            </span>

            <button
              onClick={nextChapter}
              disabled={currentChapter === ebook.chapters.length - 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                currentChapter === ebook.chapters.length - 1
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-background'
              }`}
            >
              <span>Próximo capítulo</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}