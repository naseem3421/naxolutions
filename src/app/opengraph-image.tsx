import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Naxolutions | Business Conversion Consultancy';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#0F1012',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '8px',
              backgroundColor: '#FFFFFF',
              color: '#0F1012',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '24px',
            }}
          >
            N
          </div>
          <span
            style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
            }}
          >
            NAXOLUTIONS
          </span>
          <span
            style={{
              fontSize: '14px',
              color: '#C84B27',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginLeft: '16px',
              borderLeft: '1px solid #2A2D34',
              paddingLeft: '16px',
            }}
          >
            Business Conversion Consultancy
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '900px' }}>
          <div
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#FFFFFF',
              lineHeight: 1.1,
            }}
          >
            Your business may not have a lead problem.
          </div>
          <div
            style={{
              fontSize: '36px',
              color: '#C84B27',
              fontStyle: 'italic',
            }}
          >
            It may have a conversion problem.
          </div>
        </div>

        <div
          style={{
            fontSize: '16px',
            color: '#737887',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          ATTENTION → ENQUIRY → CONVERSATION → DECISION → REVENUE
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
