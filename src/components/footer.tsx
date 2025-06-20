'use client';

import Link from 'next/link';
import { Instagram, Youtube, Linkedin, Mail, Phone, Clock } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/millionstreet', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/millionstreet', label: 'YouTube' },
  { icon: Linkedin, href: 'https://linkedin.com/company/millionstreet', label: 'LinkedIn' },
];

const quickLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Educação', href: '#educacao' },
  { label: 'Planos', href: '#planos' },
  { label: 'FAQ', href: '#faq' },
];

export function Footer() {
  return (
    <footer className="bg-muted border-t border-primary/10">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-primary">Million</span>
            </div>
            <p className="text-secondary text-sm">
              Democratizando o acesso a investimentos inteligentes
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-background rounded-lg flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-secondary">
                <Phone className="w-4 h-4" />
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-2 text-secondary">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:contato@millionstreet.com.br"
                  className="hover:text-primary transition-colors"
                >
                  contato@millionstreet.com.br
                </a>
              </li>
              <li className="flex items-center gap-2 text-secondary">
                <Clock className="w-4 h-4" />
                <span>Seg-Sex: 9h às 18h</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-secondary text-sm mb-4">
              Receba conteúdo exclusivo sobre investimentos
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="w-full bg-background border border-primary/20 rounded-lg px-4 py-2 text-white placeholder:text-secondary focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-primary text-background py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Inscrever
              </button>
            </form>
          </div>
        </div>

        {/* Disclaimer and Copyright */}
        <div className="border-t border-primary/10 pt-8">
          <p className="text-xs text-secondary text-center mb-4">
            <strong>Importante:</strong> A Million é uma empresa de educação e consultoria financeira. 
            Não somos uma instituição financeira e não realizamos a custódia de valores. 
            Toda orientação visa educação e planejamento.
          </p>
          <p className="text-xs text-secondary text-center">
            © 2024 Million. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}