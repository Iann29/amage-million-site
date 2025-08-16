'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calculator, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useModal } from '@/contexts/modal-context';
import { useMutation } from 'convex/react';

interface FormData {
  name: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  submit?: string;
}

export function LeadCaptureModal() {
  const router = useRouter();
  const { activeModal, closeModal } = useModal();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const createLead = useMutation('leads:createLead' as any);
  const isOpen = activeModal === 'lead-capture';

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome completo é obrigatório';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Nome deve ter pelo menos 2 caracteres';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    } else if (!/^[\d\s\(\)\-\+]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Formato de telefone inválido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      await createLead({
        nome_completo: formData.name.trim(),
        telefone: formData.phone.trim(),
      });

      // Close modal and redirect to calculator
      closeModal();
      router.push('/calculadora');

    } catch (error) {
      console.error('Erro ao salvar lead:', error);
      setErrors({
        submit: 'Erro ao processar sua solicitação. Tente novamente.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return value;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    if (field === 'phone') {
      value = formatPhone(value);
    }

    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Limpar erro específico quando usuário começa a digitar
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleClose = () => {
    if (isSubmitting) return;
    
    setFormData({ name: '', phone: '' });
    setErrors({});
    closeModal();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100]"
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-card border border-primary/20 rounded-2xl shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto overscroll-contain scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
            {/* Close button */}
            <button
              onClick={handleClose}
              disabled={isSubmitting}
              className="absolute right-4 top-4 p-2 rounded-full hover:bg-white/10 transition-colors disabled:opacity-50"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Header */}
            <div className="text-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-primary/10 rounded-full"
              >
                <Calculator className="w-8 h-8 text-primary" />
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-2">
                Calcule seus rendimentos
              </h3>
              <p className="text-secondary">
                Deixe seus dados para receber uma simulação personalizada
              </p>
            </div>
            
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-4 py-3 bg-background border ${
                    errors.name ? 'border-red-500' : 'border-border'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                  placeholder="Seu nome completo"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`w-full px-4 py-3 bg-background border ${
                    errors.phone ? 'border-red-500' : 'border-border'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                  placeholder="(11) 99999-9999"
                  maxLength={15}
                  disabled={isSubmitting}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Erro de Submit */}
              {errors.submit && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                  <p className="text-red-500 text-sm">{errors.submit}</p>
                </div>
              )}
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold transition-all hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Acessando...
                  </>
                ) : (
                  'Acessar calculadora'
                )}
              </motion.button>
            </form>
            
            {/* Trust indicator */}
            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-secondary">
              <Lock className="w-3 h-3" />
              <span>Seus dados estão seguros e não serão compartilhados</span>
            </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}