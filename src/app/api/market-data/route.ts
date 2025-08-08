import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Buscar dados da HG Finance
    const hgResponse = await fetch(
      'https://api.hgbrasil.com/finance?key=8f21f49e',
      { 
        next: { revalidate: 60 }, // Cache por 60 segundos
        headers: {
          'Accept': 'application/json',
        }
      }
    );
    
    if (!hgResponse.ok) {
      throw new Error(`HG API error: ${hgResponse.status}`);
    }
    
    const hgData = await hgResponse.json();

    // Buscar dados da BRAPI
    const brapiResponse = await fetch(
      'https://brapi.dev/api/quote/XFIX11?token=ikQL2XLoTJrD3xJvj6DtQF',
      { 
        next: { revalidate: 60 },
        headers: {
          'Accept': 'application/json',
        }
      }
    );
    
    if (!brapiResponse.ok) {
      console.warn(`BRAPI error: ${brapiResponse.status}`);
    }
    
    const brapiData = brapiResponse.ok ? await brapiResponse.json() : { results: [] };

    // Pegar valor do dólar
    const dolarValue = hgData.results?.currencies?.USD?.buy || 5.5;
    
    // Converter Bitcoin de USD para BRL
    const bitcoinUSD = hgData.results?.bitcoin?.blockchain_info?.buy || 0;
    const bitcoinBRL = bitcoinUSD * dolarValue;

    const marketData = {
      dolar: dolarValue,
      dolarChange: hgData.results?.currencies?.USD?.variation || 0,
      bitcoin: bitcoinBRL,
      bitcoinChange: hgData.results?.bitcoin?.blockchain_info?.variation || 0,
      ibovespa: hgData.results?.stocks?.IBOVESPA?.points || 0,
      ibovespaChange: hgData.results?.stocks?.IBOVESPA?.variation || 0,
      vfix: brapiData.results?.[0]?.regularMarketPrice || 0,
      vfixChange: brapiData.results?.[0]?.regularMarketChangePercent || 0
    };

    return NextResponse.json(marketData, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  } catch (error) {
    console.error('Erro ao buscar dados do mercado:', error);
    
    // Retornar dados padrão em caso de erro
    const defaultData = {
      dolar: 5.472,
      dolarChange: 0.42,
      bitcoin: 540000,
      bitcoinChange: 1.54,
      ibovespa: 127543,
      ibovespaChange: -0.18,
      vfix: 12.37,
      vfixChange: 0.08
    };
    
    return NextResponse.json(defaultData, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
}