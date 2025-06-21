'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, Calendar, Percent, Download } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
      
      // Add data point every 3 months for performance
      if (month % 3 === 0 || month === n) {
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
    periodo: values.periodType === 'years' ? `Ano ${item.year}` : `Mês ${item.month}`,
    'Valor Total': item.total,
    'Valor Investido': item.invested,
  })) || [];

  return (
    <div className="min-h-screen bg-background">
      {/* Main content */}
      <main className="container max-w-6xl py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-primary/10 rounded-full">
            <Calculator className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Calculadora de Juros Compostos
          </h1>
          <p className="text-secondary">
            Simule seus investimentos e veja seu dinheiro crescer exponencialmente
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-primary/20 rounded-2xl p-6 md:p-8"
          >
            <h2 className="text-xl font-semibold mb-6">Configure sua simulação</h2>
            
            <div className="space-y-6">
              {/* Initial amount */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <DollarSign className="w-4 h-4 text-primary" />
                  Valor inicial
                </label>
                <input
                  type="number"
                  value={values.initialAmount}
                  onChange={(e) => setValues({ ...values, initialAmount: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="R$ 1.000"
                />
              </div>

              {/* Monthly deposit */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  Aporte mensal
                </label>
                <input
                  type="number"
                  value={values.monthlyDeposit}
                  onChange={(e) => setValues({ ...values, monthlyDeposit: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="R$ 500"
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
                    className="px-4 py-3 bg-background border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
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
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-primary/20 rounded-2xl p-6 md:p-8"
          >
            <h2 className="text-xl font-semibold mb-6">Resultado da simulação</h2>
            
            {result ? (
              <div className="space-y-6">
                {/* Summary cards */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-primary/10 rounded-lg p-4">
                    <p className="text-sm text-secondary mb-1">Valor total acumulado</p>
                    <p className="text-2xl font-bold text-primary">{formatCurrency(result.totalAmount)}</p>
                  </div>
                  
                  <div className="bg-background rounded-lg p-4 border border-primary/20">
                    <p className="text-sm text-secondary mb-1">Total investido</p>
                    <p className="text-xl font-semibold">{formatCurrency(result.totalInvested)}</p>
                  </div>
                  
                  <div className="bg-background rounded-lg p-4 border border-primary/20">
                    <p className="text-sm text-secondary mb-1">Juros ganhos</p>
                    <p className="text-xl font-semibold text-green-500">{formatCurrency(result.totalInterest)}</p>
                  </div>
                </div>

                {/* Chart */}
                <div className="h-64 md:h-80 mt-6">
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

        {/* Educational content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-card/50 border border-primary/20 rounded-2xl p-6 md:p-8"
        >
          <h3 className="text-lg font-semibold mb-4">O poder dos juros compostos</h3>
          <p className="text-secondary mb-4">
            Os juros compostos são considerados a oitava maravilha do mundo. Com eles, seus rendimentos 
            geram novos rendimentos, criando um efeito exponencial no crescimento do seu patrimônio.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-background/50 rounded-lg p-4">
              <p className="font-medium mb-1">Comece cedo</p>
              <p className="text-secondary">Quanto antes você começar, mais tempo o dinheiro terá para crescer</p>
            </div>
            <div className="bg-background/50 rounded-lg p-4">
              <p className="font-medium mb-1">Seja consistente</p>
              <p className="text-secondary">Aportes regulares fazem uma grande diferença no longo prazo</p>
            </div>
            <div className="bg-background/50 rounded-lg p-4">
              <p className="font-medium mb-1">Tenha paciência</p>
              <p className="text-secondary">O verdadeiro poder aparece após anos de acumulação</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}