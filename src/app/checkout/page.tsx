'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, CreditCard, Smartphone, CheckCircle } from 'lucide-react';
import { getEbookById } from '@/data/ebooks';
import { useAuth } from '@/contexts/auth-context';

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const ebookId = searchParams.get('ebook');
  const ebook = ebookId ? getEbookById(ebookId) : null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cpf: '',
    paymentMethod: 'pix'
  });

  const [step, setStep] = useState(1); // 1: dados, 2: pagamento, 3: confirmação
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Simulação de autenticação

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      // Processar pagamento
      setStep(3);
    }
  };

  if (!ebook) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Nenhum ebook selecionado.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-4">
                <div className={`flex items-center ${step >= 1 ? 'text-primary' : 'text-muted-foreground'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-primary text-background' : 'bg-card'}`}>
                    1
                  </div>
                  <span className="ml-2 text-sm">Dados</span>
                </div>
                <div className={`w-16 h-[2px] ${step >= 2 ? 'bg-primary' : 'bg-card'}`} />
                <div className={`flex items-center ${step >= 2 ? 'text-primary' : 'text-muted-foreground'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-primary text-background' : 'bg-card'}`}>
                    2
                  </div>
                  <span className="ml-2 text-sm">Pagamento</span>
                </div>
                <div className={`w-16 h-[2px] ${step >= 3 ? 'bg-primary' : 'bg-card'}`} />
                <div className={`flex items-center ${step >= 3 ? 'text-primary' : 'text-muted-foreground'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-primary text-background' : 'bg-card'}`}>
                    3
                  </div>
                  <span className="ml-2 text-sm">Confirmação</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-2xl p-6 md:p-8"
              >
                {step === 1 && (
                  <>
                    <h2 className="text-2xl font-bold mb-6">Informações pessoais</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Nome completo</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-background border border-gray-800 focus:border-primary focus:outline-none transition-colors"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-background border border-gray-800 focus:border-primary focus:outline-none transition-colors"
                          placeholder="seu@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">CPF</label>
                        <input
                          type="text"
                          name="cpf"
                          value={formData.cpf}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-background border border-gray-800 focus:border-primary focus:outline-none transition-colors"
                          placeholder="000.000.000-00"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                      >
                        Continuar para pagamento
                      </button>
                    </form>
                  </>
                )}

                {step === 2 && (
                  <>
                    <h2 className="text-2xl font-bold mb-6">Forma de pagamento</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-3">
                        <label className="flex items-center p-4 rounded-lg border border-gray-800 cursor-pointer hover:border-primary transition-colors">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="pix"
                            checked={formData.paymentMethod === 'pix'}
                            onChange={handleInputChange}
                            className="mr-3"
                          />
                          <Smartphone className="w-5 h-5 mr-3 text-primary" />
                          <div className="flex-1">
                            <p className="font-medium">PIX</p>
                            <p className="text-sm text-muted-foreground">Pagamento instantâneo</p>
                          </div>
                        </label>
                        <label className="flex items-center p-4 rounded-lg border border-gray-800 cursor-pointer hover:border-primary transition-colors">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="credit"
                            checked={formData.paymentMethod === 'credit'}
                            onChange={handleInputChange}
                            className="mr-3"
                          />
                          <CreditCard className="w-5 h-5 mr-3 text-primary" />
                          <div className="flex-1">
                            <p className="font-medium">Cartão de crédito</p>
                            <p className="text-sm text-muted-foreground">Parcelamento disponível</p>
                          </div>
                        </label>
                      </div>
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="flex-1 bg-card text-foreground py-3 rounded-lg font-medium hover:bg-card/80 transition-colors"
                        >
                          Voltar
                        </button>
                        <button
                          type="submit"
                          className="flex-1 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                        >
                          Finalizar compra
                        </button>
                      </div>
                    </form>
                  </>
                )}

                {step === 3 && (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-2">Compra realizada com sucesso!</h2>
                    <p className="text-muted-foreground mb-6">
                      Você receberá um email com as instruções de acesso.
                    </p>
                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                      Acessar minha área
                    </button>
                  </div>
                )}
              </motion.div>

              {/* Security badges */}
              <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  <span>Pagamento seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Dados protegidos</span>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-2xl p-6 sticky top-24"
              >
                <h3 className="text-lg font-semibold mb-4">Resumo do pedido</h3>
                
                <div className="flex gap-4 mb-4">
                  <div className="relative w-20 h-28 rounded-lg overflow-hidden bg-background">
                    <Image
                      src={ebook.coverImage}
                      alt={ebook.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{ebook.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{ebook.author}</p>
                  </div>
                </div>

                <div className="border-t border-gray-800 pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>R$ {ebook.price.toFixed(2)}</span>
                  </div>
                  {ebook.originalPrice && (
                    <div className="flex justify-between text-sm text-green-500">
                      <span>Desconto</span>
                      <span>-R$ {(ebook.originalPrice - ebook.price).toFixed(2)}</span>
                    </div>
                  )}
                  <div className="border-t border-gray-800 pt-2 flex justify-between font-semibold">
                    <span>Total</span>
                    <span className="text-primary">R$ {ebook.price.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span className="text-muted-foreground">Acesso imediato após o pagamento</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span className="text-muted-foreground">7 dias de garantia</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span className="text-muted-foreground">Suporte por email</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}