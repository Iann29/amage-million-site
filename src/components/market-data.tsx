'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useModal } from '@/contexts/modal-context';

interface MarketItem {
  name: string;
  value: number;
  change: number;
  changePercent: number;
}

interface MarketDataResponse {
  dolar: number;
  dolarChange?: number;
  bitcoin: number;
  bitcoinChange?: number;
  ibovespa: number;
  ibovespaChange?: number;
  vfix: number;
  vfixChange?: number;
  error?: string;
}

export function MarketData() {
  const { isModalOpen } = useModal();
  const [marketItems, setMarketItems] = useState<MarketItem[]>([
    { name: 'USD', value: 5.472, change: 0.023, changePercent: 0.42 },
    { name: 'BTC', value: 540000, change: 5234, changePercent: 1.54 },
    { name: 'IBOV', value: 127543, change: -234, changePercent: -0.18 },
    { name: 'IFIX', value: 12.37, change: 0.01, changePercent: 0.08 }
  ]);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await fetch('/api/market-data').catch(() => null);
        
        if (!response) {
          console.warn('Failed to fetch market data');
          return;
        }
        
        if (!response.ok) {
          console.warn('Market data API returned non-ok status:', response.status);
          return;
        }
        
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          console.warn("Market data API returned non-JSON response");
          return;
        }
        
        let data: MarketDataResponse;
        try {
          data = await response.json();
        } catch (jsonError) {
          console.warn('Failed to parse market data JSON:', jsonError);
          return;
        }
        
        if (data && !data.error) {
          setMarketItems([
            { 
              name: 'USD', 
              value: data.dolar || 5.472, 
              change: data.dolarChange || 0.023,
              changePercent: data.dolarChange || 0.42
            },
            { 
              name: 'BTC', 
              value: data.bitcoin || 540000, 
              change: data.bitcoinChange || 5234,
              changePercent: data.bitcoinChange || 1.54
            },
            { 
              name: 'IBOV', 
              value: data.ibovespa || 127543, 
              change: data.ibovespaChange || -234,
              changePercent: data.ibovespaChange || -0.18
            },
            { 
              name: 'IFIX', 
              value: data.vfix || 12.37, 
              change: data.vfixChange || 0.01,
              changePercent: data.vfixChange || 0.08
            }
          ]);
        }
      } catch (error) {
        console.warn('Erro ao buscar dados do mercado:', error);
      }
    };

    // Busca inicial
    fetchMarketData();

    // Atualiza a cada 60 segundos
    const interval = setInterval(fetchMarketData, 60000);

    return () => clearInterval(interval);
  }, []);

  const formatValue = (value: number, type: string) => {
    if (type === 'USD') return `${value.toFixed(2)}`;
    if (type === 'BTC') return `${Math.floor(value / 1000)}k`;
    if (type === 'IBOV') return `${Math.floor(value / 1000)}k`;
    if (type === 'IFIX') return `R$ ${value.toFixed(2)}`;
    return value.toString();
  };

  return (
    <>
      {/* Desktop - Vertical Left */}
      <div 
        className="absolute z-50 hidden xl:block"
        style={{
          left: '20px',
          top: '50%',
          transform: 'translateY(1190%) rotate(-90deg)',
          transformOrigin: 'left center',
          width: '450px',
          marginLeft: '-4px'
        }}
      >
        <div className="flex items-center justify-center gap-6 text-white/60 text-xs font-light whitespace-nowrap">
        {marketItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
            className="whitespace-nowrap"
          >
            <span className="text-primary opacity-80">{item.name}.</span>
            <span className="text-white/80 ml-1">{formatValue(item.value, item.name)}</span>
            <span className={`text-[10px] ml-1 ${item.changePercent >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
              {item.changePercent >= 0 ? '+' : ''}{item.changePercent.toFixed(1)}%
            </span>
          </motion.div>
        ))}
        </div>
      </div>
      
      {/* Mobile - Horizontal Bottom */}
      <div className={`xl:hidden absolute bottom-0 left-0 right-0 ${isModalOpen ? 'z-10' : 'z-50'} backdrop-blur-md bg-white/5 border-t border-white/10`}>
        <div className="flex items-center justify-between px-4 py-3 text-white/60 text-xs font-light">
          {marketItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
              className="flex flex-col items-center"
            >
              <span className="text-primary opacity-80 text-[10px]">{item.name}</span>
              <span className="text-white/80 text-sm font-medium">{formatValue(item.value, item.name)}</span>
              <span className={`text-[10px] ${item.changePercent >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {item.changePercent >= 0 ? '+' : ''}{item.changePercent.toFixed(1)}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}