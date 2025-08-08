'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, Calendar, Percent, Download } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { GetStartedButton } from '@/components/ui/get-started-button';

interface CalculationResult {
  totalAmount: number;
  totalInvested: number;
  totalInterest: number;
  monthlyData: Array<{
    month: number;
    year: number;
    total: number;
    invested: number;
    interest: number;
  }>;
}

export default function CalculadoraPage() {
  const [values, setValues] = useState({
    initialAmount: '',
    monthlyDeposit: '',
    interestRate: '',
    period: '',
    periodType: 'years' as 'years' | 'months',
  });
  
  const [displayValues, setDisplayValues] = useState({
    initialAmount: '',
    monthlyDeposit: '',
  });
  
  // Função para formatar valor monetário para exibição
  const formatCurrencyDisplay = (value: string): string => {
    // Remove tudo que não é número
    const onlyNumbers = value.replace(/\D/g, '');
    if (!onlyNumbers) return '';
    
    // Converte para número (em centavos)
    const numberValue = parseInt(onlyNumbers);
    
    // Formata o valor
    const reais = Math.floor(numberValue / 100);
    const centavos = (numberValue % 100).toString().padStart(2, '0');
    
    // Adiciona separadores de milhares
    const formattedReais = reais.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    
    return `R$ ${formattedReais},${centavos}`;
  };
  
  // Função para extrair apenas o valor numérico
  const extractNumericValue = (formattedValue: string): string => {
    const numbers = formattedValue.replace(/\D/g, '');
    if (!numbers) return '';
    return (parseInt(numbers) / 100).toString();
  };
  
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    // Get user data from localStorage
    const storedData = localStorage.getItem('leadData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  const calculateCompoundInterest = () => {
    const P = parseFloat(values.initialAmount) || 0;
    const PMT = parseFloat(values.monthlyDeposit) || 0;
    const r = (parseFloat(values.interestRate) || 0) / 100 / 12; // Monthly rate
    const n = values.periodType === 'years' 
      ? (parseFloat(values.period) || 0) * 12 
      : parseFloat(values.period) || 0;

    if (n === 0) return;

    const monthlyData = [];
    let currentTotal = P;
    let totalInvested = P;

    for (let month = 1; month <= n; month++) {
      // Add monthly deposit
      totalInvested += PMT;
      
      // Calculate interest
      currentTotal = currentTotal * (1 + r) + PMT;
      
      const year = Math.ceil(month / 12);
      const interest = currentTotal - totalInvested;
      
      // Add data points: every month for first year, then every 6 months
      if (month <= 12 || month % 6 === 0 || month === n) {
        monthlyData.push({
          month,
          year,
          total: currentTotal,
          invested: totalInvested,
          interest,
        });
      }
    }

    setResult({
      totalAmount: currentTotal,
      totalInvested,
      totalInterest: currentTotal - totalInvested,
      monthlyData,
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const formatTooltipValue = (value: number) => formatCurrency(value);

  const chartData = result?.monthlyData.map(item => ({
    periodo: item.month <= 12 ? `Mês ${item.month}` : `Ano ${item.year}`,
    mes: item.month,
    'Valor Total': item.total,
    'Valor Investido': item.invested,
  })) || [];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Main content */}
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-24 md:pt-28 pb-12 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-2">
            Calculadora de Juros Compostos
          </h1>
          <p className="text-secondary">
            Simule seus investimentos e veja seu dinheiro crescer exponencialmente
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Input form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-primary/20 rounded-2xl p-6 md:p-8"
          >
            <h2 className="text-lg md:text-xl font-semibold mb-6">Configure sua simulação</h2>
            
            <div className="space-y-6">
              {/* Initial amount */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <DollarSign className="w-4 h-4 text-primary" />
                  Valor inicial
                </label>
                <input
                  type="text"
                  value={displayValues.initialAmount}
                  onChange={(e) => {
                    const formatted = formatCurrencyDisplay(e.target.value);
                    setDisplayValues({ ...displayValues, initialAmount: formatted });
                    setValues({ ...values, initialAmount: extractNumericValue(formatted) });
                  }}
                  className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="R$ 0,00"
                />
              </div>

              {/* Monthly deposit */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  Aporte mensal
                </label>
                <input
                  type="text"
                  value={displayValues.monthlyDeposit}
                  onChange={(e) => {
                    const formatted = formatCurrencyDisplay(e.target.value);
                    setDisplayValues({ ...displayValues, monthlyDeposit: formatted });
                    setValues({ ...values, monthlyDeposit: extractNumericValue(formatted) });
                  }}
                  className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="R$ 0,00"
                />
              </div>

              {/* Interest rate */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <Percent className="w-4 h-4 text-primary" />
                  Taxa de juros anual (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={values.interestRate}
                  onChange={(e) => setValues({ ...values, interestRate: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="12"
                />
              </div>

              {/* Period */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  Período
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={values.period}
                    onChange={(e) => setValues({ ...values, period: e.target.value })}
                    className="flex-1 px-4 py-3 bg-background border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="20"
                  />
                  <select
                    value={values.periodType}
                    onChange={(e) => setValues({ ...values, periodType: e.target.value as 'years' | 'months' })}
                    className="px-4 py-3 bg-background border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none cursor-pointer pr-10 bg-no-repeat"
                    style={{
                      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                      backgroundPosition: 'right 0.7rem center',
                      backgroundSize: '1.5em 1.5em'
                    }}
                  >
                    <option value="years">Anos</option>
                    <option value="months">Meses</option>
                  </select>
                </div>
              </div>

              <motion.button
                onClick={calculateCompoundInterest}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold transition-all hover:bg-primary/90"
              >
                Calcular rendimento
              </motion.button>
              
              {result && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={() => {
                    setResult(null);
                    setValues({
                      initialAmount: '',
                      monthlyDeposit: '',
                      interestRate: '',
                      period: '',
                      periodType: 'years',
                    });
                    setDisplayValues({
                      initialAmount: '',
                      monthlyDeposit: '',
                    });
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-background border border-border py-3 rounded-lg font-semibold transition-all hover:bg-muted text-sm md:text-base"
                >
                  Resetar cálculo
                </motion.button>
              )}
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-primary/20 rounded-2xl p-6 md:p-8"
          >
            <h2 className="text-lg md:text-xl font-semibold mb-6">Resultado da simulação</h2>
            
            {result ? (
              <div className="space-y-6">
                {/* Summary cards */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-primary/10 rounded-lg p-4">
                    <p className="text-sm text-secondary mb-1">Valor total acumulado</p>
                    <p className="text-2xl font-bold text-primary mb-2">{formatCurrency(result.totalAmount)}</p>
                    <p className="text-xs text-gray-500/40 leading-tight">Esse foi o valor que você acumulou entre juros e aportes/investimento inicial</p>
                  </div>
                  
                  <div className="bg-background rounded-lg p-4 border border-primary/20">
                    <p className="text-sm text-secondary mb-1">Total investido</p>
                    <p className="text-xl font-semibold mb-2">{formatCurrency(result.totalInvested)}</p>
                    <p className="text-xs text-gray-500/40 leading-tight">Soma do valor inicial mais todos os aportes mensais realizados</p>
                  </div>
                  
                  <div className="bg-background rounded-lg p-4 border border-primary/20">
                    <p className="text-sm text-secondary mb-1">Juros ganhos</p>
                    <p className="text-xl font-semibold text-green-500 mb-2">{formatCurrency(result.totalInterest)}</p>
                    <p className="text-xs text-gray-500/40 leading-tight">Lucro gerado pelos juros compostos sobre seus investimentos</p>
                  </div>
                </div>

                {/* Download button */}
                <button className="w-full flex items-center justify-center gap-2 py-3 border border-primary/20 rounded-lg hover:bg-primary/10 transition-colors">
                  <Download className="w-4 h-4" />
                  Baixar relatório completo
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <TrendingUp className="w-12 h-12 text-primary/20 mb-4" />
                <p className="text-secondary">
                  Configure os valores ao lado e clique em "Calcular rendimento" para ver a simulação
                </p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Chart Section */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 bg-card border border-primary/20 rounded-2xl p-6 md:p-8"
          >
            <h2 className="text-lg md:text-xl font-semibold mb-6">Evolução do investimento</h2>
            <div className="h-80 md:h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis 
                    dataKey="periodo" 
                    stroke="#666"
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis 
                    stroke="#666"
                    tick={{ fontSize: 12 }}
                    tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                  />
                  <Tooltip 
                    formatter={formatTooltipValue}
                    contentStyle={{ 
                      backgroundColor: '#1a1a1a', 
                      border: '1px solid #D4AF37',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="Valor Total" 
                    stroke="#D4AF37" 
                    strokeWidth={3}
                    dot={false}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="Valor Investido" 
                    stroke="#666" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        )}

        {/* Educational content - How compound interest works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 space-y-8"
        >
          {/* Header Section */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl mb-4">
              Como funcionam os <span className="text-primary">juros compostos</span>?
            </h2>
            <p className="text-secondary max-w-3xl mx-auto">
              Albert Einstein chamou os juros compostos de "a força mais poderosa do universo". 
              Entenda por que essa estratégia pode transformar pequenos valores em grandes fortunas.
            </p>
          </div>

          {/* Visual Explanation */}
          <div className="bg-card border border-primary/20 rounded-2xl p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-semibold mb-6">A mágica dos juros sobre juros</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Juros Simples vs Compostos */}
              <div className="space-y-4">
                <h4 className="text-base font-medium text-primary">Juros Simples ❌</h4>
                <div className="bg-background/50 rounded-lg p-4 space-y-2">
                  <p className="text-sm">Você ganha juros apenas sobre o valor inicial:</p>
                  <div className="text-xs space-y-1 font-mono">
                    <p>Ano 1: R$ 1.000 + (R$ 1.000 × 10%) = R$ 1.100</p>
                    <p>Ano 2: R$ 1.100 + (R$ 1.000 × 10%) = R$ 1.200</p>
                    <p>Ano 3: R$ 1.200 + (R$ 1.000 × 10%) = R$ 1.300</p>
                  </div>
                  <p className="text-sm text-secondary pt-2">Ganho total: R$ 300</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-base font-medium text-primary">Juros Compostos ✅</h4>
                <div className="bg-primary/10 rounded-lg p-4 space-y-2">
                  <p className="text-sm">Você ganha juros sobre juros:</p>
                  <div className="text-xs space-y-1 font-mono">
                    <p>Ano 1: R$ 1.000 + (R$ 1.000 × 10%) = R$ 1.100</p>
                    <p>Ano 2: R$ 1.100 + (R$ 1.100 × 10%) = R$ 1.210</p>
                    <p>Ano 3: R$ 1.210 + (R$ 1.210 × 10%) = R$ 1.331</p>
                  </div>
                  <p className="text-sm text-primary font-semibold pt-2">Ganho total: R$ 331</p>
                </div>
              </div>
            </div>

            {/* Formula */}
            <div className="mt-8 bg-background rounded-lg p-6 text-center">
              <p className="text-sm text-secondary mb-3">A fórmula mágica:</p>
              <p className="text-xl md:text-2xl font-mono font-semibold text-primary">
                M = P × (1 + i)^n
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
                <div>
                  <p className="font-mono text-primary">M</p>
                  <p className="text-xs text-secondary">Montante final</p>
                </div>
                <div>
                  <p className="font-mono text-primary">P</p>
                  <p className="text-xs text-secondary">Capital inicial</p>
                </div>
                <div>
                  <p className="font-mono text-primary">i</p>
                  <p className="text-xs text-secondary">Taxa de juros</p>
                </div>
                <div>
                  <p className="font-mono text-primary">n</p>
                  <p className="text-xs text-secondary">Tempo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Time Impact */}
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <div className="text-3xl mb-3">⏰</div>
              <h4 className="font-semibold mb-2">O fator tempo</h4>
              <p className="text-sm text-secondary">
                Começar 5 anos antes pode dobrar seu patrimônio final
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <div className="text-3xl mb-3">📈</div>
              <h4 className="font-semibold mb-2">Crescimento exponencial</h4>
              <p className="text-sm text-secondary">
                Nos últimos anos, seu dinheiro cresce de forma acelerada
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <div className="text-3xl mb-3">💎</div>
              <h4 className="font-semibold mb-2">Disciplina vale ouro</h4>
              <p className="text-sm text-secondary">
                Aportes mensais constantes maximizam o efeito composto
              </p>
            </motion.div>
          </div>

          {/* Real Example */}
          <div className="bg-primary border border-primary/20 rounded-2xl p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-center text-background">
              Exemplo: O poder de começar cedo
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center space-y-3">
                <h4 className="font-medium text-background">João (começou aos 25 anos)</h4>
                <div className="bg-background/90 rounded-lg p-4 space-y-2 border border-background/20">
                  <p className="text-sm">Investiu R$ 300/mês por 35 anos</p>
                  <p className="text-xs text-secondary">Total investido: R$ 126.000</p>
                  <p className="text-2xl font-semibold text-primary mt-3">R$ 649.527</p>
                  <p className="text-xs text-secondary">Patrimônio final</p>
                </div>
              </div>

              <div className="text-center space-y-3">
                <h4 className="font-medium text-background">Maria (começou aos 35 anos)</h4>
                <div className="bg-background/90 rounded-lg p-4 space-y-2 border border-background/20">
                  <p className="text-sm">Investiu R$ 600/mês por 25 anos</p>
                  <p className="text-xs text-secondary">Total investido: R$ 180.000</p>
                  <p className="text-2xl font-semibold text-muted-foreground mt-3">R$ 405.681</p>
                  <p className="text-xs text-secondary">Patrimônio final</p>
                </div>
              </div>
            </div>

            <p className="text-center mt-6 text-sm text-background">
              <span className="text-background font-semibold">João investiu menos</span> e 
              <span className="text-background font-semibold"> ganhou mais</span>, 
              apenas por começar 10 anos antes!
            </p>
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <p className="text-lg mb-4">
              Agora que você entende o poder dos juros compostos...
            </p>
            <GetStartedButton 
              href="#"
              className="inline-block hover:scale-105"
            >
              Comece a investir hoje mesmo
            </GetStartedButton>
          </div>
        </motion.div>
      </main>
    </div>
  );
}