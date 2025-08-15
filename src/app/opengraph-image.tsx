import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Million Capital - Educação Financeira'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #151515 0%, #2a2a2a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        {/* Logo/Título */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 'bold',
            color: '#D8AE63',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Million Capital
        </div>
        
        {/* Subtítulo */}
        <div
          style={{
            fontSize: '36px',
            color: '#FFFFFF',
            marginBottom: '40px',
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: '1.2',
          }}
        >
          Democratizando o acesso a investimentos inteligentes
        </div>
        
        {/* Badge de resultado */}
        <div
          style={{
            backgroundColor: '#D8AE63',
            color: '#151515',
            fontSize: '24px',
            fontWeight: 'bold',
            padding: '16px 32px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          🚀 +127% em 2023
        </div>
        
        {/* URL no rodapé */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '20px',
            color: '#C5C5C5',
          }}
        >
          capitalmillion.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}